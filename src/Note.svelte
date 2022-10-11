<script lang="ts">
  import { getSelected, type Note } from "./state";
  import type { State } from "poxi"
  const selected = getSelected()

  export let note: State<Note> = null
</script>

<div class="notepad w-full justify-center items-center">
  {#if $selected}
  <textarea class="note content" name="content" id="content" bind:value={$note.text} />
  {/if}
</div>

<style>
  .notepad {
    background-color: wheat;
    border: 1px solid black;
    border-radius: 5px;
    border-bottom: 2px solid black;
    padding: 10px, 10px, 10px, 10px;
    height: calc(100% - 2rem);
    overflow: hidden;
  }
  .note {
    width: 100%;
    font-family: cursive;
    align-self: center;
    border: 1px solid black;
    background-color: wheat;
    resize: none;
  }
  .content {
    height: 100%;
    font-size: var(--content-size);
    padding: 5px 5%;
  }
</style>