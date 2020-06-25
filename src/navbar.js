import AboutUs from './about-us';
import Menu from './menu';
import ContactUs from './contact-us';

class Navbar {

  render() {
    const nav = document.createElement('div');
    nav.className = 'nav';

    nav.innerHTML = `
      <ul>
        <li>About Us</li>
        <li>Menu</li>
        <li>Contact Us</li>
      </ul>
      <div class="display"></div>
    `;

    const aboutUs = new AboutUs();
    const menu = new Menu();
    const contact = new ContactUs();

    const about = nav.querySelector('ul').getElementsByTagName('li')[0];
    const menuDisplay = nav.querySelector('ul').getElementsByTagName('li')[1];
    const contactDisplay = nav.querySelector('ul').getElementsByTagName('li')[2];
    const display = nav.querySelector('.display');

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