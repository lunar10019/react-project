import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Values {
  alt: string;
  image: string;
  title: string;
  id: any;
}

const ImgMediaCard1: React.FC<Values> = ({ alt, image, title, id }) => {
  return (
    <NavLink to={`/payment/${id}`}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={alt}
              // height="140"
              // width="400"
              image={image}
              title={title}
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Пополнить баланс
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </NavLink>
  );
};

export default ImgMediaCard1;
