import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { FC } from "react";
import CardHome from 'dh-marvel/components/card/card-home';
import { IComic } from 'dh-marvel/services/interfaces/Comic';
import { Box, Pagination, Typography } from '@mui/material'

type gridProps = {
    comics: IComic[],
    total: number
}

const CardsGrid: FC<gridProps> = ({ comics, total }) => {

    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const [comicArray, setComicArray] = useState<IComic[]>([]);
    useEffect(() => {
        //ejecutar una accion
        const obtenerDatos = async () => {
            const offset = (page - 1) * 12
            const data = await fetch(`/api/comics?offset=${offset}`)
            const comicData = await data.json()
            //console.log(comicData.results)
            setComicArray(comicData.results)
        }
        obtenerDatos()

    }, [page, comicArray])

    const totalPages = Math.ceil(total / 12)

    return (
        <>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", m: 2 }}>
               
                <Pagination count={totalPages} page={page} onChange={handleChange} />
            </Box>
            <Grid container spacing={4}>
                { page=== 1 ?
                comics?.map((data) => (
                    <Grid key={data.id} item xs={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                        <CardHome id={data.id} title={data.title} thumbnail={data.thumbnail} description={''} oldPrice={0} price={0} stock={0} characters={{
                            items: []
                        }} />
                    </Grid>))
                    : 
                comicArray?.map((data) => (
                    <Grid key={data.id} item xs={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                        <CardHome id={data.id} title={data.title} thumbnail={data.thumbnail} description={''} oldPrice={0} price={0} stock={0} characters={{
                            items: []
                        }} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default CardsGrid;