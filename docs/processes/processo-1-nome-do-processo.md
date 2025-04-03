### 3.3.1 Processo 1 – Entrega dos Produtos

#### Diagrama TO BE
Nesse diagrama foi passado a nossa proposta de compra online e entrega sustentável.

![TO BE Processo 1](../images/TOBE1.png)


#### Detalhamento das atividades

**Solicitar Entrega**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| nome_cliente| Caixa de Texto|   obrigatório    |                   |
| endereço_entrega|    	Área de Texto              |   obrigatório             |                   |
| telefone_contato| Caixa de Texto   | formato: (99) 99999-9999 |                |
| observações | Área de Texto  | opcional |           |
| comprovante_identidade| Arquivo  | formatos permitidos: .pdf, .jpg, .png	 |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| continuar | Realizar pagamento  | default |
| cancelar      |          Fim do processo                      |         cancel          |


**Realizar pagamento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| método_pagamento | Seleção única |  opções: cartão de crédito, débito, boleto    | cartão de crédito    |
| valor_total     | Número |  obrigatório, maior que zero  |                   |
| dados_cartão   |  Caixa de Texto   |   obrigatório se método for cartão    |                   |
| validade_cartão  |  Data  |   obrigatório se método for cartão  |                   |
| código_segurança    |   Número   |   obrigatório se método for cartão, 3 dígitos    |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| continuar | 	Enviar pagamento | default |
| cancelar      |          Fim do processo                      |         cancel          |


**Receber solicitação**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| tipo_pagamento|Seleção única|   Opções: cartão de crédito, débito, boleo    | Cartão de ctédito                  |
| dados_entrega|    	Área de Texto              |   obrigatório             | -                  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Continuar | 	Separar valor do produto e frete | default |
| Cancelar      |          Fim do processo                      |         cancel          |


**Separar valor do produto e frete**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| valor_produto|Número|   Obrigatório, maior que zero    | -                  |
| valor_frete| Número              |   Obrigatório, maior que zero   | -                  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Continuar | Enviar pagamento	| default |
| Cancelar | Fim do processo	| cancel |


**Enviar pagamento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|  | 	|  |
|  | 	|  |

**Solicitar entregador**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|  | 	|  |
|  | 	|  |


**Enviar dados para entregador**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|  | 	|  |
|  | 	|  |


**Coletar produto**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|  | 	|  |
|  | 	|  |


**Entregar produto**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|  | 	|  |
|  | 	|  |


**Confirmar entrega**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|  | 	|  |
|  | 	|  |



**Receber pagamento do frete**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
|  | 	|  |
|  | 	|  |


_Descreva aqui cada uma das propriedades das atividades do processo 1. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_
