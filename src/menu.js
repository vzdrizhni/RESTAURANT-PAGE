import MenuItem from './menu-item';

class Menu {

  items = [
    new MenuItem('A birthday cake', 'https://iambaker.net/wp-content/uploads/2018/01/birthday-cake-BLOG1.jpg'),
    new MenuItem('Baked Tofu Tenders', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/5/FNK_Kids-Can-Make-Baked-Tofu-Tenders_s4x3.jpg.rend.hgtvcom.966.725.suffix/1448278926213.jpeg'),
    new MenuItem('Oatmeal Cookie Smoothie', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/5/12/0/FNK_Kids-Can-Make-Oatmeal-Cookie-Smoothie_s4x3.jpg.rend.hgtvcom.966.725.suffix/1400015927962.jpeg'),
    new MenuItem('Raspberry and Cream Cheese Brownie Bites', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/5/FNK_Kids-Can-Make-Raspberry-and-Cream-Cheese-Brownie-Bites_s4x3.jpg.rend.hgtvcom.966.725.suffix/1448278926326.jpeg'),
    new MenuItem('Watermelon Split', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/5/12/0/FNK_Kids-Can-Make-Watermelon-Split_s4x3.jpg.rend.hgtvcom.966.725.suffix/1400015922348.jpeg'),
    new MenuItem('Ricotta, Blueberry and Grape Toasts', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/3/29/1/FNK_Kids-Can-Make-Ricotta-Blueberry-and-Grape-Toasts_s4x3.jpg.rend.hgtvcom.966.725.suffix/1470798243689.jpeg'),
  ];

  render() {
    const menuList = document.createElement('ul');
    menuList.className = 'menu-list';
    for (const item of this.items) {
      const menuItem = document.createElement('li');
      menuItem.innerHTML = `
        <img src='${item.image}'>
        <span>${item.title}</span>
      `;
      menuList.append(menuItem);
    }
    return menuList;
  };
};

export default Menu
