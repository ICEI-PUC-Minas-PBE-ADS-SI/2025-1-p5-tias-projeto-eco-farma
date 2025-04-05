# Modelagem dos processos de negócio

## Modelagem da situação atual (Modelagem AS IS)

Apresente uma descrição textual de como os sistemas atuais resolvem o problema que seu projeto se propõe a resolver. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional.

Com o tema do projeto definido, escolham alguns processos no contexto de negócios. Para ilustrar os potenciais ganhos com a automatização, imaginem processos manuais, ineficientes e/ou com muitas idas e vindas, gerando, assim, retrabalho. Colem aqui os modelos dos processos atuais (modelo AS-IS), elaborados com o apoio da ferramenta baseada em BPMN utilizada na disciplina.

## Descrição geral da proposta (Modelagem TO BE)

Tendo identificado os gargalos dos modelos AS-IS, apresentem uma descrição da proposta de solução, buscando maior eficiência com a introdução da tecnologia. Abordem também os limites dessa solução e seu alinhamento com as estratégias e objetivos do contexto de negócio escolhido.

Cole aqui os modelos da solução proposta (modelo TO-BE), elaborados com o apoio da ferramenta baseada em BPMN utilizada na disciplina. Cada processo identificado deve ter seu modelo TO-BE específico. Descrevam as oportunidades de melhoria de cada processo da solução proposta.

Apresente aqui uma descrição da sua proposta, abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente também as oportunidades de melhoria.

## Modelagem dos processos

[Processo 1 – Entrega dos Produtos](./processes/processo-1-nome-do-processo.md "Detalhamento do processo 1.")

[Processo 2 - Coleta dos Blisters](./processes/processo-2-nome-do-processo.md "Detalhamento do processo 2.")


## Indicadores de desempenho

| **Indicador** | **Objetivos** | **Descrição** | **Fonte de dados** | **Fórmula de cálculo** |
| ---           | ---           | ---           | ---             | ---             |
| Redução de CO2 nas entregas | Avaliar o impacto ambiental das entregas realizadas | Mede quanto CO2 deixou de ser emitido ao utilizar métodos sustentáveis | Tabela Entregas | (distância total evitada * fator de emissão de CO2) |
| Escolha otimizada do entregador | Melhorar a eficiência logística na entrega domiciliar| Mede a distância média entre os entregadores e as farmácias no momento da escolha | Tabela Entregadores | soma das distâncias entre entregadores e farmácias / número de entregas realizadas |
| Garantia de pontos de coleta | Incentivar a reciclagem e o descarte correto de blisters | Mede a quantidade de cartelas inteiras coletadas | Tabela Coletas | número de blisters * 0,25 |
| Cálculo do valor do frete | Definir um valor justo e eficiente para o custo da entrega| Mede o custo do frete com base na distância, peso do pedido e possíveis taxas adicionais | Tabela Entregas, Tabela Pedidos | (distância da entrega * custo por km) + (peso do pedido * taxa por kg) + taxas adicionais |
| Receita gerada por assinaturas | Gerar a rentabilidade do programa de assinaturas | Mede a receita total gerada com assinaturas, considerando valor fixo e percentual sobre compras | Tabela Assinaturas, Tabela Pedidos | (número de assinaturas * valor fixo) + (2% * total de compras mensais dos assinantes) |

