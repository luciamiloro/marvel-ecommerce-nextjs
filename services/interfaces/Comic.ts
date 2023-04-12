
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
export interface ICheckoutCardProps {
  comic: IComic;
}
export interface IItem {
    name: string;
    resourceURI: string;
  }

export type CaracterDetailProps = {
    comic: IItem[]
}


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


  export type CharacterItem = {
    resourceURI: string;
    name: string;
  };
  
