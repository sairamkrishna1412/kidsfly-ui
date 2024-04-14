function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

export function getRandomArrayElement(arr: any[]) {
  const min = 0;
  const max = Math.floor(arr.length - 1);
  return arr[Math.floor(Math.random() * (max - min + 1)) + min];
}

export function getRandomColor(
  arr: any[] = [
    "purple",
    "pink",
    "green",
    "red",
    "orange",
    "yellow",
    "blue",
    "violet",
  ],
  strength: number = 400
) {
  const min = 0;
  const max = Math.floor(arr.length - 1);
  const choice = `${
    arr[Math.floor(Math.random() * (max - min + 1)) + min]
  }-${strength}`;
  console.log(choice);
  return choice;
}
