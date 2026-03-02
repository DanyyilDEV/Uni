---
type: concept
tags:
  - concetto
materia: "[[MOC_Elementi di Analisi 1]]"
argomento: General
creato: 2026-03-02
stato:
aliases: []
---

# Untitled

## Definizione Formale
> (Inserisci qui la definizione rigorosa da manuale o slide)

## Analogia
*(Spiegazione semplice per intuizione)*

## Spiegazione (Feynman)
<% tp.file.cursor() %>

## Collegamenti (Backlinks)
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
```
