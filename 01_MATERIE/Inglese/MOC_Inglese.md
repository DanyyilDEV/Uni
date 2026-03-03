---
type: subject-hub
materia: Inglese
creato: 2026-03-02
aggiornato: 2026-03-02
---

# 🧭 MOC_Inglese


## ✅ Panoramica


- Alessi (o Justin) 

- Prova in itinere un group project di 4-5 persone per creare un qualcosa nel nostro ambito, requisito 80% delle ore di frequenza.

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
TABLE argomento AS "Argomento", stato AS "Stato"
FROM ""
WHERE file.folder = this.file.folder + "/Concetti"
AND tipo = "concetto"
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