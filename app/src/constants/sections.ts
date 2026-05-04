export const sectionPositions = {
  start: { x: 0, y: 0 },
  projects: { x: 1000, y: -1000 },
  skills: { x: 0, y: 0 },
  experience: { x: 0, y: 0 },
  travels: { x: 0, y: 0 },
};

export const projectPositions = {
  detach: sectionPositions.projects,
  sip: {
    x: sectionPositions.projects.x + 380,
    y: sectionPositions.projects.y,
  },
  songdle: {
    x: sectionPositions.projects.x + 1025,
    y: sectionPositions.projects.y,
  },
};
