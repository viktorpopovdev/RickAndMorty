import React from 'react';
import style from './CharacterDetails.module.scss';

import { Card, CardContent, CardMedia, Typography, Skeleton } from '@mui/material';
import type { RootState } from 'store/store';
import { useSelector } from 'react-redux';

const CharacterDetails: React.FC = () => {
  const { character } = useSelector((state: RootState) => state.character);
  const episode = useSelector((state: RootState) => state.episode.episode.name);
  const loading = useSelector((state: RootState) => state.character.loading);

  const statusColor =
    character.status === 'Alive' ? style.alive : character.status === 'Dead' ? style.dead : style.unknown;

  return (
    <div className={style.details}>
      {loading ? (
        <Skeleton
          variant="rounded"
          width={1220}
          height={571}
          sx={{ backgroundColor: '#5A5E69', borderRadius: '9px' }}
        />
      ) : (
        <Card className={style.card}>
          <div className={style.area}>
            <CardMedia
              component="img"
              image={character.image}
              alt={character.name}
              sx={{ width: '595px', height: '575px' }}
            />
            <CardContent className={style.content} sx={{ width: '600px', height: '229px' }}>
              <Typography className={style.title}>{character.name}</Typography>
              <div className={style.status}>
                <Typography className={style.statusInfo}>
                  <span className={statusColor} />
                  {character.status} - {character.species}
                </Typography>
              </div>
              <div className={style.location}>
                <Typography className={style.locationLabel}>Last known location:</Typography>
                <Typography className={style.locationName}>{character.location.name}</Typography>
              </div>
              <div className={style.episode}>
                <Typography className={style.episodeLabel}>First seen in:</Typography>
                <Typography className={style.episodeName}>{episode}</Typography>
              </div>
              <div className={style.divider}>
                <Typography className={style.infoLabel}>Other Info:</Typography>
                <Typography className={style.infoName}>
                  The Mosaic Rooms are a leading non-profit arts organisation and bookshop dedicated to supporting and
                  promoting contemporary culture from the Arab world and beyond in London.
                </Typography>
                <Typography className={style.infoName}>
                  Established in 2009, as a project of the A.M. Qattan Foundation, it dedicates its work to championing
                  creative and critical voices that are often underrepresented.
                </Typography>
              </div>
            </CardContent>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CharacterDetails;
