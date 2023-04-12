import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import CardHome from 'dh-marvel/components/card/card-home';
import CardsGrid from "dh-marvel/components/layouts/body/grid/home-grid"
import { IProps } from 'dh-marvel/services/interfaces/Comic'
import { Typography } from '@mui/material';



const Index: NextPage<IProps>= ({comics, totalComics}) => {
    
    return (
        <>
            <Head>
                <title>Marvel Comics</title>
                <meta name="description" content="ecommerce de Marvel Comics"/>
                <link rel="icon" href="/Marvel_Logo.png"/>
            </Head>
           
            <BodySingle>
            <Typography variant="h1" align="center" sx={{ mt:5, mb:4, fontSize:30, fontWeight:800, color: 'primary.main', textTransform: 'uppercase'  }}>
                 Marvel Comics
             </Typography>
            <CardsGrid comics={comics} total={totalComics} />

            </BodySingle>
        </>
    )
}


export const getStaticProps:GetStaticProps = async ()=> {
    const data = await getComics(0,12)
   //console.log(data.results)
    const comics = await data.data
    return { 
        props: {
            comics: comics.results,
            totalComics: comics.total
        }
    }
}


export default Index
