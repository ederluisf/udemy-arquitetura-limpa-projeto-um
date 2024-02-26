import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioPostgre from "@/adapter/db/RepositorioUsuarioPostgre";
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsusario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/terminalUtil";

export default async function registrarUsuario() {
  const { campoRequerido, titulo, sucesso, erro, esperarEnter } = TerminalUtil;
  
  titulo("Registrar Usuário");

  const nome = await campoRequerido('Nome: ');
  const email = await campoRequerido('Email: ');
  const senha = await campoRequerido('Senha: ');

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
    
    sucesso(`\n\nUsuário ${nome} registrado com sucesso!\n`);
  } catch(e: any) {
    erro(e.message);
  } finally {
    await esperarEnter();  
  }
}