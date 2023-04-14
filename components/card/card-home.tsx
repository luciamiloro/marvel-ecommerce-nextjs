import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticProps } from 'next';
import { IComic } from 'dh-marvel/services/interfaces/Comic'
import Link from 'next/link';


const CardHome = (comic: IComic) => {
  return (
    
    <> 
    <Card sx={{ minWidth: 345, maxWidth:346 }}>
    <CardMedia
      component="img"
      height="140"
      image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      alt={`${comic.title}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {`${comic.title}`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">BUY</Button>
      <Link href={`/comics/${comic.id}`}>
      <Button size="small">VIEW DETAIL</Button>
      </Link>
    </CardActions>
  </Card>
  </>
  )
}




export default CardHome