export function calcularINSS(salario_bruto) {
  // desconto inss (salario * aliqota) - parcela
  let desconto = 0;
  if (salario_bruto <= 1518.0) {
    desconto = salario_bruto * 0.075;
  } else if (salario_bruto <= 2793.88) {
    desconto = salario_bruto * 0.09 - 22.77;
  } else if (salario_bruto <= 4190.83) {
    desconto = salario_bruto * 0.12 - 106.59;
  } else if (salario_bruto <= 8157.41) {
    desconto = salario_bruto * 0.14 - 190.4;
  } else {
    desconto = 951.62; // teto
  }
  return Number(desconto);
}
