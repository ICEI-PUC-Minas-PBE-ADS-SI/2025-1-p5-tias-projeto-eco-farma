### 3.3.2 Processo 2 – Coleta de Blisters
 
#### Diagrama AS IS
Neste diagrama é apresentado o processo atual de coleta de blisters.


![image](https://github.com/user-attachments/assets/3041f43a-8794-41c3-a5ca-44331c3e71c0)


#### Detalhamento das atividades

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





