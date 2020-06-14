<script>
  export let logSummary = {
    item: 'No activity',
    timeAgo: '0s ago',
  };
</script>

<div class="log-summary">
  <span class="log-item">{logSummary.item}</span>
  <span class="item-timeago">{logSummary.timeAgo}</span>
</div>

<style>
  .log-summary {
    opacity: 0.3;
    color: --color-spring-wood;
    font-size: 0.625rem;
    letter-spacing: 0;

    display: grid;
    grid-template-columns: 1fr min-content;
    grid-gap: 1rem;
  }

  .log-item {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .item-timeago {
    font-weight: 700;
    white-space: nowrap;
  }
</style>
