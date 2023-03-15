import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${searchTerm}`, // prameter url in fetchFromAPI
    ).then(data => {
      setVideos(data.items);
    });
  }, [searchTerm]); // always remanber the [] indepandence Array

  return (
    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
      }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: 'white' }}>
        Search Results of{' '}
        <span style={{ color: '#fc1503' }}>
          {searchTerm}
        </span>
        {'  '}
        Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
