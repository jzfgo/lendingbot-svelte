<script>
  import TitleBar from "../components/TitleBar.svelte";
  import LogItem from "../components/LogItem.svelte";

  let log = [];

  $: getActivity();

  $: logProcessed = log.map(item => ({
    time: item.substr(0, 19),
    message: item.substr(20)
  }));

  const getActivity = () => fetch(`/botlog.json`)
    .then(res => res.json())
    .then(json => {
      log = json.log || [];
    });

  const titleBarProps = {
    title: 'Activity Log',
  };
</script>

<TitleBar {...titleBarProps} />

{#if logProcessed}
  <ul>
	{#each logProcessed as logItem}
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
