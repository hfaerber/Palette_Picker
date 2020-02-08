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

export const addProject = async name => {
  const options = {
    method: 'POST',
    body: JSON.stringify({name}),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch('https://palette-picks.herokuapp.com/api/v1/projects', options);
  if(!response.ok) {
    throw new Error('Error: There was a problem adding your project.');
  }
  const project = await response.json();
  return project
};
