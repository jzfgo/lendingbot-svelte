<script>
  import TitleBar from "../components/TitleBar.svelte";

  let log = [];

  $: getActivity();

  function getActivity() {
    fetch(`/botlog.json`)
      .then(res => res.json())
      .then(json => {
        log = json.log || [];
      });
  }

  const titleBarProps = {
    title: 'Activity Log',
  };
</script>

<TitleBar {...titleBarProps} />

{#if log}
  <ul>
	{#each log as logItem}
    <li>{logItem}</li>
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
    color: --color-spring-wood;
  }
</style>
