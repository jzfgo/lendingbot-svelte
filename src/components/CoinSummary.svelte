<script>
  import RadialGraph from "./graphs/RadialGraph.svelte";
  import TempGraph from "../assets/images/tmpgraph.svg";
  import BtcIcon from '../assets/images/currencies/btc.svg';

  export let coin = {};

  let earnings = "$ 96.73";
  let change24h = "+2.09";
</script>

<div class="coin-summary">
  <div class="graph">
    <RadialGraph pct={Math.random(0, 1)}>
      <BtcIcon />
    </RadialGraph>
  </div>
  <div class="earnigns">
    <div class="total">{earnings}</div>
    <div class="change24h">{change24h} 24h</div>
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
    margin: 0.75rem;
  }

  .graph {}

  .earnings {}

  .total {
    letter-spacing: 0;
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 1.125rem;
    color: var(--color-spring-wood);
  }

  .change24h {
    letter-spacing: 0;
    font-weight: 400;
    line-height: 0.875rem;
    font-size: 0.625rem;
    color: var(--color-mint-green);
  }
</style>
