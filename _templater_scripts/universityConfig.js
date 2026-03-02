const universityConfig = {
  fs: {
    universityRoot: "01_MATERIE",
    parcialContainer: "", 
    temaContainer: "Argomenti",   
  },
  labels: {
    subject: "Materia",
    year: "Anno",
    parcial: "General",
    final: "Esame",
    tema: "Argomento",
    general: "General",
  },
  years: [], // Vuoto: non vogliamo divisione per anni
  parciales: ["General"],
  schema: {
    types: {
      lecture: "lecture",
      concept: "concept",
      "subject-hub": "subject-hub",
      general: "general",
    },
  },
};

function universityConfigScript() {
  return universityConfig;
}

module.exports = universityConfigScript;