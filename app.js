// DATOS
const temas = {
    appcc: {
        nombre: 'APPCC',
        flashcards: [
            { q: '¿Qué significa APPCC?', a: 'Análisis de Peligros y Puntos de Control Crítico' },
            { q: '¿Por qué organización fue creado el sistema APPCC?', a: 'La NASA' },
            { q: '¿Qué normativa hace obligatorio el APPCC en España?', a: 'R.D. 640/2006' },
            { q: '¿Qué sistema tradicional sustituye el APPCC?', a: 'La inspección del producto final' },
            { q: '¿Cuántos pasos tiene la implantación del APPCC?', a: '11 pasos' },
            { q: '¿Qué es un PCC?', a: 'Fase del proceso donde se controla un peligro para eliminarlo o reducirlo' },
            { q: '¿Cuáles son las dos herramientas para identificar los PCC?', a: 'Diagrama de flujo y tablas de gestión' },
            { q: '¿Cuántos planes prerrequisito hay antes del APPCC?', a: '7 planes' },
            { q: '¿Cuál es el principal inconveniente del APPCC?', a: 'El desembolso inicial en asesoramiento y formación del personal' },
            { q: '¿Cuántos campos tiene la tabla de gestión de PCC?', a: '8 campos' },
            { q: '¿Cuál es el paso 5 de la implantación del APPCC?', a: 'Elaborar y confirmar el diagrama de flujo' },
            { q: '¿Qué mide un límite crítico? Da un ejemplo.', a: 'Un valor medible que no se puede superar. Ejemplo: temperatura, pH, color' }
        ],
        test: [
            { q: '¿Qué organización desarrolló el APPCC?', opts: ['OMS', 'NASA', 'FAO', 'UE'], correct: 1, exp: 'Nació para garantizar la seguridad alimentaria en viajes espaciales' },
            { q: '¿Qué normativa hace obligatorio el APPCC en España?', opts: ['R.D.640/2006', 'R.D.178/2002', 'R.D.1334/1999', 'R.D.709/2002'], correct: 0, exp: 'Es la normativa española que hace obligatorio el APPCC' },
            { q: '¿Cuál NO es un prerrequisito operacional?', opts: ['Plan de limpieza', 'Plan de agua potable', 'Plan de análisis de peligros', 'Plan de higiene del personal'], correct: 2, exp: 'El análisis de peligros es parte del APPCC, no un prerrequisito previo' },
            { q: '¿Cuántos pasos tiene la implantación del APPCC?', opts: ['7', '9', '11', '14'], correct: 2, exp: 'Son 11 pasos desde definir el ámbito hasta revisión y mantenimiento' },
            { q: '¿Qué herramienta representa esquemáticamente todas las fases de producción?', opts: ['Tabla de gestión', 'Diagrama de flujo', 'Plan de trazabilidad', 'Registro de PCC'], correct: 1, exp: 'El diagrama de flujo representa todas las fases desde materia prima hasta servicio' },
            { q: '¿Cuál es el principal inconveniente del APPCC?', opts: ['No es obligatorio', 'Solo sirve para grandes empresas', 'Desembolso inicial en asesoramiento y formación', 'No permite documentar procesos'], correct: 2, exp: 'Es el único inconveniente mencionado' },
            { q: '¿Cuál es un campo de la tabla de gestión de PCC?', opts: ['Presupuesto', 'Nombre del proveedor', 'Límites críticos', 'Fecha de caducidad'], correct: 2, exp: 'Es uno de los 8 campos de la tabla de gestión' },
            { q: '¿Qué sustituye el APPCC respecto al control tradicional?', opts: ['El etiquetado', 'La inspección del producto final', 'El diagrama de flujo', 'La formación del personal'], correct: 1, exp: 'El APPCC controla el proceso completo, no solo el resultado' },
            { q: '¿Qué ocurre si hay demasiados PCC?', opts: ['El sistema es más seguro', 'Se reduce la documentación', 'Sobrecarga de trabajo y retrasos', 'Se eliminan más peligros'], correct: 2, exp: 'Demasiados PCC genera trabajo innecesario' },
            { q: '¿Cuál es un ejemplo válido de límite crítico?', opts: ['Nombre del cocinero', 'Temperatura de cocción', 'Número de comensales', 'Precio del producto'], correct: 1, exp: 'Los límites críticos deben ser valores medibles' }
        ]
    },
    edo: {
        nombre: 'EDO',
        flashcards: [
            { q: '¿Qué significa EDO?', a: 'Enfermedades de Declaración Obligatoria' },
            { q: '¿A quién se notifican las EDO?', a: 'Al centro de salud pública' },
            { q: '¿Con qué frecuencia se recoge el número de casos de una EDO?', a: 'Semanalmente' },
            { q: '¿Cuál es la diferencia entre EDO y médico centinela?', a: 'EDO cuenta casos posibles cada semana. El médico centinela vigila la evolución de la epidemia y recoge datos y muestras' },
            { q: '¿Cuántas formas de notificación de EDO hay y cuáles son?', a: '3 formas: urgente por teléfono, ordinaria nominal por escrito, número total semanal por sistemas informáticos' },
            { q: '¿Qué significa SCIRI?', a: 'Sistema Coordinado de Intercambio Rápido de Información' },
            { q: '¿Desde qué año funciona el SCIRI?', a: '1987' },
            { q: '¿Qué ley española creó la AESAN?', a: 'Ley 11/2001' },
            { q: '¿Qué reglamento europeo creó la AESA?', a: 'Reglamento CE 178/2002' },
            { q: 'Nombra 4 EDO relacionadas con alimentos', a: 'Botulismo, Salmonelosis, Listeriosis, Hepatitis A' },
            { q: '¿Cuál es el objetivo del SCIRI?', a: 'Garantizar que los productos del mercado son seguros y detectar riesgos que requieran actuación de las autoridades' },
            { q: '¿Qué forma de notificación EDO se usa en casos urgentes?', a: 'Urgente por teléfono' }
        ],
        test: [
            { q: '¿Qué son las EDO?', opts: ['Enfermedades crónicas registradas anualmente', 'Enfermedades transmisibles de notificación obligatoria al centro de salud pública', 'Enfermedades que solo afectan a manipuladores', 'Enfermedades declaradas voluntariamente'], correct: 1, exp: 'Son enfermedades transmisibles de notificación obligatoria' },
            { q: '¿Con qué frecuencia se recogen los casos de una EDO?', opts: ['Diariamente', 'Mensualmente', 'Semanalmente', 'Anualmente'], correct: 2, exp: 'Se recoge el número de casos sintomáticamente posibles cada semana' },
            { q: '¿Diferencia principal entre EDO y médico centinela?', opts: ['El centinela solo actúa en hospitales', 'EDO recoge casos posibles semanalmente; centinela vigila la evolución de la epidemia', 'EDO solo recoge enfermedades alimentarias', 'El centinela trabaja solo con datos informáticos'], correct: 1, exp: 'Son sistemas complementarios con funciones distintas' },
            { q: '¿Cuál NO es una forma de notificación de EDO?', opts: ['Urgente por teléfono', 'Ordinaria nominal por escrito', 'Número total semanal por sistemas informáticos', 'Anónima por correo postal'], correct: 3, exp: 'Las 3 vías reales son teléfono, escrito nominal e informática semanal' },
            { q: '¿Desde qué año funciona el SCIRI?', opts: ['1975', '1987', '2001', '2006'], correct: 1, exp: 'Año de inicio del desarrollo y funcionamiento del SCIRI' },
            { q: '¿Qué ley española creó la AESAN?', opts: ['Ley 11/2001', 'RD 640/2006', 'Reglamento CE 178/2002', 'RD 709/2002'], correct: 0, exp: 'La Ley 11/2001 crea la AESAN' },
            { q: '¿Cuál de estas enfermedades es una EDO relacionada con alimentos?', opts: ['Varicela', 'Malaria', 'Salmonelosis', 'Rabia'], correct: 2, exp: 'La salmonelosis es una EDO de transmisión alimentaria' },
            { q: '¿Qué reglamento europeo creó la AESA?', opts: ['Reglamento UE 16/2011', 'Reglamento CE 178/2002', 'RD 709/2002', 'Ley 11/2001'], correct: 1, exp: 'El Reglamento CE 178/2002 crea la AESA a nivel europeo' },
            { q: '¿Cuál es el objetivo principal del SCIRI?', opts: ['Registrar intoxicaciones anuales', 'Garantizar seguridad de productos y detectar riesgos', 'Controlar precios de alimentos', 'Gestionar reclamaciones de consumidores'], correct: 1, exp: 'Vigilancia y gestión de riesgos alimentarios' },
            { q: '¿Cuál NO es un punto de contacto del SCIRI?', opts: ['Ministerio de Sanidad', 'INFOSAN (OMS)', 'NASA', 'Comisión Europea'], correct: 2, exp: 'La NASA no forma parte del SCIRI' }
        ]
    },
    alergenos: {
        nombre: 'Alérgenos',
        flashcards: [
            { q: '¿Qué es un alérgeno alimentario?', a: 'Sustancia presente en un alimento que puede causar una reacción de hipersensibilidad en personas susceptibles' },
            { q: '¿Cuántos alérgenos son de declaración obligatoria?', a: '14 alérgenos' },
            { q: '¿Qué porcentaje de niños tiene alergia alimentaria?', a: 'Entre el 4 y el 6%' },
            { q: '¿Qué es la contaminación cruzada en alérgenos?', a: 'Cuando un residuo o traza de un alérgeno entra en contacto no intencionado con un alimento que no lo contiene' },
            { q: '¿Cuáles son las 4 vías por las que puede llegar un alérgeno a un alimento?', a: 'Presencia no indicada en materias primas / como aditivos o aromas / formulación incorrecta / contaminación cruzada' },
            { q: '¿Cuáles son los 3 pasos para gestionar los alérgenos?', a: '1) Incluirlos en el sistema de autocontrol 2) Asegurar etiquetado correcto 3) Evitar contaminación cruzada' },
            { q: '¿Qué límite de gluten tiene la mención "sin gluten"?', a: 'Menos de 20 mg/kg' },
            { q: '¿Qué límite de gluten tiene "muy bajo en gluten"?', a: 'Menos de 100 mg/kg' },
            { q: '¿Qué reglamento europeo regula la información sobre alérgenos al consumidor?', a: 'Reglamento UE 1169/2011' },
            { q: '¿Cuándo se puede usar el etiquetado preventivo?', a: 'Solo cuando no es posible evitar la contaminación cruzada' },
            { q: 'Nombra 5 de los 14 alérgenos obligatorios', a: 'Cualquiera de estos: gluten, huevos, pescado, crustáceos, moluscos, cacahuetes, frutos de cáscara, soja, leche, apio, mostaza, sésamo, altramuces, sulfitos' },
            { q: '¿En qué 6 áreas se gestiona el control de alérgenos en una empresa?', a: 'Control de materias primas / formulaciones / planificación de producción / limpieza / etiquetado / formación del personal' }
        ],
        test: [
            { q: '¿Cuántos alérgenos son de declaración obligatoria?', opts: ['8', '10', '12', '14'], correct: 3, exp: 'Son 14 los alérgenos de declaración obligatoria según la normativa europea' },
            { q: '¿Qué porcentaje de adultos presenta alergia alimentaria?', opts: ['Entre el 4 y el 6%', 'Entre el 1 y el 3%', 'Entre el 8 y el 10%', 'Menos del 0,5%'], correct: 1, exp: 'En adultos es 1-3%; en niños es 4-6%' },
            { q: '¿Cuál NO es uno de los 14 alérgenos obligatorios?', opts: ['Apio', 'Mostaza', 'Pimiento', 'Sésamo'], correct: 2, exp: 'El pimiento no está en la lista. Apio, mostaza y sésamo sí' },
            { q: '¿Qué es la contaminación cruzada en alérgenos?', opts: ['Añadir intencionadamente un alérgeno a una receta', 'El contacto no intencionado de un alérgeno con un alimento que no lo contiene', 'La presencia de alérgenos declarados en el etiquetado', 'La reacción alérgica de un consumidor'], correct: 1, exp: 'Es siempre no intencionada e inadvertida' },
            { q: '¿Qué límite tiene "sin gluten"?', opts: ['Menos de 100 mg/kg', 'Menos de 50 mg/kg', 'Menos de 20 mg/kg', 'Cero mg/kg'], correct: 2, exp: 'Ese es el límite legal para "sin gluten"' },
            { q: '¿Qué reglamento regula la información sobre alérgenos al consumidor?', opts: ['Reglamento CE 178/2002', 'Reglamento UE 1169/2011', 'Reglamento UE 16/2011', 'Reglamento 41/2009'], correct: 1, exp: 'Es la norma base de información alimentaria al consumidor' },
            { q: '¿Cuándo está justificado el etiquetado preventivo?', opts: ['Siempre como precaución', 'Solo cuando el alérgeno es uno de los 14', 'Solo cuando no es posible evitar la contaminación cruzada', 'Cuando el producto contiene el alérgeno intencionadamente'], correct: 2, exp: 'Usarlo sin justificación hace que pierda valor' },
            { q: 'Surimi, caldos y harinas de pescado son derivados de:', opts: ['Crustáceos', 'Moluscos', 'Pescado', 'Soja'], correct: 2, exp: 'Son productos derivados del pescado' },
            { q: '¿Cuál es una de las 6 áreas clave para gestionar alérgenos?', opts: ['Control de temperaturas de servicio', 'Formación y gestión del personal', 'Registro de ventas por alérgeno', 'Plan de desinsectación'], correct: 1, exp: 'Es una de las 6 áreas clave de gestión' },
            { q: '¿Qué afirmación sobre el etiquetado preventivo es correcta?', opts: ['Es obligatorio en todos los productos', 'Su uso indiscriminado puede hacer que pierda valor como aviso', 'Sustituye a la declaración en la lista de ingredientes', 'Solo se aplica al gluten y la leche'], correct: 1, exp: 'Usarlo sin justificación real lo devalúa como sistema de aviso' }
        ]
    },
    alteraciones: {
        nombre: 'Alteraciones',
        flashcards: [
            { q: '¿Cuáles son los 3 tipos de contaminantes?', a: 'Biológico, físico y químico' },
            { q: '¿Qué diferencia hay entre contaminación cruzada directa e indirecta?', a: 'Directa: de comida a comida / Indirecta: de persona a comida o de equipo a comida' },
            { q: '¿Qué es un alimento alterado? ¿Implica riesgo alimentario?', a: 'Ha cambiado sus características organolépticas y/o valor nutritivo. No implica riesgo alimentario (ej: pan duro)' },
            { q: '¿Qué es un alimento contaminado?', a: 'Contiene agentes vivos, sustancias químicas tóxicas o componentes tóxicos de origen natural. No apto para el consumo' },
            { q: '¿Cuál es el pH post-mortem de la carne de vacuno?', a: '5.4-5.5' },
            { q: '¿Qué dos sustancias produce la putrefacción anaerobia de la carne?', a: 'Putrescina y cadaverina (también H₂S y amoniaco)' },
            { q: '¿A qué temperatura y tiempo se elimina el Clostridium botulinum?', a: '90ºC durante 10 minutos' },
            { q: '¿Qué bacterias pueden sobrevivir en carne congelada?', a: 'Salmonella y E.coli' },
            { q: '¿Cuál es el pH de la pechuga de pollo post-mortem?', a: '5.7-5.9' },
            { q: '¿Qué defiende la clara del huevo frente a los microorganismos?', a: 'Su viscosidad impide que los microorganismos lleguen a la yema' },
            { q: '¿Cuál es el pH post-mortem del pescado?', a: '5.5-6.5' },
            { q: '¿Qué aspecto tienen las branquias de un pescado fresco?', a: 'Color rojo brillante' },
            { q: '¿Qué pH en moluscos indica alteración microbiana?', a: 'pH inferior a 5.8' },
            { q: 'Da 3 señales de carne refrigerada alterada aeróbicamente', a: 'Viscosidad superficial, cambios de color, enranciamiento, olores/sabores extraños, manchas oscuras/blancas/verdes' }
        ],
        test: [
            { q: '¿Cuáles son los 3 tipos de contaminantes alimentarios?', opts: ['Físico, químico y radiactivo', 'Biológico, físico y químico', 'Bacteriano, viral y fúngico', 'Directo, indirecto y cruzado'], correct: 1, exp: 'Los 3 tipos son biológico, físico y químico' },
            { q: 'Un cocinero corta pollo crudo y sin lavar el cuchillo corta lechuga. ¿Qué tipo de contaminación es?', opts: ['Contaminación directa comida a comida', 'Contaminación cruzada directa', 'Contaminación cruzada indirecta equipo a comida', 'Contaminación biológica directa'], correct: 2, exp: 'El vector es el cuchillo (equipo), no una persona ni comida directamente' },
            { q: '¿Cuál es un ejemplo de alimento ALTERADO (no contaminado)?', opts: ['Pollo con Salmonella', 'Pan duro', 'Leche con pesticidas', 'Agua con E.coli'], correct: 1, exp: 'El pan duro ha cambiado características organolépticas pero no es peligroso' },
            { q: '¿Cuál es el Aw de la carne fresca?', opts: ['0.85', '0.90', '0.95', '0.99'], correct: 3, exp: 'La carne fresca tiene Aw de 0.99, muy alto, muy favorable para microorganismos' },
            { q: '¿A qué temperatura y tiempo se elimina el Clostridium botulinum?', opts: ['65ºC 30 min', '75ºC 15 min', '90ºC 10 min', '100ºC 5 min'], correct: 2, exp: 'Es el dato exacto para eliminar Cl.botulinum' },
            { q: '¿Qué indica la producción de putrescina y cadaverina en la carne?', opts: ['Alteración aerobia superficial', 'Putrefacción anaerobia', 'Enranciamiento por oxidación', 'Contaminación química'], correct: 1, exp: 'Son productos de la descomposición anaerobia' },
            { q: '¿Por qué el pescado se deteriora más rápido que la carne?', opts: ['Su alto contenido en grasa', 'Su pH más ácido', 'Su metabolismo adaptado a bajas temperaturas y bajo descenso de pH post-mortem', 'Su mayor contenido en hidratos de carbono'], correct: 2, exp: 'Los microorganismos del pescado están adaptados al frío' },
            { q: '¿Qué aspecto tienen los ojos de un pescado fresco?', opts: ['Hundidos y opacos', 'Convexos, pupila negra y brillante, córnea transparente', 'Planos con pupila grisácea', 'Rojizos con mucosidad opaca'], correct: 1, exp: 'Son los criterios organolépticos de frescura de los ojos' },
            { q: '¿Qué pH en moluscos indica alteración microbiana?', opts: ['Inferior a 6.2', 'Inferior a 5.8', 'Superior a 6.5', 'Inferior a 7.0'], correct: 1, exp: 'pH menor de 5.8 indica alteración microbiana en moluscos' },
            { q: '¿Cuál NO aumenta la vida útil de crustáceos y moluscos?', opts: ['Refrigeración', 'Salazón', 'Exposición al aire a temperatura ambiente', 'Envasado al vacío'], correct: 2, exp: 'La exposición al aire acelera la alteración' }
        ]
    },
    examen: {
        nombre: 'Examen Final',
        test: [
            { q: '¿Qué significa APPCC?', opts: ['Análisis de Productos y Procesos de Control de Calidad', 'Análisis de Peligros y Puntos de Control Crítico', 'Aplicación de Procedimientos y Protocolos de Control de Cocina', 'Agencia de Prevención y Protección de Calidad en Cocina'], correct: 1, exp: 'APPCC = Análisis de Peligros y Puntos de Control Crítico' },
            { q: '¿Cuántos planes prerrequisito hay antes de implantar el APPCC?', opts: ['5', '6', '7', '9'], correct: 2, exp: 'Son 7 los planes prerrequisito antes del APPCC' },
            { q: '¿Cuál de estos NO es un campo de la tabla de gestión de PCC?', opts: ['Límites críticos', 'Medidas correctoras', 'Nombre del proveedor', 'Vigilancia'], correct: 2, exp: 'Los 8 campos son: fase, peligro, medidas preventivas, límites críticos, vigilancia, frecuencia, medidas correctoras y registro' },
            { q: '¿Qué es un alimento contaminado?', opts: ['Un alimento que ha perdido sus propiedades organolépticas', 'Un alimento que contiene agentes vivos, sustancias químicas tóxicas o componentes tóxicos de origen natural', 'Un alimento que ha cambiado de color por el frío', 'Un alimento que ha caducado'], correct: 1, exp: 'Contaminado = agentes vivos, sustancias químicas tóxicas o componentes tóxicos. No apto para consumo' },
            { q: '¿Cuántos alérgenos son de declaración obligatoria según la normativa europea?', opts: ['10', '12', '14', '16'], correct: 2, exp: 'Son 14 los alérgenos de declaración obligatoria' },
            { q: '¿Qué son las EDO?', opts: ['Enfermedades crónicas registradas anualmente', 'Enfermedades transmisibles de notificación obligatoria al centro de salud pública', 'Enfermedades declaradas voluntariamente por el paciente', 'Enfermedades que solo afectan a manipuladores de alimentos'], correct: 1, exp: 'EDO = Enfermedades de Declaración Obligatoria' },
            { q: '¿Cuál de estos alérgenos NO está en la lista de los 14 obligatorios?', opts: ['Apio', 'Sésamo', 'Pimiento', 'Altramuces'], correct: 2, exp: 'El pimiento no está en la lista de los 14 alérgenos obligatorios' },
            { q: 'Un cocinero corta carne cruda y sin limpiar la tabla corta queso. ¿Qué tipo de contaminación es?', opts: ['Contaminación directa comida a comida', 'Contaminación cruzada indirecta persona a comida', 'Contaminación cruzada indirecta equipo a comida', 'Contaminación química'], correct: 2, exp: 'El vector es la tabla (equipo), no una persona ni comida directamente' },
            { q: '¿A qué temperatura y tiempo se elimina el Clostridium botulinum?', opts: ['75ºC durante 15 minutos', '80ºC durante 20 minutos', '90ºC durante 10 minutos', '100ºC durante 5 minutos'], correct: 2, exp: 'Es el dato exacto para eliminar Cl.botulinum' },
            { q: '¿Qué límite de gluten debe tener un producto para etiquetarse como "sin gluten"?', opts: ['Menos de 100 mg/kg', 'Menos de 50 mg/kg', 'Menos de 20 mg/kg', 'Cero mg/kg'], correct: 2, exp: 'Límite legal para "sin gluten" = menos de 20 mg/kg' },
            { q: '¿Desde qué año funciona el SCIRI?', opts: ['1975', '1980', '1987', '1995'], correct: 2, exp: 'El SCIRI funciona desde 1987' },
            { q: '¿Cuál es el pH post-mortem del pescado?', opts: ['4.5-5.0', '5.5-6.5', '6.5-7.0', '7.0-7.5'], correct: 1, exp: 'pH post-mortem del pescado = 5.5-6.5' },
            { q: '¿Cuántos pasos tiene la implantación del APPCC?', opts: ['7', '9', '11', '13'], correct: 2, exp: 'La implantación del APPCC tiene 11 pasos' },
            { q: '¿Qué ley española creó la AESAN?', opts: ['RD 640/2006', 'Ley 11/2001', 'Reglamento CE 178/2002', 'RD 709/2002'], correct: 1, exp: 'La Ley 11/2001 crea la AESAN' },
            { q: '¿Qué aspecto tienen las branquias de un pescado fresco?', opts: ['Color marrón oscuro', 'Color grisáceo', 'Color rojo brillante', 'Color blanco nacarado'], correct: 2, exp: 'Las branquias de un pescado fresco tienen color rojo brillante' },
            { q: '¿Cuándo está justificado usar el etiquetado preventivo ("puede contener trazas de...")?', opts: ['Siempre, como medida de precaución general', 'Solo en productos con más de 3 alérgenos', 'Solo cuando no es posible evitar la contaminación cruzada', 'En todos los productos de panadería y bollería'], correct: 2, exp: 'El etiquetado preventivo solo está justificado cuando no es posible evitar la contaminación cruzada' },
            { q: '¿Qué bacterias pueden sobrevivir en carne congelada?', opts: ['Listeria y Campylobacter', 'Salmonella y E.coli', 'Clostridium y Bacillus', 'Staphylococcus y Streptococcus'], correct: 1, exp: 'Salmonella y E.coli pueden sobrevivir en carne congelada' },
            { q: '¿Qué reglamento europeo regula la información sobre alérgenos al consumidor?', opts: ['Reglamento CE 178/2002', 'Reglamento UE 16/2011', 'Reglamento UE 1169/2011', 'Reglamento 41/2009'], correct: 2, exp: 'El Reglamento UE 1169/2011 regula la información alimentaria al consumidor' },
            { q: '¿Qué pH en moluscos indica alteración microbiana?', opts: ['Inferior a 6.5', 'Inferior a 6.2', 'Inferior a 5.8', 'Inferior a 5.2'], correct: 2, exp: 'pH < 5.8 en moluscos indica alteración microbiana' },
            { q: '¿Cuál de estas afirmaciones sobre el APPCC es correcta?', opts: ['Cada empresa puede usar el mismo plan estándar', 'Solo es obligatorio en empresas de más de 50 trabajadores', 'Los límites críticos deben ser medibles fácilmente', 'Cuantos más PCC mejor, así el sistema es más seguro'], correct: 2, exp: 'Los límites críticos deben ser medibles fácilmente (temperatura, pH, color...)' }
        ]
    }
};

