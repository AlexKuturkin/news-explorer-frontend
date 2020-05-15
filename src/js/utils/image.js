// eslint-disable-next-line arrow-body-style
const checkImage = (image) => {
  return image === null || image.length < 10
    ? "https://sun9-36.userapi.com/c856128/v856128731/21e29b/LxeuZDnrSpY.jpg"
    : image;
};

export default checkImage;
