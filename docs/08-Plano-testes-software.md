# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

O plano de testes de software é gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Apresente os cenários de teste utilizados na realização dos testes da sua aplicação. Escolha cenários de teste que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico, o grupo deve detalhar quais funcionalidades foram avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Não deixe de enumerar os casos de teste de forma sequencial e garantir que o(s) requisito(s) associado(s) a cada um deles esteja(m) correto(s) — de acordo com o que foi definido na <a href="02-Especificacao.md">Especificação do projeto</a>.

Por exemplo:

| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-00X - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que estes consigam criar e gerenciar seu perfil. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar em "Criar conta" <br> - Preencher os campos obrigatórios (e-mail, nome, sobrenome, celular, CPF, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Registrar" |
| Critério de êxito | - O cadastro foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Nome do integrante da equipe. |

<br>

| **Caso de teste**  | **CT-002 – Efetuar login**  |
|:---: |:---: |
| Requisito associado | RF-00Y - A aplicação deve possuir opção de fazer login, sendo o login o endereço de e-mail. |
| Objetivo do teste | Verificar se o usuário consegue realizar login. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" |
| Critério de êxito | - O login foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Nome do integrante da equipe. |

<br>









| **Caso de teste**  | **CT-008 – Realizar compra de um produto**  |
|:---: |:---: |
| Requisito associado | RF-008	Permitir que os clientes realizem compras no sistema. |
| Objetivo do teste | Verificar se o cliente consegue adicionar um produto e iniciar o processo de compra com sucesso. |
| Passos | - Acessar o navegador - Informar o endereço do site: https://eco-farma.vercel.app/index.html - Clicar em "Produtos" ou rolar até a seção de produtos - Selecionar um produto disponível - Clicar em "Adicionar ao carrinho" - Verificar se o produto foi adicionado corretamente |
| Critério de êxito | - O produto é adicionado ao carrinho com sucesso e o botão de compra está habilitado. |
| Responsável pela elaboração do caso de teste | Victória Gonçalves da Silva |

<br>

| **Caso de teste**  | **CT-010 – Exibir informações institucionais**  |
|:---: |:---: |
| Requisito associado | RF-010	Exibir informações institucionais sobre o projeto e seus objetivos. |
| Objetivo do teste | Verificar se o cliente consegue visualizar informações sobre o projeto. |
| Passos | - Acessar o navegador; <br> Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> Descer até a seção de rodapé; <br> Clicar em "Sobre Nós" na aba de FAQ |
| Critério de êxito | - O produto é adicionado ao carrinho com sucesso e o botão de compra está habilitado. |
| Responsável pela elaboração do caso de teste | Letícia Rodrigues Batista |

<br>

| **Caso de teste**  | **CT-011 – Gerenciar informações de conta**  |
|:---: |:---: |
| Requisito associado | RF-011	Permitir que o cliente visualize e edite suas informações de conta. |
| Objetivo do teste | Verificar se o cliente consegue visualizar e editar as informações de conta. |
| Passos | - Acessar o navegador; <br> Informar o endereço do site: https://eco-farma.vercel.app/index.html; <br> Clicar em "Entrar" na seção de cabeçalho; <br> Inserir as informações de login; <br> Clicar no botão "Entrar"; <br> Esperar a página carregar novamente; <br> Clicar em "Minha Conta" na seção de cabeçalho; <br> Fazer as mudanças desejadas nas abas "Editar Perfil", "Meu Endereço" e "Mudar Senha" |
| Critério de êxito | - As informações são alteradas com sucesso. |
| Responsável pela elaboração do caso de teste | Letícia Rodrigues Batista |

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
