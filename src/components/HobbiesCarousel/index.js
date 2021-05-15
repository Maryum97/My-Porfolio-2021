import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Image1 from '../../Assets/HobbiesInterests/Exercise.png';
import Image2 from '../../Assets/HobbiesInterests/Cycling.png';
import Image3 from '../../Assets/HobbiesInterests/SocialMedia.png';

const items = [
  {
    src: Image1,
    altText: 'Exercise',
    key: '1'
  },
  {
    src: Image2,
    altText: 'Cycling',
    key: '2'
  },
  {
    src: Image3,
    altText: 'SocialMedia',
    key: '3'
  },
];

const HobbiesCarousel = () => <UncontrolledCarousel items={items} />;

export default HobbiesCarousel;