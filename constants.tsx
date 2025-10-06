import React from 'react';
import { ActivityType } from './types';
import type { HormigonData, AceroData, PredefinedLaborActivity } from './types';

export const HORMIGONES_DATA: HormigonData[] = [
    { resistencia: 100, cemento: 6.7, arena: 0.7, piedra: 0.94, agua: 266 },
    { resistencia: 150, cemento: 7.8, arena: 0.7, piedra: 0.94, agua: 267 },
    { resistencia: 175, cemento: 8.3, arena: 0.64, piedra: 0.88, agua: 264 },
    { resistencia: 200, cemento: 9.9, arena: 0.64, piedra: 0.87, agua: 273 },
    { resistencia: 250, cemento: 12.1, arena: 0.62, piedra: 0.86, agua: 274 },
];

export const ACERO_BARRAS_DATA: AceroData[] = [
    { barra: 2, pulgadas: '1/4"', mm: 6.0, pesoUnit: 0.249, area: 0.317 },
    { barra: 3, pulgadas: '3/8"', mm: 9.5, pesoUnit: 0.56, area: 0.713 },
    { barra: 4, pulgadas: '1/2"', mm: 12.7, pesoUnit: 0.994, area: 1.267 },
    { barra: 5, pulgadas: '5/8"', mm: 15.9, pesoUnit: 1.552, area: 1.979 },
    { barra: 6, pulgadas: '3/4"', mm: 19.1, pesoUnit: 2.235, area: 2.85 },
    { barra: 8, pulgadas: '1"', mm: 25.4, pesoUnit: 3.973, area: 5.06 },
    { barra: 10, pulgadas: '1 1/4"', mm: 32.3, pesoUnit: 6.404, area: 7.92 },
    { barra: 11, pulgadas: '1 3/8"', mm: 35.8, pesoUnit: 7.907, area: 11.4 },
];

export const MORTEROS_MUROS_DATA = [
    { id: 'ladrillo_0.30', nombre: 'Ladrillos de 0.30m', unidades: 105, cemento: 0.55, arena: 0.079, polvoPiedra: 0.047 },
    { id: 'ladrillo_0.15', nombre: 'Ladrillos de 0.15m', unidades: 53, cemento: 0.35, arena: 0.405, polvoPiedra: 0.021 },
    { id: 'ladrillo_0.10', nombre: 'Ladrillos de 0.10m', unidades: 32, cemento: 0.375, arena: 0.032, polvoPiedra: 0 },
    { id: 'bloque_0.20', nombre: 'Bloque de 0.20m (20x40)', unidades: 13, cemento: 0.168, arena: 0.019, polvoPiedra: 0.01 },
    { id: 'bloque_0.15', nombre: 'Bloque de 0.15m (15x40)', unidades: 13, cemento: 0.126, arena: 0.015, polvoPiedra: 0.007 },
    { id: 'bloque_0.10', nombre: 'Bloque de 0.10m (10x40)', unidades: 13, cemento: 0.15, arena: 0.013, polvoPiedra: 0 },
];

export const MORTEROS_REVESTIMIENTO_DATA = [
    { id: 'resano', nombre: 'Resano', cemento: 0.105, arena: 0.03, polvoPiedra: 0.015 },
    { id: 'betun_fino', nombre: 'Betún y Fino', cemento: 0.056, arena: 0.015, polvoPiedra: 0.008 },
    { id: 'rustico', nombre: 'Rústico', cemento: 0.372, arena: 0.032, polvoPiedra: 0 },
    { id: 'salpicado', nombre: 'Salpicado', cemento: 0.05, arena: 0.015, polvoPiedra: 0 },
];

export const MORTEROS_PISO_DATA = [
    { id: 'piso_25x25', nombre: 'Piso 0.25x0.25m', unidades: 17, cemento: 0.138, arena: 0.02, polvoPiedra: 0.011 },
    { id: 'rodapie_8x25', nombre: 'Rodapie 0.08x0.25m', unidades: 4.2, cemento: 0.211, arena: 0.018, polvoPiedra: 0 },
    { id: 'cemento_pulido', nombre: 'Piso de Cemento Pulido (3cm)', unidades: 0, cemento: 0.425, arena: 0.036, polvoPiedra: 0 },
    { id: 'canto_50x30', nombre: 'Canto 0.50x0.30m', unidades: 7, cemento: 0.126, arena: 0.015, polvoPiedra: 0.007 },
];

