# Modelagem dos processos de negócio

## Modelagem da situação atual (Modelagem AS IS)

A situação atual do processo de descarte de blisters e medicamentos vencidos é bastante ineficiente e não automatizada, o que gera retrabalho e desperdício de tempo tanto para os consumidores quanto para as farmácias. Atualmente, o processo envolve uma série de etapas manuais que não são integradas por nenhuma plataforma digital, o que leva a um fluxo de trabalho fragmentado e propenso a falhas.

Processo Atual (AS IS)
O processo atual para descarte de blisters e compra de medicamentos é descrito a seguir:

Cliente:

- Selecionar Medicamento: O cliente escolhe os medicamentos para compra na farmácia.

- Realizar Pagamento: O pagamento é feito de forma tradicional, com o cliente pagando na farmácia.

- Usar Medicamento: Após o pagamento, o cliente usa o medicamento e, quando o blister (cartela de remédios) está vazio ou o medicamento vence, o cliente tem que descartá-lo.

- Descarte de Blister: O cliente não tem um processo claro para o descarte dos resíduos. Se o local de descarte correto for encontrado, o cliente pode realizar o descarte adequado, caso contrário, o descarte é feito de forma inadequada (gerando impactos ambientais e de saúde pública).

Farmácia:

- Escanear Produto: A farmácia realiza o escaneamento do produto para registro de venda.

- Exibir Formas de Pagamento: A farmácia informa ao cliente as formas de pagamento disponíveis.

- Entrega do Produto: Após o pagamento, a farmácia entrega o medicamento ao cliente.

- Descarte: No processo atual, a farmácia não tem um procedimento estruturado para lidar com o descarte de blisters e medicamentos vencidos, o que resulta em ausência de incentivo para práticas sustentáveis.

Pontos de ineficiência e retrabalho
- Descarte Inadequado: A falta de pontos de coleta adequados e a ausência de incentivos resultam no descarte inadequado de blisters e medicamentos, o que agrava a contaminação ambiental.

- Falta de Automação: O processo de descarte e coleta não é automatizado, o que gera um ciclo ineficiente de idas e vindas entre o cliente e a farmácia, sem um sistema centralizado para registrar e controlar o descarte.

- Ausência de Incentivos: Não há um sistema que incentive o cliente a realizar o descarte correto de medicamentos. Sem recompensas, muitos clientes continuam descartando os resíduos de forma inadequada.

- Falta de Logística Sustentável: O processo de entrega e coleta não é sustentável, pois não há um fluxo de transporte ecologicamente correto para levar os resíduos de medicamentos até um local de reciclagem.

Problemas Identificados:
- Falta de Conectividade entre os Atores: Cliente, farmácia e processo de coleta estão desconectados. Não há uma integração entre as partes.

- Desperdício e Ineficiência: O processo atual depende de ações manuais que tornam o processo lento e suscetível a erros e falhas. Além disso, não há um sistema de monitoramento para avaliar o impacto ambiental.

- Impacto Ambiental: A falta de incentivos e controle resulta no descarte inadequado de resíduos farmacêuticos, o que impacta negativamente o meio ambiente e a saúde pública.

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

