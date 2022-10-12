export function exists(element, array): boolean {
  return array.some((el) => {
    return el.name === element.name;
  });
}

export function existsOnIndex(name, array): number {
  return array.findIndex((x) => x.name === name);
}
