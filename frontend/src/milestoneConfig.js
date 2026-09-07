const definitions = [
  { key: 'sitting', captions: ['sitting without support'], image: 'sitting.png' },
  { key: 'crawling', captions: ['hands and knees crawling', 'hands-and-knees crawling'], image: 'crawling.png' },
  { key: 'standing-support', captions: ['standing with support', 'standing with assistance'], image: 'standing-support.png' },
  { key: 'walking-support', captions: ['walking with support', 'walking with assistance'], image: 'walking-support.png' },
  { key: 'standing', captions: ['standing without support', 'standing alone'], image: 'standing.png' },
  { key: 'walking', captions: ['walking without support'], image: 'walking.png' },
];
export function getMilestoneDefinition(milestone) { const value = `${milestone?.name || ''} ${milestone?.milestone_display || ''}`.toLowerCase(); return definitions.find((definition) => definition.captions.some((caption) => value.includes(caption))) || null; }
export function getMilestoneImage(milestone) { const definition = getMilestoneDefinition(milestone); return definition ? `/milestones/${definition.image}` : ''; }
export const milestoneDefinitions = definitions;
