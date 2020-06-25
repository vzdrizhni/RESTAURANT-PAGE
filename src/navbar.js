import AboutUs from './about-us';
import Menu from './menu';
import ContactUs from './contact-us';
import myPost from './myPost.png'

class Navbar {

  render() {
    const nav = document.createElement('div');
    nav.className = 'nav';

    nav.innerHTML = `
      <div class="banner"></div>
      <ul class="ul">
        <li>About Us</li>
        <li>Menu</li>
        <li>Contact Us</li>
      </ul>
      <div class="display"></div>
    `;

    const aboutUs = new AboutUs();
    const menu = new Menu();
    const contact = new ContactUs();

    const banner = nav.querySelector('.banner');
    const about = nav.querySelector('ul').getElementsByTagName('li')[0];
    const menuDisplay = nav.querySelector('ul').getElementsByTagName('li')[1];
    const contactDisplay = nav.querySelector('ul').getElementsByTagName('li')[2];
    const display = nav.querySelector('.display');

    banner.innerHTML = `
      <img src=${myPost}>
    `;

    display.append(aboutUs.render());

    about.addEventListener('click', function() {
      display.innerHTML = '';
      display.append(aboutUs.render());
    })

    menuDisplay.addEventListener('click', function() {
      display.innerHTML = '';
      display.append(menu.render());
    })

    contactDisplay.addEventListener('click', function() {
      display.innerHTML = '';
      display.append(contact.render());
    })

    return nav;
  }

}

export default Navbar