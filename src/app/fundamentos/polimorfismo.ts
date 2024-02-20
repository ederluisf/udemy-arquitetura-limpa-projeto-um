import Carro from "@/core/fundamentos/Carro";
import TerminalUtil from "../util/terminalUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";
import Gol from "@/core/fundamentos/Gol";

export default async function polimorfismo() {
  TerminalUtil.titulo("Polimorfismo");

  const [tipoCarro] = await TerminalUtil.selecao("Qual tipo de carro?", [
    'Ferrari',
    'Fusca', 
    'Gol', 
  ]);

  const carro: Carro = 
    tipoCarro === 0 ? new Ferrari() 
    : tipoCarro === 1 ? new Fusca() 
    : new Gol();
  
  while(true) {
    TerminalUtil.limpar();
    TerminalUtil.exibirChaveValor('Velocidade máxima: ', `${carro.velocidadeMaxima} km/h`);
    TerminalUtil.exibirChaveValor('Velocidade atual: ', `${carro.velocidadeAtual} km/h`);

    const [opcao] = await TerminalUtil.selecao("Escolha uma opção:", [
      'Acelerar',
      'Frear'
    ]);

    opcao === 0 ? carro.acelerar() : carro.frear();

    const continuar = await TerminalUtil.confirmacao("Deseja continuar?");    
    if (!continuar) { return; }
  }
}