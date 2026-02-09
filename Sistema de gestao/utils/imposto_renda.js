export function calcularImpostoRenda(salario_bruto) {
  if (salario_bruto <= 2428.80) {
    return 0;
  }
  if (salario_bruto <= 2826.65) {
    return salario_bruto * 0.075 - 182.16;
  }
  if (salario_bruto <= 3751.05) {
    return salario_bruto * 0.15 - 394.16;
  }
  if (salario_bruto <= 4664.68) {
    return salario_bruto * 0.225 - 675.49;
  }
  return salario_bruto * 0.275 - 908.73;
}