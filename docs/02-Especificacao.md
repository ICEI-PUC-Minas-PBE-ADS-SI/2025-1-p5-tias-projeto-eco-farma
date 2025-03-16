# Especificação do projeto

<span style="color:red">Pré-requisitos: <a href="01-Contexto.md"> Documentação de contexto</a></span>

Esta seção detalha os requisitos funcionais e não funcionais do Eco Farma, alinhados ao diagrama de caso de uso, personas e histórias de usuários. O objetivo é garantir que a solução atenda às necessidades dos usuários, critérios de sustentabilidade e restrições técnicas e operacionais.

## Personas

*1. Ana Clara, 32 anos*

Profissão: Analista de Marketing

Localização: Belo Horizonte - MG

Estado civil: Casada 

Perfil: Consumidora frequente de medicamentos para a família, preocupa-se com o meio ambiente, mas não sabe como descartar blisters corretamente

Motivação: Quer contribuir para a reciclagem e aproveitar descontos em produtos de higiene ou alimentícios 

Frustrações: 
- Falta de conhecimento sobre os pontos de coleta próximos de sua casa 
- Desconhecimento sobre como blisters descartados de forma incorreta impactam o meio ambiente

---------------

*2. Carlos Mendes, 45 anos*

Profissão: Farmacêutico e dono de uma rede de farmácias 

Localização: Belo Horizonte - MG 

Estado civil: Casado 

Perfil: Busca diferenciar sua farmácia como sustentável e atrair novos clientes 

Motivação: Quer reduzir custos com descarte de resíduos e aumentar o fluxo de clientes 

Frustrações: 
- Dificuldade em gerenciar resíduos de blisters 
- Baixo engajamento em campanhas ambientais anteriores 

---------------

*3. João Ribeiro, 28 anos*

Profissão: Ciclista freelancer 

Localização: Betim - MG 

Estado civil: Solteiro 

Perfil: Usa a bicicleta como meio de transporte e busca renda extra 

Motivação: Quer trabalhar com entregas sustentáveis e evitar empregos tradicionais poluentes 

Frustrações: 
- Falta de oportunidades de trabalho flexíveis que aliem renda e propósito 
- Entregas via aplicativos tradicionais não valorizam sua pegada ecológica 

---------------

*4. Mariana Costa, 50 anos*

Profissão: Líder de uma cooperativa de reciclagem 

Localização: Contagem - MG 

Estado civil: Viúva 

Perfil: Lutadora por causas ambientais, busca parcerias para aumentar a reciclagem de materiais complexos 

Motivação: Quer ampliar a capacidade de processamento de blisters (alumínio e plástico) 

Frustrações: 
- Dificuldade em receber blisters separados corretamente 
- Falta de infraestrutura para reciclagem especializada 


## Histórias de usuários

As US abaixo foram elaboradas com base nas personas definidas e nos casos de uso do sistema:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana Clara (Consumidora)  | Registrar-me na plataforma com e-mail e CPF | Ter um cadastro no sistema e utiliza-lo |
|Ana Clara (Consumidora)  | Visualizar pontos de descarte (farmácias) | Entregar blisters no local correto |
|Ana Clara (Consumidora)  | Converter pontos de descarte em descontos | Descartar os blister de forma correta e comprar produtos com desconto |
|Ana Clara (Consumidora)  | Acompanhar o histórico de descartes | Medir e acompanhar meu impacto ambiental |

-----------

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Carlos Mendes (Farmacêutico)   | Cadastrar minha farmácia como ponto de coleta | Atrair mais clientes e gerenciar resíduos |
|Carlos Mendes (Farmacêutico)   | Definir descontos para produtos específicos | Incentivar compras recorrentes |
|Carlos Mendes (Farmacêutico)   | Visualizar relatórios de blisters coletados | Monitorar a eficiência do programa de reciclagem |

-----------

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Ribeiro (Ciclista)   | Receber notificações sobre entregas a serem feitas para o cliente | Agilizar o processo de reciclagem |
|João Ribeiro (Ciclista)   | Acompanhar o impacto ambiental das minhas entregas | Comprovar minha contribuição para a sustentabilidade |

-----------

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Mariana Costa (Cooperativa)   | Registrar-me na plataforma com e-mail e CPF | Ter um cadastro no sistema e utiliza-lo |
|Mariana Costa (Cooperativa)   | Gerar relatórios de materiais processados | Demonstrar resultados para parceiros e órgãos ambientais|

-----------

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Todos os usuários | Registrar-me na plataforma com e-mail e CPF | Ter um cadastro no sistema e utiliza-lo |
|Todos os usuários | Visualizar pontos de descarte | Entregar blisters no local correto |
|Todos os usuários | Converter pontos de descarte em descontos | Descartar os blister de forma correta e comprar produtos com desconto |

