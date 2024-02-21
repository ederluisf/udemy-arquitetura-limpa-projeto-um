import TerminalUtil from "@/app/util/terminalUtil";
import dip from "../fundamentos/dip";
import polimorfismo from "../fundamentos/polimorfismo";

export default async function menuFundamentos() {
  TerminalUtil.titulo("Fundamentos");

  const [indice] = await TerminalUtil.menu([
    '1. Polimorfismo',
    '2. DIP',
    'Voltar'
  ]);

  switch (indice) {
    case 0:
      await polimorfismo();
      break;
    case 1:
      await dip();
      break;
    default:
      return;
  }

  await menuFundamentos();
}