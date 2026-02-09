export function demonstrativo_de_pagamento_all_menu1() {
  console.log(`
        ===========================================================
                      CALCULADORA DE SALARIO LIQUIDO            
        =========================================================='
        
        
        `);
}
export function demonstrativo_de_pagamento_all_menu2(salario_bruto, valorINSS, valorIRRF, salarioLiquido) {
  console.log(`
        ===========================================================
                        DEMONSTRATIVO DE PAGAMENTO
        ===========================================================
        
        Salario Bruto:     R$   ${salario_bruto}
        Desconto INSS:     R$   ${valorINSS}
        Desconto IRRF:     R$   ${valorIRRF} 
        -----------------------------------------------------------
        Salario Liquido:   R$ ${salarioLiquido}
        
        ===========================================================
                           FORMULA DO CALCULO
        ===========================================================
        
        Salario Liquido = Salario Bruto - INSS - IRRF
        
        Salario Liquido = ${salario_bruto} - ${valorINSS} - ${valorIRRF}`);
}
