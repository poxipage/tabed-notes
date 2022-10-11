<script lang="ts">
  import Note from "./Note.svelte";
  import { getNotes, getSelected } from "./state";
  import { nanoid } from "nanoid";
  import Tab from "./Tab.svelte";

  const notes = getNotes();
  const selected = getSelected();

  const createTab = () => {
    const tabId = nanoid();
    notes.push({id: tabId, text:"", removed: false});
    $selected = tabId;
  }

  
  

</script>

<div class="flex w-full"> 
  <div class="flex-nowrap overflow-y-hidden overflow-x-scroll notetabs  scrollbar-hide tabs">
    {#each $notes as note (note.id)}
      {#if ! note.removed}
      <Tab note={notes.getById(note.id)} />
      {/if}
    {/each}
  </div>
  <a on:click={createTab} class="h-6 cursor-pointer text-xl text-center rounded-full w-6 m-1 leading-5 border-black border-2 opacity-50 hover:opacity-100"> {"+"}</a> 
</div>
<Note note={notes.getById($selected)} />

<style>
  .notetabs {
    max-width: calc(100% - 2rem);
  }
</style>
