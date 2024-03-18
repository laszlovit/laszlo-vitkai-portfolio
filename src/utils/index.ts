const createLogo = (name: string): string =>
  name
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase();

export { createLogo };
