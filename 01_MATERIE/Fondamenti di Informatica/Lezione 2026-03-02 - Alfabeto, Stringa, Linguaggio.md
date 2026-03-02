---
materia: "[[MOC_Fondamenti di Informatica]]"
argomento: Alfabeti, Stringhe, Linguaggi
tipo: lezione
data: 2026-03-02
stato: Da studuare
aliases:
---

# Alfabeto, Stringa, Linguaggio


# Punti Chiave
- #Alfabeti
- #Stringhe
- #Linguaggi

---
# Note di Flusso

---
# Testo

### ==Alfabeto==

>[!NOTE] Definizione
> Un insieme finito non vuoto $\Sigma$ (sigma) di simboli(o caratteri) prende il nome di 
> ==**Alfabeto**==
> ### $$ a \in \Sigma$$

---
- **Esempi di Alfabeti:**

> [!NOTE] ==Alfabeto binario==
> $\Sigma = \{0, 1\}$

> [!NOTE] ==Alfabeto "tastiera"==
> $\Sigma = \{A, ..., Z, a, ..., z, +, -, *, ..., =, ...\}$

--- 

Quando iniziamo a combinare i simboli di un alfabeto, creiamo delle stringhe (o parole).
L'insieme di tutte le possibili stringhe costruibili su un alfabeto $\Sigma$ si indica con $\Sigma^{*}$ ed è chiamato **Monoide Libero** o **Monoide Sintattico**

>[!NOTE] Concetti Chiave delle stringhe:
> - Stringa Vuota ($\epsilon$):  E' una stringa che non contiene caratteri. La sua 
> lunghezza è zero  ( $|\epsilon| = 0$ ).
> - Appartenenza: se un carattere $a \in \Sigma$ allora fa parte anche dell'insieme di stringhe $\Sigma^{*}$. Tuttavia, non tutte le stringhe in $\Sigma^{*}$ sono singoli caratteri, quindi 
> $a \in \Sigma^{*}$ **NON** implica necessariamente $a \in \Sigma$
> - Concatenazione ($\circ$): E' l'operazione di "unire" due stringhe.
> - Potenza di una stringa ($x^h$): Indica la concatenzazione di una stringa $x$ con se stessa per $h$ volte. Per definizione $x^0 = \epsilon$

----


### ==Linguaggio==

>[!NOTE] Definizione
>Dato un alfabeto $\Sigma$, si definisce un **Linguaggio** qualsiasi sottoinsieme di $\Sigma^*$, 
>e lo indichiamo con $L \subseteq \Sigma^*$

>[!SETTINGS] Operazioni tra Linguaggi
>**Unione** ($L_1 \cup L_2$): Un nuovo linguaggio contenente le parole che stanno in $L_1$ **o** in $L_2$.
>**Intersezione** ($L_1 \cap L_2$): Contiente solo le parole presenti in **entrambi** i linguaggi.
>**Complemento** ($\overline{L}$): Contiene tutte le stringhe di $\Sigma^*$ che **non** fanno parte di $L$

---
Esercizi: [[Esercizi_Alfabeto]]









Materia: [[MOC_Fondamenti di Informatica]]

<% tp.file.cursor() %>