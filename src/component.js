export default (text = "Hello webpack") => {
  const element = document.createElement("p");

  element.innerHTML = text;

  return element;
};