export const PINTURA_DATA = {
    vinyl_lisa: 0.17, // lt/m2
    vinyl_rustico: 0.6138, // lt/m2
    aceite_aparejo: 0.1, // lt/m2
    aceite_pintura: 0.085, // lt/m2
    lechada_cal: 0.8, // lt/m2
    lechada_masilla: 0.22, // lt/m2
};

export const ENCHAPE_DATA = {
    cemento_cola: 5, // kg/m2
    cemento_blanco: 0.5, // kg/m2
};

export const PLADUR_PARED_DATA = {
    placa: 2.0, // m²/m² (ambas caras)
    montante: 2.8, // m/m²
    canal: 0.9, // m/m²
    tornilloPlaca: 55, // u/m²
    tornilloFijacion: 9, // u/m²
    cintaJuntas: 2.2, // m/m²
    pastaJuntas: 0.9, // kg/m²
};

export const PLADUR_TECHO_DATA = {
    placa: 1.05, // m²/m² (con desperdicio)
    perfilSecundario: 2.5, // m/m²
    perfilPrimario: 1.0, // m/m²
    cuelgues: 1.2, // u/m²
    tornilloPlaca: 28, // u/m²
    tornilloPerfil: 4, // u/m²
    fijacionCuelgue: 1.5, // u/m²
    cintaJuntas: 1.5, // m/m²
    pastaJuntas: 0.7, // kg/m²
};

