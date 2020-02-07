export const getProjects = async id => {
  const url = id ?
  `https://palette-picks.herokuapp.com/api/v1/projects/${id}` :
  'https://palette-picks.herokuapp.com/api/v1/projects';
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('Error: There was a problem getting your projects');
  }
  const projects = await response.json();
  return projects
};
