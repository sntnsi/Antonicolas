// Chatbot local: réponses structurées autour de l'histoire de l'IA.
// Simple matching par mots-clefs + timeline interactif.


const messagesEl = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
const quick = document.querySelector('.quick-actions');


// Base de connaissances (résumée)
const KB = {
eliza: {
title: 'ELIZA (1966)',
desc: `ELIZA est l'un des premiers programmes de traitement du langage naturel, créé par Joseph Weizenbaum en 1966. Elle simule un psychothérapeute par règles simples de transformation de phrases.`,
year: 1966,
more: 'Approche: règles et substitution. Limitation: pas de compréhension réelle, illusion de conversation.'
},
parry: {
title: 'PARRY (1972)',
desc: `PARRY, développé par Kenneth Colby en 1972, simule un patient atteint de paranoïa. Il est plus « psychologique » qu\'ELIZA et a été utilisé dans des expériences cliniques.`,
year: 1972,
more: 'PARRY inclut des modèles d\'état interne, donnant l\'illusion d\'attitudes cohérentes.'
},
alice: {
title: 'ALICE (1995)',
desc: `ALICE (Artificial Linguistic Internet Computer Entity) par Richard Wallace utilise des motifs (AIML) pour générer des réponses; elle a gagné plusieurs compétitions de chatbots.`,
year: 1995,
more: 'Approche: templates AIML. Bonne pour règles, limitée pour compréhension contextuelle profonde.'
},
siri: {
title: 'Siri (2011)',
desc: `Siri, lancé commercialement par Apple en 2011, combine reconnaissance vocale, traitement du langage naturel et intégration de services pour agir comme assistant virtuel.`,
year: 2011,
more: 'Marque: intégration mobile + services web — transition vers assistants personnels basés sur cloud.'
},
modern: {
title: 'IA moderne (2010s–2020s)',
desc: `L\'ère du deep learning voit des modèles statistiques massifs (réseaux profonds, transformers). Les chatbots actuels s\'appuient sur de grands modèles de langage (LLMs).`,
year: 2018,
more: 'Tendance: modèles pré-entraînés, fine-tuning, éthique et gouvernance deviennent centraux.'
}
};


const timeline = [
{year:1966, label:'ELIZA — 1966'},
{year:1972, label:'PARRY — 1972'},
{year:1980, label:'Systèmes experts — 1980s'},
{year:1995, label:'ALICE (AIML) — 1995'},
{year:2011, label:'Siri (assistant vocal) — 2011'},
{year:2012, label:'Deep Learning popularisé (AlexNet) — 2012'},
{year:2018, label:'Transformers & BERT/GPT family débuts — 2018+'}
];


function appendMessage(text, who='bot'){
const el = document.createElement('div');
el.className = `message ${who}`;
el.textContent = text;
messagesEl.appendChild(el);
messagesEl.scrollTop = messagesEl.scrollHeight;
}


}, 300);