export const PREDEFINED_LABOR_ACTIVITIES: PredefinedLaborActivity[] = [
    { id: 1, name: "Excavacion en Fozo Roca Blanda o Barro", unit: "M3", priceMN: 2000.00, category: "excavation" },
    { id: 2, name: "Excavacion en Fozo Roca Dura", unit: "M3", priceMN: 3000.00, category: "excavation" },
    { id: 3, name: "Excavacion en Zanja Roca Blanda o Barro", unit: "M3", priceMN: 2000.00, category: "excavation" },
    { id: 4, name: "Excavacion en Zanja Roca Dura", unit: "M3", priceMN: 3000.00, category: "excavation" },
    { id: 5, name: "Contrucción de Cimientos Aislados (Todo)", unit: "U", priceMN: 3000.00, category: "construction", materialActivityType: ActivityType.CIMENTACION_AISLADA },
    { id: 6, name: "Contrucción de Columna (Todo)", unit: "m", priceMN: 3000.00, category: "construction", materialActivityType: ActivityType.COLUMNA },
    { id: 7, name: "Contrucción de Cerramentos y Dinteles (Todo)", unit: "m", priceMN: 3000.00, category: "construction", materialActivityType: ActivityType.VIGA },
    { id: 8, name: "Contrucción de Losa (Todo)", unit: "m2", priceMN: 4000.00, category: "construction", materialActivityType: ActivityType.LOSA },
    { id: 9, name: "Contrucción de Escaleras (Todo)", unit: "Huella", priceMN: 4000.00, category: "construction" },
    { id: 10, name: "Contrucción de Aceras (todo)", unit: "m2", priceMN: 2500.00, category: "construction" },
    { id: 11, name: "Contrucción de Pisos Morteros u Hormigón simple", unit: "m2", priceMN: 2000.00, category: "construction", materialActivityType: ActivityType.PISO },
    { id: 12, name: "Colocacación Bloque 0.10m-0.15m", unit: "U", priceMN: 90.00, category: "construction", materialActivityType: ActivityType.LEVANTE_MURO },
    { id: 13, name: "Colocacación Bloque 0.20m", unit: "U", priceMN: 100.00, category: "construction", materialActivityType: ActivityType.LEVANTE_MURO },
    { id: 14, name: "Colocacación Bloque Ladrillos", unit: "U", priceMN: 60.00, category: "construction", materialActivityType: ActivityType.LEVANTE_MURO },
    { id: 15, name: "Colocacación Celocias", unit: "U", priceMN: 60.00, category: "construction" },
    { id: 16, name: "Colocacación Balaustres", unit: "U", priceMN: 100.00, category: "construction" },
    { id: 17, name: "Repique placa", unit: "m2", priceMN: 500.00, category: "finishing" },
    { id: 18, name: "Salpicado Pared", unit: "m2", priceMN: 400.00, category: "finishing", materialActivityType: ActivityType.REVESTIMIENTO },
    { id: 19, name: "Resano Pared", unit: "m2", priceMN: 600.00, category: "finishing", materialActivityType: ActivityType.REVESTIMIENTO },
    { id: 20, name: "Fino Pared", unit: "m2", priceMN: 700.00, category: "finishing", materialActivityType: ActivityType.REVESTIMIENTO },
    { id: 21, name: "Estuco", unit: "m2", priceMN: 800.00, category: "finishing" },
    { id: 22, name: "Salpicado Techo", unit: "m2", priceMN: 500.00, category: "finishing", materialActivityType: ActivityType.REVESTIMIENTO },
    { id: 23, name: "Resano Techo", unit: "m2", priceMN: 800.00, category: "finishing", materialActivityType: ActivityType.REVESTIMIENTO },
    { id: 24, name: "Fino Techo", unit: "m2", priceMN: 900.00, category: "finishing", materialActivityType: ActivityType.REVESTIMIENTO },
    { id: 25, name: "Colocación de Ventanas", unit: "m2", priceMN: 500.00, category: "construction" },
    { id: 26, name: "Colocación de Puerta", unit: "m2", priceMN: 7000.00, category: "construction" },
    { id: 27, name: "Demolición Muros de Bloques", unit: "M2", priceMN: 1000.00, category: "demolition" },
    { id: 28, name: "Desmonte de Puerta", unit: "U", priceMN: 1000.00, category: "demolition" },
    { id: 29, name: "Desmonte de Ventana", unit: "U", priceMN: 1000.00, category: "demolition" },
    { id: 30, name: "Desmonte de Marco de Puerta", unit: "U", priceMN: 3000.00, category: "demolition" },
    { id: 31, name: "Desmonte de Marco de Ventana", unit: "U", priceMN: 2000.00, category: "demolition" },
    { id: 32, name: "Desmonte de Tejas y otros", unit: "M2", priceMN: 300.00, category: "demolition" },
    { id: 33, name: "Cerrar Hueco de Puerta", unit: "U", priceMN: 5000.00, category: "construction" },
    { id: 34, name: "Cerrar Hueco de Ventana", unit: "U", priceMN: 6000.00, category: "construction" },
    { id: 35, name: "Abrir Hueco para Puerta Estandar", unit: "U", priceMN: 5000.00, category: "construction" },
    { id: 36, name: "Abrir Hueco para Ventana", unit: "U", priceMN: 3000.00, category: "construction" },
    { id: 37, name: "Enchape com Cerámica", unit: "M2", priceMN: 3000.00, category: "finishing", materialActivityType: ActivityType.ENCHAPE_PARED },
    { id: 38, name: "Enchape com Marmol", unit: "M3", priceMN: 4000.00, category: "finishing" },
    { id: 39, name: "Enchape de Losas en Escalera", unit: "M2", priceMN: 3500.00, category: "finishing" },
    { id: 40, name: "Colocación de Rodapie", unit: "m", priceMN: 400.00, category: "finishing" },
    { id: 41, name: "Montaje de Puerta de Corredera", unit: "U", priceMN: 5000.00, category: "construction" },
    { id: 42, name: "Movimiento de Materiales a Vagón", unit: "M3", priceMN: 2500.00, category: "construction" },
    { id: 43, name: "Demolición de Enchape", unit: "M2", priceMN: 500.00, category: "demolition" },
    { id: 44, name: "Demolición de Repello Pared", unit: "M2", priceMN: 400.00, category: "demolition" },
    { id: 45, name: "Demolición de Repello Techo", unit: "M2", priceMN: 600.00, category: "demolition" },
    { id: 46, name: "Demolición de Pisos", unit: "M2", priceMN: 1000.00, category: "demolition" },
    { id: 47, name: "Demolición de Hormigón", unit: "M2", priceMN: 2000.00, category: "demolition" },
    { id: 48, name: "Limpiza y Sellado de Juntas de Rasillas", unit: "M2", priceMN: 600.00, category: "finishing" },
    { id: 49, name: "Limpiza y Sellado de Juntas de Pisos", unit: "M2", priceMN: 300.00, category: "finishing" },
    { id: 50, name: "Montaje de Estructura y Tejas com Gancho en Techos", unit: "M2", priceMN: 2000.00, category: "construction" },
    { id: 51, name: "Montaje de Estructura y Tejas com Tornillos en Techos", unit: "M2", priceMN: 2000.00, category: "construction" },
    { id: 52, name: "Colocación de Accesorios de Baños", unit: "Conjunto", priceMN: 3000.00, category: "plumbing" },
    { id: 53, name: "Colocación de Llaves de Lavamanos", unit: "U", priceMN: 1500.00, category: "plumbing" },
    { id: 54, name: "Montaje de Presurizador según Complejidad", unit: "C/U", priceMN: 6000.00, category: "plumbing" },
    { id: 55, name: "Montajes de Calentadores", unit: "C/U", priceMN: 7000.00, category: "plumbing" },
    { id: 56, name: "Montaje de Tasas de Baños", unit: "U", priceMN: 3500.00, category: "plumbing" },
    { id: 57, name: "Colocación de Lavamanos", unit: "U", priceMN: 2000.00, category: "plumbing" },
    { id: 58, name: "Construcción de Base y colocacón de Lavadero", unit: "U", priceMN: 5000.00, category: "plumbing" },
    { id: 59, name: "Colocación de Mezcladora y Duchas", unit: "C/U", priceMN: 3000.00, category: "plumbing" },
    { id: 60, name: "Colocación de Herrajes de Tasas de Baños", unit: "Juego", priceMN: 2500.00, category: "plumbing" },
    { id: 61, name: "Colocación de Sifas de Lavamanos", unit: "U", priceMN: 1500.00, category: "plumbing" },
    { id: 62, name: "Plomeria completa de Agua fria y caliente de Baño com Termofusión", unit: "U", priceMN: 50000.00, category: "plumbing" },
    { id: 63, name: "Plomeria completa de Agua fria y caliente de Baño com Rosca", unit: "U", priceMN: 45000.00, category: "plumbing" },
    { id: 64, name: "Plomeria completa de Sanitaria estandar completa Baños", unit: "U", priceMN: 60000.00, category: "plumbing" },
    { id: 65, name: "Colocación de Tanque Plastico de +750 lts com Base en Placa", unit: "U", priceMN: 10000.00, category: "plumbing" },
    { id: 66, name: "Colocación de Tanque Fibrocemento de +750 lts com Base en Placa", unit: "U", priceMN: 15000.00, category: "plumbing" },
    { id: 67, name: "Pintura en Pared (Todas las Manos)", unit: "m2", priceMN: 300.00, category: "finishing", materialActivityType: ActivityType.PINTURA },
    { id: 68, name: "Pintura en Techo (Todas las Manos)", unit: "m2", priceMN: 400.00, category: "finishing", materialActivityType: ActivityType.PINTURA },
    { id: 69, name: "Limpieza de Pared", unit: "m2", priceMN: 150.00, category: "finishing" },
    { id: 70, name: "Carga y Descaraga de Bloques", unit: "U", priceMN: 5.00, category: "construction" },
    { id: 71, name: "Movimiento de Materiales en saco", unit: "u", priceMN: 100.00, category: "construction" },
    { id: 72, name: "Ranuras en paredes, pisos o techos", unit: "m", priceMN: 200.00, category: "construction" },
    { id: 73, name: "Colocación de mangueras o tuberias", unit: "m", priceMN: 200.00, category: "plumbing" },
    { id: 74, name: "Tape de ranuras", unit: "m", priceMN: 200.00, category: "construction" },
    { id: 75, name: "Elaboración de codos", unit: "m", priceMN: 200.00, category: "construction" },
    { id: 76, name: "Cajas 4 x 2", unit: "u", priceMN: 200.00, category: "electrical" },
    { id: 77, name: "Cajas 4 x 4", unit: "u", priceMN: 200.00, category: "electrical" },
    { id: 78, name: "Alquiler de Winche", unit: "xm3", priceMN: 5000.00, category: "construction" },
    { id: 79, name: "Alquiler de Concretera", unit: "Día", priceMN: 10000.00, category: "construction" },
    { id: 80, name: "Identificación de circuitos y exploracion electrica", unit: "xU", priceMN: 2000.00, category: "electrical" },
    { id: 81, name: "Eliminación de circuitos", unit: "m", priceMN: 50.00, category: "electrical" },
    { id: 82, name: "Alambrado com cable 2.5, 4 mm", unit: "m", priceMN: 100.00, category: "electrical" },
    { id: 83, name: "Alambrado com cable 10 mm", unit: "m", priceMN: 150.00, category: "electrical" },
    { id: 84, name: "Alambrado com cable 25 mm", unit: "m", priceMN: 350.00, category: "electrical" },
    { id: 85, name: "Alambrado com cable 35 mm", unit: "m", priceMN: 400.00, category: "electrical" },
    { id: 86, name: "Desconexión de Dispositivos", unit: "u", priceMN: 50.00, category: "electrical" },
    { id: 87, name: "Desconexión de Luminarias", unit: "u", priceMN: 100.00, category: "electrical" },
    { id: 88, name: "Conexión de Interruptores Simples", unit: "u", priceMN: 200.00, category: "electrical" },
    { id: 89, name: "Conexión de Interruptores Dobles", unit: "u", priceMN: 200.00, category: "electrical" },
    { id: 90, name: "Conexión de Interruptrores Triples", unit: "u", priceMN: 300.00, category: "electrical" },
    { id: 91, name: "Conexión de Interruptores 3Way", unit: "u", priceMN: 400.00, category: "electrical" },
    { id: 92, name: "Conexión de Interruptores 4Way", unit: "u", priceMN: 450.00, category: "electrical" },
    { id: 93, name: "Conexión de Tomacorrientes Simples", unit: "u", priceMN: 200.00, category: "electrical" },
    { id: 94, name: "Conexión de Tomacorrientes Dobles", unit: "u", priceMN: 200.00, category: "electrical" },
    { id: 95, name: "Conexión de Interruptores / Tc", unit: "u", priceMN: 300.00, category: "electrical" },
    { id: 96, name: "Colocación de sokes", unit: "u", priceMN: 200.00, category: "electrical" },
    { id: 97, name: "Luminarias simples", unit: "u", priceMN: 350.00, category: "electrical" },
    { id: 98, name: "Luminarias dobles", unit: "u", priceMN: 400.00, category: "electrical" },
    { id: 99, name: "Luminarias decorativas", unit: "u", priceMN: 1000.00, category: "electrical" },
    { id: 100, name: "Luminarias com ventiladores de techo", unit: "u", priceMN: 1500.00, category: "electrical" },
    { id: 101, name: "Empotramiento del panel", unit: "u", priceMN: 1000.00, category: "electrical" },
    { id: 102, name: "Paneles elecricos adosados", unit: "u", priceMN: 600.00, category: "electrical" },
    { id: 103, name: "Conexión de breaker", unit: "u", priceMN: 300.00, category: "electrical" },
    { id: 104, name: "Colocación y Conexión de supresores", unit: "u", priceMN: 400.00, category: "electrical" },
    { id: 105, name: "Colocación y Conexión de diferenciales", unit: "u", priceMN: 700.00, category: "electrical" }
];


