import React, { useState } from 'react';

import style from './FilterSelect.module.scss';

import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  Select,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Character', 'Episode', 'Location'];

const FilterSelect: React.FC = () => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className={style.filterSelect}>
      <FormControl sx={{ width: 213, height: 56 }}>
        <InputLabel id="demo-multiple-checkbox-label" className={style.label}>
          Select Item
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          // sx={{ color: 'white' }}
          className={style.select}
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput sx={{ color: 'white' }} label="Select Item" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} className={style.menuItem}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSelect;
