export const keyPressOnlyNumber = (event, isNotAllowed = false) => {
  if (!/[0-9]/.test(event.key) || isNotAllowed) {
    event.preventDefault();
  }
};

export const pasteOnlyNumber = (event) => {
  // Mendapatkan data yang akan di-paste
  const pastedData = (event.clipboardData || window.clipboardData).getData('text');

  // Memeriksa apakah data yang di-paste mengandung angka dan tidak mengandung huruf 'e'
  if (!/^[0-9]+$/.test(pastedData) || pastedData.includes('e')) {
    event.preventDefault();
  }
};

export function has(object, path) {
  if (object == null) return false;

  // Convert path to array if it is a string
  if (typeof path === 'string') {
    path = path.split('.');
  }

  // Traverse the object following the path
  let current = object;
  for (let i = 0; i < path.length; i++) {
    if (current == null || !Object.prototype.hasOwnProperty.call(current, path[i])) {
      return false;
    }
    current = current[path[i]];
  }

  return true;
}

export function findMax(data = [], key = '') {
    let max = 0;
    if(Array.isArray(data)){
        data.forEach(e => {
            if(has(e, `${key}`)){
                if (e[key] > max) {
                    max = e[key];
                }
            }
        });
    }
    return(max)
}
