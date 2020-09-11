function point(x, y) {
  const getX = () => x;

  const getY = () => y;

  const moveTo = (_x, _y) => {
    x = _x;
    y = _y;
  };

  const toString = () => `x = ${x}, y =${y}`;

  const copy = () => point(x, y);

  return { getX, getY, moveTo, toString, copy };
}

// const num = Point(1, 2);
// console.log(num.getX());
// console.log(num.getY());
// num.toString();
export default point;
