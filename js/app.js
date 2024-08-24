import 'https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js';

const lista = document.querySelector('#lista');

Sortable.create(lista, {
	animation: 200,
	ghostClass: 'sortable-ghost',
	chosenClass: 'sortable-chosen',
	drgaClass: 'sortable-drag',

	onEnd: () => {
		console.log('se inserto un elemento');
	},
	group: 'lista-persona',
	store: {
		set: sortable => {
			const orden = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, orden.join('|'));
		},
		//optneemos el orden
		get: sortable => {
			const orden = localStorage.getItem(sortable.options.group.name);
			return orden ? orden.split('|') : [];
		},
	},
});
