import React from 'react';

import style from './PaginationApp.module.scss';

import { Pagination } from '@mui/material';
import { stylePagination } from './stylePagination';

import { setCurrentPage } from '../../../store/getCharactersSlice';

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store/store';

const PaginationApp: React.FC = () => {
  const pages = useSelector((state: RootState) => state.characters.characters.info.pages);
  const currentPage = useSelector((state: RootState) => state.characters.currentPage);

  const dispatch: AppDispatch = useDispatch();

  const onPageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    window.scrollTo(0, 405);
  };

  return (
    <Pagination
      sx={stylePagination}
      className={style.pagination}
      count={pages}
      page={currentPage}
      onChange={(_, page) => onPageChange(page)}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationApp;
