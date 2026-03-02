---
tipo: concetto
argomento: Stringhe
tags:
  - "#Stringhe"
stato: finito
---

# Stringa

### Definizione Formale
Una sequenza finita di caratteri costruita su un alfabeto $\Sigma$. L'insieme di tutte le possibili stringhe costruibili su un alfabeto $\Sigma$ si indica con $\Sigma^{*}$ ed è chiamato **Monoide Libero**. Include la **Stringa Vuota** ($\epsilon$), che non contiene caratteri e ha lunghezza zero ($|\epsilon| = 0$).

### Analogia
Se l'alfabeto sono i mattoncini LEGO singoli, la stringa è la costruzione specifica che realizzi incastrandoli in fila. La stringa vuota $\epsilon$ è come avere il piano di lavoro pronto e le istruzioni in mano, ma senza aver ancora montato alcun mattoncino sopra.

### Spiegazione (Feynman)
Una stringa è quello che ottieni quando combini i simboli dell'alfabeto tramite la **concatenazione** ($\circ$). Un punto fondamentale è che $\epsilon$ è l'elemento neutro: se lo unisci a una stringa, la stringa rimane identica. Ricorda inoltre che se un carattere appartiene all'alfabeto ($\Sigma$), esso è anche una stringa ($\Sigma^{*}$), ma non tutte le stringhe sono singoli caratteri.

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