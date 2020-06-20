<script>
  import { onMount } from 'svelte';
  import * as timeago from 'timeago.js';
  import { onInterval } from '../utils'

  export let time = 'just now';
  export let message = 'No activity';

  let timeFormatted = timeago.format(time);
  onInterval(() => timeFormatted = timeago.format(time), 30000);
</script>

<div class="log-summary">
  <span class="log-message">{message}</span>
  <span class="item-time">{timeFormatted}</span>
</div>

<style>
  .log-summary {
    opacity: 0.3;
    color: var(--color-spring-wood);
    font-size: 0.625rem;
    letter-spacing: 0;

    display: grid;
    grid-template-columns: 1fr min-content;
    grid-gap: 1rem;

    margin-left: .75rem;
  }

  .log-message {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .item-time {
    font-weight: 700;
    white-space: nowrap;
  }
</style>
