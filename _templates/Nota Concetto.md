<%*
// 1. SETUP E DIPENDENZE
const currentFile = tp.config.target_file;
const context = await tp.user.getUniversityContext(currentFile);
const noteUtils = await tp.user.universityNoteUtils();

const {
    ensureFolderPath,
    sanitizeFileName,
    resolveSubjectParcialTema,
    constants = {},
} = noteUtils ?? {};

const generalLabel = constants?.general ?? "General";
const contextSubject = context?.subject ?? generalLabel;

// 2. CHIEDI MATERIA E ARGOMENTO
const placement = await resolveSubjectParcialTema(tp, {
    currentFile,
    contextSubject,
    includeParcial: false,
    promptYearWhen: "never", 
    contextTema: generalLabel,
});

const {
    targetFolder,
    subject: resolvedSubject = generalLabel,
    tema: resolvedTema = generalLabel,
} = placement ?? {};

// 3. DEFINIZIONE NOMI E PERCORSI
const today = tp.date.now("YYYY-MM-DD");
const safeTitle = sanitizeFileName(currentFile.basename) || "Nuovo Concetto";

await ensureFolderPath(targetFolder);
const destinationPath = `${targetFolder}/${safeTitle}`;

// 4. COSTRUZIONE DEL CONTENUTO
const frontMatter = [
    "---",
    "type: concept",
    "tags: [concetto]",
    `materia: "[[MOC_${resolvedSubject}]]"`,
    `argomento: ${JSON.stringify(resolvedTema)}`,
    `creato: ${today}`,
    "stato: #fase/nuova",
    "aliases: []",
    "---",
].join("\n");

let content = `${frontMatter}\n\n`;
content += `# ${safeTitle}\n\n`;

content += `## Definizione Formale\n> (Inserisci qui la definizione rigorosa da manuale o slide)\n\n`;

content += `## Analogia\n*(Spiegazione semplice per intuizione)*\n\n`;

content += `## Spiegazione (Feynman)\n`;
// Inserisce il cursore qui per iniziare a scrivere subito la spiegazione
content += tp.file.cursor() + "\n\n";

content += `## Collegamenti (Backlinks)\n`;
// Inseriamo il blocco dataviewjs correttamente formattato come blocco di codice
content += "```dataviewjs\n";
content += `const concept = dv.current();
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
}\n`;
content += "```\n";

tR = content;

// 5. SPOSTAMENTO
setTimeout(async () => {
    try {
        await tp.file.move(destinationPath);
        new Notice(`Concetto archiviato in ${resolvedSubject}`, 3000);
    } catch (e) {
        new Notice("Errore spostamento concetto: " + e.message, 5000);
    }
}, 200);
%>