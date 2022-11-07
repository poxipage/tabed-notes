<script lang="ts">
    import type { State } from "poxi"
    import { type Note, getSelected, getNotes } from "./state";
    const selected = getSelected();
    const notes = getNotes()

    export let note: State<Note>

const selectTab = (id: string) => {
    $selected = id
}

const removeTab = () => {
    $note.removed = true;
    $notes = $notes.filter(note => note.removed == false)
    if ($selected == $note.id) $selected = $notes[0]?.id || null
}

</script>

<div on:click={() => selectTab($note.id)} class="h-8 w-16 text-center rounded flex border-solid border-2 flex-nowrap cursor-pointer btn-primary border-primary-content {$note.id == $selected ? "opacity-100" : "opacity-50" } ">
    <p class="w-12">{$note.text.slice(0, 5)}</p>
    <button on:click={removeTab} class="w-4">x</button>
</div> 
