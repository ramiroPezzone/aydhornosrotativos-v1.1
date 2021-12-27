const listadoDeProductos = [
  {
    titulo: "4 bandejas",
    medidas: {
      ancho: "Ancho: 1,05",
      profundidad: "Profundidad: 1,05",
      altoHorno: "Alto de horno (sin base): 0,60",
      altoBase: "Alto de la base 1,00",
      altoTotal: "Alto total: 1,80",
      obs: "La base se desmonta del horno para posibilitar el traslado.",
    },
    bandejas: {
      cantidad: "Cantidad: 4",
    },
    produccionPromedio: {
      estimado: "Estimado: 20 a 30 Kg x hora.",
    },
    electricidad: {
      opcional: "Opcional: 220V / 380V",
    },
    quemador: {
      quemador:
        "Atmosférico lanzallamas multitobera de 25.000 calorías.",
    },
    imagen: "horno-4-bandejas.png",
  },
  {
    titulo: "10 bandejas",
    medidas: {
      ancho: "Ancho: 1,05",
      profundidad: "Profundidad: 1,05",
      altoHorno: "Alto de horno (sin base): 1,20",
      altoBase: "Alto de la base 0,80",
      altoTotal: "Alto total: 2,25",
      obs: "La base se desmonta del horno para posibilitar el traslado.",
    },
    bandejas: {
      cantidad: "Cantidad: 10",
      medidas: "medidas 0,70 x 0,45",
      separacion: "Separación: 0,95",
    },
    produccionPromedio: {
      estimado: "Estimado: 60 a 75 Kg x hora.",
      promedioBandeja: "Promedio por bandeja: 2,5 kg.",
      tiempoPorTirada: "Tiempo por tirada: aproximadamente 20 minutos.",
    },
    electricidad: {
      opcional: "Opcional: 220V / 380V",
    },
    combustible: {
      opcional: "Opciones: Gas Natural / Gas envasado",
    },
    motores: {
      turbina:
        "Turbina: 1/2” HP, 2800 rpm. Blindado industrial. Montado sobre rulemanes. Ventilado con eje prolongado.",
      motorreductor:
        "Motorreductor: 1/4” HP, 1500 rpm. Blindado industrial. Montado sobre rulemanes. Ventilado. Reductor wmi 40-1-80",
    },
    quemador: {
      quemador:
        "Atmosférico lanzallamas multitobera de 35.000 calorías.",
    },
    vaporizador: {
      vaporizador:
        "De diseño propio, alimentada por medio de electroválvula de agua de 1/2” de 220 v. Accionada por pulsador en el tablero.",
    },
    puerta: {
      puerta:
        "Vidrio templado de 10 mm que permite una visualización total del interior del horno. Manija de fácil manipulación y empuñadura de teflón. Burletes de silicona para alta temperatura de gran prestación hermética. Interior de estructura metálica relleno de lana de vidrio mineral.",
    },
    aislacionTermica: {
      aislacion: "Lana de vidrio mineral y cartón mineral.",
    },
    tablero: {
      tablero:
        "Control digital de temperatura y tiempo. Alarma. Turbina. Rotor. Luz. Pulsador para vapor. Llave térmica general.",
    },

    imagen: "horno-10-bandejas.png",
  },
  {
    titulo: "15 bandejas",
    medidas: {
      ancho: "Ancho: 1,05",
      profundidad: "Profundidad: 1,05",
      altoHorno: "Alto de horno: 2,00",
      altoBase: "Base: no posee",
      altoTotal: "Alto total: 2,25",
      obs: "Obs: Carro con enganche aéreo",
    },
    bandejas: {
      cantidad: "Cantidad: 15",
    },
    produccionPromedio: {
      estimado: "Estimado: 75 Kg a 112,5 Kg x hora.",
    },
    electricidad: {
      opcional: "Opcional: 220V / 380V",
    },
    motores: {
      turbina:
        "Turbina: 1/2” HP, 2800 rpm. Blindado industrial. Montado sobre rulemanes. Ventilado con eje prolongado.",
      motorreductor:
        "Motorreductor: 1/4” HP, 1500 rpm. Blindado industrial. Montado sobre rulemanes. Ventilado. Reductor wmi 40-1-80",
    },
    quemador: {
      quemador:
        "Atmosférico lanzallamas multitobera de 50.000 calorías.",
    },
    vaporizador: {
      vaporizador:
        "De diseño propio, alimentada por medio de electroválvula de agua de 1/2” de 220 v. Accionada por pulsador en el tablero.",
    },
    puerta: {
      puerta:
        "Vidrio templado de 10 mm que permite una visualización total del interior del horno. Manija de fácil manipulación y empuñadura de teflón. Burletes de silicona para alta temperatura de gran prestación hermética. Interior de estructura metálica relleno de lana de vidrio mineral.",
    },
    aislacionTermica: {
      aislacion: "Lana de vidrio mineral y cartón mineral.",
    },
    tablero: {
      tablero:
        "Control digital de temperatura y tiempo. Alarma. Turbina. Rotor. Luz. Pulsador para vapor. Llave térmica general.",
    },

    imagen: "horno-15-bandejas.png",
  },
];

module.exports = listadoDeProductos;
