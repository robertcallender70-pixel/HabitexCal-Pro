export enum ActivityType {
    CIMENTACION_AISLADA = 'Cimentación Aislada',
    ZAPATA_CORRIDA = 'Cimentación Corrida (Zapata)',
    COLUMNA = 'Columna',
    VIGA = 'Viga',
    LEVANTE_MURO = 'Levante de Muro',
    REVESTIMIENTO = 'Revestimiento',
    PISO = 'Piso',
    LOSA = 'Losa o Placa',
    PINTURA = 'Pintura',
    ENCHAPE_PARED = 'Enchape de Pared',
    ESTRUCTURA_PLADUR = 'Estructura de Pladur',
    CUSTOM = 'Actividad Personalizada',
}

export interface Project {
    id?: number;
    name: string;
    createdAt: Date;
}

export interface Activity {
    id?: number;
    projectId: number;
    type: ActivityType;
    name: string;
    inputs: Record<string, any>;
    results: Material[];
}

export interface Material {
    name: string;
    quantity: number;
    unit: string;
    unitPrice?: number;
    layer?: string; // For multi-part activities like Revestimiento
}

export interface LaborItem {
    id?: number;
    projectId: number;
    name: string;
    unit: string;
    unitPrice: number;
    quantity: number;
}

export interface BudgetItem {
    id?: number;
    projectId: number;
    category: string;
    name: string; // Description of the expense
    cost: number;
}

export enum TransactionType {
    INCOME = 'Ingreso',
    EXPENSE = 'Gasto',
}

export interface Transaction {
    id?: number;
    projectId: number;
    type: TransactionType;
    description: string;
    amount: number;
    date: string; // YYYY-MM-DD
    category?: string;
}


export interface PredefinedLaborActivity {
    id: number;
    name: string;
    unit: string;
    priceMN: number;
    category: string;
    materialActivityType?: ActivityType;
}


export interface HormigonData {
    resistencia: number;
    cemento: number;
    arena: number;
    piedra: number;
    agua: number;
}

export interface AceroData {
    barra: number;
    pulgadas: string;
    mm: number;
    pesoUnit: number;
    area: number;
}