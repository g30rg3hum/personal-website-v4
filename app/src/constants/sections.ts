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
    x: sectionPositions.projects.x + 400,
    y: sectionPositions.projects.y,
  },
};
