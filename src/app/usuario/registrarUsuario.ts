import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioPostgre from "@/adapter/db/RepositorioUsuarioPostgre";
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsusario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/terminalUtil";

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

  try {
    const repositorio = new RepositorioUsuarioPostgre();
    const provedorCripto = new SenhaCripto();
    const casoDeUso = new RegistrarUsusario(repositorio, provedorCripto);
  
    await casoDeUso.executar(usuario);
    
    TerminalUtil.sucesso(`\n\nUsuário ${nome} registrado com sucesso!\n`);
  } catch(e: any) {
    TerminalUtil.erro(e.message);
  } finally {
    await TerminalUtil.esperarEnter();  
  }
}