import { useEffect } from 'react';
import type { AppDispatch, RootState } from '../store/store';
import { fetchSingleCharacter } from '../store/getSingleCharacterSlice';
import { fetchSingleFirstEpisode } from '../store/getSingleFirstEpisodeSlice';
import { useDispatch, useSelector } from 'react-redux';

import CharacterDetails from '../components/Main/Characters/CharacterDetails/CharacterDetails';
import { useParams } from 'react-router-dom';

type QuizParams = {
  id: string;
};

function Character() {
  const urlEpisode = useSelector((state: RootState) => state.character.character.episode[0]);
  // console.log(urlEpisode);
  const { id } = useParams<QuizParams>();
  // console.log(id);
  window.scrollTo(0, 405);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!id || id == '') {
      return;
    }

    dispatch(fetchSingleCharacter(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!urlEpisode) {
      return;
    }

    dispatch(fetchSingleFirstEpisode(urlEpisode));
  }, [dispatch, urlEpisode]);

  return <CharacterDetails />;
}

export default Character;
