const images = {
  1: "https://i.pinimg.com/474x/40/26/59/40265954d4434192b85b58dd7981d388.jpg",
  2: "https://i.pinimg.com/474x/6f/77/66/6f7766403ef707543ac111cf5701a8dc.jpg",
  3: "https://i.pinimg.com/564x/93/c1/be/93c1bed4b9be4cb0683bba2030341797.jpg",
  4: "https://i.pinimg.com/474x/e8/41/ba/e841ba165e554607c43fc98bbe17b013.jpg",
  5: "https://i.pinimg.com/474x/a1/d9/85/a1d9858302cf22f4a877bfc9579fd81f.jpg",
  6: "https://i.pinimg.com/474x/ad/0d/d6/ad0dd6929f373da4d65d74f16ed192b9.jpg",
  7: "https://i.pinimg.com/474x/7f/ec/13/7fec13cd1c669dd16ee04545d614577f.jpg",
  8: "https://i.pinimg.com/474x/bf/c5/2a/bfc52a95c71639a364f39a341fc22326.jpg",
};

const generateBoard = () => {
  const value = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

  const board = [];

  for (let i = 0; i < 16; i++) {
    const value = values.splice(
      Math.floor(Math.random() * values.length),
      1
    )[0];

    board.push({
      id: i,
      value,
      src: images[value],
    });
  }
  return board;
};
