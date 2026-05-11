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
            { q: 'El café arábiga es la variedad más valorada, con cafeína entre el 1 y el 1,5% y aromas delicados.', a: '✅ VERDADERO. La robusta tiene ~3% de cafeína y sabor más fuerte y amargo.' },
            { q: 'La torrefacción consiste en añadir azúcar al café antes del tueste y está permitida en toda la UE.', a: '❌ FALSO. Está prohibida en la mayoría de la UE. En España está permitida por tradición. Produce cafés de menor calidad.' },
            { q: 'El tratamiento por vía húmeda produce cafés de mayor calidad y aromas menos amargos que la vía seca.', a: '✅ VERDADERO. La vía húmeda fermenta y lava el grano.' },
            { q: 'Los "Suaves colombianos" son cafés arábiga tratados por vía húmeda, producidos en Colombia, Kenia y Tanzania.', a: '✅ VERDADERO. Son la categoría más alta de la clasificación internacional.' },
            { q: 'Para un espresso perfecto: 7-8g de café, agua a ~90°C, 8-10 bares, 25-30 segundos, 20-35ml de infusión.', a: '✅ VERDADERO. Esos son los parámetros exactos de un espresso correcto.' },
            { q: 'Un espresso sobreextraído (más de 30 segundos) tiene sabor ácido.', a: '❌ FALSO. El sobreextraído es amargo. El subextraído (menos de 20s) es ácido.' },
            { q: 'La crema de un espresso bien elaborado tiene color avellana y aromas tostados.', a: '✅ VERDADERO. Si la crema es muy oscura o no hay crema, el café está mal elaborado.' },
            { q: 'Para calentar leche sin espuma, el vaporizador se sumerge completamente hasta el fondo de la jarra.', a: '✅ VERDADERO. El objetivo es calentar sin introducir aire. Temperatura: 60-65°C.' },
            { q: 'Para cremar leche, la punta del vaporizador se coloca justo debajo de la superficie de la leche.', a: '✅ VERDADERO. Se incorpora aire para crear microespuma. Se escucha un "chhh" suave.' },
            { q: 'El cappuccino lleva partes iguales de café, leche y espuma (1/3 cada uno).', a: '✅ VERDADERO. Es la proporción clásica del cappuccino.' },
            { q: 'El café bombón lleva leche condensada en el fondo y espresso encima, sin mezclar, en vaso de cristal.', a: '✅ VERDADERO. La leche condensada queda abajo por ser más densa.' },
            { q: 'El café irlandés lleva espresso doble, whisky irlandés con azúcar disuelto y nata semimontada por encima que no se mezcla.', a: '✅ VERDADERO. Se bebe atravesando la nata. Se sirve en copa irlandesa.' },
            { q: 'Un café de especialidad SCA debe superar los 80 puntos en la escala de cata (cupping).', a: '✅ VERDADERO. Menos de 80 = café comercial. 90-100 = excepcional y muy raro.' },
            { q: 'La leche entera tiene mínimo 3% de grasa. Semidesnatada: 0,5-1,5%. Desnatada: menos de 0,5%.', a: '✅ VERDADERO. Esos son los porcentajes exactos de la normativa.' },
            { q: 'La acrilamida se forma en alimentos con almidón (patatas, pan, galletas) cuando se hornean, fríen, cuecen o tuestan.', a: '✅ VERDADERO. Se genera por la reacción de Maillard a altas temperaturas.' },
            { q: 'Para reducir la acrilamida hay que freír a más de 200°C para acortar el tiempo de cocción.', a: '❌ FALSO. Hay que freír a máximo 175°C. La regla es "dorado pero no pasado".' },
            { q: 'Las patatas deben conservarse en nevera para reducir la formación de acrilamida.', a: '❌ FALSO. Nunca en nevera. El frío aumenta los azúcares que generan acrilamida. Lugar fresco y oscuro.' },
            { q: 'En la apertura de cafetería, el lavavajillas y la cafetera se encienden. En el cierre, se apagan y limpian.', a: '✅ VERDADERO. El orden de apertura y cierre sigue siempre el mismo protocolo.' },
            { q: 'Al cierre, la caja y el datáfono se suben a secretaría.', a: '✅ VERDADERO. Es el último paso antes de apagar luces y poner candados.' },
            { q: 'La restauración comercial tiene fin económico, amplio horario, precios elevados y oferta esmerada.', a: '✅ VERDADERO. Se divide en restauración tradicional y neorrestauración.' },
            { q: 'La restauración colectiva va dirigida a "clientes cautivos" (comedores de empresa, colegios) con precios reducidos.', a: '✅ VERDADERO. Su beneficio viene del volumen y la reducción de costes.' },
            { q: 'La deontología en hostelería regula las relaciones internas, con el cliente y con la sociedad.', a: '✅ VERDADERO. Son los tres grandes grupos de la deontología profesional.' },
            { q: 'Un manipulador de alimentos puede fumar justo antes del servicio si no lo hace delante del cliente.', a: '❌ FALSO. Está prohibido fumar durante el servicio ni justo antes, para evitar aliento desagradable.' },
            { q: 'La mise en place es el conjunto de operaciones para poner a punto el comedor antes del servicio.', a: '✅ VERDADERO. Expresión francesa. La supervisa el maître.' },
            { q: 'En la toma de comanda, el anfitrión es el primero al que se toma nota por respeto.', a: '❌ FALSO. El anfitrión es el ÚLTIMO. Primero niños, luego señoras de mayor a menor edad, luego señores.' },
            { q: 'El orden de comandas es: bebidas aperitivo → comidas → bebidas principales → postres → cafés y licores.', a: '✅ VERDADERO. Ese es el orden estándar en un servicio completo.' },
            { q: 'La voz "Marcha" en cocina indica que se empieza a preparar. "Pasa" indica que el plato está listo.', a: '✅ VERDADERO. Son voces estandarizadas entre sala y cocina.' },
            { q: 'En el servicio emplatado el plato llega terminado desde cocina. Es el más rápido y sencillo.', a: '✅ VERDADERO. Es el servicio más habitual en restaurantes modernos.' },
            { q: 'En el servicio a la francesa el cliente se sirve él mismo desde la fuente que presenta el camarero.', a: '✅ VERDADERO. Es el más lento y está casi en desuso.' },
            { q: 'Todas las bebidas se sirven y desbarasan por la derecha del cliente. El pan, por la izquierda.', a: '✅ VERDADERO. Es una de las máximas fundamentales del servicio.' },
            { q: 'El protocolo de servicio establece que el anfitrión es el último en ser servido.', a: '✅ VERDADERO. El orden es: niñas, niños, señoras mayores, señoras jóvenes, hombres mayores, hombres jóvenes, anfitrión.' },
            { q: 'Nunca se empieza a servir comida hasta que la mesa esté marcada, con bebidas y con pan.', a: '✅ VERDADERO. Es una máxima básica del servicio en sala.' },
            { q: '"Marcar" en sala significa colocar los cubiertos adecuados delante del cliente antes de servir cada plato.', a: '✅ VERDADERO. Se marca antes de servir, no después.' },
            { q: 'Las carnes rojas se marcan con cuchillo de steak (derecha) y tenedor de steak (izquierda).', a: '✅ VERDADERO. Las carnes blancas se marcan con cuchillo y tenedor trinchero.' },
            { q: 'El pescado se marca siempre con pala de pescado (derecha) y tenedor de pescado (izquierda).', a: '✅ VERDADERO. Independientemente de cómo esté cocinado.' },
            { q: 'Las bebidas carbonatadas nunca se introducen en la coctelera.', a: '✅ VERDADERO. La presión al agitar puede ser peligrosa. Las bebidas con gas se añaden siempre al final, directamente en el vaso.' },
            { q: '1 onza (Oz) en coctelería equivale a 3 cl.', a: '✅ VERDADERO. Es la medida estándar del jigger.' },
            { q: 'El Bloody Mary se elabora en vaso mezclador, no en coctelera.', a: '✅ VERDADERO. Es la excepción más conocida en coctelería.' },
            { q: 'Los cócteles aperitivo se sirven en tragos cortos o medios y estimulan el apetito.', a: '✅ VERDADERO. Los digestivos llevan principalmente alcoholes y licores dulces.' },
            { q: 'El jamón ibérico de bellota 100% tiene etiqueta negra. El de bellota con % ibérico, etiqueta roja.', a: '✅ VERDADERO. Verde = cebo de campo. Blanco = cebo de raza ibérica.' },
            { q: 'El jamón serrano gran reserva tiene más de 15 meses de curación.', a: '✅ VERDADERO. Bodega: 10-12 meses. Reserva: 12-15 meses. Gran Reserva: +15 meses.' },
            { q: 'El slow food apuesta por ingredientes locales y naturales y comer lenta y conscientemente.', a: '✅ VERDADERO. Nació como respuesta al fast food y la fast life.' },
            { q: 'El free flow elimina las colas del self service ofreciendo islas donde el cliente elige y paga antes de pasar a la sala.', a: '✅ VERDADERO. Es más fluido que el self service en línea.' }
        ],
        test: [
            { q: '¿Cuál es el contenido de cafeína del café arábiga?', opts: ['Entre el 1 y el 1,5%', 'Alrededor del 3%', 'Entre el 2 y el 2,5%', 'Menos del 0,5%'], correct: 0, exp: 'Arábiga: 1-1,5%, delicado y aromático. Robusta: ~3%, más fuerte y amargo.' },
            { q: 'La torrefacción del café:', opts: ['Está permitida en toda la UE', 'Consiste en añadir azúcar antes del tueste y está prohibida en la mayoría de la UE', 'Mejora la calidad del café significativamente', 'Es obligatoria en los cafés de especialidad'], correct: 1, exp: 'Prohibida en la mayoría de la UE, permitida en España por tradición. Produce cafés de peor calidad.' },
            { q: '¿Cuál es la temperatura correcta del agua para un espresso perfecto?', opts: ['75°C', '80°C', '90°C', '100°C'], correct: 2, exp: 'Espresso perfecto: agua a ~90°C, 7-8g café, 8-10 bares, 25-30 segundos.' },
            { q: 'Un espresso subextraído (menos de 20 segundos) tiene sabor:', opts: ['Amargo', 'Ácido', 'Dulce', 'Sin sabor'], correct: 1, exp: 'Subextraído = ácido. Sobreextraído (más de 30s) = amargo. Perfecto (25-30s) = equilibrado.' },
            { q: 'Para cremar leche, el vaporizador se coloca:', opts: ['Completamente sumergido hasta el fondo', 'Justo debajo de la superficie de la leche', 'Por encima de la leche sin tocarla', 'En el centro a media altura'], correct: 1, exp: 'Para cremar: justo debajo de la superficie, incorpora aire. Para calentar sin espuma: sumergido al fondo.' },
            { q: '¿Qué proporción tiene el cappuccino?', opts: ['1/2 café y 1/2 leche', '1/3 café, 1/3 leche, 1/3 espuma', '1/4 café y 3/4 leche con espuma', '2/3 café y 1/3 espuma sin leche'], correct: 1, exp: 'El cappuccino clásico tiene tres partes iguales: café, leche y espuma.' },
            { q: '¿A qué temperatura máxima se recomienda freír para reducir la acrilamida?', opts: ['150°C', '175°C', '200°C', '220°C'], correct: 1, exp: 'Máximo 175°C. Buscar color dorado, nunca marrón oscuro. "Dorado pero no pasado".' },
            { q: '¿Dónde deben conservarse las patatas?', opts: ['En la nevera a 4°C', 'En el congelador', 'En lugar fresco y oscuro, nunca en nevera', 'En agua fría'], correct: 2, exp: 'La nevera aumenta los azúcares reductores que generan más acrilamida al freír.' },
            { q: 'El sistema FIFO significa:', opts: ['Los productos más caros salen primero', 'Los primeros en entrar son los primeros en salir', 'Los últimos en entrar son los primeros en salir', 'Los productos frescos siempre tienen prioridad'], correct: 1, exp: 'First In, First Out. Evita que los productos caduquen.' },
            { q: '¿Por qué lado se sirven las bebidas?', opts: ['Por la izquierda', 'Por la derecha', 'Por donde haya más espacio', 'Depende del tipo de bebida'], correct: 1, exp: 'Todas las bebidas se sirven y desbarasan por la derecha. El pan se sirve por la izquierda.' },
            { q: '¿Quién es el último en recibir la comanda?', opts: ['El cliente mayor', 'El niño más pequeño', 'El anfitrión', 'La señora de más edad'], correct: 2, exp: 'Orden: niños → señoras mayor a menor edad → señores mayor a menor edad → anfitrión el último.' },
            { q: 'Las carnes rojas se marcan con:', opts: ['Pala de pescado y tenedor de pescado', 'Cuchillo y tenedor trinchero', 'Cuchillo de steak (derecha) y tenedor de steak (izquierda)', 'Cuchara sopera y cuchillo trinchero'], correct: 2, exp: 'Carnes rojas → steak. Carnes blancas → trinchero.' },
            { q: 'El café bombón se sirve en:', opts: ['Taza grande con platillo', 'Vaso pequeño de cristal con leche condensada en el fondo', 'Copa de balón', 'Taza de moca con nata'], correct: 1, exp: 'La leche condensada queda abajo por densidad. Espresso encima, sin mezclar.' },
            { q: '¿Qué significa "marcar" en sala?', opts: ['Anotar el plato en la comanda', 'Colocar los cubiertos adecuados delante del cliente antes de servir', 'Señalar la mesa en el plano', 'Presentar la carta al cliente'], correct: 1, exp: 'Marcar = colocar los cubiertos correctos antes de servir cada plato.' },
            { q: 'En el servicio a la francesa:', opts: ['El camarero emplata desde la fuente con la pinza', 'El plato llega terminado desde cocina', 'El cliente se sirve él mismo desde la fuente que presenta el camarero', 'Se termina el plato en el gueridón'], correct: 2, exp: 'Es el más lento, puede haber reparto desigual y está casi en desuso.' },
            { q: 'La etiqueta negra en el jamón ibérico indica:', opts: ['Jamón serrano gran reserva', 'Jamón de bellota 100% ibérico', 'Jamón de cebo de campo', 'Jamón de bellota con porcentaje ibérico'], correct: 1, exp: 'Negro = 100% ibérico bellota. Rojo = bellota con % ibérico. Verde = cebo campo. Blanco = cebo ibérico.' },
            { q: '¿Qué bebida nunca va en la coctelera?', opts: ['Zumo de limón', 'Vodka', 'Bebidas carbonatadas', 'Licores'], correct: 2, exp: 'Las bebidas con gas nunca van en coctelera. Se añaden siempre al final directamente en el vaso.' },
            { q: '1 onza (Oz) en coctelería equivale a:', opts: ['1 cl', '2 cl', '3 cl', '5 cl'], correct: 2, exp: '1 Oz = 3 cl. Es la medida estándar del jigger en coctelería.' },
            { q: 'El Bloody Mary se elabora en:', opts: ['Coctelera', 'Vaso mezclador', 'Directamente en el vaso', 'Batidora'], correct: 1, exp: 'Es la excepción más conocida: se hace en vaso mezclador, no en coctelera.' },
            { q: 'Un café de especialidad SCA debe superar:', opts: ['70 puntos', '75 puntos', '80 puntos', '90 puntos'], correct: 2, exp: 'Más de 80 = especialidad. 90-100 = excepcional. Menos de 80 = café comercial.' },
            { q: 'El slow food se define como:', opts: ['Comida rápida saludable', 'Filosofía de alimentación con ingredientes locales, naturales, comiendo lenta y conscientemente', 'Servicio de restaurante de alta velocidad', 'Sistema de producción industrial de alimentos'], correct: 1, exp: 'Nació como respuesta al fast food y la fast life. Apuesta por lo local y lo natural.' },
            { q: 'La bodega de vinos debe mantenerse a:', opts: ['Entre 5 y 8°C', 'Entre 10 y 15°C con ~80% de humedad', 'Entre 18 y 22°C con 60% de humedad', 'Temperatura ambiente'], correct: 1, exp: '10-15°C constante, ~80% de humedad. Oscura, ventilada y sin vibraciones.' },
            { q: 'El jamón serrano gran reserva tiene una curación de:', opts: ['Entre 6 y 10 meses', 'Entre 10 y 12 meses', 'Entre 12 y 15 meses', 'Más de 15 meses'], correct: 3, exp: 'Bodega: 10-12 meses. Reserva: 12-15 meses. Gran Reserva: más de 15 meses.' },
            { q: 'El free flow en restauración:', opts: ['Es un tipo de servicio a domicilio', 'Elimina las colas del self service con islas donde el cliente elige y paga antes de sentarse', 'Es sinónimo de bufé libre', 'Es un servicio exclusivo de banquetes'], correct: 1, exp: 'El free flow resuelve las colas del self service en línea con islas de libre elección.' }
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
    } else if (asignatura === 'cafeteria' || asignatura === 'preelaboracion') {
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
