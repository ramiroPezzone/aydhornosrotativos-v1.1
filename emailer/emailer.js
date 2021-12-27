let express = require("express"),
  router = express.Router(),
  nodemailer = require("nodemailer"),
  usuario = "aydhornosrotativosemailsender@gmail.com",
  contrasenia = "cppgocdnmlccjrug",
  enviarA = "aydhornosrotativos@gmail.com",
  dateNow = new Date(),
  año = dateNow.getFullYear(),
  mes = dateNow.getMonth(),
  dia = dateNow.getDate(),
  diaDeLaSemana = dateNow.getDay(),
  hora = dateNow.getHours(),
  minutos = dateNow.getMinutes(),
  segundos = dateNow.getSeconds()
  
  // SETEANDO EL DÍA DE LA SEMANA
  if(diaDeLaSemana == 0) {
    diaDeLaSemana = "Domingo"
  } else if (diaDeLaSemana == 1) {
    diaDeLaSemana = "Lunes"
  } else if (diaDeLaSemana == 2) {
    diaDeLaSemana = "Martes"
  } else if (diaDeLaSemana == 3) {
    diaDeLaSemana = "Miércoles"
  } else if (diaDeLaSemana == 4) {
    diaDeLaSemana = "Jueves"
  } else if (diaDeLaSemana == 5) {
    diaDeLaSemana = "Viernes"
  } else {
    diaDeLaSemana = "Sábado"
  }

  // SETEANDO EL MES
  if(mes === 0) {
    mes = "Enero"
  } else if (mes == 1) {
    mes = "Febrero"
  } else if (mes == 2) {
    mes = "Marzo"
  } else if (mes == 3) {
    mes = "Abril"
  } else if (mes == 4) {
    mes = "Mayo"
  } else if (mes == 5) {
    mes = "Junio"
  } else if (mes == 6) {
    mes = "Julio"
  } else if (mes == 7) {
    mes = "Agosto"
  } else if (mes == 8) {
    mes = "Septiembre"
  } else if (mes == 9) {
    mes = "Octubre"
  } else if (mes == 10) {
    mes = "Noviembre"
  } else if (mes == 11) {
    mes = "Diciembre"
  }

router.post("/enviarConsulta", async(req, res) => {
  const { nombreCompleto, tel, email, consulta } = req.body;

  const mensajeSaliente = 
  `<h1>Una nueva consulta fue enviada el día ${diaDeLaSemana} ${dia} de ${mes} a las ${hora}:${minutos}</h1>
  <hr>
  <h2><u>Los datos de contacto son</u>:</h2>
  <h3><u>Nombre completo</u>: ${nombreCompleto}</h3>
  <h3><u>Teléfono</u>: <a style="text-decoration:none" href=tel:${tel}>${tel}</a><p>(tocá en el número para llamar)</p></h3>
  <h3><u>Correo electrónico</u>: ${email}</h3>
  <h2><u>Y la consulta fue</u>:</h2>
  <h3>${consulta}</h3>`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: usuario,
      pass: contrasenia,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const info = await transporter.sendMail({
    from: '"Gestor de consultas de A&D Hornos Rotativos" <aydhornosrotativosemailsender@gmail.com>',
    to: enviarA,
    subject: `Nueva consulta desde la web`,
    html: mensajeSaliente
  })

  console.log("El mensaje fue enviado correctamente con el ID" + info.messageId);

  res.redirect('/')
});

module.exports = router;
