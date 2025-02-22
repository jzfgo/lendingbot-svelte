import { readable, writable } from 'svelte/store';
import getData from './botlog';

export const view = writable({ view: 'dashboard' });

export const params = writable({});

export const data = readable({}, (set) => {
  getData().then((data) => set(data));

  const interval = setInterval(() => {
    getData().then((data) => set(data));
    console.log('Updating…');
  }, 30000);

  return () => clearInterval(interval);
});
