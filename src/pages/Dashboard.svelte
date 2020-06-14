<script>
  import TitleBar from "../components/TitleBar.svelte";
  import ListItem from "../components/ListItem.svelte";
  import CoinSummary from "../components/CoinSummary.svelte";
  import LogSummary from "../components/LogSummary.svelte";

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

  const logSummary = {
    item: 'Using MACD as mindailyrate 0.0142% for BTC Using MACD as mindailyrate 0.0142% for BTC',
    timeAgo: '36s ago',
  }
</script>

<TitleBar {...titleBarProps} />

<section class="summary">
  <h2>Total earnings since March 14, 2020</h2>
  <div class="earnings-total">$181.01</div>
  <div class="earnings-24h">+$0.16 24h</div>
</section>

<section class="currencies">
  <h2>Earnings by currency</h2>
  <ListItem link="currency">
    <CoinSummary/>
  </ListItem>
  <ListItem link="currency">
    <CoinSummary/>
  </ListItem>
  <ListItem link="currency">
    <CoinSummary/>
  </ListItem>
</section>

<section class="module log">
  <h2>Activity log</h2>
  <ListItem link="activity-log">
    <LogSummary {logSummary} />
  </ListItem>
</section>

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
