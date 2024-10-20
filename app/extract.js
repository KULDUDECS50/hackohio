const jsonString = fetch("/data.json");
const parsedData = JSON.parse(jsonString);

const key = Object.keys(parsedData)[0]; // "[126.0,"
const value = parsedData[key]; // "57.0]"

// Extract numbers using regular expressions
const keyNumber = parseFloat(key.match(/[\d.]+/)[0]);
const valueNumber = parseFloat(value.match(/[\d.]+/)[0]);
