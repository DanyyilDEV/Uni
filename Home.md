---
tipo: dashboard
---

# VAULT UNIVERSITARIO

`$= dv.date('today').toFormat('EEEE, dd MMMM yyyy')`

---

> [!quote] 
> *"La semplicità è l'ultima sofisticazione."* 
> — Leonardo da Vinci

---

## ◆ Accesso Rapido

> [!multi-column]
>
>> [!note]- 📚 Materie
>> ```dataview
>> LIST FROM "01_MATERIE"
>> WHERE type = "subject-hub"
>> SORT file.name ASC
>> ```
>
>> [!example]- 📝 Ultime Note
>> ```dataview
>> LIST FROM ""
>> WHERE (tipo = "lezione" OR tipo = "concept")
>> SORT file.mday DESC
>> LIMIT 5
>> ```
>
>>[!NOTE] [[Orario]]

---

## ◆ Panoramica Vault

> [!summary]- Statistiche
> 
> **Note Totali**
> `$= dv.pages('').length`
> 
> **Lezioni Completate**
> `$= dv.pages('""').where(p => p.tipo == "lezione").length`
> 
> **Concetti Mappati**
> `$= dv.pages('""').where(p => p.tipo == "concept").length`

---

## ◆ Comandi Essenziali

| Shortcut   | Azione             |
| :--------- | :----------------- |
| `Alt + N`  | Apri menu Template |
| `Ctrl + O` | Cerca nota         |
| `Ctrl + G` | Grafo connessioni  |

---

## ◆ Task di Oggi
```dataview
TASK
WHERE !completed
LIMIT 5
```

---

*Ultimo aggiornamento: `$= dv.date('today').toFormat('dd/MM/yyyy')`*