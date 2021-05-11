import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './style.css'
import Image1 from '../../Assets/WeatherDashboardIntro.png';
import Image2 from '../../Assets/WeatherDashboard.png';
import Image3 from '../../Assets/BelieveIntro.png';
import Image4 from '../../Assets/Believe.png';
import Image5 from '../../Assets/READMEGeneratorIntro.png';
import Image6 from '../../Assets/READMEGenerator.png';
import Image7 from '../../Assets/NoteTakerIntro.png';
import Image8 from '../../Assets/NoteTaker.png';
import Image9 from '../../Assets/CodeCrowdIntro.png';
import Image10 from '../../Assets/CodeCrowd.png';
import Image11 from '../../Assets/EmployeeDirectoryIntro.png';
import Image12 from '../../Assets/EmployeeDirectory.png';

const items = [
  {
    src: Image1,  
    altText: 'Weather Dashboard',
    caption: 'Github: https://github.com/Maryum97/06_Server-Side-API-s_Weather-Dashboard',
    header: 'Find App At: https://maryum97.github.io/06_Server-Side-API-s_Weather-Dashboard/',
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
    caption: 'Github: https://github.com/Maryum97/believe',
    header: 'Find App At: https://maryum97.github.io/believe/',
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
    caption: 'Github: https://github.com/Maryum97/My_README_Generator_2021',
    header: 'Download App from Github',
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
    caption: 'Github: https://github.com/Maryum97/Note_Taker_2021',
    header: 'Find App At: https://maryum-app-1.herokuapp.com/',
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
    caption: 'Github: https://github.com/Maryum97/Code_Crowd',
    header: 'Find App At: https://code-crowd.herokuapp.com/',
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
    caption: 'Github: https://github.com/Maryum97/Employee-Directory-2021',
    header: 'Find App At: https://maryum97.github.io/Employee-Directory-2021/',
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