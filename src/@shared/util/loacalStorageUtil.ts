function getLocalStorage(key: string) {
  try {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem(key);
    }
  } catch (error) {
    return null;
  }
}

function setLocalStorage(key: string, value: any) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
  } catch (error) {
    console.log(error);
  }
}

function removeLocalStorage(key: string) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  } catch (error) {
    console.log(error);
  }
}

// function clearLocalStorage() {
//   try {
//     if (typeof window !== "undefined") {
//       window.localStorage.clear();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

function parseData(data: any) {
  try {
    if (!!data) {
      if (data instanceof Array) {
        return data;
      } else if (data instanceof Object) {
        return data;
      } else {
        return JSON.parse(data);
      }
    } else {
      return [];
    }
  } catch (error) {}
}

function getItem(key: string) {
  return new Promise((resolve, reject) => {
    const origin = getLocalStorage(key);
    const parse = parseData(origin);

    if (!!parse) {
      resolve(parse);
    } else {
      reject([]);
    }
  });
}

async function getAsyncLocalStorage(key: string) {
  const data = await getItem(key);

  return !!data ? data : [];
}

function updateLocalStorage(key: string, data: string) {
  removeLocalStorage(key);
  setLocalStorage(key, data);
}

function removeKeyLocalStorage(key: string, value: string) {
  const origin = getLocalStorage(key);
  const parse = parseData(origin);
  const copyData = parse.filter((item: string) => item !== value);

  setLocalStorage(key, JSON.stringify(copyData));
}

function addKeyLocalStorage(key: string, data: string) {
  const origin = getLocalStorage(key);
  const parse = parseData(origin);

  parse.push(data);

  setLocalStorage(key, JSON.stringify(parse));
}

export {
  getAsyncLocalStorage,
  setLocalStorage,
  removeKeyLocalStorage,
  updateLocalStorage,
  addKeyLocalStorage,
};
