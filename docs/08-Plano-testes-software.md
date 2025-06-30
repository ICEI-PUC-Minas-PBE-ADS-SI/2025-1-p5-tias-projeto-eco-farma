# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

O plano de testes de software é gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Apresente os cenários de teste utilizados na realização dos testes da sua aplicação. Escolha cenários de teste que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico, o grupo deve detalhar quais funcionalidades foram avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Não deixe de enumerar os casos de teste de forma sequencial e garantir que o(s) requisito(s) associado(s) a cada um deles esteja(m) correto(s) — de acordo com o que foi definido na <a href="02-Especificacao.md">Especificação do projeto</a>.

Por exemplo:

| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-001 - Permitir que usuários se cadastrem na plataforma com e-mail, CPF e endereço. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Clicar em "Entrar" <br> - Clicar em "Cadastrar" <br> - Preencher os campos obrigatórios (Nome completo, Gênero, Data de nascimento, celular, CPF, senha, Email e endereço) <br> - Clicar em "Cadastrar" |
| Critério de êxito | - Cliente cadastrado com sucesso! Acesse a página de login para entrar no site. |
| Responsável pela elaboração do caso de teste | Thiago Lacerda Santos Barbosa |

<br>

| **Caso de teste**  | **CT-002 – Visualizar mapa interativo**  |
|:---: |:---: |
| Requisito associado | RF-002 - Exibir mapa interativo com geolocalização de farmácias parceiras. |
| Objetivo do teste | Verificar se o usuário consegue visualizar o mapa interativo com geolocalização de farmácias parceiras. |
| Passos | - Acessar o navegador; <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Clicar em "Entrar"; <br> - Logar no sistema; <br> - Ir na página “Pontos de coleta”; <br> - Visualizar o mapa abaixo do cabeçalho da página<br> - Passar o cursor por cima dos pontos demarcados mapa; <br> |
| Critério de êxito | - Mapa funcional e exibindo endereço e nome do estabelecimento ao interagir com o cursor|
| Responsável pela elaboração do caso de teste | Camila de Paula Rodrigues |

<br>

| **Caso de teste**  | **CT-003 – Entrar e sair**  |
|:---: |:---: |
| Requisito associado | RF-003 - Realizar login e logout do sistema. |
| Objetivo do teste | Verificar se o usuário consegue entrar e sair da conta. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://eco-farma.vercel.app/login-register.html <br> - Preencher email e senha <br> - Clicar em "Entrar" <br> - Clicar em "Sair" |
| Critério de êxito | - O usuário logou e deslogou com sucesso. |
| Responsável pela elaboração do caso de teste | Walisson Ribeiro da Silva |

<br>

| **Caso de teste**  | **CT-004 – Avaliações e notas**  |
|:---: |:---: |
| Requisito associado | RF-004 - Avaliar o sistema com sugestões e nota. |
| Objetivo do teste | Realizar uma avaliação com nota. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://eco-farma.vercel.app/index.html <br> - Rolar a tela até a aba de avaliações <br> - Escrever a avaliação <br> - Selecionar a nota e enviar |
| Critério de êxito | - O usuário enviou a avaliação com sucesso. |
| Responsável pela elaboração do caso de teste | Walisson Ribeiro da Silva |

<br>

| **Caso de teste**  | **CT-005 – Cadastrar itens**  |
|:---: |:---: |
| Requisito associado | RF-005 - Permitir que farmácias cadastrem itens no sistema. |
| Objetivo do teste | Verificar se a farmácias consegue cadastrar itens no sistema. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Clicar em "Entrar" <br> - Logar no sistema com os dados da farmácia; <br> - Ir na aba “Produtos” ;<br> - Preencher os campos obrigatórios (Nome, Categoria, Preço, Estoque, Descrição, Imagem (.jpg ou .png)) <br> - Clicar em "Cadastrar" |
| Critério de êxito | -Mensagem de produto cadastrado com seu respectivo ID. |
| Responsável pela elaboração do caso de teste |Camila de Paula Rodrigues |

<br>

