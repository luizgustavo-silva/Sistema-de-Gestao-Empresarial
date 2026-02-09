export function menuFinal(empresa, totalMetas) {
  console.log(`
        ===========================================================
                        🏬 CADASTRO DE EMPRESA 🏬
        ===========================================================
        
        DADOS DA EMPRESA:
            Nome Fantasia: ${empresa.nome}
            Razao social: ${empresa.razao_social}
            CNPJ: ${empresa.cnpj}
            Inscricao Estadual: ${empresa.inscricao_estadual}
            Data de fundacao: ${empresa.dataFundacao}
            
        AREAS DE ATUACAO:
            ${empresa.areas_atuacao[0]}
            ${empresa.areas_atuacao[1]}
            ${empresa.areas_atuacao[2]}
            ${empresa.areas_atuacao[3]}
            
        METAS ANUAIS (POR MES): 
            Janeiro:   R$ ${empresa.meta_anual[0]}
            Fevereiro: R$ ${empresa.meta_anual[1]}
            Marco:     R$ ${empresa.meta_anual[2]}
            Abril:     R$ ${empresa.meta_anual[3]}
            Maio:      R$ ${empresa.meta_anual[4]}
            Junho:     R$ ${empresa.meta_anual[5]}
            Julho:     R$ ${empresa.meta_anual[6]}
            Agosto:    R$ ${empresa.meta_anual[7]}
            Setembro:  R$ ${empresa.meta_anual[8]}
            Outubro:   R$ ${empresa.meta_anual[9]}
            Novembro:  R$ ${empresa.meta_anual[10]}
            Dezembro:  R$ ${empresa.meta_anual[11]}
            
        ------------------------------------------------------------
            Total Anual: R$ ${totalMetas}
            
        
        ENDERECO:
            ${empresa.endereco.logradouro}
            Bairro: ${empresa.endereco.bairro}
            ${empresa.endereco.cidade}
            CEP:    ${empresa.endereco.cep}
            
        
        CONTATO:
            Telefone: ${empresa.contato.telefone}
            E-mail:   ${empresa.contato.email}
            Site:     ${empresa.contato.site}    
            
        =============================================================`);
}
