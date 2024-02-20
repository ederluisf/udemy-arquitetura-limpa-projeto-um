import Carro from "./Carro";

export default class Gol implements Carro {

  constructor(
    readonly velocidadeMaxima: number = 220,
    private _velocidadeAtual: number = 0
  ) {}

  acelerar(): void {
    this._velocidadeAtual = Math.min(
      this._velocidadeAtual + 10,
      this.velocidadeMaxima
    );
  }
  
  frear(): void {
    this._velocidadeAtual = Math.max(
      this._velocidadeAtual - 10,
      0
    );
  }

  get velocidadeAtual(): number {
    return this._velocidadeAtual;
  }
}