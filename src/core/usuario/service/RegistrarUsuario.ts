import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";

export default class RegistrarUsusario implements CasoDeUso<Usuario, void> {
  
  async executar(usuario: Usuario): Promise<void> {
    const senhaCripto = usuario.senha.split('').reverse().join('');
    console.log(`\n\n${senhaCripto}`);
  }
}
