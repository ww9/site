import { writable } from 'svelte/store';

function createTitle() {
	const { subscribe, set } = writable('Bruno Cassol');

	return {
		subscribe: subscribe,
		set: (value: string) => {
			if (value) {
				set(`${value} - Bruno Cassol`);
			} else {
				set(`Bruno Cassol`);
			}
		},
		clear: () => {
			set('Bruno Cassol');
		},
	};
}

export const title = createTitle();

export enum MenuItems {
	None = '',
	Index = 'Index',
	Portfolio = 'Portfolio',
	Tools = 'Tools',
}

export const activeMenu = writable(MenuItems.None);
