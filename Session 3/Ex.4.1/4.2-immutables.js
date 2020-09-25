function immutable_circle (center, radius, _points) {
    const points = [..._points];

    const getCenter = () => center;
  
    const getRadius = () => radius;
  
    const getPoints = () => [...points];
    const addPoints =(_x, _y) =>immutable_circle(center, radius, [...points, point])
    const moveTo = (_x, _y) => 
    {
      x=_x;
      y=_y;
    };
  
    const toString = () => `center = ${center}, radius = ${radius.toString()}`;
  
    return {getCenter, getRadius, getPoints, addPoints, moveTo, toString};
  };

  