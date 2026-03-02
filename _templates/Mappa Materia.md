<%*
// 1. SETUP E DIPENDENZE
const currentFile = tp.config.target_file;
const context = await tp.user.getUniversityContext(currentFile);
const noteUtils = await tp.user.universityNoteUtils();

const {
    ensureFolderPath,
    sanitizeFileName,
    resolveSubjectAndParcial,
} = noteUtils ?? {};

const generalLabel = "General";
const contextSubject = context?.subject ?? generalLabel;

// 2. RISOLUZIONE POSIZIONE (Senza Anno)
const placement = await resolveSubjectAndParcial(tp, {
    currentFile,
    contextSubject,
    includeParcial: false,
    includeYear: false,
});

const { subject, subjectRootPath, baseUniversityPath } = placement ?? {};
const targetRoot = subjectRootPath || baseUniversityPath;
const selectedSubject = subject || generalLabel;

await ensureFolderPath(targetRoot);

// 3. DEFINIZIONE NOMI
const displayTitle = `MOC_${selectedSubject}`;
const safeFileBase = sanitizeFileName(displayTitle) || "Mappa Materia";
const destinationPath = `${targetRoot}/${safeFileBase}`;

const timestamp = tp.date.now("YYYY-MM-DD");

// 4. COSTRUZIONE FRONTMATTER
const frontMatter = [
    "---",
    "type: subject-hub",
    `materia: "${selectedSubject}"`,
    `creato: ${timestamp}`,
    `aggiornato: ${timestamp}`,
    "---",
].join("\n");

// 5. COSTRUZIONE CORPO DEL FILE (Query Dinamiche)
let lines = [
    frontMatter,
    `\n# 🧭 ${displayTitle}`,
    "\n## ✅ Panoramica",
    "- [ ] Obiettivi dell'esame",
    "- [ ] Data appello:",
    "\n---",
    "\n## 📘 Lezioni",
    "```dataview",
    'TABLE data AS "Data", argomento AS "Argomento"',
    'FROM ""',
    'WHERE file.folder = this.file.folder',
    'AND tipo = "lezione"',
    'AND file.name != this.file.name',
    "SORT data DESC",
    "```",
    "\n## 💡 Concetti e Definizioni",
    "```dataview",
    'TABLE argomento AS "Categoria", stato AS "Stato"',
    'FROM ""',
    'WHERE file.folder = this.file.folder',
    'AND type = "concept"',
    'AND file.name != this.file.name',
    "SORT argomento ASC",
    "```",
    "\n## ⏳ Attività Aperte",
    "```dataview",
    "TASK",
    'FROM ""',
    'WHERE !completed',
    'AND file.folder = this.file.folder',
    "```"
];

tR = lines.join("\n");

// 6. SPOSTAMENTO FISICO
setTimeout(async () => {
    try {
        await tp.file.move(destinationPath);
        new Notice(`🧭 Mappa creata: ${targetRoot}`, 3000);
    } catch (e) {
        new Notice("Errore spostamento Mappa: " + e.message, 5000);
    }
}, 200);
%>