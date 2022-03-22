export class Quarto {
    id: string;
    tipoQuarto: QuartoEnum;
    preco: number;
    numero: number;
}

export enum QuartoEnum {
    Luxo = 0,
    Convencional = 1
}