import React from 'react';
import { ImageList } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import usaImg from '../gallery/images/usaImg.jpg';
import Himalaya from '../gallery/images/Himalaya.jpg';
import France from '../gallery/images/France.jpg';
import FrankfurtOldTown from '../gallery/images/FrankfurtOldTown.jpg';
import France123 from '../gallery/images/France123.jpg';
import Berlin from '../gallery/images/Berlin.jpg';
import Harrisburg_Pennsylvania_USA from '../gallery/images/Harrisburg_Pennsylvania_USA.jpg';
import TajMahal1 from '../gallery/images/Taj Mahal.jpg';
import IndiaGate from '../gallery/images/India Gate.jpg';
import France_City from '../gallery/images/istockphoto-1162597477-1024x1024.jpg';
import './GalleryPage.css';

// import InfoIcon from '@mui/icons-material/Info';

export default function GalleryImageList() {
  return (
    <>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      <ImageList sx={{ padding: '16px', gridTemplateColumns: 'repeat(3, 1fr) !important' }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} className='hover01' sx={{ padding: '24px' }}>
            <img
              style={{ borderRadius: '10px'}}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{borderRadius: '10px', left: '24px', right: '24px', bottom: '24px'}}
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  {/* <InfoIcon /> */}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: TajMahal1,
    title: 'Taj Mahal, India',
    author: '@FunTrip',
    rows: 3,
    cols: 3,
    featured: true,
  },
  {
    img: Himalaya,
    title: 'Himalaya',
    author: '@FunTrip',
  },
  {
    img: France,
    title: 'France',
    author: '@FUnTrip',
  },
  {
    img: FrankfurtOldTown,
    title: 'Frankfurt Old Town',
    author: '@FunTrip',
    cols: 2,
  },
  {
    img: France123,
    title: 'France',
    author: '@FunTrip',
    cols: 2,
  },
  {
    img: Harrisburg_Pennsylvania_USA,
    title: 'Harrisburg_Pennsylvania_USA',
    author: '@FunTrip',
    rows: 2,
    cols: 2,
  },
  {
    img: IndiaGate,
    title: 'IndiaGate, India',
    author: '@FunTrip',
  },
  {
    img: usaImg,
    title: 'Statue of Liberty',
    author: '@FunTrip',
  },
  {
    img: France_City,
    title: 'India Gate, India',
    author: '@FunTrip',
  },
  {
    img: Berlin,
    title: 'Berlin, Germany',
    author: '@FunTrip',
  },
];
