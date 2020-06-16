<script>
  export let time;
  export let message;
</script>

<div class="log-item">
  <span class="time">{time}</span>
  <span class="message">{message}</span>
</div>

<style>
  .log-item {
    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-gap: 0.625rem;

    margin-bottom: 0.625rem;
    letter-spacing: 0;
    font-size: 0.75rem;
}

  .time {
    color: var(--color-vivid-tangerine);
    text-align: center;
    border-radius: 0.1875rem;
    background-color: var(--color-charade);
    font-weight: 700;
  }

  .message {
    color: var(--color-spring-wood);
  }
</style>
