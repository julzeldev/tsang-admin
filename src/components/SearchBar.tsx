import React, { useState } from 'react';
import {
  Box,
  IconButton,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onChange(e.target.value); // Propagate the change to the parent component
  };

  const handleClear = () => {
    setSearchTerm('');
    onChange(''); // Clear the search and notify parent
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <FormControl sx={{ width: '100%' }} variant='filled'>
        <InputLabel color='secondary' htmlFor='filled-adornment-search'>
          Search
        </InputLabel>
        <FilledInput
          id='filled-adornment-search'
          value={searchTerm}
          onChange={handleInputChange}
          color='secondary'
          endAdornment={
            searchTerm ? (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClear}
                  edge='end'
                >
                  <CancelIcon />
                </IconButton>
              </InputAdornment>
            ) : null
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
