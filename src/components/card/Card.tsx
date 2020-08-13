import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(() =>
  createStyles({
    img: {
      height: '150px',
      objectFit: 'contain',
      textDecorationLine: 'none',
    },
  }),
);

interface Values {
  alt: string;
  image: string;
  title: string;
  id: string;
}

const ImgMediaCard1: React.FC<Values> = ({ alt, image, title, id }) => {
  const classes = useStyles();

  return (
    <NavLink to={`/payment/${id}`}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={alt}
              image={image}
              title={title}
              className={classes.img}
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <FormattedMessage id="toApBalance" defaultMessage="Пополнить баланс" />
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </NavLink>
  );
};

export default ImgMediaCard1;
