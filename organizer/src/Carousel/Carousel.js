import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
const path = require('path');

const useStyles = makeStyles({
    root: {
        height : '300',
        position: 'absolute',
        top : 100,
        width : '100%'
    }
  });

export default function CarouselComponent(props)
{
    const classes = useStyles();
    var items = [];
    const imagesName = ["https://rukminim1.flixcart.com/flap/50/50/image/da42ce7347e355d6.jpg?q=50",
                        "https://rukminim1.flixcart.com/flap/50/50/image/831dfa5d29010ec7.jpg?q=50",
                        "https://rukminim1.flixcart.com/flap/50/50/image/f3d9f761cb99033e.jpg?q=50",
                         "https://rukminim1.flixcart.com/flap/844/140/image/b719fc174c3f2a1e.jpg?q=50",
                          "https://rukminim1.flixcart.com/flap/50/50/image/b8a12cf8c0b6b111.jpg?q=50",
                           "https://rukminim1.flixcart.com/flap/50/50/image/d07b944d3e69f971.jpg?q=50"];
    for(let i = 0 ; i < imagesName.length ; i++){
        // console.log(path.resolve(imagesName[i]));
        items.push({path : imagesName[i]});
    }
    return (
        <Carousel className = {classes.root}>
            {
                items.map( item => {
                   return <Item item={item} />
                })
            }
        </Carousel>
    )
}

function Item(props)
{
    console.log(props);
    return (
        <Paper>
            <CardMedia
                component="img"
                alt="Associate Developer"
                image= {props.item.path}
                title="Associate Developer"
           />
        </Paper>
    )
}
