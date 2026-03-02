---
type: subject-hub
materia: "Fondamenti di Informatica"
creato: 2026-03-02
aggiornato: 2026-03-02
---

# 🧭 MOC_Fondamenti di Informatica

## ✅ Panoramica
- Georgia Fargetta
- Tams: il8umlf
- Prove in Itinere al termine di quasi tutte le lezioni
	- Saranno valide solo se sostenute per l'80%
	- 12 minuti - 10 Domande
	- Voto dato globalmente e comunicato il giorno prima della prima prova scritta solo alle persone che si prenotano, se non ti prenoti te la metti nel culo perche il voto viene annullato.
	- 

---

## 📘 Lezioni
```dataview
TABLE data AS "Data", argomento AS "Argomento"
FROM ""
WHERE file.folder = this.file.folder
AND tipo = "lezione"
AND file.name != this.file.name
SORT data DESC
```

## 💡 Concetti e Definizioni
```dataview
TABLE argomento AS "Categoria", stato AS "Stato"
FROM ""
WHERE file.folder = this.file.folder
AND type = "concept"
AND file.name != this.file.name
SORT argomento ASC
```

## ⏳ Attività Aperte
```dataview
TASK
FROM ""
WHERE !completed
AND file.folder = this.file.folder
```