// Mental Fitness Assessment Quiz Types

export interface QuizQuestion {
	id: number;
	category: string;
	question: string;
	description?: string;
	type: 'scale' | 'multiple-choice' | 'yes-no';
	options?: string[]; // For multiple choice
	min?: number; // For scale questions
	max?: number; // For scale questions
}

export interface QuizAnswer {
	questionId: number;
	value: number | string;
	timestamp: Date;
}

export interface QuizResult {
	overallScore: number;
	categoryScores: Record<string, number>;
	completedAt: Date;
	answers: QuizAnswer[];
}

export interface User {
	email: string;
	name?: string;
}
