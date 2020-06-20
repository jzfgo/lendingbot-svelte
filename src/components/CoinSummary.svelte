<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import RadialGraph from './graphs/RadialGraph.svelte';
  import TempGraph from '../assets/images/tmp-graph.svg';
  import icons from '../coin-icons'

  const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  export let ticker = 'btc';
  export let pctLent = .5;
  export let earningsTotal = "$ 100.0";
  export let earnings24h = "+1.00";

  const earningsTotalTween = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earnings24hTween = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  $: earningsTotalTween.set(earningsTotal);
  $: earnings24hTween.set(earnings24h);
</script>

<div class="coin-summary">
  <div class="graph">
    <RadialGraph pct={pctLent}>
      <svelte:component this={icons[ticker]}/>
    </RadialGraph>
  </div>
  <div class="earnigns">
    <div class="earningsTotal">{CURRENCY_FORMATTER.format($earningsTotalTween)}</div>
    <div class="earnings24h">+ {CURRENCY_FORMATTER.format($earnings24hTween)} 24h</div>
  </div>
  <div class="graph">
    <TempGraph />
  </div>
</div>

<style>
  .coin-summary {
    display: grid;
    grid-template-columns: 2rem 1fr 6.25rem;
    grid-gap: 1rem;

    height: 2rem;
    margin: .75rem 0 .75rem .75rem;
  }

  .graph {}

  .earningsTotal {}

  .total {
    letter-spacing: 0;
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 1.125rem;
    color: var(--color-spring-wood);
  }

  .earnings24h {
    letter-spacing: 0;
    font-weight: 400;
    line-height: 0.875rem;
    font-size: 0.625rem;
    color: var(--color-mint-green);
  }
</style>
