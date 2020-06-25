import AboutUs from './about-us';
import Menu from './menu';
import ContactUs from './contact-us';
import './style.css';

const aboutus = new AboutUs();
const menu = new Menu();
const contact = new ContactUs;
const content = document.querySelector('#content')
// console.log(menu)
content.append(contact.render());