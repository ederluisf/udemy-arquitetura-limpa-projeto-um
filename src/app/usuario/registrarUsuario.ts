import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/terminalUtil";
import RegistrarUsusario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
  TerminalUtil.titulo("Registrar Usuário");

  const nome = await TerminalUtil.campoRequerido('Nome: ', 'Eder');
  const email = await TerminalUtil.campoRequerido('Email: ', 'eder@mail.com');
  const senha = await TerminalUtil.campoRequerido('Senha: ', '123456');

  const usuario: Usuario = {
    nome,
    email,
    senha
  };

  await new RegistrarUsusario().executar(usuario);
  
  TerminalUtil.sucesso(`\n\nUsuário ${nome} registrado com sucesso!\n`);
  await TerminalUtil.esperarEnter();
  
  try {
    await new RegistrarUsusario().executar(usuario);  
  } catch(e: any) {
    TerminalUtil.erro(e.message);
  } finally {
    await TerminalUtil.esperarEnter();  
  }
}