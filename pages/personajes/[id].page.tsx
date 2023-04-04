import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { getCharacter} from 'dh-marvel/services/marvel/marvel.service'
import { CharacterProps } from 'dh-marvel/services/interfaces/Comic';
import { Avatar, Box, Container, Typography } from '@mui/material';
//import { Head } from 'next/document';



const CharacterDetail: NextPage<CharacterProps> = ({ character }) => {
    const { name, thumbnail, description } = character;
    return (
        <>
            <Container>
                {/* <Head>
        <title>{name}</title>
        <meta name="description" content={`Detalle de ${name}`} />
        <link rel="icon" href="/Marvel_Logo.png" />
      </Head>  */}
                <Container>
                    <Box
                        sx={{
                            boxShadow: 3,
                            padding: 10,
                            borderRadius: 10,
                            margin: 2,
                            alignItems: "center",
                            width: "100%",
                            minHeight: "70%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}>
                        <Typography variant="h5" gutterBottom>
                            Character:</Typography>
                        <Typography variant="h3" gutterBottom> {character.name}</Typography>

                        <Avatar alt={character.name} src={`${thumbnail.path}.${thumbnail.extension}`} sx={{
                            width: 500,
                            height: 500,
                        }} />
                        <div style={{ width: "50%", justifyContent: "center" }}>
                            <p>{description ? description : 'This character called ' + character.name + ' has no description yet. More updates coming soon...'}</p>
                        </div>
                    </Box>
                </Container>
            </Container>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
    const characterId = parseInt(id as string)
    const character = await getCharacter(characterId)
    return {
        props: {
            character
        },
    };
}

export default CharacterDetail