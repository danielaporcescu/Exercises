function Wind(direction, speedMPH, speedMS) {
  const getDirection = (direction) => {
    if (direction == "north") {
      directionType = "north";
    } else if (direction == "south") {
      directionType = "south";
    } else directionType = "other";

    return directionType;
  };

  const convertToMPH = (speedMS) => {
    MPH = speedMS * 2.2369;
  };

  const convertToMS = (speedMPH) => {
    MS = speedMPH * 0.447;
  };

  return { getDirection, convertToMPH, convertToMS };
}
