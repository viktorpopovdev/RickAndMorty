import React, { useEffect, useRef } from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../store/store';

import style from './CharacterList.module.scss';
import { Grid, Skeleton } from '@mui/material';
import { fetchMultipleEpisode } from '../../../../store/getCharactersSlice';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  episode: string[];
  image: string;
}

const CharacterList: React.FC = () => {
  const characters = useSelector((state: RootState) => state.characters.characters.results);

  const episodes = useSelector((state: RootState) => state.characters.episodes);
  const loading = useSelector((state: RootState) => state.characters.loading);

  const dispatch: AppDispatch = useDispatch();

  const elementsArray: (null | undefined)[] = new Array(8).fill(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const idsEpisode = characters.map((character: Character) => {
      const regex = /\d+/;
      const id = character.episode[0].match(regex)?.[0];
      if (id) {
        return id;
      }
    });

    const ids = idsEpisode.join(',');

    dispatch(fetchMultipleEpisode(ids));
    console.log('lalaal');
  }, [characters, dispatch]);

  return (
    <Grid container columns={2} className={style.container}>
      {loading
        ? elementsArray.map(() => {
            return (
              <Grid key={Math.random()}>
                <Skeleton
                  variant="rounded"
                  width={600}
                  height={229}
                  sx={{ backgroundColor: '#5A5E69', borderRadius: '9px' }}
                />
              </Grid>
            );
          })
        : characters.map((character: Character) => {
            const epId = character.episode[0]?.match(/\d+$/)?.[0];

            // console.log(epId);

            const foundEpisode =
              epId !== undefined && typeof epId === 'string' ? episodes.find((x) => x.id === +epId) : undefined;

            const episodeName = foundEpisode?.name ?? 'Episode not found';

            // console.log(episodes.find(character.episode[0].match(/\d+/)?.[0]));
            return <CharacterItem character={character} key={character.id} episode={episodeName} />;
          })}
    </Grid>
  );
};

export default CharacterList;
