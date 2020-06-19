<script>
  import { data } from '../stores'

  import TitleBar from "../components/TitleBar.svelte";
  import LogItem from "../components/LogItem.svelte";

  const titleBarProps = {
    title: 'Activity Log',
  };
</script>

<TitleBar {...titleBarProps} />

{#if $data.log}
  <ul>
	{#each $data.log as logItem}
    <LogItem {...logItem} />
  {/each}
  </ul>
{:else}
  No activity.
{/if}

<style>
  :global(body) {
    background-color: #17171e;
  }

  ul {
    list-style: none;
    margin: 1.25rem 0.9375rem;
    padding-left: 0;
  }

  li {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 0.75rem;
    color: var(--color-spring-wood);
  }
</style>
