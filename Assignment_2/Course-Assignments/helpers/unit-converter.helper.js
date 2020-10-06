export const celsiusToFarenheit = (celsiusT) => (celsiusT / 5) * 9 + 32;
export const farenheitToCelsius = (farenheitT) => ((farenheitT - 32) * 5) / 9;

export const mmToInch = (mmValue) => mmValue / 25.5;
export const inchToMM = (inchValue) => inchValue * 25.5;

export const msToMph = (value) => value * 2.237;
export const mphToMs = (value) => value / 2.237;
