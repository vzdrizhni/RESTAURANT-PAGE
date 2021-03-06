class ContactUs {
  render() { // eslint-disable-line class-methods-use-this
    const container = document.createElement('div');
    container.className = 'wrapper';
    container.innerHTML = `
      <div>
        <h1>WE WANT TO HEAR FROM YOU!</h1>
      </div>
      <div>
        <img src="https://www.rainforestcafe.com/images/content/_photo-contact.png" class="cont-img">
      </div>
      <div>
        <p>Thank you for taking the time to give us your feedback. We value your business and will make every effort to improve our service. Please note that information you share with us on this form is strictly confidential.<p>
      </div>
        <div class="contacts">
          <h3>Corporate Office</h3>
          <p>Landry's Restaurants, Inc.</p>
          <p>1510 W. Loop South</p>
          <p>Houston, Texas 77027</p>
        </div>
        <ul class="reqs">
          <li><h4>Corporate Office</h4></li>
          <li><a href"#">Restaurant Locations</a></li>
          <li><a href"#">Schedule an Event</a></li>
          <li><a href"#">Careers</a></li>
          <li><a href"#">Donations</a></li>
          <li><a href"#">Media Inquiries</a></li>
        </ul>
    `;
    return container;
  }
}

export default ContactUs;