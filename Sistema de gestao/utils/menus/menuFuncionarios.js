export function menuFuncionarios(empresa) {
  var funcionarios = empresa.funcionarios;
  var total = funcionarios.length;

  console.log(`
        ======================================
                 👥 FUNCIONÁRIOS
        ======================================

        Total de Funcionários: ${total}
  `);

  if (total === 0) {
    console.log("Nenhum funcionário cadastrado.\n");
    return;
  }
  var primeiro = funcionarios[0];

  console.log(`
        ⭐ Primeiro Funcionário:
            📛 Nome: ${primeiro.nome}
            🆔 CPF: ${primeiro.cpf}
            🎂 Idade: ${primeiro.idade}
            💰 Salário: R$ ${primeiro.salario_bruto}
  `);
  var ultimo = funcionarios[total - 1];

  console.log(`
        🏁 Último Funcionário:
            📛 Nome: ${ultimo.nome}
            🆔 CPF: ${ultimo.cpf}
            🎂 Idade: ${ultimo.idade}
            💰 Salário: R$ ${ultimo.salario_bruto}
  `);
  console.log(`
        📋 Lista Completa:
  `);

  for (let i = 0; i < total; i++) {
    var f = funcionarios[i];

    console.log(`
        ${i + 1}. ${f.nome}
            🆔 CPF: ${f.cpf}
            🎂 Idade: ${f.idade}
            💰 Salário: R$ ${f.salario_bruto}
    `);
  }
}
