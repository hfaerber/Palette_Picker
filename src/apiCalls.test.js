import { getProjects, addProject, getPalettes, getSpecificPalette, addPalette, removeItem }
  from './apiCalls';

describe('getProjects', () => {

  describe('getProjects for all projects', () => {
    let mockResponse = { projects:
     [ { id: 35,
         name: 'Sample Project One',
         created_at: '2020-02-05T00:52:52.258Z',
         updated_at: '2020-02-05T00:52:52.258Z' },
       { id: 36,
         name: 'Sample Project Two',
         created_at: '2020-02-05T00:52:52.261Z',
         updated_at: '2020-02-05T00:52:52.261Z' } ] };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      getProjects();
      expect(window.fetch).toHaveBeenCalledWith(
        'https://palette-picks.herokuapp.com/api/v1/projects'
      );
    });

    it('should return an object with an array of projects', () => {
      expect(getProjects()).resolves.toEqual(mockResponse);
    });

    it('should return an error for a response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getProjects()).rejects.toEqual(Error(
        'Error: There was a problem getting your projects'));
    });
  });

  describe('getProjects for a specific project', () => {
    let mockId = 36;
    let mockResponse = {
      id: 36,
      name: 'Sample Project Two',
      created_at: '2020-02-05T00:52:52.261Z',
      updated_at: '2020-02-05T00:52:52.261Z'
    };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      getProjects(mockId);
      expect(window.fetch).toHaveBeenCalledWith(
        'https://palette-picks.herokuapp.com/api/v1/projects/36'
      );
    });

    it('should return a single project object', () => {
      expect(getProjects(mockId)).resolves.toEqual(mockResponse);
    });

    it('should return an error for a response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getProjects(mockId)).rejects.toEqual(Error(
        'Error: There was a problem getting your projects'));
    });
  });
});

describe('getPalettes', () => {
  let mockResponse = { palettes:
   [ { id: 6384,
       name: 'Sample Palette one',
       color_one: '#F7D951',
       color_two: '#75B1FF',
       color_three: '#985EEE',
       color_four: '#5ED49B',
       color_five: '#44638F',
       projects_id: 3230,
       created_at: '2020-02-08T00:59:46.352Z',
       updated_at: '2020-02-08T00:59:46.352Z' },
     { id: 6385,
       name: 'Sample Palette two',
       color_one: '#DC5551',
       color_two: '#F2AD00',
       color_three: '#6CA131',
       color_four: '#4B5DC6',
       color_five: '#1F0E95',
       projects_id: 3230,
       created_at: '2020-02-08T00:59:46.352Z',
       updated_at: '2020-02-08T00:59:46.352Z' } ] };
    let mockProjectId = 3230;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse);
        }
      });
    });
  });

  it('should be passed the correct URL', () => {
    getPalettes(mockProjectId);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://palette-picks.herokuapp.com/api/v1/projects/3230/palettes'
    );
  });

  it('should return an object with an array of projects', () => {
    expect(getPalettes(mockProjectId)).resolves.toEqual(mockResponse);
  });

  it('should return an error for a response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getPalettes(mockProjectId)).rejects.toEqual(Error(
      'Error: There was a problem getting the palettes for project id 3230'
    ));
  });
});

describe('Get a specific palette', () => {
  let mockResponse = { id: 181,
    name: 'Sample Palette one',
    color_one: '#F7D951',
    color_two: '#75B1FF',
    color_three: '#985EEE',
    color_four: '#5ED49B',
    color_five: '#44638F',
    projects_id: 91,
    created_at: '2020-02-05T01:49:59.421Z',
    updated_at: '2020-02-05T01:49:59.421Z' };
  let mockPaletteId = 181;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse);
        }
      });
    });
  });

  it('should be passed the correct URL', () => {
    getSpecificPalette(mockPaletteId);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://palette-picks.herokuapp.com/api/v1/palettes/181'
    );
  });

  it('should return an object with an array of projects', () => {
    expect(getSpecificPalette(mockPaletteId)).resolves.toEqual(mockResponse);
  });

  it('should return an error for a response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getSpecificPalette(mockPaletteId)).rejects.toEqual(Error(
      'Error: There was a problem getting palette id 181'
    ));
  });
});

describe('addProject', () => {
  let mockName = 'Sample Project Three'
  let mockResponse = { id: 200 };
  const mockOptions = {
    method: 'POST',
    body: JSON.stringify({name: mockName}),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse);
        }
      });
    });
  });

  it('should be passed the correct URL', () => {
    addProject(mockName);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://palette-picks.herokuapp.com/api/v1/projects', mockOptions);
  });

  it('should return an object with the project id', () => {
    expect(addProject(mockName)).resolves.toEqual(mockResponse);
  });

  it('should return an error for a response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(addProject(mockName)).rejects.toEqual(Error(
      'Error: There was a problem adding your project.'
    ));
  });
});

describe('addPalette', () => {
  let mockProjectId = 123;
  let mockBody = {
    name: 'Sample Palette Fav Colors',
    color_one: '#F7D951',
    color_two: '#75B1FF',
    color_three: '#985EEE',
    color_four: '#5ED49B',
    color_five: '#44638F' };
  let mockResponse = { id: 500 };
  const mockOptions = {
    method: 'POST',
    body: JSON.stringify(mockBody),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse);
        }
      });
    });
  });

  it('should be passed the correct URL', () => {
    addPalette(mockProjectId, mockBody);
    expect(window.fetch).toHaveBeenCalledWith(
      'https://palette-picks.herokuapp.com/api/v1/projects/123/palettes',
        mockOptions);
  });

  it('should return an object with the project id', () => {
    expect(addPalette(mockProjectId, mockBody)).resolves.toEqual(mockResponse);
  });

  it('should return an error for a response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(addPalette(mockProjectId, mockBody)).rejects.toEqual(
      Error('Error: There was a problem adding your palette.'));
  });
});

describe('removeItem', () => {

  describe('remove Project', () => {
    let mockId = 123;
    let mockResponse = `Project with id 123 has been removed successfully`;
    const mockOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      removeItem(mockId, 'project');
      expect(window.fetch).toHaveBeenCalledWith(
        'https://palette-picks.herokuapp.com/api/v1/projects/123',
          mockOptions);
    });

    it('should return an object with the project id', () => {
      expect(removeItem(mockId, 'project')).resolves.toEqual(mockResponse);
    });

    it('should return an error for a response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(removeItem(mockId, 'project')).rejects.toEqual(
        Error('Error: There was a problem deleting project id 123.'));
    });
  });

  describe('remove Palette', () => {
    let mockId = 500;
    let mockResponse = `Palette with id 500 has been removed successfully`;
    const mockOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      removeItem(mockId, 'palette');
      expect(window.fetch).toHaveBeenCalledWith(
        'https://palette-picks.herokuapp.com/api/v1/palettes/500',
          mockOptions);
    });

    it('should return an object with the project id', () => {
      expect(removeItem(mockId, 'palette')).resolves.toEqual(mockResponse);
    });

    it('should return an error for a response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(removeItem(mockId, 'palette')).rejects.toEqual(
        Error('Error: There was a problem deleting palette id 500.'));
    });
  });

});
