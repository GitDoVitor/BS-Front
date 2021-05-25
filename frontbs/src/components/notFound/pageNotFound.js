import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NAOENCONTRADA from '../../images/notfound.png'
const useStyles = makeStyles((theme) => ({
  img: {
    opacity: "25%"
  }
}))

export default function NTF() {
const classes = useStyles();

return(
<div>
  <img src={NAOENCONTRADA} alt="pagina nao encontrada" className={classes.img} />
</div>
)
}