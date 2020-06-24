export default class AboutUs {
  render() {
    const container = document.createElement("div");
    container.className = 'wrapper';
    container.innerHTML = `
      <div>
        <img src='https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg' alt='cake'>
      </div>
        <h1>Rainforest Cafe</h1>
        <p>Located in the heart of the West End at Piccadilly Circus since 1997, Rainforest Cafe is designed as an exotic jungle that recreates the sights and sounds of the Amazon rainforest.
        This spectacular dining experience enables guests to enjoy great food and drinks whilst the unique jungle surroundings are brought to life with the help of stunning special effects and lifelike animatronics.
        Be amazed as all around you there are tropical showers, cascading waterfalls and periodic thunderstorms. Prepare to be delighted as you explore the whole restaurant and get close to the magnificent rainforest animals, including elephants, jaguars, crocodiles, gorillas, mechanical butterflies and orangutans.
        Great for all the family, Rainforest Cafe has an extensive menu of American and International cuisine catering for both adults and children. Food on offer includes steaks, burgers, pasta and salads as well as delicious desserts.
        We look forward to welcoming you soon!</p>

    `;
    return container;
  }
}
