// ============================================================
//  DATOS DE LOS EQUIPOS
//  El ID es lo que va en la URL:  index.html?id=BOOSTER
//  Los textos con { es: "...", en: "..." } cambian con el botón ES/EN.
//  Todas las secciones son OPCIONALES: si no pones "cil", "seguridad",
//  "lubricacion", etc., esa sección simplemente no aparece.
//  "pasoAM" va de 0 a 7.
//  Frecuencias CIL: "S" = por turno, "D" = diario, "W" = semanal,
//                   "F" = quincenal, "M" = mensual, "T" = trimestral, "A" = anual
//  Correr/Parar:    "R" = equipo corriendo, "S" = equipo parado
// ============================================================
window.EQUIPOS = {

  "BOOSTER": {
    foto: "img/booster.jpg",
    nombre: { es: "Bomba Booster", en: "Booster Pump" },
    codigo: "MGVL-002-070-035",
    area: { es: "Proceso 2 · Sistema de bombeo", en: "Process 2 · Pumping system" },
    pasoAM: 3,
    dueno: {
      nombre: "Marcos Angeles",
      foto: "img/marcos-angeles.jpg",
      rol: { es: "Dueño del equipo · Técnico E2", en: "Equipment owner · E2 Technician" }
    },

    funcion: {
      es: "Suministrar mezcla a la bomba Uraca manteniendo una presión constante en la línea de baja presión.",
      en: "Feed slurry to the Uraca pump while holding a constant pressure in the low-pressure line."
    },
    descripcion: {
      es: "Bomba de desplazamiento positivo Viking (R324A) accionada por motor eléctrico y reductor. Recibe la mezcla del tanque intermedio y la entrega a la bomba Uraca, que la eleva a 70 kg/cm² hacia la torre de secado.",
      en: "Viking (R324A) positive-displacement pump driven by an electric motor and gear reducer. It takes slurry from the intermediate tank and delivers it to the Uraca pump, which raises it to 70 kg/cm² towards the spray-drying tower."
    },

    // Cómo funciona (OPL #1 · Conocimiento general)
    funcionamiento: {
      es: "La mezcla entra por la cavidad de succión y hace contacto con la estrella y la corona. Al girar, estas dos piezas junto con la media luna comprimen el producto y lo desplazan hacia la cavidad de descarga, generando una presión constante de flujo en la línea.",
      en: "Slurry enters through the suction cavity and meets the idler (star) and rotor (crown). As they turn, these two parts together with the crescent compress the product and push it towards the discharge cavity, producing a constant flow pressure in the line."
    },
    imagenFuncionamiento: "img/booster-opl-funcionamiento.jpg",

    // Proceso (Diagrama del sistema de bombeo)
    proceso: [
      { es: "La mezcla cae del tanque intermedio por gravedad (1.2 kg/cm², 55–95 °C).",
        en: "Slurry flows down from the intermediate tank by gravity (1.2 kg/cm², 55–95 °C)." },
      { es: "Pasa por un colador magnético que retira partes metálicas ferrosas.",
        en: "It passes through a magnetic strainer that removes ferrous metal parts." },
      { es: "El Rietz desintegra grumos o pequeñas piedras.",
        en: "The Rietz mill breaks up lumps and small stones." },
      { es: "La Bomba Booster mantiene 4.0 kg/cm² constantes en la línea de baja presión.",
        en: "The Booster Pump holds a constant 4.0 kg/cm² in the low-pressure line." },
      { es: "La bomba Uraca (3 válvulas de succión y 3 de descarga) la eleva a 70 kg/cm² hacia las boquillas de la torre de secado, donde el aire caliente la convierte en polvo base.",
        en: "The Uraca pump (3 suction and 3 discharge valves) raises it to 70 kg/cm² into the tower nozzles, where hot air turns it into base powder." }
    ],

    specs: [
      { label: { es: "Bomba", en: "Pump" }, valor: "Viking R324A" },
      { label: { es: "Presión de salida", en: "Discharge pressure" }, valor: "3.5 – 4.5 kg/cm²" },
      { label: { es: "Temperatura de mezcla", en: "Slurry temperature" }, valor: "55 – 95 °C" },
      { label: { es: "Temp. máx. motor", en: "Max. motor temp." }, valor: "70 °C" },
      { label: { es: "Alimentación eléctrica", en: "Power supply" }, valor: "440 V · CCM 241C, Secc. 2, Cub. B" },
      { label: { es: "Aceite reductor", en: "Gearbox oil" }, valor: "BLU 02 · ISO 220 · 15 L" }
    ],

    // Mapa de seguridad (Rev. 2)
    seguridad: {
      peligros: [
        { id: "1", es: "Riesgo eléctrico: 440 V desde CCM 241C, Sección 2, Cubículo B", en: "Electrical hazard: 440 V from MCC 241C, Section 2, Cubicle B" },
        { id: "2", es: "Alimentación de agua jabonosa a 7 kg/cm²", en: "Soapy water supply at 7 kg/cm²" },
        { id: "3", es: "Alimentación de mezcla del tanque intermedio por gravedad", en: "Slurry feed from intermediate tank by gravity" },
        { id: "4", es: "Quemadura por alimentación de vapor a 7 kg/cm²", en: "Burn hazard: steam supply at 7 kg/cm²" },
        { id: "5", es: "Quemadura por tuberías calientes", en: "Burn hazard: hot piping" },
        { id: "6", es: "Atrapamiento entre coples", en: "Entrapment between couplings" }
      ],
      dispositivos: [
        { id: "A", es: "Interruptor local", en: "Local disconnect switch" },
        { id: "B", es: "Paro de emergencia", en: "Emergency stop" },
        { id: "C", es: "Purga de colador", en: "Strainer drain" },
        { id: "D", es: "Válvula de alivio de presión", en: "Pressure relief valve" },
        { id: "E", es: "Válvula automática de salida del intermedio", en: "Intermediate tank automatic outlet valve" },
        { id: "F", es: "Revestimiento térmico en toda la tubería", en: "Thermal insulation on all piping" },
        { id: "G", es: "Guarda del ventilador del motor", en: "Motor fan guard" },
        { id: "H", es: "Guarda cople motor–reductor", en: "Motor–gearbox coupling guard" },
        { id: "I", es: "Guarda cople reductor–bomba", en: "Gearbox–pump coupling guard" }
      ],
      epp: [
        { id: "I", es: "Guantes de piel anti-impacto", en: "Impact-resistant leather gloves" },
        { id: "II", es: "Lentes de seguridad tipo goggles", en: "Safety goggles" }
      ],
      imagen: "img/booster-mapa-seguridad.jpg"
    },

    // CIL (Limpieza, Inspección, Lubricación) + OPLs "Saber por qué"
    cil: [
      {
        punto: 1, componente: { es: "Motor de bomba booster", en: "Booster pump motor" },
        corriendo: "R", frecuencia: "W", minutos: 5, opl: "OPL #1",
        estandar: { es: "Sin ruidos extraños, temperatura no mayor a 70 °C, controles visuales en buen estado, caja sellada y tubería licuatite en buen estado.",
                    en: "No unusual noise, temperature not above 70 °C, visual controls in good condition, sealed junction box and liquid-tight conduit in good condition." },
        accion: { es: "Limpiar con trapo húmedo el cuerpo del motor, tomar temperatura y vibración, colocar tornillos faltantes. En caso de anormalidad levantar defecto y reportar al CM mecánico.",
                  en: "Wipe the motor body with a damp cloth, take temperature and vibration readings, replace missing bolts. If abnormal, raise a defect and report to the mechanical CM." },
        knowWhy: { es: "Forzamiento del motor · Paro de torre por baja presión en línea de baja · Quemado o amarre del motor.",
                   en: "Motor overload · Tower stop due to low pressure in low-pressure line · Motor burn-out or seizure." }
      },
      {
        punto: 2, componente: { es: "Reductor de bomba booster", en: "Booster pump gearbox" },
        corriendo: "R", frecuencia: "W", minutos: 5, opl: "OPL #2",
        estandar: { es: "Sin ruidos extraños, nivel de aceite correcto en el control visual, sin fugas de aceite y controles visuales en buen estado.",
                    en: "No unusual noise, correct oil level at the sight glass, no oil leaks, visual controls in good condition." },
        accion: { es: "Colocar aceite BLU 02 faltante, colocar tornillería. En caso de anormalidad avisar al CM mecánico y levantar notificación eDefects.",
                  en: "Top up with BLU 02 oil, replace missing bolts. If abnormal, notify the mechanical CM and raise an eDefects notification." },
        knowWhy: { es: "Forzamiento del reductor · Paro de torre por no subir la presión en la línea de baja · Amarre del reductor.",
                   en: "Gearbox overload · Tower stop because low-pressure line does not build pressure · Gearbox seizure." }
      },
      {
        punto: 3, componente: { es: "Bomba Booster", en: "Booster Pump" },
        corriendo: "R", frecuencia: "S", minutos: 5, opl: "OPL #3",
        estandar: { es: "Manómetro en buen estado con 3.5–4.5 kg/cm² de salida. Sin fuga de mezcla por los empaques, con lavado de agua sobre la flecha, sin ruidos extraños (cavitación). Guarda limpia y con tornillos completos.",
                    en: "Pressure gauge in good condition reading 3.5–4.5 kg/cm² at discharge. No slurry leaking from the packing, water flush on the shaft, no unusual noise (cavitation). Guard clean with all bolts." },
        accion: { es: "Ajustar el prensa-empaques con llave española de 1 1/8\". Avisar al CM mecánico y levantar notificación eDefects.",
                  en: "Tighten the packing gland with a 1 1/8\" open-end wrench. Notify the mechanical CM and raise an eDefects notification." },
        knowWhy: { es: "Lectura errónea en manómetro · Derrame de mezcla.",
                   en: "Wrong pressure gauge reading · Slurry spill." }
      },
      {
        punto: 4, componente: { es: "Lubricación de la flecha de la bomba", en: "Pump shaft flush" },
        corriendo: "R", frecuencia: "S", minutos: 5, opl: "OPL #4",
        estandar: { es: "Flujo de agua constante, sin salida de mezcla por el prensa-empaques.",
                    en: "Constant water flow, no slurry coming out of the packing gland." },
        accion: { es: "Ajustar flujo de agua y destapar línea de salida de agua.",
                  en: "Adjust water flow and unclog the water outlet line." },
        knowWhy: { es: "Se daña la empaquetadura · Fuga de mezcla por la flecha.",
                   en: "Packing gets damaged · Slurry leaks along the shaft." }
      },
      {
        punto: 5, componente: { es: "Áreas periféricas", en: "Surrounding areas" },
        corriendo: "S", frecuencia: "D", minutos: 5, opl: "OPL #5",
        estandar: { es: "Áreas periféricas limpias, libres de derrames de mezcla y agua.",
                    en: "Surrounding areas clean, free of slurry and water spills." },
        accion: { es: "Limpiar áreas periféricas, levantar derrames de mezcla, agua y otros materiales.",
                  en: "Clean surrounding areas, pick up slurry, water and other spills." },
        knowWhy: { es: "Resbalones o caídas por derrames de agua o mezcla.",
                   en: "Slips or falls caused by water or slurry spills." }
      }
    ],

    // Estándar de lubricación
    lubricacion: [
      {
        componente: { es: "Reductor · cambio de aceite", en: "Gearbox · oil change" },
        etiqueta: "BLU 02", color: "#1f5fbf",
        lubricante: { es: "Aceite ISO 220 mineral (Mobil 220)", en: "ISO 220 mineral oil (Mobil 220)" },
        punto: { es: "Directo al reductor", en: "Directly into gearbox" },
        cantidad: "15 L",
        frecuencia: { es: "Anual", en: "Yearly" }
      },
      {
        componente: { es: "Flecha · empaquetadura mecánica", en: "Shaft · mechanical packing" },
        etiqueta: "AGUA", color: "#2a9fd6",
        lubricante: { es: "Agua (flujo continuo)", en: "Water (continuous flow)" },
        punto: { es: "Entre la flecha y el prensa-empaques", en: "Between shaft and packing gland" },
        cantidad: { es: "10–20 gotas/min", en: "10–20 drops/min" },
        frecuencia: { es: "Continuo en operación · revisión diaria", en: "Continuous while running · daily check" }
      },
      {
        componente: { es: "2 baleros de la bomba", en: "2 pump bearings" },
        etiqueta: "BLG 39", color: "#e0a100",
        lubricante: { es: "Grasa NLGI 2 mineral (Shell Alvania)", en: "NLGI 2 mineral grease (Shell Alvania)" },
        punto: { es: "Grasera del balero", en: "Bearing grease fitting" },
        cantidad: "28.72 g",
        frecuencia: { es: "Trimestral", en: "Quarterly" }
      }
    ],

    documentos: [
      { titulo: { es: "Diagrama del sistema de bombeo", en: "Pumping system diagram" }, url: "img/booster-diagrama-flujo.jpg", tipo: "img" },
      { titulo: { es: "Mapa de seguridad (Rev. 2)", en: "Safety map (Rev. 2)" }, url: "img/4.2Mapa de seguridad de la booster mio 1.pdf", tipo: "pdf" },
      { titulo: { es: "Estándar de lubricación", en: "Lubrication standard" }, url: "docs/booster-estandar-lubricacion.pdf", tipo: "pdf" },
      { titulo: { es: "OPL #1 · Cómo funciona la bomba", en: "OPL #1 · How the pump works" }, url: "img/booster-opl-funcionamiento.jpg", tipo: "img" }
    ]
  }

  // ---------- PLANTILLA PARA UN EQUIPO NUEVO ----------
  // Pon una coma después de la } de arriba y pega esto (sin las //):
  //
  // "MOTOR2": {
  //   foto: "img/motor2.jpg",
  //   nombre: { es: "Motor redondo 3", en: "Round motor 3" },
  //   codigo: "MGVL-000-000-000",
  //   area: { es: "Making", en: "Making" },
  //   pasoAM: 3,
  //   dueno: { nombre: "Nombre Apellido", foto: "img/dueno.jpg" },
  //   descripcion: { es: "…", en: "…" }
  // }
};
