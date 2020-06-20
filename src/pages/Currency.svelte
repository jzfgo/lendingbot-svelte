<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import { data } from '../stores'

  import TitleBar from "../components/TitleBar.svelte";

  export let ticker;

  const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const titleBarProps = {
    title: ticker.toLocaleUpperCase(),
  };

  const earningsTotal = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earnings24h = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  $: [currency] = $data.currencies.filter(currency => currency.ticker === ticker);
  $: if (currency) {
    earningsTotal.set(currency.earningsTotal);
    earnings24h.set(currency.earnings24h);
  }
</script>

<main>
  <TitleBar {...titleBarProps} />

  <section class="summary">
    <h2>Total earnings</h2>
    {#if currency}
      <div class="earnings-total">{CURRENCY_FORMATTER.format($earningsTotal)}</div>
      <div class="earnings-24h">+ {CURRENCY_FORMATTER.format($earnings24h)} 24h</div>
    {/if}
  </section>
</main>

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
