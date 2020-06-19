<script>
  import { data } from '../stores'

  import TitleBar from "../components/TitleBar.svelte";

  export let ticker = 'btc';

  const titleBarProps = {
    title: ticker.toLocaleUpperCase(),
  };
</script>

<TitleBar {...titleBarProps} />

{#if $data.currencies[ticker]}
{JSON.stringify($data.currencies[ticker])}
{/if}
