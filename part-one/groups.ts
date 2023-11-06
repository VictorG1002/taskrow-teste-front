import { Group, User } from './types';

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

  search(
    term: string,
    gruposList: Group[] | undefined = this.data,
    results: (User & { groupName: string })[] = []
  ) {
    if (!gruposList) {
      alert('Errrooo');
      return results;
    }

    if (term.trim() === '') {
      return results;
    }

    gruposList.forEach((grupo) => {
      grupo.usuarios?.forEach((usuario) => {
        if (
          usuario.nome.trim().toLowerCase().includes(term.toLowerCase().trim())
        ) {
          results.push({ ...usuario, groupName: grupo.nome });
        }
      });

      if (grupo?.subGrupos && grupo.subGrupos.length > 0) {
        this.search(term, grupo.subGrupos, results);
      }
    });

    return results;
  }
}

export default Groups;
