import { Group } from './types';

class Groups {
  public data: Group[] | undefined;

  constructor() {}

  async load() {
    return await fetch('http://localhost:3000/grupos')
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  search(name: string, callback: (user: string) => void) {

    const filtredName = name.trim().toLowerCase();
    if (!this.data) {
      return 'Error';
    }
    for (const group of this.data) {
      for (const [key, value] of Object.entries(group)) {
        if (key === 'usuarios' && Array.isArray(value)) {
          const user = value.find((item) =>
            item.nome.trim().toLowerCase().includes(filtredName)
          );
          if (user) {
            return callback(user);
          }
          return null;
        }
      }
    }
  }
}

export default Groups;
