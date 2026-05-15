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
    elaboracion: {
        nombre: 'Elaboración',
        flashcards: [
            { q: 'Las marinadas ablandan, aromatizan y conservan piezas duras como caza, carnero y vacuno mayor.', a: '✅ VERDADERO. El vinagre ataca los tejidos conjuntivos y ablanda la carne a razón de 10mm por día.' },
            { q: 'La marinada cruda tiene efectos más lentos y es preferible para piezas viejas de caza.', a: '✅ VERDADERO. La pieza se sumerge directamente en frío en la mezcla de líquidos y aromáticos.' },
            { q: 'La marinada cocida tiene el mismo tiempo de acción que la cruda.', a: '❌ FALSO. La marinada cocida es más rápida porque los ingredientes se rehogan primero en aceite y se dejan enfriar antes de sumergir la carne.' },
            { q: 'La salmuera de hidratación tiene entre el 3 y el 8% de sal y hace que el agua entre en las células aumentando la jugosidad.', a: '✅ VERDADERO. Se aplica a piezas grandes como pollos, pavos y capones entre 6 horas y 6 días.' },
            { q: 'La salmuera de equilibrio se aplica a razón de 1 minuto por cada 10g de peso de la pieza.', a: '✅ VERDADERO. Tiene entre el 8 y el 10% de sal y sazona en su justa medida añadiendo algo de jugosidad.' },
            { q: 'La salmuera de curación deshidrata la pieza para ahumar o curar y tiene entre el 18 y el 23% de sal.', a: '✅ VERDADERO. 2 horas para el magret, 24 horas o más para el lomo de salmón.' },
            { q: 'En una salmuera con mucha sal el agua entra en las células del alimento.', a: '❌ FALSO. Con mucha sal el agua sale de las células por ósmosis. Con poca sal es cuando el agua entra.' },
            { q: 'La farsa para croquetas está lista cuando al cocer se despega del recipiente.', a: '✅ VERDADERO. Es una bechamel espesa con picadillo rehogado en mantequilla. Se enfría cubierta con film a piel para evitar costra.' },
            { q: 'Las mousses clásicas se elaboran con género principal triturado, nata semimontada y gelatina, y siempre se sirven frías.', a: '✅ VERDADERO. La gelatina se añade fría pero aún líquida. Entre 3 y 6 hojas por litro.' },
            { q: 'Las duxelles son cebolla, chalota y champiñón picado pochado en mantequilla hasta reducir casi a seco.', a: '✅ VERDADERO. Se usan para rellenar tartaletas y paupiettes.' },
            { q: 'Los patés untuosos tienen trozos más grandes y se sirven al corte como entremés.', a: '❌ FALSO. Los untuosos son muy finamente picados y suaves para untar. Los compactos son los que tienen trozos más grandes y se sirven al corte.' },
            { q: 'Las farsas de carne deben usarse inmediatamente tras elaborarlas.', a: '✅ VERDADERO. Son carne picada cruda con ligazón y sazonamiento. Para albóndigas, hamburguesas y rellenos.' },
            { q: 'Las muselinas pueden trabajarse a cualquier temperatura porque la grasa no se corta.', a: '❌ FALSO. Si supera los 14°C la grasa se corta y la textura queda granulosa. Siempre en frío.' },
            { q: 'La guarnición nunca debe superar en volumen ni en apariencia al género principal.', a: '✅ VERDADERO. Es lo accesorio, no el protagonista del plato.' },
            { q: 'En un plato proteico como una carne o un pescado, la guarnición es de carbohidratos.', a: '✅ VERDADERO. Al revés también: si el plato es de patatas o legumbres, la guarnición es proteica.' },
            { q: 'El pochado de la patata es una cocción previa en aceite a 140°C para que se cocine por dentro sin dorarse.', a: '✅ VERDADERO. Al momento del pase se da un golpe de fritura en aceite muy caliente para dorar el exterior. Se usa en puente nuevo y española.' },
            { q: 'Las patatas risoladas cuando se tornean se denominan château.', a: '✅ VERDADERO. Se dan un hervor de 3 a 5 minutos desde agua fría, se doran en mantequilla y se terminan en horno.' },
            { q: 'El puré duquesa lleva mantequilla y yemas, se tira con manga, se pinta con yema y se termina al horno.', a: '✅ VERDADERO. El parmentier lleva leche hirviendo en lugar de yemas y es más ligero. Las delfín llevan pasta choux y se fríen.' },
            { q: 'El arroz pilaw debe quedar caldoso y cremoso al final de la cocción.', a: '❌ FALSO. El arroz pilaw debe quedar seco. Se cuece 10 minutos a fuego vivo y 10 minutos en horno con el doble de fondo.' },
            { q: 'Las elaboraciones con setas se denominan a la cazadora.', a: '✅ VERDADERO. Es la denominación clásica para cualquier elaboración que incorpore setas.' },
            { q: 'Todo lo que aparezca en el plato debe ser comestible.', a: '✅ VERDADERO. Los elementos decorativos no comestibles son causa de descalificación en concursos de cocina.' },
            { q: 'En la presentación clásica el género principal va a la derecha, la guarnición a la izquierda y la salsa por encima del género.', a: '✅ VERDADERO. Es una presentación correcta aunque pensada para comensales diestros.' },
            { q: 'La tendencia actual en emplatado busca la tercera dimensión dando altura al plato, percibiéndolo desde unos 45°.', a: '✅ VERDADERO. Las salsas se convierten en ligeros jugos o aceites que rodean el género en fino cordón.' },
            { q: 'La regla de los tercios sitúa el género principal en el centro del plato para que destaque.', a: '❌ FALSO. La regla de los tercios sitúa el género en un punto de interés fuera del centro para dar profundidad y dinamismo.' },
            { q: 'Los platos redondos integran mejor las líneas rectas y los cuadrados las líneas curvas.', a: '❌ FALSO. Al revés: los redondos y triangulares integran mejor las curvas. Los cuadrados y rectangulares integran mejor las líneas rectas.' },
            { q: 'Cuando hay varios elementos del mismo tipo en el plato deben disponerse en número impar. El número mágico es el 3.', a: '✅ VERDADERO. Los números pares crean tensión y orden excesivo. Los impares dan una disposición más natural y relajada.' },
            { q: 'Las grecas o filigranas consisten en aplicar puntos o tiras de una salsa sobre otra de diferente color y pasar la punta de un cuchillo para formar corazones o arcos.', a: '✅ VERDADERO. Se usan principalmente en pastelería y postres emplatados.' },
            { q: 'Cubrir el género principal con la salsa es una buena técnica para integrarlo con la guarnición.', a: '❌ FALSO. Nunca se cubre el género principal con la salsa: da la sensación de que es de baja calidad y se quiere ocultar.' },
            { q: 'El género principal puede colocarse en los puntos delanteros del plato para que el comensal lo vea antes.', a: '❌ FALSO. En los puntos delanteros hace efecto barrera e impide ver el resto de la composición. Siempre en los puntos posteriores.' }
        ],
        test: [
            { q: '¿Cuál es la velocidad de penetración de una marinada en la carne?', opts: ['5mm por día', '10mm por día', '20mm por día', 'Depende del tipo de carne'], correct: 1, exp: 'El vinagre ataca los tejidos conjuntivos y ablanda la carne a razón de 10mm por día. Por eso las piezas grandes necesitan más tiempo.' },
            { q: '¿Qué diferencia hay entre la marinada cruda y la cocida?', opts: ['La cruda lleva vino y la cocida no', 'La cocida es más lenta porque los ingredientes están fríos', 'La cocida es más rápida porque los ingredientes se rehogan primero en aceite', 'La cruda se usa solo para pescados'], correct: 2, exp: 'La marinada cocida rehoga primero los ingredientes en aceite y los deja enfriar antes de sumergir la carne. Eso acelera la penetración.' },
            { q: '¿Qué porcentaje de sal tiene la salmuera de hidratación?', opts: ['1-2%', '3-8%', '8-10%', '18-23%'], correct: 1, exp: '3-8% de sal hace que el agua entre en las células por ósmosis, hidratando y dando jugosidad. Se usa en pollos, pavos y capones.' },
            { q: '¿Cuánto tiempo se aplica la salmuera de equilibrio?', opts: ['1 hora por cada 10g de la pieza', '1 minuto por cada 10g de la pieza', '30 minutos independientemente del peso', 'Entre 6 horas y 6 días'], correct: 1, exp: 'La salmuera de equilibrio (8-10% sal) se aplica 1 minuto por cada 10g de la pieza. Ideal para pescados racionados y pechugas.' },
            { q: '¿Cuál es la salmuera adecuada para preparar un lomo de salmón para ahumar?', opts: ['De hidratación', 'De equilibrio', 'De curación', 'Ninguna, el salmón se sala en seco'], correct: 2, exp: 'La salmuera de curación (18-23% sal) deshidrata la pieza para ahumar o curar. Para el lomo de salmón se aplica 24 horas o más.' },
            { q: '¿Cuál es el punto exacto de la farsa para croquetas?', opts: ['Cuando lleva 20 minutos cociendo', 'Cuando alcanza 75°C en el centro', 'Cuando al cocer se despega del recipiente', 'Cuando tiene color dorado'], correct: 2, exp: 'La farsa está lista cuando se despega sola del recipiente. Se enfría en placa cubierta con film a piel para evitar que se forme costra.' },
            { q: '¿A qué temperatura máxima se puede trabajar una muselina?', opts: ['4°C', '14°C', '20°C', 'No tiene límite de temperatura'], correct: 1, exp: 'Si supera los 14°C la grasa se corta y la textura queda granulosa. Las muselinas deben trabajarse siempre en frío.' },
            { q: '¿Qué diferencia hay entre un paté untuoso y uno compacto?', opts: ['El untuoso lleva más hígado y el compacto más panceta', 'El untuoso es muy picado y suave para untar; el compacto tiene trozos más grandes y se sirve al corte', 'El untuoso se cuece al horno y el compacto al baño maría', 'No hay diferencia, son lo mismo'], correct: 1, exp: 'Los untuosos se sirven en tostadas, tartaletas o canapés. Los compactos se disponen al corte como entremés o aperitivo.' },
            { q: '¿Para qué se usan las duxelles?', opts: ['Para espesar salsas', 'Para rellenar tartaletas y paupiettes', 'Para hacer fondos de cocina', 'Para glasear pescados'], correct: 1, exp: 'Las duxelles son cebolla, chalota y champiñón picado pochado en mantequilla hasta casi seco. Son un relleno clásico.' },
            { q: '¿Qué temperatura de cocción previa tiene el pochado de patatas?', opts: ['100°C', '120°C', '140°C', '180°C'], correct: 2, exp: 'El pochado a 140°C cocina la patata por dentro sin dorarla. Al pase se da un golpe de fritura en aceite muy caliente para dorar el exterior.' },
            { q: '¿Cómo se denominan las patatas risoladas cuando se tornean?', opts: ['Noisette', 'Château', 'Parmentier', 'Panadera'], correct: 1, exp: 'Las patatas risoladas torneadas se llaman château. Se dan un hervor desde agua fría, se doran en mantequilla y se terminan en horno.' },
            { q: '¿Qué puré de patata lleva pasta choux y se fríe?', opts: ['Duquesa', 'Parmentier', 'Delfín', 'Risolada'], correct: 2, exp: 'Las patatas delfín son puré mezclado con pasta choux, tirado con manga y frito. El duquesa lleva yemas y va al horno. El parmentier lleva leche.' },
            { q: '¿Cómo debe quedar el arroz pilaw al final de la cocción?', opts: ['Cremoso y caldoso', 'Al dente con caldo', 'Seco', 'Pegajoso'], correct: 2, exp: 'El arroz pilaw se cuece 10 minutos a fuego vivo y 10 minutos en horno con el doble de fondo. Debe quedar completamente seco.' },
            { q: '¿Cómo se denominan las elaboraciones que llevan setas?', opts: ['A la jardinera', 'A la cazadora', 'A la forestière', 'A la provenzal'], correct: 1, exp: '"A la cazadora" es la denominación clásica para cualquier elaboración que incorpore setas como guarnición.' },
            { q: 'En la regla de los tercios, ¿dónde debe situarse el género principal?', opts: ['En el centro exacto del plato', 'En el borde del plato para dar dinamismo', 'En uno de los puntos de interés fuera del centro', 'En el punto delantero para que el comensal lo vea primero'], correct: 2, exp: 'La regla de los tercios divide el plato en tercios. El género se sitúa en un punto de interés posterior, no en el centro.' },
            { q: '¿Qué sensación dan los números pares en la disposición de elementos en el plato?', opts: ['Naturalidad y relajación', 'Profundidad y dinamismo', 'Tensión y orden excesivo', 'Armonía y equilibrio'], correct: 2, exp: 'Los números impares (1, 3, 5, 7) dan una disposición más natural y relajada. El número mágico es el 3.' },
            { q: '¿Qué son las grecas o filigranas?', opts: ['Técnica de corte de hortalizas para decorar', 'Pasar un cuchillo sobre puntos o tiras de salsas de diferente color para formar corazones o arcos', 'Técnica de esferificación para postres', 'Tipo de guarnición de frutas'], correct: 1, exp: 'Las grecas se usan principalmente en pastelería y postres emplatados. Se aplica una salsa sobre otra y se pasa la punta de un cuchillo.' },
            { q: '¿Por qué nunca se debe cubrir el género principal con la salsa?', opts: ['Porque enfría el plato demasiado rápido', 'Porque da la sensación de que es de baja calidad y se quiere ocultar', 'Porque la salsa debe servirse siempre aparte en salsera', 'Porque dificulta el marcaje en sala'], correct: 1, exp: 'Cubrir el género principal con salsa oculta el producto y transmite al comensal que hay algo que esconder. La salsa va alrededor o en fino cordón.' }
        ]
    },
    preelaboracion: {
        nombre: 'Preelaboración',
        flashcards: [
            { q: 'La leche pasterizada se conserva 72 horas refrigerada.', a: '✅ VERDADERO. Solo destruye patógenos, no todos los microorganismos.' },
            { q: 'La leche UHT y la esterilizada se conservan varios meses sin refrigeración.', a: '✅ VERDADERO. Ambas eliminan todos los microorganismos. La UHT se envasa en condiciones asépticas.' },
            { q: 'La leche en polvo ocupa 10 veces menos que la leche líquida y se reconstituye al 10%.', a: '✅ VERDADERO. Se usa en pastelería, panadería y buffets de desayuno.' },
            { q: 'Para montar nata se necesita un mínimo del 32-33% de materia grasa.', a: '✅ VERDADERO. Con menos grasa no monta correctamente.' },
            { q: 'Para cocinar y espesar salsas se usa nata con un 18% de materia grasa.', a: '✅ VERDADERO. La nata de cocinar tiene menos grasa que la de montar.' },
            { q: 'La nata doble tiene un 50% o más de materia grasa.', a: '✅ VERDADERO. Es la nata con mayor contenido graso.' },
            { q: 'La mantequilla se obtiene al batir la nata y contiene vitaminas A y D.', a: '✅ VERDADERO. Es una grasa de gran calidad y sabor característico.' },
            { q: 'La mantequilla clarificada se obtiene calentándola lentamente durante 30 minutos. Se usa para carnes y pescados a la parrilla.', a: '✅ VERDADERO. Clarificar elimina el agua y las proteínas, solo queda la grasa pura.' },
            { q: 'Los huevos de categoría A son frescos y aptos para consumo directo.', a: '✅ VERDADERO. Los de categoría B no son aptos para consumo directo: uso industrial.' },
            { q: 'La caducidad de los huevos es de 28 días desde la puesta.', a: '✅ VERDADERO. A partir de ahí no deben consumirse en crudo ni poco cocinados.' },
            { q: 'Un huevo fresco tiene la yema centrada y la clara recogida.', a: '✅ VERDADERO. Si la clara es acuosa y la yema está hundida, el huevo está menos fresco.' },
            { q: 'Las tallas de huevo son: S (43-53g), M (53-63g), L (63-73g) y XL (más de 73g).', a: '✅ VERDADERO. La clasificación por peso es obligatoria en los huevos de categoría A.' },
            { q: 'La yema del huevo coagula a mayor temperatura que la clara: coagula a 80°C.', a: '✅ VERDADERO. La clara coagula antes, a menor temperatura que la yema.' },
            { q: 'En elaboraciones que no superen 75°C en el centro del producto se debe usar huevo líquido pasterizado.', a: '✅ VERDADERO. Para garantizar la seguridad alimentaria sin alcanzar temperatura de pasteurización.' },
            { q: 'Está prohibido elaborar mahonesa, salsa holandesa y bearnesa con huevo crudo en cocina.', a: '✅ VERDADERO. Son elaboraciones con huevo crudo que pueden contener Salmonella.' },
            { q: 'Nunca se casca el huevo en el mismo recipiente donde se va a batir.', a: '✅ VERDADERO. Si hay un huevo en mal estado contaminaría toda la mezcla.' },
            { q: 'Los huevos no deben lavarse hasta el momento de su uso.', a: '✅ VERDADERO. Lavar elimina la cutícula protectora que impide la entrada de bacterias.' },
            { q: 'El arroz categoría Extra tiene etiqueta roja y un mínimo del 92% de granos enteros.', a: '✅ VERDADERO. Primera: etiqueta verde, 87%. Segunda: etiqueta amarilla, 80%.' },
            { q: 'El arroz de grano redondo es pegajoso al cocer y se usa para sushi.', a: '✅ VERDADERO. Es de variedad japónica, con mucha amilopectina que lo hace pegajoso.' },
            { q: 'El arroz integral tarda hasta 45 minutos en cocer y es más rico en vitaminas del grupo B.', a: '✅ VERDADERO. Al conservar el salvado tiene más nutrientes pero necesita más tiempo.' },
            { q: 'El arroz vaporizado no se pega ni se pasa, pero resulta más insípido.', a: '✅ VERDADERO. El tratamiento previo conserva vitaminas pero le resta sabor.' },
            { q: 'Para risotto se usan 17 minutos de cocción, añadiendo el caldo poco a poco y removiendo continuamente.', a: '✅ VERDADERO. Remover continuamente hace que el arroz suelte almidón y quede cremoso.' },
            { q: 'Para guarniciones o ensaladas: 4 partes de agua por 1 de arroz y refrescado inmediato tras la cocción.', a: '✅ VERDADERO. El refrescado corta la cocción y separa los granos.' },
            { q: 'Los arroces secos (paella) necesitan 3-4 partes de líquido por 1 de arroz y no se remueven.', a: '✅ VERDADERO. Remover rompería los granos y soltaría el almidón en exceso.' },
            { q: 'Las pastas de calidad superior se elaboran solo con sémola de trigo duro y tienen un mínimo del 11% de proteína.', a: '✅ VERDADERO. Las de calidad corriente tienen un mínimo del 9,5% de proteína.' },
            { q: 'Las pastas rellenas deben llevar un mínimo del 25% de relleno.', a: '✅ VERDADERO. Es el porcentaje mínimo exigido por el Código Alimentario Español.' },
            { q: 'La pasta fresca está lista cuando sube a la superficie del agua en ebullición.', a: '✅ VERDADERO. A diferencia de la pasta seca, la fresca cuece en muy poco tiempo.' },
            { q: 'Las pastas para acompañar con salsas se escurren y se saltean con la salsa sin escurrir del todo.', a: '✅ VERDADERO. Un poco del agua de cocción ayuda a ligar la salsa con la pasta.' },
            { q: 'Los gnoquis son bolas o cilindros de patata, harina, sémola, leche y huevo que se escaldan.', a: '✅ VERDADERO. Son una preparación italiana que se sirve con salsa.' },
            { q: 'El cous cous se prepara añadiendo la misma cantidad de agua que de sémola y dejando absorber el líquido.', a: '✅ VERDADERO. Se añade mantequilla o aceite al final para que los granos queden sueltos.' },
            { q: 'La pasta philo se pinta con mantequilla y se hornea a 175°C durante 7 minutos hasta quedar crujiente y dorada.', a: '✅ VERDADERO. Se presenta en finas hojas enrolladas que se conservan en refrigeración.' },
            { q: 'Los fideos de arroz se fríen sin escaldado previo en abundante aceite: se inflan y quedan crujientes.', a: '✅ VERDADERO. Es su característica principal frente a otras pastas que necesitan cocción previa.' },
            { q: 'La pasta wonton se escalda previamente, se rellena, se fríe y queda con el exterior crujiente.', a: '✅ VERDADERO. Es una pasta fina de origen asiático usada para elaborar raviolis orientales.' },
            { q: 'Las setas y hongos son vegetales sin flor ni clorofila que crecen en lugares húmedos, oscuros y ricos en materia orgánica.', a: '✅ VERDADERO. Se clasifican en comestibles, sin valor gastronómico y tóxicas.' },
            { q: 'Las setas cultivadas (champiñón, shiitake) están disponibles en el mercado todo el año.', a: '✅ VERDADERO. Al ser cultivadas no dependen de la estacionalidad ni del clima.' },
            { q: 'Las setas silvestres (boletos, níscalos, trufas, colmenillas) son más apreciadas y tienen precio superior por su estacionalidad y localización incierta.', a: '✅ VERDADERO. No se pueden cultivar de forma controlada, lo que encarece su precio.' },
            { q: 'Las setas se presentan comercialmente frescas, congeladas, deshidratadas y en conserva.', a: '✅ VERDADERO. La deshidratación es muy habitual en setas silvestres como las colmenillas o los boletos.' }
        ],
        test: [
            { q: '¿Cuánto tiempo se conserva la leche pasterizada refrigerada?', opts: ['24 horas', '48 horas', '72 horas', '7 días'], correct: 2, exp: 'La pasterización destruye los patógenos pero no todos los microorganismos, por eso su conservación es corta: 72 horas en frío.' },
            { q: '¿Qué porcentaje mínimo de materia grasa necesita la nata para poder montarse?', opts: ['18%', '25%', '32-33%', '50%'], correct: 2, exp: 'Con menos del 32% la nata no monta correctamente. El 18% es para cocinar y el 50% es nata doble.' },
            { q: '¿Cómo se obtiene la mantequilla clarificada?', opts: ['Batiendo la nata a alta velocidad', 'Calentándola lentamente durante 30 minutos', 'Mezclándola con aceite de oliva', 'Enfriándola rápidamente'], correct: 1, exp: 'Clarificar elimina el agua y las proteínas de la mantequilla. Solo queda la grasa pura, ideal para parrilla y salsas.' },
            { q: '¿Qué categoría tiene un huevo apto para consumo directo?', opts: ['Categoría B', 'Categoría Extra', 'Categoría A', 'Categoría Primera'], correct: 2, exp: 'Categoría A = frescos, consumo directo, clasificados por peso. Categoría B = uso industrial, no aptos para consumo directo.' },
            { q: '¿A qué temperatura coagula la yema del huevo?', opts: ['60°C', '70°C', '75°C', '80°C'], correct: 3, exp: 'La yema coagula a 80°C, a mayor temperatura que la clara. Por eso en elaboraciones que no superan 75°C hay que usar huevo pasterizado.' },
            { q: '¿Cuántos días de caducidad tienen los huevos desde la puesta?', opts: ['14 días', '21 días', '28 días', '35 días'], correct: 2, exp: '28 días desde la puesta es la caducidad legal de los huevos frescos de categoría A.' },
            { q: '¿Qué etiqueta tiene el arroz de categoría Extra?', opts: ['Verde', 'Amarilla', 'Azul', 'Roja'], correct: 3, exp: 'Extra = etiqueta roja, mínimo 92% granos enteros. Primera = verde, 87%. Segunda = amarilla, 80%.' },
            { q: '¿Qué tipo de arroz se usa para el sushi?', opts: ['Arroz largo tipo índica', 'Arroz integral', 'Arroz de grano redondo japónica', 'Arroz vaporizado'], correct: 2, exp: 'El arroz de grano redondo tiene mucha amilopectina, lo que lo hace pegajoso al cocer. Ideal para sushi.' },
            { q: '¿Cuántos minutos se cuece el arroz para risotto?', opts: ['10 minutos', '17 minutos', '20 minutos', '45 minutos'], correct: 1, exp: '17 minutos añadiendo caldo poco a poco y removiendo continuamente para que suelte almidón y quede cremoso.' },
            { q: '¿Qué porcentaje mínimo de proteína tienen las pastas de calidad superior?', opts: ['9,5%', '10%', '11%', '13%'], correct: 2, exp: 'Calidad superior: mínimo 11% de proteína, solo con sémola de trigo duro. Calidad corriente: mínimo 9,5%.' },
            { q: '¿Qué porcentaje mínimo de relleno deben llevar las pastas rellenas?', opts: ['10%', '15%', '20%', '25%'], correct: 3, exp: 'El Código Alimentario Español exige un mínimo del 25% de relleno en las pastas rellenas.' },
            { q: '¿Cuándo está lista la pasta fresca?', opts: ['Tras 10 minutos de cocción', 'Cuando sube a la superficie del agua', 'Cuando el agua vuelve a hervir', 'Tras 5 minutos desde que rompe a hervir'], correct: 1, exp: 'La pasta fresca cuece muy rápido. La señal es que sube a la superficie del agua en ebullición.' },
            { q: '¿A qué temperatura y cuánto tiempo se hornea la pasta philo?', opts: ['150°C, 15 minutos', '175°C, 7 minutos', '200°C, 5 minutos', '160°C, 10 minutos'], correct: 1, exp: 'Pintar con mantequilla y hornear a 175°C durante 7 minutos hasta que quede crujiente y ligeramente dorada.' },
            { q: '¿Qué característica tienen los fideos de arroz al freírse?', opts: ['Se ablandan y quedan cremosos', 'Se deshacen si no se escaldan antes', 'Se inflan y quedan crujientes sin escaldado previo', 'Necesitan remojo previo de 30 minutos'], correct: 2, exp: 'Los fideos de arroz se fríen directamente en abundante aceite sin escaldado. Se inflan y quedan crujientes.' },
            { q: '¿Cuál de estas setas está disponible todo el año en el mercado?', opts: ['Níscalo', 'Boleto', 'Colmenilla', 'Champiñón'], correct: 3, exp: 'El champiñón es una seta cultivada, disponible todo el año. Las silvestres (níscalo, boleto, colmenilla) dependen de la estacionalidad.' },
            { q: '¿Cómo se presentan comercialmente las setas y hongos?', opts: ['Solo frescas y congeladas', 'Solo deshidratadas y en conserva', 'Frescas, congeladas, deshidratadas y en conserva', 'Solo frescas'], correct: 2, exp: 'Las cuatro formas de presentación son válidas. La deshidratación es muy habitual en setas silvestres de alto valor.' }
        ]
    },
    cafeteria: {
        nombre: 'Cafetería y Sala',
        flashcards: [
            { q: 'Un cliente pide un café "con menos cafeína y más aromático". Le recomiendas arábiga porque tiene entre 1 y 1,5% de cafeína y aromas delicados.', a: '✅ VERDADERO. La robusta tiene ~3% de cafeína y sabor más fuerte y amargo. El arábiga es la variedad más valorada.' },
            { q: 'El café torrefacto que se vende en España es legal porque en toda la UE se permite añadir azúcar antes del tueste.', a: '❌ FALSO. En la mayoría de la UE está prohibido. En España se permite por tradición, pero produce cafés de menor calidad.' },
            { q: 'Para recomendar un café de mayor calidad a un cliente, los tratados por vía húmeda son mejor opción que los de vía seca.', a: '✅ VERDADERO. La vía húmeda fermenta y lava el grano, produciendo aromas más finos y menos amargos.' },
            { q: 'En la carta figura "Suave colombiano". Es un arábiga de vía húmeda y pertenece a la categoría más alta en la clasificación internacional.', a: '✅ VERDADERO. Producidos en Colombia, Kenia y Tanzania. Son los de mayor calidad.' },
            { q: 'Estás regulando la cafetera: necesitas 7-8g de café, agua a ~90°C, 8-10 bares de presión y 25-30 segundos de extracción para un espresso perfecto.', a: '✅ VERDADERO. Esos son los parámetros exactos. El resultado debe ser 20-35ml de infusión.' },
            { q: 'El espresso ha tardado 35 segundos en salir y el cliente dice que está muy ácido. Tiene razón, es por la sobreextracción.', a: '❌ FALSO. El sobreextraído (más de 30s) es amargo, no ácido. El ácido es el subextraído (menos de 20s).' },
            { q: 'Sacas un espresso y la crema tiene color avellana con aromas tostados. Es señal de que lo has preparado bien.', a: '✅ VERDADERO. Crema muy oscura o ausencia de crema indican un espresso mal elaborado.' },
            { q: 'Un cliente pide un café con leche caliente pero sin espuma. Para calentarla sin crear espuma sumerges el vaporizador completamente hasta el fondo de la jarra.', a: '✅ VERDADERO. Al fondo se calienta sin introducir aire. Temperatura ideal: 60-65°C.' },
            { q: 'Vas a preparar un cappuccino. Para crear la microespuma colocas la punta del vaporizador justo debajo de la superficie de la leche y escuchas un "chhh" suave.', a: '✅ VERDADERO. Esa posición incorpora aire y crea microespuma. Si hace mucho ruido, el vaporizador está demasiado sumergido.' },
            { q: 'Un cliente dice que el cappuccino de ayer "tenía más espuma". La proporción correcta es 1/3 espresso, 1/3 leche y 1/3 espuma.', a: '✅ VERDADERO. Esa es la proporción clásica del cappuccino. Si hay más espuma que lo demás, no está bien equilibrado.' },
            { q: 'Un cliente pide un café bombón. Lo sirves en vaso de cristal con leche condensada en el fondo y el espresso encima, sin mezclar.', a: '✅ VERDADERO. La leche condensada queda abajo por ser más densa. Nunca se mezcla.' },
            { q: 'Sirves un café irlandés: espresso doble, whisky con azúcar disuelto y nata semimontada encima que no se mezcla. El cliente lo bebe atravesando la nata.', a: '✅ VERDADERO. Se sirve en copa irlandesa. La nata no se mezcla con el café.' },
            { q: 'La carta anuncia "café de especialidad". Para usar esa denominación, el café debe haber superado los 80 puntos en la cata SCA.', a: '✅ VERDADERO. Menos de 80 = café comercial. 90-100 = excepcional. El de especialidad está entre 80 y 90.' },
            { q: 'Un cliente pregunta la diferencia entre leche entera y semidesnatada. Le explicas que la entera tiene mínimo 3% de grasa y la semidesnatada entre 0,5% y 1,5%.', a: '✅ VERDADERO. La desnatada tiene menos de 0,5%. Son los porcentajes exactos de la normativa.' },
            { q: 'Estás friendo patatas para guarnición. Cuanto más doradas y oscuras queden, mejor, porque más crujientes estarán.', a: '❌ FALSO. El dorado oscuro genera acrilamida por la reacción de Maillard. La regla es "dorado pero no pasado".' },
            { q: 'Para reducir la acrilamida al freír las patatas subes el aceite a más de 200°C para que se hagan más rápido.', a: '❌ FALSO. Hay que freír a máximo 175°C. Más temperatura genera más acrilamida, no menos.' },
            { q: 'Guardas las patatas en la nevera para que estén frescas y así generen menos acrilamida al freírlas.', a: '❌ FALSO. Nunca en nevera. El frío aumenta los azúcares reductores que luego generan más acrilamida. Lugar fresco y oscuro.' },
            { q: 'Al abrir la cafetería enciendes el lavavajillas y la cafetera. Al cerrar, los apagas y limpias. Siempre en el mismo orden.', a: '✅ VERDADERO. El protocolo de apertura y cierre siempre sigue el mismo orden.' },
            { q: 'Al acabar el servicio, antes de apagar luces y poner candados, subes la caja y el datáfono a secretaría.', a: '✅ VERDADERO. Es el último paso del cierre.' },
            { q: 'El restaurante donde trabajas tiene fin económico, amplio horario y oferta esmerada. Es restauración comercial.', a: '✅ VERDADERO. Se divide en restauración tradicional y neorrestauración.' },
            { q: 'El comedor de un colegio es un ejemplo de restauración colectiva: clientes "cautivos" con precios reducidos.', a: '✅ VERDADERO. Su beneficio viene del volumen y la reducción de costes.' },
            { q: 'Tu actitud en el trabajo, el trato al cliente y tu impacto en la sociedad forman parte de la deontología profesional en hostelería.', a: '✅ VERDADERO. Son los tres grupos: relaciones internas, con el cliente y con la sociedad.' },
            { q: 'Antes de entrar al servicio te fumas un cigarro fuera de la sala. No supone ningún problema porque no fumas delante del cliente.', a: '❌ FALSO. Está prohibido fumar ni justo antes del servicio. El aliento desagradable afecta al cliente.' },
            { q: 'Llevas 30 minutos preparando mesas, cubiertos y sala antes de abrir. Eso se llama mise en place y la supervisa el maître.', a: '✅ VERDADERO. Expresión francesa que significa "puesta a punto". Es esencial antes de cada servicio.' },
            { q: 'Llegas a una mesa con una familia. Empiezas a tomar nota al padre, que parece el anfitrión, por deferencia.', a: '❌ FALSO. El anfitrión es el ÚLTIMO. El orden correcto es: niños primero, luego señoras de mayor a menor edad, luego señores.' },
            { q: 'La mesa acaba de sentarse. El orden correcto de tomar comandas empieza por las bebidas aperitivo y termina por cafés y licores.', a: '✅ VERDADERO. Bebidas aperitivo → comidas → bebidas principales → postres → cafés y licores.' },
            { q: 'Gritas "Marcha, dos lomos" a cocina. Cuando estén listos, te dirán "Pasa". Esas son las voces estándar entre sala y cocina.', a: '✅ VERDADERO. "Marcha" = empieza a preparar. "Pasa" = el plato está listo para salir.' },
            { q: 'En el restaurante donde estás en prácticas los platos llegan terminados de cocina. Es un servicio emplatado, el más habitual y rápido.', a: '✅ VERDADERO. El servicio emplatado es el más común en restaurantes modernos.' },
            { q: 'Presentas una fuente al cliente por su izquierda y él mismo se sirve. Estás haciendo un servicio a la francesa.', a: '✅ VERDADERO. Es el más lento y está casi en desuso. Puede haber reparto desigual.' },
            { q: 'Vas a servir el agua a la mesa. Te sitúas por la derecha del cliente. Para poner el pan, irías por la izquierda.', a: '✅ VERDADERO. Todas las bebidas se sirven y desbarasan por la derecha. El pan es lo único que va por la izquierda.' },
            { q: 'En una mesa hay una pareja mayor, una joven y el anfitrión. El anfitrión es el último en recibir la comida.', a: '✅ VERDADERO. Orden: niñas, niños, señoras mayores, señoras jóvenes, hombres mayores, hombres jóvenes, anfitrión.' },
            { q: 'Ya tienes las comandas de la mesa. Antes de llevar los primeros platos te aseguras de que tienen pan, bebidas y los cubiertos correctos.', a: '✅ VERDADERO. Nunca se empieza a servir comida hasta que la mesa esté marcada, con bebidas y con pan.' },
            { q: 'El maître te dice "marca la mesa 5 para el pescado". Vas a colocar la pala y el tenedor de pescado delante de cada cliente.', a: '✅ VERDADERO. Marcar = colocar los cubiertos correctos antes de servir. Siempre antes, no después.' },
            { q: 'El cliente ha pedido un entrecot. Para marcarlo colocas el cuchillo de steak a la derecha y el tenedor de steak a la izquierda.', a: '✅ VERDADERO. Carnes rojas → steak. Carnes blancas → cuchillo y tenedor trinchero.' },
            { q: 'Van a servir una merluza a la plancha. La marcas con pala de pescado (derecha) y tenedor de pescado (izquierda), independientemente de cómo esté cocinada.', a: '✅ VERDADERO. El marcaje del pescado es siempre con pala y tenedor de pescado, sin excepciones.' },
            { q: 'Una receta de cóctel lleva ginebra, limón y ginger beer. Echas el ginger beer en la coctelera con el resto de ingredientes.', a: '❌ FALSO. Las bebidas carbonatadas NUNCA van en la coctelera. La presión al agitar es peligrosa. Se añaden al final, en el vaso.' },
            { q: 'La receta dice "2 Oz de ron". Con el jigger mides 6 cl porque 1 Oz equivale a 3 cl.', a: '✅ VERDADERO. 1 Oz = 3 cl es la medida estándar del jigger. 2 Oz = 6 cl.' },
            { q: 'Te piden un Bloody Mary. Lo preparas en la coctelera como el resto de cócteles.', a: '❌ FALSO. El Bloody Mary es la gran excepción: se prepara en vaso mezclador, no en coctelera.' },
            { q: 'Una mesa pide cócteles antes de comer. Les recomiendas opciones aperitivo porque estimulan el apetito y se sirven en trago corto o medio.', a: '✅ VERDADERO. Los cócteles digestivos llevan principalmente alcoholes y licores dulces y se toman al final.' },
            { q: 'En la charcutería de la sala hay un jamón con etiqueta negra. Puedes decirle al cliente con seguridad que es ibérico de bellota 100%.', a: '✅ VERDADERO. Negro = 100% ibérico bellota. Rojo = bellota con % ibérico. Verde = cebo campo. Blanco = cebo ibérico.' },
            { q: 'Un cliente pregunta la diferencia entre el jamón serrano "reserva" y el "gran reserva". El gran reserva tiene más de 15 meses de curación.', a: '✅ VERDADERO. Bodega: 10-12 meses. Reserva: 12-15 meses. Gran Reserva: más de 15 meses.' },
            { q: 'El restaurante donde trabajas presume de ser slow food: usa ingredientes locales, de temporada, y fomenta comer despacio y con consciencia.', a: '✅ VERDADERO. Nació como respuesta al fast food y la fast life.' },
            { q: 'En la cafetería del hospital no hay una sola cola larga sino varias islas donde los clientes eligen, pagan y luego se sientan. Eso es un sistema free flow.', a: '✅ VERDADERO. El free flow elimina las colas del self service en línea. Es más fluido y rápido.' }
        ],
        test: [
            { q: 'Un cliente te pide un café "con menos cafeína y más aromático". ¿Qué variedad le recomiendas?', opts: ['Robusta, por su sabor intenso', 'Arábiga, con 1-1,5% de cafeína y aromas delicados', 'Torrefacto, por su bajo contenido en cafeína', 'Mezcla 50/50 de arábiga y robusta'], correct: 1, exp: 'El arábiga tiene 1-1,5% de cafeína y aromas finos. La robusta tiene ~3% y sabor más fuerte y amargo.' },
            { q: 'Un cliente pregunta por qué el café torrefacto es más barato. Le explicas que...', opts: ['Es de mayor calidad al añadir azúcar antes del tueste', 'Añade azúcar antes del tueste, reduce la calidad y está prohibido en la mayoría de la UE', 'Es un proceso artesanal exclusivo de España', 'Concentra más cafeína y por eso es más económico'], correct: 1, exp: 'El torrefacto añade azúcar antes del tueste. Prohibido en la mayoría de la UE, permitido en España por tradición. Peor calidad.' },
            { q: 'Estás regulando la cafetera. ¿A qué temperatura debe estar el agua para un espresso perfecto?', opts: ['75°C', '80°C', '90°C', '100°C'], correct: 2, exp: 'A ~90°C, con 7-8g de café, 8-10 bares de presión y 25-30 segundos de extracción.' },
            { q: 'El espresso ha salido en 15 segundos y sabe raro. ¿Qué sabor predomina en un espresso subextraído?', opts: ['Amargo', 'Ácido', 'Dulce', 'Metálico'], correct: 1, exp: 'Menos de 20 segundos = subextraído = ácido. Más de 30 segundos = sobreextraído = amargo.' },
            { q: 'Vas a preparar un cappuccino. Para crear la microespuma, ¿dónde colocas el vaporizador?', opts: ['Sumergido hasta el fondo de la jarra', 'Justo debajo de la superficie de la leche', 'Por encima sin tocar la leche', 'En el centro a media altura'], correct: 1, exp: 'Justo debajo de la superficie: incorpora aire y crea microespuma. Para calentar sin espuma se sumerge al fondo.' },
            { q: 'Un cliente dice que el cappuccino "tenía demasiada espuma". ¿Cuál es la proporción correcta?', opts: ['1/2 café y 1/2 leche sin espuma', '1/3 café, 1/3 leche, 1/3 espuma', '1/4 café y 3/4 leche con espuma', 'A gusto del barista'], correct: 1, exp: 'El cappuccino clásico tiene tres partes iguales: 1/3 espresso, 1/3 leche caliente, 1/3 espuma.' },
            { q: 'Para reducir la acrilamida al freír las patatas, ¿a qué temperatura máxima fríes?', opts: ['150°C', '175°C', '200°C', '220°C'], correct: 1, exp: 'Máximo 175°C. Color dorado claro, nunca marrón oscuro. "Dorado pero no pasado".' },
            { q: 'Llega el pedido de patatas. ¿Dónde las guardas para que generen menos acrilamida al freírlas?', opts: ['En la cámara frigorífica a 4°C', 'En el congelador para conservarlas más', 'En lugar fresco y oscuro, nunca en nevera', 'En agua fría para mantenerlas tersas'], correct: 2, exp: 'Nunca en nevera: el frío aumenta los azúcares que generan más acrilamida al freír.' },
            { q: 'Llega mercancía nueva. Siguiendo el sistema FIFO, ¿qué haces con los productos que ya estaban?', opts: ['Los mueves al fondo para usar primero los nuevos', 'Los colocas delante para usarlos primero, entraron antes', 'Los metes al congelador como precaución', 'Los mezclas con los nuevos, da igual el orden'], correct: 1, exp: 'FIFO = First In, First Out. Lo que entró primero, sale primero. Evita que los productos caduquen.' },
            { q: 'Vas a servir el vino a los comensales. ¿Por qué lado te sitúas?', opts: ['Por la izquierda, como todo en el servicio', 'Por la derecha', 'Por donde haya más espacio en la mesa', 'Por la derecha el vino, por la izquierda el agua'], correct: 1, exp: 'Todas las bebidas siempre por la derecha. El pan es lo único que se sirve por la izquierda.' },
            { q: 'En la mesa hay dos niños, dos señoras y el padre como anfitrión. ¿A quién tomas nota primero?', opts: ['Al padre, como cabeza de familia', 'A la señora de más edad', 'A los niños', 'A quien levante la mano primero'], correct: 2, exp: 'Primero los niños, luego señoras de mayor a menor edad, luego señores, y el anfitrión siempre el último.' },
            { q: 'Una mesa ha pedido chuletón de buey. ¿Con qué cubiertos marcas el plato?', opts: ['Pala de pescado (dcha) y tenedor de pescado (izqda)', 'Cuchillo y tenedor trinchero', 'Cuchillo de steak (dcha) y tenedor de steak (izqda)', 'Cuchara sopera y cuchillo de mesa'], correct: 2, exp: 'Carnes rojas → steak. Carnes blancas → trinchero. Pescado → pala y tenedor de pescado.' },
            { q: 'Un cliente pide un café bombón. ¿Cómo lo sirves?', opts: ['En taza grande con un chorrito de leche condensada', 'En vaso de cristal con leche condensada abajo y espresso encima, sin mezclar', 'En copa de balón con nata montada encima', 'En taza de moca con leche condensada mezclada'], correct: 1, exp: 'La leche condensada queda abajo por densidad. Espresso encima sin mezclar. Siempre en vaso de cristal.' },
            { q: 'El maître te dice "marca la mesa 5 para el pescado". ¿Qué haces?', opts: ['Apuntas la mesa 5 en la comanda', 'Colocas la pala y el tenedor de pescado delante de cada cliente', 'Señalas la mesa 5 en el plano de sala', 'Llevas el pan y el agua a esa mesa'], correct: 1, exp: 'Marcar = colocar los cubiertos correctos antes de servir el siguiente plato. Siempre antes, nunca después.' },
            { q: 'Presentas una fuente y el cliente se sirve él mismo. ¿Qué tipo de servicio estás haciendo?', opts: ['Servicio emplatado', 'Servicio a la inglesa', 'Servicio a la francesa', 'Servicio en gueridón'], correct: 2, exp: 'En el servicio a la francesa el cliente se sirve él mismo. Es el más lento y está casi en desuso.' },
            { q: 'Un cliente pregunta qué tiene de especial el jamón con etiqueta negra de la carta. Le explicas que...', opts: ['Es jamón serrano de gran reserva con +15 meses', 'Es jamón ibérico de bellota 100%', 'Es jamón de cebo de campo con denominación de origen', 'Es ibérico de bellota pero con cruces de raza'], correct: 1, exp: 'Negro = 100% ibérico de bellota. Rojo = bellota con % ibérico. Verde = cebo de campo. Blanco = cebo ibérico.' },
            { q: 'Una receta lleva ginebra, limón y ginger beer. ¿Qué haces con el ginger beer?', opts: ['Lo meto en la coctelera con el resto', 'Lo añado al final directamente en el vaso, nunca en la coctelera', 'Lo caliento antes de añadirlo', 'Lo mezclo primero solo con el limón'], correct: 1, exp: 'Las bebidas carbonatadas NUNCA van en la coctelera. La presión al agitar es peligrosa.' },
            { q: 'La receta dice "2 Oz de ron". ¿Cuántos centilitros mides con el jigger?', opts: ['2 cl', '4 cl', '6 cl', '10 cl'], correct: 2, exp: '1 Oz = 3 cl, por tanto 2 Oz = 6 cl. Es la medida estándar del jigger en coctelería.' },
            { q: 'Te piden un Bloody Mary. ¿Dónde lo preparas?', opts: ['En la coctelera, como cualquier cóctel', 'En el vaso mezclador', 'Directamente en el vaso con hielo', 'En la batidora para integrarlo bien'], correct: 1, exp: 'El Bloody Mary es la gran excepción: se hace en vaso mezclador, no en coctelera.' },
            { q: 'La carta anuncia "café de especialidad". ¿Qué puntuación mínima debe haber obtenido en la cata SCA?', opts: ['Más de 70 puntos', 'Más de 75 puntos', 'Más de 80 puntos', 'Más de 90 puntos'], correct: 2, exp: 'Más de 80 puntos = café de especialidad. 90-100 = excepcional. Menos de 80 = café comercial.' },
            { q: 'El restaurante tiene filosofía slow food. ¿Qué le explicas al cliente si pregunta qué significa?', opts: ['Que el servicio es más lento de lo habitual', 'Que apuesta por ingredientes locales, naturales y comer despacio con consciencia', 'Que es un restaurante de cocina lenta tipo brasa', 'Que no tienen carta fija porque dependen del mercado'], correct: 1, exp: 'Slow food nació como respuesta al fast food. Ingredientes locales, naturales, comer despacio y con consciencia.' },
            { q: 'Estás colocando vinos en la bodega. ¿Qué condiciones debes mantener?', opts: ['Entre 5 y 8°C como cualquier cámara frigorífica', 'Entre 10 y 15°C con ~80% de humedad, oscura y sin vibraciones', 'Entre 18 y 22°C con buena ventilación', 'A temperatura ambiente, los vinos no necesitan control'], correct: 1, exp: '10-15°C constante, ~80% de humedad, oscura y sin vibraciones. Son las condiciones ideales para conservar el vino.' },
            { q: 'Un cliente pregunta la diferencia entre el jamón serrano "reserva" y el "gran reserva". ¿Qué le dices?', opts: ['El gran reserva tiene entre 10 y 12 meses', 'El gran reserva tiene entre 12 y 15 meses', 'No hay diferencia legal entre ambos', 'El gran reserva tiene más de 15 meses de curación'], correct: 3, exp: 'Bodega: 10-12 meses. Reserva: 12-15 meses. Gran Reserva: más de 15 meses de curación.' },
            { q: 'La cafetería tiene varias islas donde los clientes eligen libremente y pagan antes de sentarse. ¿Cómo se llama este sistema?', opts: ['Self service tradicional en línea', 'Bufé libre', 'Free flow', 'Restauración colectiva'], correct: 2, exp: 'El free flow elimina las colas del self service en línea con islas de libre elección. El cliente paga antes de sentarse.' }
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
let currentTema           = null;
let currentMode           = null;
let currentIndex          = 0;
let correctCount          = 0;
let results               = [];
let flashcardsCorrect     = [];
let flashcardsWrong       = [];
let currentAsignaturaGroup = null; // 'calidad' | 'cafeteria'

// NAVEGACIÓN
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function selectAsignatura(asignatura) {
    currentAsignaturaGroup = asignatura;
    if (asignatura === 'calidad') {
        showScreen('homeScreen');
    } else if (asignatura === 'cafeteria' || asignatura === 'preelaboracion' || asignatura === 'elaboracion') {
        currentTema = asignatura;
        document.getElementById('temaTitle').textContent = temas[asignatura].nombre;
        showScreen('modoScreen');
    }
}

function selectTema(tema) {
    currentTema = tema;
    currentAsignaturaGroup = 'calidad';
    if (tema === 'examen') {
        startTest();
    } else {
        showScreen('modoScreen');
        document.getElementById('temaTitle').textContent = temas[tema].nombre;
    }
}

function goMainHome() {
    currentTema            = null;
    currentMode            = null;
    currentIndex           = 0;
    correctCount           = 0;
    results                = [];
    currentAsignaturaGroup = null;
    showScreen('mainHomeScreen');
}

function goHome() {
    goMainHome();
}

function goSubHome() {
    currentTema  = null;
    currentMode  = null;
    currentIndex = 0;
    correctCount = 0;
    results      = [];
    if (currentAsignaturaGroup === 'calidad') {
        showScreen('homeScreen');
    } else {
        currentAsignaturaGroup = null;
        showScreen('mainHomeScreen');
    }
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
    saveResult(currentTema, correct, total, mode);
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

// PROGRESO
const subjectsMeta = {
    cafeteria:      { nombre: 'Cafetería y Sala', icon: '☕', color: 'linear-gradient(135deg,#f6d365,#fda085)' },
    elaboracion:    { nombre: 'Elaboración',       icon: '🍳', color: 'linear-gradient(135deg,#e96c1f,#f7c948)' },
    preelaboracion: { nombre: 'Preelaboración',    icon: '🥄', color: 'linear-gradient(135deg,#11998e,#38ef7d)' },
    appcc:          { nombre: 'APPCC',             icon: '🔍', color: 'linear-gradient(135deg,#f093fb,#f5576c)' },
    edo:            { nombre: 'EDO',               icon: '⚠️', color: 'linear-gradient(135deg,#4facfe,#00f2fe)' },
    alergenos:      { nombre: 'Alérgenos',         icon: '🚫', color: 'linear-gradient(135deg,#43e97b,#38f9d7)' },
    alteraciones:   { nombre: 'Alteraciones',      icon: '🔬', color: 'linear-gradient(135deg,#fa709a,#fee140)' },
    examen:         { nombre: 'Examen Final',      icon: '🎓', color: 'linear-gradient(135deg,#667eea,#764ba2)' }
};

function saveResult(tema, score, total, mode) {
    if (!tema) return;
    const data = JSON.parse(localStorage.getItem('fp_progress') || '{}');
    if (!data[tema]) data[tema] = [];
    data[tema].push({
        date:  new Date().toLocaleDateString('es-ES'),
        score, total, mode,
        pct:   Math.round(score / total * 100)
    });
    if (data[tema].length > 5) data[tema] = data[tema].slice(-5);
    localStorage.setItem('fp_progress', JSON.stringify(data));
}

function getStars(pct) {
    if (pct >= 85) return '⭐⭐⭐';
    if (pct >= 70) return '⭐⭐☆';
    if (pct >= 50) return '⭐☆☆';
    return '☆☆☆';
}

function getBarColor(pct) {
    if (pct >= 85) return 'linear-gradient(90deg,#43e97b,#38f9d7)';
    if (pct >= 70) return 'linear-gradient(90deg,#4facfe,#00f2fe)';
    if (pct >= 50) return 'linear-gradient(90deg,#f6d365,#fda085)';
    return 'linear-gradient(90deg,#f093fb,#f5576c)';
}

function getMensaje(pct) {
    if (pct >= 85) return '¡Sobresaliente! Esto lo tienes en el bolsillo 🏆';
    if (pct >= 70) return '¡Notable! El examen está al alcance 🚀';
    if (pct >= 50) return 'Más de la mitad bien, ¡un poco más y lo clavas! 🔥';
    return 'Aún hay camino. Repasa y vuelve a intentarlo 💪';
}

function showProgreso() {
    renderProgresoContent();
    showScreen('progresoScreen');
}

function renderProgresoContent() {
    const data          = JSON.parse(localStorage.getItem('fp_progress') || '{}');
    const totalAttempts = Object.values(data).reduce((s, a) => s + a.length, 0);

    const headerMsg =
        totalAttempts === 0  ? '¡Haz tu primer test y empieza a ver tu progreso! 🎯' :
        totalAttempts < 5    ? '¡Buen comienzo! Sigue practicando 🌱' :
        totalAttempts < 10   ? '¡Buen ritmo! Ya le estás cogiendo el truco 📚' :
        totalAttempts < 20   ? '¡Constancia de verdad! Los exámenes te conocen ya 🔥' :
                               '¡Eres una máquina de estudiar! 👑';

    let html = `
        <div class="progreso-header">
            <span class="progreso-header-total">${totalAttempts}</span>
            <span class="progreso-header-label">${totalAttempts === 1 ? 'test realizado' : 'tests realizados'}</span>
            <p class="progreso-header-msg">${headerMsg}</p>
        </div>
        <div class="progreso-grid">`;

    for (const [key, meta] of Object.entries(subjectsMeta)) {
        const attempts = data[key] || [];
        html += `<div class="progreso-card">
            <div class="progreso-card-header" style="background:${meta.color}">
                <span class="progreso-card-icon">${meta.icon}</span>
                <span class="progreso-card-nombre">${meta.nombre}</span>
            </div>
            <div class="progreso-card-body">`;

        if (attempts.length === 0) {
            html += `<div class="no-intentos">Sin intentos todavía · ¡Anímate! 🎯</div>`;
        } else {
            const last = attempts[attempts.length - 1];
            const best = Math.max(...attempts.map(a => a.pct));
            const prev = attempts.length > 1 ? attempts[attempts.length - 2] : null;
            const diff = prev ? last.pct - prev.pct : null;
            const trend =
                diff === null ? '🆕 Primer intento' :
                diff > 0      ? `📈 +${diff}% vs anterior` :
                diff === 0    ? '➡️ Igual que antes' :
                                `📉 ${diff}% vs anterior`;
            const modeLabel = last.mode === 'flashcards' ? 'Flashcards' : 'Test';

            html += `
                <div class="progreso-stars">${getStars(last.pct)}</div>
                <div class="progreso-bar-wrap">
                    <div class="progreso-bar-fill" style="width:${last.pct}%;background:${getBarColor(last.pct)}"></div>
                </div>
                <div class="progreso-score-text">Último ${modeLabel}: <strong>${last.score}/${last.total} · ${last.pct}%</strong> · ${last.date}</div>
                <div class="progreso-meta">
                    <span>${trend}</span>
                    <span>🏆 Mejor: ${best}%</span>
                    <span>📝 ${attempts.length}/5 intento${attempts.length !== 1 ? 's' : ''}</span>
                </div>
                <div class="progreso-mensaje">${getMensaje(last.pct)}</div>`;
        }

        html += `</div></div>`;
    }

    html += `</div>
        <button class="btn btn-secondary" style="width:100%;margin-top:20px;font-size:13px;color:#999;" onclick="resetProgress()">
            🗑️ Borrar historial
        </button>`;

    document.getElementById('progresoContent').innerHTML = html;
}

function resetProgress() {
    if (confirm('¿Segura que quieres borrar todo el historial de progreso?')) {
        localStorage.removeItem('fp_progress');
        renderProgresoContent();
    }
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
