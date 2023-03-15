import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './'; // reuse the componts
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] =
    useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  console.log(videos);

  useEffect(() => {
    fetchFromAPI(
      `channels?part=snippet&id=${id}`,
    ).then(data => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date`,
    ).then(data => {
      setVideos(data?.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(160,255,35,1) 24%, rgba(29,253,225,1) 49%, rgba(252,69,222,1) 90%)',
            zIndex: 10,
            height: '300px',
          }}
        />

        <ChannelCard
          channelDetail={channelDetail}
          marginTop="-110px" //it defined as an pros though channel Card
        />
      </Box>
      <Box
        display="flex"
        p="2">
        <Box
          sx={{
            mr: {
              sm: '100px',
            },
          }}
        />
        {/*sidebox*/}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