// Icons
export const PlusIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const TrashIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.124-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.077-2.09.921-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
);

export const PencilIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);

export const ChevronDownIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

export const ArrowLeftIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

export const PdfIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const ArrowDownTrayIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const ArrowUpTrayIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
    </svg>
);

export const LogoIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

export const BanknotesIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
);

export const ArrowTrendingUpIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 18 9-9 4.5 4.5L21.75 6" />
    </svg>
);

export const ArrowTrendingDownIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 6 9 9 4.5-4.5L21.75 18" />
    </svg>
);

export const ScaleIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52v16.5m-1.5-16.5v16.5m-3-16.5v16.5m-1.5-16.5v16.5m-3-16.5v16.5m6.75-16.5H5.25c-1.12 0-2.016.9-2.016 2.016v12.016c0 1.12.9 2.016 2.016 2.016h13.5c1.12 0 2.016-.9 2.016-2.016V6.986c0-1.12-.9-2.016-2.016-2.016Z" />
    </svg>
);

export const CogIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.007 1.11-1.226l.55-.22a2.25 2.25 0 011.983 0l.55.22c.55.219 1.02.684 1.11 1.226l.09.542a2.25 2.25 0 003.956.494l.38-.38a2.25 2.25 0 013.182 3.182l-.38.38a2.25 2.25 0 00-.494 3.956l-.09.542c-.09.542-.56 1.007-1.11 1.226l-.55.22a2.25 2.25 0 01-1.983 0l-.55-.22c-.55-.219-1.02-.684-1.11-1.226l-.09-.542a2.25 2.25 0 00-3.956-.494l-.38.38a2.25 2.25 0 01-3.182-3.182l.38-.38a2.25 2.25 0 00.494-3.956l.09-.542z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);