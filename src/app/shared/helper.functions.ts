export function ingExists(array, name: string): boolean {
  return array.some((el) => {
    return el.name.toLowerCase() === name.toLowerCase();
  });
}

export function existsOnIndex(array, name: string): number {
  return array.findIndex((x) => x.name.toLowerCase() === name.toLowerCase());
}

export function generateId(min, max): number {
  return Math.floor(Math.random() * (max - min) + min);
}