## Requisitos

*Requisitos Funcionais (RF) e Não Funcionais (RNF):* 

Os requisitos foram priorizados usando a técnica MoSCoW (Must have, Should have, Could have, Won't have), adaptada para alta, média e baixa prioridade. A priorização considera: 

- Alta (Must have): Funcionalidades essenciais para o MVP

- Média (Should have): Funcionalidades importantes, mas que podem ser desenvolvidas após o MVP

- Baixa (Could have): Melhorias ou features complementares

### Requisitos funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que usuários se cadastrem na plataforma com e-mail, CPF e endereço | ALTA | 
|RF-002| Exibir mapa interativo com geolocalização de farmácias parceiras | ALTA |
|RF-003| Sistema de pontuação por descarte de blisters (ex: 1 blister = 10 pontos) | ALTA |
|RF-004| Enviar notificações push sobre novos descontos e campanhas | BAIXA |
|RF-005| Permitir que farmácias cadastrem descontos em produtos que não sejam medicamentos | ALTA |
|RF-006| Sistema de confirmação de coleta via QR Code ou foto do material descartado | MÉDIA |
|RF-007| Permitir que ciclistas visualizem solicitações de coleta próximas | ALTA |
|RF-008| Permitir que farmácias se cadastrem na plataforma | ALTA | 
|RF-009| Dashboard com métricas de descarte | MÉDIA | 
|RF-010| Permitir que farmácias cadastrem itens no sistema | ALTA | 
|RF-011| Gerar cupons de desconto para os clientes que realizarem descarte de materiais | ALTA | 
|RF-012| Permitir que clientes cadastrem os cupons de desconto no sistema | ALTA | 
|RF-013| Permitir que clientes realizem compras no sistema | ALTA | 
|RF-014| Permitir que ciclistas se cadastrem no sistema | MÉDIA | 
|RF-015| Permitir que ciclistas selecionem entregas disponíveis | ALTA |

### Requisitos não funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve responder a requisições em menos de 4 segundos | ALTA | 
|RNF-002| Código otimizado para consumo mínimo de memória e energia | MÉDIA | 
|RNF-003| Integração com APIs de geolocalização (ex: Google Maps) | ALTA | 
|RNF-004| Gamificação com badges para usuários que mais reciclam | BAIXA | 
|RNF-005| Armazenamento de dados em bancos de dados otimizados para reduzir consumo de energia | ALTA | 
|RNF-006| Suporte para português e inglês | BAIXA | 


## Restrições

O projeto está restrito aos itens apresentados na tabela a seguir:

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|001| O projeto deverá ser entregue até o final do semestre |
|002| O projeto não envolve gastos financeiros |
|003| Dependência de parceria com farmácia para validar ponto de coleta |
|004| Utilização obrigatória de tecnologias gratuitas |
|005| Conformidade com a LGPD |

## Diagrama de casos de uso

<img src="https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-projeto-eco-farma/blob/main/docs/images/Diagrma%20caso%20de%20uso%20TI.jpeg?raw=true" alt="Diagrama de caso de uso">

Documento de Casos de Uso - Sistema ECO Farma

Caso de Uso: Cadastrar no sistema (Cliente)
Nome: Cadastrar no sistema (Cliente)
Ator: Cliente
Pré-condição: O cliente deve fornecer os dados necessários para o cadastro.
Fluxo Normal:
1.	O cliente acessa o sistema.
2.	O cliente informa os dados pessoais exigidos.
3.	O sistema valida as informações.
4.	O sistema confirma o cadastro e libera o acesso.
Pós-condição: O cliente está cadastrado no sistema e pode utilizar as funcionalidades disponíveis.

Caso de Uso: Cadastrar no sistema (Farmácia)
Nome: Cadastrar no sistema (Farmácia)
Ator: Farmácia
Pré-condição: A farmácia deve fornecer os dados necessários para o cadastro.
Fluxo Normal:
1.	A farmácia acessa o sistema.
2.	A farmácia informa os dados exigidos.
3.	O sistema valida as informações.
4.	O sistema confirma o cadastro e libera o acesso.
Pós-condição: A farmácia está cadastrada no sistema e pode utilizar as funcionalidades disponíveis.

Caso de Uso: Cadastrar no sistema (Ciclista)
Nome: Cadastrar no sistema (Ciclista)
Ator: Ciclista
Pré-condição: O ciclista deve fornecer os dados necessários para o cadastro.
Fluxo Normal:
1.	O ciclista acessa o sistema.
2.	O ciclista informa os dados exigidos.
3.	O sistema valida as informações.
4.	O sistema confirma o cadastro e libera o acesso.
Pós-condição: O ciclista está cadastrado no sistema e pode utilizar as funcionalidades disponíveis.

Caso de Uso: Cadastrar itens no sistema
Nome: Cadastrar itens no sistema
Ator: Farmácia
Pré-condição: A farmácia deve estar cadastrada no sistema.
Fluxo Normal:
1.	A farmácia acessa o sistema.
2.	A farmácia insere as informações dos itens.
3.	O sistema valida e armazena os dados.
Pós-condição: Os itens estão cadastrados e disponíveis no sistema.

Caso de Uso: Realizar descarte dos materiais
Nome: Realizar descarte dos materiais
Ator: Farmácia, Cliente
Pré-condição: O usuário deve estar cadastrado no sistema.
Fluxo Normal:
1.	O usuário seleciona os materiais a serem descartados.
2.	O sistema verifica se o descarte é permitido.
3.	O sistema confirma a operação e atualiza o estoque.
Pós-condição: O descarte dos materiais é registrado no sistema.

Caso de Uso: Receber os materiais de descarte
Nome: Receber os materiais de descarte
Ator: Farmácia
Pré-condição: O cliente deve ter realizado a solicitação de descarte.
Fluxo Normal:
1.	A farmácia recebe os materiais.
2.	O sistema valida a entrega.
3.	O sistema registra o recebimento.
Pós-condição: O material é aceito pela farmácia e registrado no sistema.

Caso de Uso: Gerar solicitação de envio dos produtos solicitados
Nome: Gerar solicitação de envio dos produtos solicitados
Ator: Farmácia
Pré-condição: O pedido do cliente deve estar registrado no sistema.
Fluxo Normal:
1.	A farmácia acessa o sistema.
2.	A farmácia confirma os produtos a serem enviados.
3.	O sistema registra a solicitação de envio.
Pós-condição: O pedido está pronto para ser entregue.

Caso de Uso: Gerar os cupons de desconto
Nome: Gerar os cupons de desconto
Ator: Farmácia
Pré-condição: Deve haver registros de descarte válidos.
Fluxo Normal:
1.	A farmácia acessa o sistema.
2.	A farmácia gera os cupons para os clientes.
3.	O sistema valida e disponibiliza os cupons.
Pós-condição: Os cupons são gerados e disponibilizados para os clientes.

Caso de Uso: Cadastrar o cupom de desconto no sistema
Nome: Cadastrar o cupom de desconto no sistema
Ator: Cliente
Pré-condição: O cliente deve possuir um cupom válido.
Fluxo Normal:
1.	O cliente acessa o sistema.
2.	O cliente informa o código do cupom.
3.	O sistema valida e registra o cupom.
Pós-condição: O cupom é registrado e pode ser utilizado em compras futuras.

Caso de Uso: Realizar compras no sistema
Nome: Realizar compras no sistema
Ator: Cliente
Pré-condição: O cliente deve estar cadastrado e possuir produtos disponíveis no sistema.
Fluxo Normal:
1.	O cliente acessa o sistema.
2.	O cliente seleciona os produtos desejados.
3.	O sistema verifica disponibilidade no estoque.
4.	O cliente finaliza a compra.
5.	O sistema confirma a transação.
Pós-condição: A compra é registrada e os produtos são enviados para entrega.

Caso de Uso: Selecionar o delivery
Nome: Selecionar o delivery
Ator: Ciclista
Pré-condição: Deve haver pedidos pendentes de entrega.
Fluxo Normal:
1.	O ciclista acessa o sistema.
2.	O ciclista escolhe um pedido disponível.
3.	O sistema confirma a seleção e atualiza o status do pedido.
Pós-condição: O pedido está atribuído a um entregador.

Caso de Uso: Entregar os produtos solicitados
Nome: Entregar os produtos solicitados
Ator: Ciclista
Pré-condição: O ciclista deve ter um pedido atribuído.
Fluxo Normal:
1.	O ciclista retira os produtos na farmácia.
2.	O ciclista realiza a entrega ao cliente.
3.	O sistema confirma a entrega.
Pós-condição: Os produtos são entregues ao cliente e o pedido é finalizado.

Caso de Uso: Receber os produtos comprados
Nome: Receber os produtos comprados
Ator: Cliente
Pré-condição: O cliente deve ter realizado uma compra.
Fluxo Normal:
1.	O cliente recebe os produtos do ciclista.
2.	O sistema registra a entrega.
3.	O cliente confirma o recebimento no sistema.
Pós-condição: A compra é concluída com sucesso.
