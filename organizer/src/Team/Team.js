import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard/ImageCard';

const useStyles = makeStyles({
    card: {
        position: 'absolute',
        top : 400,
        display: 'flex',
        flexDirection : 'row',
        flexWrap: 'wrap',
        justifyContent: 'left',
        flexGrow: 1,
    },
    title : {
        margin : '0 auto',
        flex : '0 1 100%'
    }
  });

export default function Team(props){
    const classes = useStyles();
    return (
        <Fragment>
            <div class = {classes.card}>
            <h2 class = {classes.title} >Our Team</h2>
            {
                props.users.map((user, index)=>{
                   return <ImageCard imageId = {index} name = {user.name} desc = {user.description} img = {user.img.data}></ImageCard>
                })
            }
            </div>
        </Fragment>
    )
}