// Local storage operations
export const useLocalStorage = {
  set: (key: string, data: any) => {
    let stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
  },

  get: (key: string) => {
    const data: any = JSON.parse(localStorage.getItem(key)!);

    if (!data) {
      return null;
    }
    return data;
  },
};

// Session storage operations
export const useSessionStorage = {
  set: (key: string, data: any) => {
    let stringifiedData = JSON.stringify(data);
    sessionStorage.setItem(key, stringifiedData);
  },

  get: (key: string) => {
    const data: any = JSON.parse(sessionStorage.getItem(key)!);

    if (!data) {
      return null;
    }
    return data;
  },
};