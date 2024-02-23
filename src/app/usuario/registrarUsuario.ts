import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/terminalUtil";
import RegistrarUsusario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
  TerminalUtil.titulo("Registrar Usuário");

  const id = await TerminalUtil.campoRequerido('Id: ', '@id_123');
  const nome = await TerminalUtil.campoRequerido('Nome: ', 'Eder');
  const email = await TerminalUtil.campoRequerido('Email: ', 'eder@mail.com');
  const senha = await TerminalUtil.campoRequerido('Senha: ', '123456');

  const usuario: Usuario = {
    id,
    nome,
    email,
    senha
  };

  await new RegistrarUsusario().executar(usuario);

  TerminalUtil.sucesso(`Usuário ${nome} registrado com sucesso!`);
  await TerminalUtil.esperarEnter();
}