<script>
  export let pct = 0;
  export let radius = 16;
  export let stokeWidth = 2;
  export let trackColor = '#22212c';
  export let progressColor = '#ffca80';

  let width = radius * 2;
  let height = radius * 2;
  let internalRadius = radius - (stokeWidth/2);

  const circ = 2 * Math.PI * internalRadius;

  let progress = circ * (1 - pct);
</script>

<svg {width} {height} viewBox={`0 0 ${width} ${height}`}>
  <circle cx={radius} cy={radius} r={internalRadius} fill="none" stroke={trackColor} stroke-width={stokeWidth} />
  <circle class="progress" cx={radius} cy={radius} r={internalRadius} fill="none" stroke={progressColor} stroke-width={stokeWidth} style="--circ: {circ}; --progress: {progress}" />
</svg>

<style>
  svg {
    transform: rotate(-90deg);
  }

  .progress {
    stroke-dasharray: var(--circ);
    stroke-dashoffset: var(--progress);
    animation: progress 1s;
  }

  @keyframes progress {
    from {
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: var(--progress);
    }
  }
</style>
