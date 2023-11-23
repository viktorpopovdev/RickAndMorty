import React, { useEffect } from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../store/store';

import style from './CharacterList.module.scss';
import { Grid, Skeleton } from '@mui/material';
import { fetchFirstEpisode } from '../../../../store/getCharactersSlice';

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
  const episode = useSelector((state: RootState) => state.characters.episode);
  const loading = useSelector((state: RootState) => state.characters.loading);

  const dispatch: AppDispatch = useDispatch();

  const elementsArray: (null | undefined)[] = new Array(8).fill(null);

  useEffect(() => {
    // console.log(1);
    // console.log(characters);
    if (!characters.length) {
      return;
    }
    // const mappedCharacters =
    characters.forEach((character: Character) => {
      dispatch(fetchFirstEpisode(character.episode[0]));
    });
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
        : characters.map((character: Character, index) => {
            return <CharacterItem character={character} key={character.id} episode={episode[index]} />;
          })}
    </Grid>
  );
};

export default CharacterList;
