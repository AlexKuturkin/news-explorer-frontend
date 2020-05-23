const deleteTags = (text) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  text.replace(/(<ol>|<\/ol>|<li>|<\/li>|<ul>|<\/ul>)/g, "");

export default deleteTags;
