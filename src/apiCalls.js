// HELPER FUNCTION
const getRequestedData = async (url, errorMessage) => {
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error(`${errorMessage}`)
  }
  const data = await response.json();
  return data
};

// API CALLS
export const getProjects = async id => {
  const url = id ?
  `https://palette-picks.herokuapp.com/api/v1/projects/${id}` :
  'https://palette-picks.herokuapp.com/api/v1/projects';
  const errorMessage = 'Error: There was a problem getting your projects';
  return getRequestedData(url, errorMessage);
};

export const getPalettes = async (projectId) => {
  const url =
    `https://palette-picks.herokuapp.com/api/v1/projects/${projectId}/palettes`;
  const errorMessage =
    `Error: There was a problem getting the palettes for project id ${projectId}`;
  return getRequestedData(url, errorMessage);
};

export const getSpecificPalette = async (paletteId) => {
  const url =
    `https://palette-picks.herokuapp.com/api/v1/palettes/${paletteId}`;
  const errorMessage =
    `Error: There was a problem getting palette id ${paletteId}`;
  return getRequestedData(url, errorMessage);
};

export const addProject = async name => {
  const options = {
    method: 'POST',
    body: JSON.stringify({name}),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await
    fetch('https://palette-picks.herokuapp.com/api/v1/projects', options);
  if(!response.ok) {
    throw new Error('Error: There was a problem adding your project.');
  }
  const id = await response.json();
  return id
};

export const addPalette = async (project_id, palette_body) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(palette_body),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await
    fetch(`https://palette-picks.herokuapp.com/api/v1/projects/${project_id}/palettes`, options);
  if(!response.ok) {
    throw new Error('Error: There was a problem adding your palette.');
  }
  const id = await response.json();
  return id
}
