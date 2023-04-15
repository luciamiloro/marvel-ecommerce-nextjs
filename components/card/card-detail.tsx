import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Paper, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { FC } from 'react'
import { IDetailCardProps } from "dh-marvel/services/interfaces/Comic"
import router from 'next/router'
import CharacterDetail from './card-character-detail';

const CardDetail:FC<IDetailCardProps> = ({ comic }) => {

  return (
    <Paper sx={{ width: 500, m: 3 }}>
      <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", pb: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${comic.title}`}
            </Typography>
            <Box component="span" sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ textDecoration: "line-through" }} color="text.secondary" gutterBottom>
                Before ${comic.oldPrice}
              </Typography>
              <Typography color="text.secondary" gutterBottom sx={{ ml: 3 }}>
                Now ${comic.price}
              </Typography>
            </Box >

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained"
            size="large"
            disabled={comic.stock === 0 ? true : false}
            sx={{ width: "100%" }}
            onClick={() => {
              router.push(
                {
                  pathname:"/checkout",
                  query: { comic: JSON.stringify(comic) },
                },
                "/checkout"
              )
            }}
          >
            {comic.stock === 0 ? 'NO STOCK AVAILABLE' : 'BUY'}
          </Button>
        </CardActions>
      </Card>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            {`${comic.description}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Associated characters</Typography>
        </AccordionSummary>
        <AccordionDetails>
            < CharacterDetail 
                  comic ={ comic.characters.items}/>       
            </AccordionDetails>
      </Accordion>

    </Paper >
  )
}

export default CardDetail