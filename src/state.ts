import { state, type State } from "poxi";
import { nanoid } from "nanoid";


export type Note = { id: string; text: string; removed: boolean };
type Schema = { notes: Array<Note>, selected: string };
export const getState = () => state<Schema>();
export const getNotes = () => getState().getArray("notes");
export const getSelected = () => getState().get("selected")

export function onCreate(state: State<Schema>) {
  const firstId = nanoid()
  state.set({
    notes: [{ text: "First note", id: firstId, removed: false }],
    selected: firstId
  });
}
