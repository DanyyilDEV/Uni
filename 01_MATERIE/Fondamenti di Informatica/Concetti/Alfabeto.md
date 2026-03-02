---
tipo: concetto
argomento: Alfabeti
tags:
stato: finito
---

# Alfabeto ($\Sigma$)

### Definizione Formale
Un insieme finito non vuoto $\Sigma$ (sigma) di simboli o caratteri prende il nome di **Alfabeto**. Ogni singolo elemento $a$ tale che $a \in \Sigma$ è un carattere dell'alfabeto.

### Analogia
Immagina i mattoncini LEGO: l'Alfabeto è l'insieme di tutti i tipi di pezzi singoli a tua disposizione nella scatola (quello rosso da 2, quello blu da 4, ecc.). Non puoi costruire nessuna "parola" che non sia composta esclusivamente da questi pezzi base.

### Spiegazione (Feynman)
Un alfabeto è semplicemente la "lista dei componenti" ammessi. In informatica può essere piccolissimo, come l'alfabeto binario $\Sigma = \{0, 1\}$, o molto vasto come quello di una tastiera. La regola fondamentale è che deve essere un insieme **finito**: devi sapere esattamente quali simboli hai a disposizione prima di iniziare a combinarli.

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