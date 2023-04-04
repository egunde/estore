
export function loadState(KEY: string) {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error)
  }
}

export default async function saveState(KEY: string, state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (error) {
    console.log(error)
  }
}