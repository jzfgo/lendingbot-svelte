<script>
  import { view } from './stores';

  import ActivityLog from './pages/ActivityLog.svelte';
  import Currency from './pages/Currency.svelte';
  import Dashboard from './pages/Dashboard.svelte';
  import Settings from './pages/Settings.svelte';

  let currentView;

  const pages = {
    'activity-log': ActivityLog,
    'currency': Currency,
    'dashboard': Dashboard,
    'settings': Settings,
  };

  const unsubscribe = view.subscribe(value => {
    currentView = value;
  });
</script>

<svelte:component this={pages[currentView.view]} {...currentView.params} />
