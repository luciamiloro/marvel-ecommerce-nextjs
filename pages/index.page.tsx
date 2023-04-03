import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import CardHome from 'dh-marvel/components/card/card-home';
import CardsGrid from "dh-marvel/components/layouts/body/grid/home-grid"
import { IProps } from 'dh-marvel/services/interfaces/Comic'



const Index: NextPage<IProps>= ({comics, totalComics}) => {
    
    return (
        <>
            <Head>
                <title>Marvel Comics</title>
                <meta name="description" content="ecommerce de Marvel Comics"/>
                <link rel="icon" href="/Marvel_Logo.png"/>
            </Head>

            <BodySingle title={"Marvel Comics"}>
            
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
