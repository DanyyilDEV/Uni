---
materia: "[[MOC_Fondamenti di Informatica 1]]"
argomento: General
tipo: lezione
data: 2026-03-05
stato:
aliases:
  - Linguaggi Formali e Automi a stato finito
---

# Linguaggi Formali e Automi a stato finito

## Note di Flusso
> [!NOTE] Sintesi rapida
> 

## Punti Chiave
- 

## Testo

>[!NOTE] Definizione
>Dato l'alfabeto $\Sigma=\{a,b\}$ l'insieme $L_3=\{a^n, b^n | n\ge1\}$ è un linguaggio composto da tutte le stringhe della concatenazione di un certo numero di $a$, seguito dalla concatenazione dello stesso numero di $b$

- $a^0 b^0 = \epsilon\notin L_3$ 
- $a^2b^2 = aabb$
- $a^3b^3 = aaabbb$

- ### Potenza di un Linguaggio
- $L^h = L^1 \circ L^{h-1}$ per $h\ge1$

>[!NOTE] L'insieme delle stringhe di lunghezza $h$ sull'alfabeto $\Sigma$ è indicato con $\Sigma^h$ 

- ### Stella di Kleene
--- 
Materia: [[MOC_Fondamenti di Informatica 1]]

<% tp.file.cursor() %>