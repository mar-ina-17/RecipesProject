export function exists(array, props: { name?: string; id?: number }): boolean {
  return array.some((el) => {
    return el.name === props.name || el.id === props.id;
  });
}

export function ingExists(array, name: string): boolean {
  return array.some((el) => {
    return el.name === name;
  });
}

export function existsOnIndex(
  array,
  props: { name?: string; id?: number }
): number {
  return array.findIndex((x) => x.name === props.name || x.id === props.id);
}

export function generateId(min, max): number {
  return Math.floor(Math.random() * (max - min) + min);
}
