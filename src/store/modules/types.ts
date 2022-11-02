export interface Income {
    uid: string;
    description: string;
    value: number;
    type: 'Entrada' | 'Saída';
}