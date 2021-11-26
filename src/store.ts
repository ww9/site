import { writable } from 'svelte/store';

function createTitle() {
	const { subscribe, set, update } = writable('Bruno Cassol');

	return {
		subscribe,
		set: (value: string) => {
			set(`${value} - Bruno Cassol`);
		},
		clear: () => {
			set('Bruno Cassol');
		}
	};
}

export const title = createTitle();

// todo: can this be an enum? This way we force active menu to always be something we expect
export const activeMenu = writable('index');