| **Caso de teste**  | **CT-006 – Gerar cupons**  |
|:---: |:---: |
| Requisito associado | RF-006 - Gerar cupons de desconto para os clientes que realizarem descarte de materiais. |
| Objetivo do teste | Verificar se os cupons estão sendo gerados |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://eco-farma.vercel.app/accounts-farmacia.html <br> - Digitar o cupom na aba "Gere cupons de desconto" <br> - Cadastrar o cupom <br> |
| Critério de êxito | - O usuário enviou a avaliação com sucesso. |
| Responsável pela elaboração do caso de teste | Walisson Ribeiro da Silva |

<br>

| **Caso de teste**  | **CT-007 – Cadastrar Cupons de desconto**  |
|:---: |:---: |
| Requisito associado | RF-007 - Permitir que clientes cadastrem os cupons de desconto no sistema. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar os cupons de desconto no sistema. |
| Passos | -Acessar o navegador; <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Clicar em "Entrar"; <br> - Logar no sistema; <br> - Ir na página “Minha conta”; <br> - Selecionar aba “ver pontuação”; <br> - Digitar o código do cupom no campo “Você pode cadastrar seus cupons aqui:”; <br> - Clicar em "Cadastrar"|
| Critério de êxito | - Cupom exibido no campo “Cupons Cadastrados” |
| Responsável pela elaboração do caso de teste |Thiago Lacerda Santos Barbosa |

<br>









| **Caso de teste**  | **CT-008 – Realizar compra de um produto**  |
|:---: |:---: |
| Requisito associado | RF-008	Permitir que os clientes realizem compras no sistema. |
| Objetivo do teste | Verificar se o cliente consegue adicionar um produto e iniciar o processo de compra com sucesso. |
| Passos | - Acessar o navegador - Informar o endereço do site: https://eco-farma.vercel.app/index.html - Clicar em "Produtos" ou rolar até a seção de produtos - Selecionar um produto disponível - Clicar em "Adicionar ao carrinho" - Verificar se o produto foi adicionado corretamente |
| Critério de êxito | - O produto é adicionado ao carrinho com sucesso e o botão de compra está habilitado. |
| Responsável pela elaboração do caso de teste | Victória Gonçalves da Silva |

<br>

| **Caso de teste**  | **CT-009 – Selecionar entregas disponíveis**  |
|:---: |:---: |
| Requisito associado | RF-009 - Permitir que ciclistas selecionem entregas disponíveis. |
| Objetivo do teste | Verificar se o entregador consegue selecionar as entregas disponíveis no sistema. |
| Passos | - Acessar o navegador; <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Clicar em "Entrar"; <br> - Logar no sistema com os dados de entregador; <br> - Ir na aba “Entregas a Fazer”; <br> -Clicar em “fazer entrega” ou “concluir entrega”; <br> |
| Critério de êxito | - Ao clicar em “fazer entrega” o status do pedido muda para “Fazendo entrega” <br> - Ao clicar em “Concluir entrega” o status do pedido muda para “Concluído” |
| Responsável pela elaboração do caso de teste | Thiago Lacerda Santos Barbosa |

<br>

| **Caso de teste**  | **CT-010 – Exibir informações institucionais**  |
|:---: |:---: |
| Requisito associado | RF-010	Exibir informações institucionais sobre o projeto e seus objetivos. |
| Objetivo do teste | Verificar se o cliente consegue visualizar informações sobre o projeto. |
| Passos | - Acessar o navegador; <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Descer até a seção de rodapé; <br> - Clicar em "Sobre Nós" na aba de FAQ |
| Critério de êxito | - O site exibe com sucesso as informações do projeto. |
| Responsável pela elaboração do caso de teste | Letícia Rodrigues Batista |

<br>

| **Caso de teste**  | **CT-011 – Gerenciar informações de conta**  |
|:---: |:---: |
| Requisito associado | RF-011	Permitir que o cliente visualize e edite suas informações de conta. |
| Objetivo do teste | Verificar se o cliente consegue visualizar e editar as informações de conta. |
| Passos | - Acessar o navegador; <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Clicar em "Entrar" na seção de cabeçalho; <br> - Inserir as informações de login; <br> - Clicar no botão "Entrar"; <br> - Esperar a página carregar novamente; <br> - Clicar em "Minha Conta" na seção de cabeçalho; <br> - Fazer as mudanças desejadas nas abas "Editar Perfil", "Meu Endereço" e "Mudar Senha" |
| Critério de êxito | - As informações são alteradas com sucesso. |
| Responsável pela elaboração do caso de teste | Letícia Rodrigues Batista |

