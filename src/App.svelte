<script>
	import { view } from './stores.js';

  import ActivityLog from './pages/ActivityLog.svelte';
  import Currency from './pages/Currency.svelte';
  import Dashboard from './pages/Dashboard.svelte';
  import Settings from './pages/Settings.svelte';

	let currentView;

  const views = {
    'activity-log': ActivityLog,
    'currency': Currency,
    'dashboard': Dashboard,
    'settings': Settings,
  };

	const unsubscribe = view.subscribe(value => {
		currentView = value;
	});
</script>

<main>
  <svelte:component this={views[currentView]}/>
</main>

<style>
</style>
