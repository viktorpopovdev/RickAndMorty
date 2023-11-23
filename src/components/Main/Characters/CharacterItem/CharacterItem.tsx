import React from 'react';
import style from './CharacterItem.module.scss';

import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

interface Character {
  character: {
    name: string;
    status: string;
    image: string;
    species: string;
    location: { name: string };
  };
  episode: string;
}

const CharacterItem: React.FC<Character> = ({ character: { image, name, species, status, location }, episode }) => {
  return (
    <Grid>
      <Card
        className={style.card}
        sx={{
          borderRadius: '9px',
          background: '#3C3E44',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardActionArea className={style.area}>
          <CardMedia component="img" image={image} alt={name} sx={{ width: '220px', height: '229px' }} />
          <CardContent className={style.content} sx={{ width: '600px', height: '229px' }}>
            <Typography className={style.title}>{name}</Typography>
            <div className={style.status}>
              <Typography className={style.statusInfo}>
                <span className={status === 'Alive' ? style.alive : status === 'Dead' ? style.dead : style.unknown} />
                {status} - {species}
              </Typography>
            </div>
            <div className={style.location}>
              <Typography className={style.locationLabel}>Last known location:</Typography>
              <Typography className={style.locationName}>{location.name}</Typography>
            </div>
            <div className={style.episode}>
              <Typography className={style.episodeLabel}>First seen in:</Typography>
              <Typography className={style.episodeName}>{episode}</Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CharacterItem;

//card style

// sx={{
//   borderRadius: '9px',
//   background: '#3C3E44',
//   width: '600px',
//   height: '229px',
//   display: 'flex',
// }}

//area style

// sx={{ display: 'flex', alignItems: 'flex-start' }}

//content style

// sx={{ flex: '1', alignContent: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}
