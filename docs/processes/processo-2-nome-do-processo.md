### 3.3.2 Processo 2 – Coleta de Blisters
 
#### Diagrama AS IS
Neste diagrama é apresentado o processo atual de coleta de blisters.


![image](https://github.com/user-attachments/assets/3041f43a-8794-41c3-a5ca-44331c3e71c0)


#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
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

**Nome da atividade 1**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
| ***Exemplo:***  |                  |                |                   |
| login           | Caixa de Texto   | formato de e-mail |                |
| senha           | Caixa de Texto   | mínimo de 8 caracteres |           |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
| ***Exemplo:***       |                                |                   |
| entrar               | Fim do Processo 1              | default           |
| cadastrar            | Início do proceso de cadastro  |                   |


**Nome da atividade 2**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| [Nome do campo] | [tipo de dados]  |                |                   |
|                 |                  |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| [Nome do botão/link] | Atividade/processo de destino  | (default/cancel/  ) |
|                      |                                |                   |

---
** teste



**Selecionar Medicamento**

| **Campo**           | **Tipo**         | **Restrições**  | **Valor default** |
| ------------------- | ---------------- | --------------- | ----------------- |
| nome_medicamento    | Caixa de Texto   | Obrigatório     |                   |

| **Comandos**        | **Destino**              | **Tipo**        |
| ------------------- | ------------------------ | --------------- |
| continuar           | Realizar pagamento       | default         |
| cancelar            | Fim do processo          | cancel          |

---

**Realizar pagamento**

| **Campo**           | **Tipo**         | **Restrições**                    | **Valor default** |
| ------------------- | ---------------- | ---------------------------------- | ----------------- |
| método_pagamento    | Seleção única    | Opções: cartão de crédito, débito | cartão de crédito |
| valor_total         | Número           | Obrigatório, maior que zero       |                   |
| dados_cartão        | Caixa de Texto   | Obrigatório se método for cartão  |                   |
| validade_cartão     | Data             | Obrigatório se método for cartão  |                   |
| código_segurança    | Número           | Obrigatório se método for cartão, 3 dígitos |                   |

| **Comandos**        | **Destino**              | **Tipo**        |
| ------------------- | ------------------------ | --------------- |
| continuar           | Utilizar medicamento     | default         |
| cancelar            | Fim do processo          | cancel          |

---

**Utilizar Medicamento**

| **Campo**           | **Tipo**         | **Restrições**  | **Valor default** |
| ------------------- | ---------------- | --------------- | ----------------- |
| id_medicamento      | Número           | Gerado automaticamente | autogerado |

| **Comandos**        | **Destino**              | **Tipo**        |
| ------------------- | ------------------------ | --------------- |
| continuar           | Encontrou local correto de descarte | default |
| cancelar            | Fim do processo          | cancel          |

---

**Encontrou local correto de descarte? (Decisão)**

| **Campo**           | **Tipo**         | **Restrições**  | **Valor default** |
| ------------------- | ---------------- | --------------- | ----------------- |
| decisão_local       | Seleção única    | Opções: Sim, Não |                   |

| **Comandos**        | **Destino**              | **Tipo**        |
| ------------------- | ------------------------ | --------------- |
| Sim                 | Descarte correto         | default         |
| Não                 | Descarte incorreto       | default         |

---

**Descarte correto**

| **Campo**           | **Tipo**         | **Restrições**  | **Valor default** |
| ------------------- | ---------------- | --------------- | ----------------- |
| id_descarte         | Número           | Gerado automaticamente | autogerado |
| data_descarte       | Data             | Obrigatório     |                   |

| **Comandos**        | **Destino**              | **Tipo**        |
| ------------------- | ------------------------ | --------------- |
| finalizar           | Fim do processo          | default         |

---

**Descarte incorreto**

| **Campo**           | **Tipo**         | **Restrições**  | **Valor default** |
| ------------------- | ---------------- | --------------- | ----------------- |
| id_descarte         | Número           | Gerado automaticamente | autogerado |
| motivo_descarte     | Caixa de Texto   | Obrigatório     |                   |

| **Comandos**        | **Destino**              | **Tipo**        |
| ------------------- | ------------------------ | --------------- |
| finalizar           | Fim do processo          | default         |

---





