import AboutUs from './about-us';
import './style.css';

const aboutus = new AboutUs();
const content = document.querySelector('#content')
content.append(aboutus.render());