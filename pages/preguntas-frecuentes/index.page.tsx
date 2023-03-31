import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqsData, FaqsType } from 'dh-marvel/components/faqs/faqsData';
import {   NextPage } from 'next';

type Props= {
  faqs: FaqsType[]
}

const Faqs:NextPage<Props> = ( {faqs} ) => {
  return (
    <>
    <Container maxWidth="sm"> 
      <Typography variant="h1" align="center" sx={{ mt:5, mb:4, fontSize:30, fontWeight:800, color: 'primary.main', textTransform: 'uppercase'  }}>
        Preguntas Frecuentes
      </Typography>
       {faqs?.map(faq =>
        <Accordion key={faq.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{fontWeight:600}} >{faq.question} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )} 
</Container>
    </>
  )
}


export const getStaticProps = async () => {
  const faqs: FaqsType[] = faqsData;
  return {
    props: { faqs }
  }
}

export default Faqs