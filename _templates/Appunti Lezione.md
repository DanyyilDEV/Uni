<%*
// 1. SETUP E DIPENDENZE
const currentFile = tp.config.target_file;
const getConfig = tp.user.universityConfig;
const config = typeof getConfig === "function" ? await getConfig() : null;
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
const topicInput = await tp.system.prompt("Argomento della Lezione");
const rawTopic = topicInput?.trim();
const safeTopic = sanitizeFileName(rawTopic) || "Senza Titolo";

const noteTitle = rawTopic ? `Lezione ${today} - ${safeTopic}` : `Lezione ${today}`;
const headingTitle = rawTopic ? safeTopic : noteTitle;

await ensureFolderPath(targetFolder);
const destinationPath = `${targetFolder}/${noteTitle}`;

// 4. COSTRUZIONE DEL CONTENUTO (Minimalista)
const alias = JSON.stringify(headingTitle);
const frontMatter = [
    "---",
    `materia: "[[MOC_${resolvedSubject}]]"`,
    `argomento: ${JSON.stringify(resolvedTema)}`,
    "tipo: lezione",
    `data: ${today}`,
    "stato: #fase/nuova",
    `aliases: [${alias}]`,
    "---",
].join("\n");

let content = `${frontMatter}\n\n`;
content += `# ${headingTitle}\n\n`;

content += `## Note di Flusso\n`;
content += `> [!NOTE] Sintesi rapida\n> \n\n`;

// Sezione per il codice (opzionale)
const lang = await tp.system.suggester(["C++", "Java", "Python", "SQL", "Nessuno"], ["cpp", "java", "python", "sql", "none"]);
if (lang && lang !== "none") {
    content += "### Codice\n";
    content += "```" + lang + "\n// " + safeTopic + "\n\n```\n\n";
}

content += `## Punti Chiave\n- \n\n`;
content += `## Approfondimenti e Dubbi\n- \n\n`;
content += `--- \n`;
content += `Materia: [[MOC_${resolvedSubject}]]\n\n`;

// Il cursore viene posizionato subito sotto "Note di Flusso" per scrivere all'istante
content += tp.file.cursor();

// 5. APPLICAZIONE E SPOSTAMENTO
tR = content;

setTimeout(async () => {
    try {
        await tp.file.move(destinationPath);
        new Notice(`Archiviato: ${resolvedSubject}`, 3000);
    } catch (e) {
        new Notice("Errore spostamento: " + e.message, 5000);
    }
}, 200);
%>