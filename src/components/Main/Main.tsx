import { useEffect } from 'react';

import { fetchCharacters } from '../../store/getCharactersSlice';

import style from './Main.module.scss';
import mainLogo from '../../assets/rickAndMorty.svg';

import CharacterList from './Characters/CharactersList/CharacterList';
import PaginationApp from './Pagination/PaginationApp';

import { Button } from '@mui/material';

import type { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

function Main() {
  const currentPage = useSelector((state: RootState) => state.characters.currentPage);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(`https://rickandmortyapi.com/api/character/?page=${currentPage}`));
  }, [dispatch, currentPage]);

  return (
    <main>
      <section className={style.headings}>
        <img src={mainLogo} alt="Rick" />
        <h1>The Rick and Morty API</h1>
      </section>
      <section className={style.characters}>
        <Button className={style.button}>Filter</Button>
        <CharacterList />
        <PaginationApp />
      </section>
    </main>
  );
}

export default Main;
