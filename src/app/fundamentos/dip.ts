import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/terminalUtil";
import Carro from "@/core/fundamentos/Carro";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";
import Gol from "@/core/fundamentos/Gol";
import { terminal } from "terminal-kit";

export default async function dip() {
  TerminalUtil.titulo("DIP");

  const [tipoCarro] = await TerminalUtil.selecao("Qual tipo de carro?", [
    'Ferrari',
    'Fusca', 
    'Gol'
  ]);

  let carro: Carro;

  switch (tipoCarro) {
    case 0:
      carro = new Ferrari();
      break;
    case 1:
      carro = new Fusca();
      break;
    default:
      carro = new Gol();
      break;
  }

  corrida(carro, console.log);

  await TerminalUtil.esperarEnter();
}