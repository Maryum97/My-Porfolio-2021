import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './style.css';
import Image1 from '../../Assets/Projects/WeatherDashboardIntro.png';
import Image2 from '../../Assets/Projects/WeatherDashboard.png';
import Image3 from '../../Assets/Projects/BelieveIntro.png';
import Image4 from '../../Assets/Projects/Believe.png';
import Image5 from '../../Assets/Projects/READMEGeneratorIntro.png';
import Image6 from '../../Assets/Projects/READMEGenerator.png';
import Image7 from '../../Assets/Projects/NoteTakerIntro.png';
import Image8 from '../../Assets/Projects/NoteTaker.png';
import Image9 from '../../Assets/Projects/CodeCrowdIntro.png';
import Image10 from '../../Assets/Projects/CodeCrowd.png';
import Image11 from '../../Assets/Projects/EmployeeDirectoryIntro.png';
import Image12 from '../../Assets/Projects/EmployeeDirectory.png';

const items = [
  {
    src: Image1,  
    altText: 'Weather Dashboard',
    header: 'Available on Github and Github pages',
    key: '1'
  },
  {
    src: Image2,
    altText: 'Weather Dashboard',
    key: '2'
  },
  {
    src: Image3,
    altText: 'Believe',
    header: 'Available on Github and Github pages',
    key: '3'
  },
  {
    src: Image4,
    altText: 'Believe',
    key: '4'
  },
  {
    src: Image5,
    altText: 'README Generator',
    header: 'Available on Github only',
    key: '5'
  },
  {
    src: Image6,
    altText: 'README Generator',
    key: '6'
  },
  {
    src: Image7,
    altText: 'Note Taker',
    header: 'Available on Github and Heroku',
    key: '7'
  },
  {
    src: Image8,
    altText: 'Note Taker',
    key: '8'
  },
  {
    src: Image9,
    altText: 'Code Crowd',
    header: 'Available on Github and Heroku',
    key: '9'
  },
  {
    src: Image10,
    altText: 'Code Crowd',
    key: '10'
  },
  {
    src: Image11,
    altText: 'Employee Directory',
    header: 'Available on Github and Github Pages',
    key: '11'
  },
  {
    src: Image12,
    altText: 'Code Crowd',
    key: '12'
  },
];

const ProjectCarousel = () => <UncontrolledCarousel items={items} />;

export default ProjectCarousel;