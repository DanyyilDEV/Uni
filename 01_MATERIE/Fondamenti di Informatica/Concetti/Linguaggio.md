---
tipo: concetto
argomento: Linguaggi
tags:
stato: finito
---

# Linguaggio

### Definizione Formale
Dato un alfabeto $\Sigma$, si definisce **Linguaggio** qualsiasi sottoinsieme dell'insieme di tutte le possibili stringhe $\Sigma^*$, e lo indichiamo con $L \subseteq \Sigma^*$.

### Analogia
Se $\Sigma^*$ rappresenta tutte le combinazioni di lettere possibili al mondo, un "Linguaggio" è come un vocabolario specifico (es. il dizionario di Italiano). Solo alcune combinazioni specifiche fanno parte di quel particolare insieme.

### Spiegazione (Feynman)
Un linguaggio è semplicemente una scelta di stringhe che rispettano certe caratteristiche. Possiamo manipolare i linguaggi usando le operazioni tra insiemi: l'**Unione** (mettere insieme le parole di due linguaggi), l'**Intersezione** (tenere solo le parole comuni) e il **Complemento** (tutte le stringhe che non fanno parte del linguaggio).

### Collegamenti (Backlinks)
```dataviewjs
const concept = dv.current();
const targetPath = concept.file.path;

const matches = dv.pages("")
    .where(p => p.file.folder === concept.file.folder && p.tipo === "lezione")
    .where(p => {
        const outlinks = p.file.outlinks.values.map(l => l.path);
        return outlinks.includes(targetPath);
    })
    .sort(p => p.data, 'desc');

if (matches.length > 0) {
    dv.list(matches.map(p => p.file.link));
} else {
    dv.paragraph("*Nessun collegamento trovato nelle lezioni di questa cartella.*");
}