// ESTADO
let currentTema  = null;
let currentMode  = null;
let currentIndex = 0;
let correctCount = 0;
let results          = [];
let flashcardsCorrect = [];
let flashcardsWrong   = [];

// NAVEGACIÓN
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function selectTema(tema) {
    currentTema = tema;
    if (tema === 'examen') {
        startTest();
    } else {
        showScreen('modoScreen');
        document.getElementById('temaTitle').textContent = temas[tema].nombre;
    }
}

function goHome() {
    currentTema  = null;
    currentMode  = null;
    currentIndex = 0;
    correctCount = 0;
    results = [];
    showScreen('homeScreen');
}

function repeatMode() {
    if (currentMode === 'flashcards') {
        startFlashcards();
    } else {
        startTest();
    }
}

// FLASHCARDS
function startFlashcards() {
    currentMode  = 'flashcards';
    currentIndex = 0;
    correctCount = 0;
    flashcardsCorrect = [];
    flashcardsWrong   = [];
    showScreen('flashcardsScreen');
    document.getElementById('flashcardTemaTitle').textContent = temas[currentTema].nombre;
    loadFlashcard();
}

function loadFlashcard() {
    const flashcards = temas[currentTema].flashcards;
    const total      = flashcards.length;
    const progress   = currentIndex + 1;

    document.getElementById('flashcardProgress').textContent = `${progress} / ${total}`;
    document.getElementById('flashcardProgressBar').style.width = (progress / total * 100) + '%';

    const card = flashcards[currentIndex];
    document.getElementById('flashcardQuestion').textContent = card.q;
    document.getElementById('flashcardAnswer').textContent   = card.a;
    document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function markCorrect() {
    flashcardsCorrect.push(currentIndex);
    nextFlashcard();
}

function markWrong() {
    flashcardsWrong.push(currentIndex);
    nextFlashcard();
}

function nextFlashcard() {
    currentIndex++;
    if (currentIndex < temas[currentTema].flashcards.length) {
        loadFlashcard();
    } else {
        showFlashcardsResults();
    }
}

function showFlashcardsResults() {
    const total   = temas[currentTema].flashcards.length;
    const correct = flashcardsCorrect.length;
    showResults(correct, total, 'flashcards');
}

// TEST
function startTest() {
    currentMode  = 'test';
    currentIndex = 0;
    correctCount = 0;
    results = [];
    showScreen('testScreen');
    document.getElementById('testTemaTitle').textContent = temas[currentTema].nombre;
    loadQuestion();
}

function loadQuestion() {
    const questions = temas[currentTema].test;
    const total     = questions.length;
    const progress  = currentIndex + 1;

    document.getElementById('testProgress').textContent   = `${progress} / ${total}`;
    document.getElementById('testProgressBar').style.width = (progress / total * 100) + '%';

    const q = questions[currentIndex];
    document.getElementById('questionText').textContent = q.q;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    document.getElementById('feedback').classList.remove('show');
    document.getElementById('nextBtn').style.display = 'none';

    q.opts.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.textContent = opt;
        btn.onclick = () => selectOption(idx, q.correct, q.exp);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selected, correct, explanation) {
    const options   = document.querySelectorAll('.option');
    const isCorrect = selected === correct;

    options.forEach(opt => opt.classList.add('disabled'));
    options[selected].classList.add(isCorrect ? 'correct' : 'incorrect');
    options[correct].classList.add('correct');

    if (isCorrect) correctCount++;
    results.push({ correct: isCorrect });

    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback show ' + (isCorrect ? 'correct' : 'incorrect');
    feedback.innerHTML = `<strong>${isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</strong><br>${explanation}`;

    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < temas[currentTema].test.length) {
        loadQuestion();
    } else {
        showTestResults();
    }
}

