import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { getComic } from 'dh-marvel/services/marvel/marvel.service'
import CardDetail from '../../components/card/card-detail';
import { IComic, IDetailCardProps } from 'dh-marvel/services/interfaces/Comic';


const ComicDetail:NextPage<IDetailCardProps> = ({comic}) => {
  return (
    < CardDetail comic ={ comic}/>
  )
}


export const getServerSideProps: GetServerSideProps = async ({query: {id}}) => {
    const idQuery = parseInt(id as string)
    const comic = await getComic(idQuery)
  return {
    props: {
     comic
    },
  };
}

export default ComicDetail