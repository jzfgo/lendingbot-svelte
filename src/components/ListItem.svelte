<script>
  import { view } from '../stores.js';

  import AngleRight from '../assets/images/angle-right.svg';

  export let link;

  const changeView = () => link && view.set(link);
</script>

<div class="list-item" on:click={changeView}>
  <slot />
  <AngleRight width="32" height="32" />
</div>

<style>
  .list-item {
    display: grid;
    grid-template-columns: 1fr 2rem;
    align-items: center;

    background: rgba(0,0,0,.3);
    border-radius: 0.625rem;
    margin: 0.625rem 0.9375rem;
    cursor: pointer;
  }
</style>
