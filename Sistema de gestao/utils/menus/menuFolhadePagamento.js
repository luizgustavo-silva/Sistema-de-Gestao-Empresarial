import readline from "readline-sync";

export function menuFolhadePagamento(empresa, calcularINSS, calcularImpostoRenda) {
  var data_atual = new Date().toLocaleDateString();

  if (empresa.funcionarios.length === 0) {
    console.log("\n❌ Nenhum funcionário cadastrado!\n");
    return;
  }

  console.log("\nFuncionários cadastrados:");
  for (var i = 0; i < empresa.funcionarios.length; i++) {
    console.log(`${i + 1}. ${empresa.funcionarios[i].nome}`);
  }

  var opc = readline.questionInt("\nEscolha um funcionário pelo número: ") - 1;

  if (opc < 0 || opc >= empresa.funcionarios.length) {
    console.log("\n❌ Opção inválida.\n");
    return;
  }

  var f = empresa.funcionarios[opc];

  var inss = calcularINSS(f.salario_bruto);
  var irrf = calcularImpostoRenda(f.salario_bruto);
  var liquido = f.salario_bruto - inss - irrf;
  var fgts = f.salario_bruto * 0.08;
  var ferias = f.salario_bruto / 3 + f.salario_bruto;

  console.log(`
        =========================================
                 📄 FOLHA DE PAGAMENTO
        =========================================

        📅 Data: ${data_atual}

        🏢 Empresa: ${empresa.nome}
        🧾 CNPJ: ${empresa.cnpj}

        👤 Funcionário: ${f.nome}
        💼 Cargo: ${f.cargo}

        -----------------------------------------

        💰 Salário bruto: R$ ${f.salario_bruto.toFixed(2)}
        ➖ INSS: R$ ${inss.toFixed(2)}
        ➖ IRRF: R$ ${irrf.toFixed(2)}

        ✅ Salário líquido: R$ ${liquido.toFixed(2)}

        -----------------------------------------

        📌 FGTS (8%): R$ ${fgts.toFixed(2)}
        🌴 Férias (1/3 incluso): R$ ${ferias.toFixed(2)}

        =========================================
  `);
}
