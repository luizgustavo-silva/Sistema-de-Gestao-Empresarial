import { calcularImpostoRenda } from "./imposto_renda";
import { calcularINSS } from "./inss";

export function calcularSalarioFerias(salario) {
 let vf;
  let desconto;
  vf = salario / 3;
  vf = vf + salario;
  desconto = calcularINSS(salario) + calcularImpostoRenda(salario);
  vf = vf - desconto;
  return vf;
}
