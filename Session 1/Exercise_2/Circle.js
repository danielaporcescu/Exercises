function circle (center, radius, x = null, y = null) {

  const getCenter = () => center;

  const getRadius = () => radius;

  const moveTo = (_x, _y) => 
  {
    x=_x;
    y=_y;
  };

  const toString = () => `center = ${center}, radius = ${radius.toString()}`;

  return {getCenter, getRadius, moveTo, toString};
};

export default circle;
