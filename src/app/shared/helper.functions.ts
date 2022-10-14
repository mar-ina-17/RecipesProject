export function exists(array, props: { id?: number; name?: string }): boolean {
  return array.some((el) => {
    return el.id === props.id || el.name === props.name;
  });
}

export function existsOnIndex(
  array,
  props: { id?: number; name?: string }
): number {
  return array.findIndex((x) => x.id === props.id || x.name === props.name);
}

export function generateId(min, max): number {
  return Math.floor(Math.random() * (max - min) + min);
}
