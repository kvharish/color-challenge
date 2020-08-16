exports.generateRandomHexColor = () => {
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
};

exports.generateRandomRGBColor = () => {
  const round = Math.round,
      random = Math.random,
      max = 255;
  return `rgb(${round(random() * max)},${round(random() * max)},${round(random() * max)})`;
};