<br>

| **Caso de teste**  | **CT-012 – Exibir detalhes**  |
|:---: |:---: |
| Requisito associado | RF-012 - Exibir detalhes dos produtos antes da compra. |
| Objetivo do teste | Verificar se o usuário consegue ver os detalhes dos produtos no sistema |
| Passos | - Acessar o navegador; <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Clicar em "Entrar"; <br> - Logar no sistema; <br> - Ir na página produtos; <br> - Selecionar produto específico; <br> - rolar a tela até "Informações adicionais"; <br> |
| Critério de êxito | - É possível ver os detalhes do produto|
| Responsável pela elaboração do caso de teste | Camila de Paula Rodrigues |

<br>

| **Caso de teste**  | **CT-013 – Gerenciar produtos no carrinho**  |
|:---: |:---: |
| Requisito associado | RF-013	Gerenciar o carrinho de compras do cliente. |
| Objetivo do teste | Verificar se o cliente pode visualizar, adicionar, remover e atualizar itens no carrinho. |
| Passos | - Acessar o site https://eco-farma.vercel.app/cart.html - Selecionar um ou mais produtos - Clicar em "Adicionar ao carrinho - Ir até o ícone ou botão do carrinho - Verificar a lista de produtos - Clicar em "Remover" ou alterar quantidade (caso disponível) |
| Critério de êxito | - O cliente consegue visualizar o carrinho corretamente e remover ou alterar itens conforme desejado. |
| Responsável pela elaboração do caso de teste | Victória Gonçalves da Silva |

<br>

| **Caso de teste**  | **CT-014 – Finalizar compra com pagamento**  |
|:---: |:---: |
| Requisito associado | RF-014 - Realizar checkout das compras com inserção de informações de pagamento. |
| Objetivo do teste | Validar se o processo de finalização da compra permite a inserção dos dados de pagamento corretamente. |
| Passos | - Acessar o site https://eco-farma.vercel.app/cart.html - Adicionar um produto ao carrinho - Clicar no carrinho e ir para o checkout - Preencher os dados solicitados de entrega e pagamento (ex: cartão de crédito, endereço, etc.) - Clicar em "Finalizar compra" |
| Critério de êxito | - O sistema conclui a compra e apresenta uma confirmação de sucesso. |
| Responsável pela elaboração do caso de teste | Victória Gonçalves da Silva |

<br>

| **Caso de teste**  | **CT-015 – Avaliar Produto**  |
|:---: |:---: |
| Requisito associado | RF-015 - Realizar avaliações sobre o produto na página de detalhes |
| Objetivo do teste | Avaliar produto específico |
| Passos | - Acessar o navegador; <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Clicar em "Entrar"; <br> - Logar no sistema; <br> - Ir na página produtos; <br> - Selecionar produto específico; <br> - rolar a tela ao final da página; <br> - Colocar nome, avaliação(descrição) e nota; <br> - Clicar em "Enviar Avaliação"  |
| Critério de êxito | - Avaliação enviada com sucesso! |
| Responsável pela elaboração do caso de teste | Bianca Marques Teixeira |

<br>

| **Caso de teste**  | **CT-016 – Selecionar Produto Farmacia**  |
|:---: |:---: |
| Requisito associado | RF-016 - Visualizar somente produtos da farmacia que selecionar na página principal |
| Objetivo do teste | visualizar somente produtos cadastrados da farmacia selecionada |
| Passos | - Acessar o navegador; <br> - Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> - Ir a página principal; <br> -Selecionar a farmácia específica;|
| Critério de êxito | - Redirecionado a lista de produtos filtrados |
| Responsável pela elaboração do caso de teste | Bianca Marques Teixeira |


## Ferramentas de testes (opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links úteis**:
> - [IBM - criação e geração de planos de teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e técnicas de testes ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de software: conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e geração de planos de teste de software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de teste para JavaScript](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
