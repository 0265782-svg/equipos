
//  DATOS DE LOS EQUIPOS
//  Para agregar un equipo, copia un bloque y cambia el ID.
//  El ID es lo que va en la URL:  index.html?id=LLEN-01
//  "foto" puede ser un archivo en /img o una URL completa.
//  "pasoAM" va de 0 a 7.

window.EQUIPOS = {
  "LLEN-01": {
    foto: "img/llen-01.svg",
    nombre: { es: "Llenadora línea 3", en: "Line 3 Filler" },
    dueno: "Andrea Vargas",
    area: { es: "Envasado", en: "Packing" },
    pasoAM: 3,
    descripcion: {
      es: "Llenadora volumétrica de 12 boquillas. Revisar nivel de tolva y fugas en boquillas al inicio de cada turno.",
      en: "12-nozzle volumetric filler. Check hopper level and nozzle leaks at the start of every shift."
    }
  },
   "MOTOR2": {
    foto: "img/MOTOR2.svg",
    nombre: { es: "Motor redondo 3", en: "Round motor" },
    dueno: "Raúl Campos",
    area: { es: "Making", en: "Making" },
    pasoAM: 3,
    descripcion: {
      es: "Motor giratorio tal tal tal",
      en: "blablabla"
    }
  },
  "EMP-02": {
    foto: "img/emp-02.svg",
    nombre: { es: "Empacadora de cajas", en: "Case Packer" },
    dueno: "Juan Pérez",
    area: { es: "Fin de línea", en: "End of line" },
    pasoAM: 2,
    descripcion: {
      es: "Formadora y selladora de cajas. Limpiar sensores ópticos y verificar cinta de sellado.",
      en: "Case erector and sealer. Clean optical sensors and verify sealing tape."
    }
  }
};
