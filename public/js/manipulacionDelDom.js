// ANIMACIÓN DEL MENÚ HAMBURGUESA Y APARICIÓN DEL MENÚ NAV
if (document.querySelector(".menu-hamburguesa")) {
  const icoMenuHamb = document.querySelector(".menu-hamburguesa"),
  contenedorNav = document.querySelector(".contenedor-nav-oculto");
  
  icoMenuHamb.addEventListener("click", () => {
    icoMenuHamb.classList.toggle("menu-hamb-activo");
    contenedorNav.classList.toggle("contenedor-nav-activo");
  });

  let linkNav = document.querySelectorAll(".link-nav");
  
  linkNav.forEach((linkNav) => {
    linkNav.addEventListener("click", () => {
      contenedorNav.classList.remove("contenedor-nav-activo")
      icoMenuHamb.classList.remove("menu-hamb-activo");
      
    });
  });
}

// APARICIÓN DE DETALLES GENERALES OCULTOS
if (document.querySelector(".puntos-suspensivos")) {
  const btnReveladorDeInformacion = document.querySelector(
    ".expandir-caracteristicas-generales"
    ),
    puntosSuspensivos = document.querySelector(".puntos-suspensivos"),
    informacionOculta = document.querySelector(
      ".caracteristicas-generales-ocultas"
      );
      
      btnReveladorDeInformacion.addEventListener("click", () => {
        puntosSuspensivos.classList.toggle("puntos-suspensivos-ocultos");
        informacionOculta.classList.toggle("informacion-oculta-revelada");
      });
    }
    
    // REVELACIÓN DEL SUBMENU OCULTO
    if (document.querySelector(".flecha-productos")) {
      const opcionesSubmenu = document.querySelector(".opciones-submenu"),
      submenuNavProductos = document.querySelector(".submenu-nav-productos"),
      linkSubmenu = document.querySelectorAll(".link-submenu"),
      contenedorNav = document.querySelector(".contenedor-nav-oculto"),
      icoMenuHamb = document.querySelector(".menu-hamburguesa");
      
      
      opcionesSubmenu.addEventListener("click", () => {
        submenuNavProductos.classList.toggle("submenu-nav-productos-activo");
      });
  
  linkSubmenu.forEach((link) => {
    link.addEventListener("click", () => {
      submenuNavProductos.classList.remove("submenu-nav-productos-activo");
      contenedorNav.classList.remove("contenedor-nav-activo");
      icoMenuHamb.classList.remove("menu-hamb-activo")
    })
  });
}

// CONFIRMACIÓN DE ENVÍO DE LA CONSULTA
if(document.getElementById("MiFormulario")) {
  let miFormulario = document.getElementById("MiFormulario"),
  ok = document.getElementById("ok"),
  capa = document.getElementById("capa")

  miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    capa.style.display = "block";
  })

  ok.addEventListener("click", (e) => {
    capa.style.display = "none";
    document.forms["MiFormulario"].submit();
  })
}
