import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsusario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/terminalUtil";
import InverterSenhaCripto from "@/adapter/auth/InverterSenhaCripto";
import EspacoSenhaCripto from "@/adapter/auth/EspacoSenhaCripto";

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

  const provedorCripto = new InverterSenhaCripto();
  const casoDeUso = new RegistrarUsusario(provedorCripto);

  await casoDeUso.executar(usuario);
  
  TerminalUtil.sucesso(`\n\nUsuário ${nome} registrado com sucesso!\n`);
  await TerminalUtil.esperarEnter();
  
  try {
    await casoDeUso.executar(usuario);  
  } catch(e: any) {
    TerminalUtil.erro(e.message);
  } finally {
    await TerminalUtil.esperarEnter();  
  }
}