function showTestResults() {
    showResults(correctCount, temas[currentTema].test.length, 'test');
}

// RESULTADOS
function showResults(correct, total, mode) {
    const percentage  = Math.round((correct / total) * 100);
    const scoreCircle = document.getElementById('scoreCircle');
    scoreCircle.textContent = `${correct}/${total}`;

    let message   = '';
    let submessage = '';
    let scoreClass = '';

    if (currentTema === 'examen') {
        if (correct >= 18)      { message = '✅ Sobresaliente'; submessage = '¡Dominas todos los temas! Excelente preparación.';       scoreClass = 'excellent'; }
        else if (correct >= 15) { message = '🟢 Notable';       submessage = 'Muy buen nivel. Solo algunos detalles por pulir.';       scoreClass = 'good'; }
        else if (correct >= 12) { message = '🟡 Aprobado';      submessage = 'Has aprobado, pero hay temas que necesitan repaso.';     scoreClass = 'pass'; }
        else                    { message = '🔴 A repasar';     submessage = 'Necesitas estudiar más. ¡Vuelve a intentarlo!';          scoreClass = 'fail'; }
    } else {
        if (percentage >= 90)      { message = '🎉 ¡Aprobado!'; submessage = 'Excelente trabajo. Dominas este tema.';                scoreClass = 'excellent'; }
        else if (percentage >= 70) { message = '✅ ¡Aprobado!'; submessage = 'Buen trabajo. Repasa los fallos.';                     scoreClass = 'good'; }
        else if (percentage >= 50) { message = '🟡 Casi';       submessage = 'Sigue así, necesitas un poco más de práctica.';        scoreClass = 'pass'; }
        else                       { message = '📚 A repasar';  submessage = 'Vuelve a estudiar este tema y repite el test.';        scoreClass = 'fail'; }
    }

    scoreCircle.className = 'score-circle ' + scoreClass;
    document.getElementById('resultMessage').textContent    = message;
    document.getElementById('resultSubmessage').textContent = submessage;

    showScreen('resultsScreen');
    playConfetti();
}

// CONFETTI
function playConfetti() {
    const colors = ['#667eea', '#764ba2', '#43e97b', '#38f9d7', '#f093fb', '#f5576c'];
    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left            = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5 + 'px';
        piece.style.width         = size;
        piece.style.height        = size;
        piece.style.borderRadius  = '50%';
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 2000);
    }
}
