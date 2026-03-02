---
type: subject-hub
materia: "Programmazione 2"
creato: 2026-03-02
aggiornato: 2026-03-02
---

# 🧭 MOC_Programmazione 2

## ✅ Panoramica
- [ ] Obiettivi dell'esame
- [ ] Data appello:

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