import type { NextApiResponse, NextApiRequest } from "next";
import { getComics } from "dh-marvel/services/marvel/marvel.service";

const handlerComics = async (req: NextApiRequest, res: NextApiResponse) => {
    const query = req.query
    const {offset} = query
    const offsetNumber = parseInt(offset as string)

    const data = await getComics(offsetNumber,12)
    const comics = data.data
    
    res.status(200).json(comics)
}

export default handlerComics; 