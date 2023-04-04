
export interface IProps {
    comics: IComic[];
    totalComics: number;
}

export interface IComic {
    id?: number,
    title: string,
    description: string;
    oldPrice: number;
    price: number;
    stock: number;
    thumbnail: {
        path: string,
        extension: string
    }
    characters:{
        items: IItem[]
      };
}

export interface IItem {
    name: string;
    resourceURI: string;
  }

export type CaracterDetailProps = {
    comic: IItem[]
}
//   export type Comic = {
//     id?: number,
//     title: string,
//     description: string,
//     thumbnail: {
//         path: string,
//         extension: string
//     },
//     price:number,
//     oldPrice:number,
//     stock:number
//     characters:Character
// }

export interface IDetailCardProps {
  comic: IComic;
}

//**********Character

export type CharacterProps = {
  character: CharacterP;
};

export type CharacterP = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

// export type Character = {
//     items: CharacterItem[];
//   };

  export type CharacterItem = {
    resourceURI: string;
    name: string;
  };
  
