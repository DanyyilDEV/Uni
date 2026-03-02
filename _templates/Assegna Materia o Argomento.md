<%*
// Dipendenze: _templater_scripts/getUniversityContext.js, _templater_scripts/universityNoteUtils.js, _templater_scripts/universityConfig.js

// --- 0. RECUPERO FILE ATTIVO ---
const currentFile = tp.config.target_file;
if (!currentFile) {
    new Notice("⛔️ Errore: Nessun file attivo da aggiornare.", 10000);
    return;
}

const context = await tp.user.getUniversityContext(currentFile);
const getConfig = tp.user.universityConfig;
const config = typeof getConfig === "function" ? await getConfig() : null;
const configLabels = config?.labels ?? {};

const { subject: contextSubjectRaw } = context ?? {};
const contextTemaRaw = tp.frontmatter?.argomento; // Adattato alla tua proprietà 'argomento'

const noteUtils = await tp.user.universityNoteUtils();
const {
    ensureFolderPath,
    toSlug,
    resolveSubjectParcialTema,
    constants = {},
} = noteUtils ?? {};

if (!noteUtils || !resolveSubjectParcialTema) {
    new Notice("⛔️ Errore: Utility di posizionamento non disponibili.", 10000);
    return;
}

const generalLabel = constants?.general ?? configLabels.general ?? "General";
const contextTema = contextTemaRaw ?? generalLabel;
const contextSubject = contextSubjectRaw ?? generalLabel;

// --- 1. RISOLUZIONE NUOVA POSIZIONE ---
const placement = await resolveSubjectParcialTema(tp, {
    currentFile,
    contextSubject,
    includeParcial: false,
    promptYearWhen: "never", // Struttura piatta, non chiediamo l'anno
    contextTema,
});

if (!placement) {
    new Notice("ℹ️ Spostamento annullato.", 5000);
    return;
}

const {
    targetFolder,
    subject: resolvedSubject = generalLabel,
    tema: resolvedTema = generalLabel,
} = placement;

if (!targetFolder) {
    new Notice("⛔️ Errore: Impossibile risolvere la cartella di destinazione.", 10000);
    return;
}

await ensureFolderPath(targetFolder);

const tema = resolvedTema?.toString().trim() || generalLabel;
const subject = resolvedSubject || generalLabel;
const extension = currentFile.extension ?? "md";
const destinationMovePath = `${targetFolder}/${currentFile.basename}`;
const needsMove = currentFile.path !== `${targetFolder}/${currentFile.basename}.${extension}`;

// --- 2. SPOSTAMENTO FISICO ---
if (needsMove) {
    await tp.file.move(destinationMovePath);
}

// --- 3. AGGIORNAMENTO PROPRIETÀ (METADATI) ---
await app.fileManager.processFrontMatter(currentFile, (frontmatter) => {
    frontmatter.materia = `[[MOC_${subject}]]`;
    frontmatter.argomento = tema;
    // Rimuoviamo l'anno se presente per coerenza con la tua struttura piatta
    delete frontmatter.year; 
    delete frontmatter.course; // Pulizia vecchio tag del workflow originale
});

// --- 4. NOTIFICA FINALE ---
const subjectTag = toSlug(subject);
const temaTag = toSlug(tema);
const tagSummary = [
    subjectTag && `#${subjectTag}`,
    temaTag && temaTag !== subjectTag ? `#${temaTag}` : null,
].filter(Boolean).join(" ");

new Notice(
    `🏷️ Riordinato in: ${subject} / ${tema} ${tagSummary ? `(${tagSummary})` : ""}`,
    5000
);
%>