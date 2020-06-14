<script>
	import { view } from '../stores.js';

  export let link;

  const changeView = () => link && view.set(link);
</script>

<div class="list-item" on:click={changeView}>
  <slot />
</div>

<style>
  .list-item {
    background: rgba(0,0,0,.3);
    border-radius: 0.625rem;
    padding: 0.75rem;
    margin: 0.625rem 0.9375rem;
    cursor: pointer;
  }
</style>
