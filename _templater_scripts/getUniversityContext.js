/*
  getUniversityContext.js
  Infers: 01_MATERIE -> Anno X -> Materia
*/

const path = require("path");

function requireScript(scriptFile) {
  const vaultBasePath = app?.vault?.adapter?.basePath;
  if (!vaultBasePath) {
    throw new Error("Impossibile risolvere il percorso del vault.");
  }
  return require(path.join(vaultBasePath, "_templater_scripts", scriptFile));
}

const getUniversityConfig = requireScript("universityConfig.js");
const createUniversityNoteUtils = requireScript("universityNoteUtils.js");

const universityConfig = getUniversityConfig();
const configLabels = universityConfig?.labels ?? {};
const configFs = universityConfig?.fs ?? {};

const GENERAL_LABEL = configLabels.general ?? "General";
const UNIVERSITY_ROOT = configFs.universityRoot ?? "01_MATERIE";

const { normalizeParcial, normalizeYear } = createUniversityNoteUtils();

function getUniversityContext(targetFile) {
  if (!targetFile) return { subject: GENERAL_LABEL, year: null, parcial: GENERAL_LABEL };

  const parentPath = targetFile.parent?.path ?? "";
  const pathParts = parentPath.split("/").filter(Boolean);
  
  // Trova dove inizia 01_MATERIE
  const uniIndex = pathParts.findIndex(p => p === UNIVERSITY_ROOT);
  const relativeParts = uniIndex === -1 ? pathParts : pathParts.slice(uniIndex + 1);

  // relativeParts[0] dovrebbe essere "Anno 1", relativeParts[1] "Analisi 1"
  const pathYearCandidate = relativeParts.find(p => normalizeYear(p, { allowLiteral: false }));
  const year = normalizeYear(app.metadataCache.getFileCache(targetFile)?.frontmatter?.year) ?? pathYearCandidate;

  // Se il primo segmento è l'anno, la materia è il secondo. Altrimenti è il primo.
  const firstIsYear = !!normalizeYear(relativeParts[0], { allowLiteral: false });
  const subject = firstIsYear ? (relativeParts[1] ?? GENERAL_LABEL) : (relativeParts[0] ?? GENERAL_LABEL);

  return { subject, year, parcial: GENERAL_LABEL };
}

module.exports = getUniversityContext;