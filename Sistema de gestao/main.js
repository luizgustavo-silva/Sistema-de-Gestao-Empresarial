const readline = require("readline-sync");
const { exibirMenuPrincipal } = require("./utils/menus/menuPrincipal");
const { sobreSoftware } = require("./utils/menus/sobreSoftware");
const { demonstrativo_de_pagamento_all_menu1, demonstrativo_de_pagamento_all_menu2 } = require("./utils/menus/demonstrativo_de_pagamento_all");
const { calcularINSS } = require("./utils/inss");
const { calcularImpostoRenda } = require("./utils/imposto_renda");
const { calcularSalarioLiquido } = require("./utils/salario_liquido");
const { menuFinal } = require("./utils/menus/menuFinal");
const { menuFolhadePagamento } = require("./utils/menus/menuFolhadePagamento");
const { menuFuncionarios } = require("./utils/menus/menuFuncionarios");

function validarEmpresa(empresa) {
  let erros = [];
  if (!empresa.nome) erros.push("Nome fantasia não preenchido");
  if (!empresa.razao_social) erros.push("Razão social não preenchida");
  if (!empresa.cnpj) erros.push("CNPJ não preenchido");
  if (!empresa.inscricao_estadual) erros.push("Inscrição estadual não preenchida");
  if (!empresa.dataFundacao) erros.push("Data de fundação não preenchida");

  if (!empresa.endereco.logradouro) erros.push("Logradouro não preenchido");
  if (!empresa.endereco.numero) erros.push("Número não preenchido");
  if (!empresa.endereco.bairro) erros.push("Bairro não preenchido");
  if (!empresa.endereco.cidade) erros.push("Cidade não preenchida");
  if (!empresa.endereco.cep) erros.push("CEP não preenchido");

  if (!empresa.contato.telefone) erros.push("Telefone não preenchido");
  if (!empresa.contato.email) erros.push("Email não preenchido");
  if (!empresa.contato.site) erros.push("Site não preenchido");

  if (empresa.meta_anual.length !== 12) erros.push("Metas anuais incompletas");
  if (empresa.areas_atuacao.length !== 4) erros.push("Áreas de atuação incompletas");

  return erros;
}

var empresa = {
  nome: "",
  razao_social: "",
  cnpj: "",
  inscricao_estadual: "",
  dataFundacao: "",
  endereco: {
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    cep: "",
  },
  contato: {
    telefone: "",
    email: "",
    site: "",
  },
  meta_anual: [],
  areas_atuacao: [],
  funcionarios: [],
};

var totalMetas = 0;
var encerrar = false;
while (!encerrar) {
  exibirMenuPrincipal();
  var operacao_desejada = readline.questionInt("Escolha uma operacao [1,2...]: ");
  if (operacao_desejada == 0) {
    encerrar = true;
  } else if (operacao_desejada == 1) {
    sobreSoftware();
  } else if (operacao_desejada == 2) {
    demonstrativo_de_pagamento_all_menu1();
    var salario_bruto = readline.questionFloat("Digite o salario bruto: R$ ");
    valorINSS = calcularINSS(salario_bruto);
    valorIRRF = calcularImpostoRenda(salario_bruto);
    salarioLiquido = salario_bruto - valorINSS - valorIRRF;
    demonstrativo_de_pagamento_all_menu2(salario_bruto, valorINSS, valorIRRF, salarioLiquido);
  } else if (operacao_desejada == 3) {
    empresa.nome = readline.question("Digite o seu nome: ");
    empresa.razao_social = readline.question("Digite a razao social: ");
    empresa.cnpj = readline.question("Digite o CNPJ: ");
    empresa.inscricao_estadual = readline.question("Digite a inscricao estadual: ");
    var data = readline.question("Digite a data de fundacao (dd/mm/aaaa): ");
    var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(data)) {
      console.log("Data inválida. Use o formato dd/mm/aaaa.");
    } else {
      empresa.dataFundacao = data;
    }
  } else if (operacao_desejada == 4) {
    empresa.endereco.logradouro = readline.question("Digite o logradouro: ");
    empresa.endereco.numero = readline.question("Digite o numero do seu endereco: ");
    empresa.endereco.complemento = readline.question("Digite o complemento: ");
    empresa.endereco.bairro = readline.question("Digite o bairro: ");
    empresa.endereco.cidade = readline.question("Digite a cidade: ");
    empresa.endereco.cep = readline.question("Digite o cep: ");
  } else if (operacao_desejada == 5) {
    empresa.contato.telefone = readline.question("Digite o seu telefone: ");
    empresa.contato.email = readline.question("Digite o seu e-mail: ");
    empresa.contato.site = readline.question("Digite o site: ");
  } else if (operacao_desejada == 6) {
    var meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    empresa.meta_anual = [];
    totalMetas = 0;
    for (let i = 0; i <= 11; i++) {
      var meta = readline.questionFloat(`Digite a meta no mes de ${meses[i]}: `);
      empresa.meta_anual.push(meta);
      totalMetas += meta;
    }
  } else if (operacao_desejada == 7) {
    for (let i = 1; i <= 4; i++) {
      var areas = readline.question(`Digite a ${i}o. area de atuacao: `);
      empresa.areas_atuacao.push(areas);
    }
  } else if (operacao_desejada == 8) {
    var erros = validarEmpresa(empresa);
    if (erros.length > 0) {
      console.log("\n❌ Não foi possível gerar o relatório final.");
      console.log("Motivos:");
      erros.forEach(e => console.log(" - " + e));
      console.log("\nPreencha todos os dados antes de continuar.\n");
    } else {
      menuFinal(empresa, totalMetas);
    }
  } else if (operacao_desejada == 9) {
    var funcionario = {};
    funcionario.nome = readline.question("Digite o nome do funcionario: ");
    funcionario.cpf = readline.question(`Digite o cpf do ${funcionario.nome}: `);
    funcionario.genero = readline.question(`Digite o genero do ${funcionario.nome}: `);
    funcionario.idade = readline.question(`Digite a idade do ${funcionario.nome}: `);
    funcionario.salario_bruto = readline.question(`Digite o salario bruto do ${funcionario.nome}: `);
    empresa.funcionarios.push(funcionario);
  } else if (operacao_desejada == 10) {
    menuFuncionarios(empresa);
  } else if (operacao_desejada == 11) {
    menuFolhadePagamento(empresa, calcularINSS, calcularImpostoRenda);
  }
  var continuar = readline.question("Voce quer fazer outro processo? [S/N] ");
  if (continuar.toLowerCase() == "n") {
    encerrar = true;
    break;
  }
}
