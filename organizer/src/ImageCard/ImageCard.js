import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 10,
    borderRadius: 12,
    padding: 20,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  }
});

export default function ImgMediaCard(props) {
  console.log(props);
  function arrayBufferToBase64(buffer){
    let binary = '';
    let bytes = new Uint8Array(buffer);
    bytes.forEach(b=>{
      binary += String.fromCharCode(b);
    })
    return window.btoa(binary);
  }
  const classes = useStyles();
  var base64Flag = 'data:image/jpeg;base64,';
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Associate Developer"
          height="240"
          image= {base64Flag +  arrayBufferToBase64(props.img.data)}
          title="Associate Developer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.desc.slice(1,20)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Display Profile
        </Button>
      </CardActions>
    </Card>
  );
}
