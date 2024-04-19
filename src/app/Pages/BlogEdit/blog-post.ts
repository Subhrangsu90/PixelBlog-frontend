export interface Blog {
	// id?: number;
	title: string;
	description: string;
	image?: string | ArrayBuffer | null;
	content: {
		heading: string;
		paragraphs: string[];
		points: string[];
	}[];
	date?: string;
	readingTime: string;
}
