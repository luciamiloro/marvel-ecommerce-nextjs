
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