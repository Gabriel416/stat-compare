const checkImage = (imageSrc, good = "success", bad = "error") => {
  let img = new Image();
  img.onload = () => true;
  img.onerror = () => false;
  img.src = imageSrc;
};

export default checkImage;
