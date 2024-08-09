export interface News {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	title: string;
	url: string;
	urlToImage: string;
	source: {
		id: string;
		name: string;
	};
}

export const NEWS_CONSTANTS = {
	SOURCES: [
		{ id: 1, value: "Basketball" },
		{ id: 2, value: "BBC" },
		{ id: 3, value: "Bitcoin" },
		{ id: 4, value: "Food" },
		{ id: 5, value: "Football" },
		{ id: 6, value: "Syria" }
	]
};
