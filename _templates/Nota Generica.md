<%*
// Dipendenze: _templater_scripts/getUniversityContext.js, _templater_scripts/universityNoteUtils.js, _templater_scripts/universityConfig.js

// --- 0. RECUPERO FILE E CONTESTO ---
const currentFile = tp.config.target_file;
const getConfig = tp.user.universityConfig;
const config = typeof getConfig === "function" ? await getConfig() : null;
const configLabels = config?.labels ?? {};
const context = await tp.user.getUniversityContext(currentFile);
const noteUtils = await tp.user.universityNoteUtils();

const {
    ensureFolderPath,
    ensureUniqueFileName,
    sanitizeFileName,
    toSlug,
    resolveSubjectParcialTema,
    constants = {},
} = noteUtils ?? {};

if (!noteUtils || !currentFile || !resolveSubjectParcialTema) {
    new Notice("⛔️ Errore: Utility di sistema o file di destinazione non disponibili.", 10000);
    return;
}

const generalLabel = constants?.general ?? configLabels.general;
if (!generalLabel) {
    new Notice("⛔️ Errore: Label 'General' non configurata.", 10000);
    return;
}

const contextSubject = context?.subject ?? generalLabel;

// Esecuzione del posizionamento (Anno rimosso dalla logica di prompt)
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

const selectedSubject = resolvedSubject || generalLabel;
const selectedTema = resolvedTema || generalLabel;

if (!targetFolder) {
    new Notice("⛔️ Errore: Impossibile determinare la cartella di destinazione.", 10000);
    return;
}

await ensureFolderPath(targetFolder);

// --- 1. VALIDAZIONE ---
const basename = (currentFile.basename ?? "").toLowerCase();
// Controllo se il file è già esistente o nuovo (Senza nome)
if (!basename.startsWith("untitled") && !basename.startsWith("senza nome") && !basename.startsWith("sin título")) {
    const proceedChoice = await tp.system.suggester(
        ["Continua", "Annulla"],
        ["continue", "cancel"],
        false,
        `Eseguire 'Nota Generica' su questo file esistente?`
    );
    if (proceedChoice !== "continue") {
        new Notice(`ℹ️ Creazione nota annullata.`, 5000);
        return;
    }
}

// --- 2. PROMPT TITOLO E DEFINIZIONE NOME ---
const titleInput = await tp.system.prompt(
    "Titolo della nota",
    currentFile?.basename ?? "Nuova Nota"
);

if (titleInput === null) {
    new Notice(`ℹ️ Creazione nota annullata.`, 5000);
    return;
}

const rawTitle = titleInput?.trim();
const safeTitle = sanitizeFileName(rawTitle) || sanitizeFileName(currentFile?.basename) || "Nota Generica";

const extension = currentFile?.extension ?? "md";
const finalFileName = ensureUniqueFileName(targetFolder, safeTitle, extension);
const destinationMovePath = `${targetFolder}/${finalFileName}`;
const needsMove = currentFile?.path !== `${targetFolder}/${finalFileName}.${extension}`;

// --- 3. COSTRUZIONE CONTENUTO ---
const today = tp.date.now("YYYY-MM-DD");
const subjectSlug = toSlug(selectedSubject);
const temaSlug = toSlug(selectedTema);

const inlineTags = [
    subjectSlug && `#${subjectSlug}`,
    temaSlug && temaSlug !== subjectSlug ? `#${temaSlug}` : null,
    "#nota-generica",
].filter(Boolean).join(" ");

const aliasValue = JSON.stringify(rawTitle || safeTitle);

const frontMatter = [
    "---",
    `materia: "[[MOC_${selectedSubject}]]"`,
    `argomento: ${JSON.stringify(selectedTema)}`,
    "tipo: general",
    `data: ${JSON.stringify(today)}`,
    "stato: #fase/nuova",
    `aliases: [${aliasValue}]`,
    "---",
    "",
].join("\n");

// Output finale
tR = frontMatter;
if (inlineTags) {
    tR += `${inlineTags}\n\n`;
}

tR += `# ${rawTitle || safeTitle}\n\n`;
tR += `## 📝 Note\n\n`;
tR += tp.file.cursor();

// --- 4. SPOSTAMENTO FILE ---
if (needsMove) {
    await tp.file.move(destinationMovePath);
}
new Notice(`📝 Nota salvata in ${targetFolder}`, 5000);
%>