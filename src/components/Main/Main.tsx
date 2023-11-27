import { useEffect, useState } from 'react';

import { fetchCharacters } from '../../store/getCharactersSlice';

import style from './Main.module.scss';
// import mainLogo from '../../assets/rickAndMorty.svg';

import CharacterList from './Characters/CharactersList/CharacterList';
import PaginationApp from './Pagination/PaginationApp';
import FilterSelect from './Filter/FilterSelect/FilterSelect';

import { Button } from '@mui/material';

import type { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

function Main() {
  const currentPage = useSelector((state: RootState) => state.characters.currentPage);
  const dispatch: AppDispatch = useDispatch();

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  useEffect(() => {
    console.log(11111);
    dispatch(fetchCharacters(`https://rickandmortyapi.com/api/character/?page=${currentPage}`));
  }, [dispatch, currentPage]);

  const filterClick = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <main>
      <section className={style.characters}>
        <Button className={style.button} onClick={filterClick}>
          {!isOpenFilter ? 'Filter' : 'Remove Filter'}
        </Button>
        {isOpenFilter && <FilterSelect />}
        <CharacterList />
        <PaginationApp />
      </section>
    </main>
  );
}

export default Main;
