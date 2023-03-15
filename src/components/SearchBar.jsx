import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] =
    useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault(); // when sumbit a From the brower shall Reload as default , so   e.preventDefault();  prevent such action to roload an react app
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }, //provide specify style to specify device
      }}>
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={e =>
          setSearchTerm(e.target.value)
        }
      />

      <IconButton
        type="submit"
        sx={{
          p: '10px',
          color: 'red',
        }}>
        <Search />
        {/*Search icon from @mui*/}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
