<script>
	import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import { data } from '../stores'

  import TitleBar from "../components/TitleBar.svelte";
  import ListItem from "../components/ListItem.svelte";
  import CoinSummary from "../components/CoinSummary.svelte";
  import LogSummary from "../components/LogSummary.svelte";

  const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const titleBarProps = {
    title: 'Lenny',
    left: {
      icon: 'logo',
      link: 'dashboard'
    },
    right: {
      icon: 'settings',
      link: 'settings'
    }
  };

  const earningsTotal = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earnings24h = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  $: if ($data.summary) {
    earningsTotal.set($data.summary.earningsTotal);
    earnings24h.set($data.summary.earnings24h);
  }
</script>

<TitleBar {...titleBarProps} />

<section class="summary">
  <h2>Total earnings</h2>
{#if $data.summary}
  <div class="earnings-total">{CURRENCY_FORMATTER.format($earningsTotal)}</div>
  <div class="earnings-24h">+ {CURRENCY_FORMATTER.format($earnings24h)} 24h</div>
{/if}
</section>

{#if $data.currencies}
<section class="currencies">
  <h2>Earnings by currency</h2>
  {#each $data.currencies as currency}
  <ListItem link={{view: 'currency', params: {ticker: currency.ticker}}}>
    <CoinSummary {...currency} />
  </ListItem>
  {/each}
</section>
{/if}

{#if $data.log}
<section class="module log">
  <h2>Activity log</h2>
  <ListItem link="activity-log">
    <LogSummary {...$data.log[0]} />
  </ListItem>
</section>
{/if}

<style>
  section {
    margin-top: 1.25rem;
  }

  section h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: 700;
    font-size: 0.75rem;
  }

  .earnings-total {
    color: var(--main-fg-color);
    text-align: center;
    letter-spacing: 0;
    font-weight: 200;
    font-size: 2.25rem;
  }

  .earnings-24h {
    font-weight: 700;
    font-size: 0.75rem;
    color: var(--main-gain-color);
    letter-spacing: 0;
    text-align: center;
  }
</style>
