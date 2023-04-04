import { Box, Link, Typography } from "@mui/material"
import { CaracterDetailProps, IItem } from "dh-marvel/services/interfaces/Comic"
import { FC } from "react"


const CharacterDetail: FC<CaracterDetailProps> = ({ comic }) => {

    const idResourceURI = (url:string) =>{
      const myArray = url.split('/')   //character.resourceURI.split(/)
      const id = myArray.pop()
      return id;
    }
    console.log(idResourceURI) 
    return (
        <>
        <Box>
            {comic.map((character, index) => (
                  <Link href={`/personajes/${idResourceURI(character.resourceURI)}`} key={index}>
                        <Typography>
                             {character.name} 
                        </Typography>
                    
                </Link >
             ))
            }  
        </Box> 
   </>
   )

}
export default CharacterDetail