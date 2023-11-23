export const stylePagination = {
  '& .MuiPaginationItem-root': {
    color: '#F5F5F5',
    backgroundColor: '#3C3E44',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.5px',
    borderRadius: '4px',
    borderStyle: 'none',
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)',

    '&:hover': {
      backgroundColor: '#000000',
    },

    '&.Mui-selected': {
      color: '#202329',
      backgroundColor: '#F5F5F5',
      '&:hover': {
        backgroundColor: 'lightgray',
      },
    },
  },
  '& .MuiPaginationItem-previousNext': {
    color: '#272B33',
    backgroundColor: '#F5F5F5',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  },
};
