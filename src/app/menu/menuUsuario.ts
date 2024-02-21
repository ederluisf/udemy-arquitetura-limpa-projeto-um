import TerminalUtil from "@/app/util/terminalUtil";
import dip from "../fundamentos/dip";
import polimorfismo from "../fundamentos/polimorfismo";

export default async function menuUsuario() {
  TerminalUtil.titulo("Usuário");

  const [indice] = await TerminalUtil.menu([
    '1. Registrar Usuário',
    'Voltar'
  ]);

  switch (indice) {
    case 0:
      await polimorfismo();
      break;
    default:
      return;
  }

  await menuUsuario();
}