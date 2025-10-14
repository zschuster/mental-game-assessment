import type { QuizQuestion } from '$lib/types/quiz';

// Mental Fitness Assessment Questions
export const quizQuestions: QuizQuestion[] = [
	{
		id: 1,
		category: 'Stress Management',
		question: 'How well do you manage daily stress?',
		description: 'Consider your ability to stay calm under pressure',
		type: 'scale',
		min: 1,
		max: 10
	},
	{
		id: 2,
		category: 'Sleep Quality',
		question: 'How would you rate your sleep quality?',
		description: 'Think about how rested you feel when you wake up',
		type: 'scale',
		min: 1,
		max: 10
	},
	{
		id: 3,
		category: 'Energy Level',
		question: 'What is your typical energy level throughout the day?',
		description: 'Rate your physical and mental energy',
		type: 'scale',
		min: 1,
		max: 10
	},
	{
		id: 4,
		category: 'Emotional Balance',
		question: 'How balanced do your emotions feel?',
		description: 'Consider mood swings and emotional stability',
		type: 'scale',
		min: 1,
		max: 10
	},
	{
		id: 5,
		category: 'Focus & Concentration',
		question: 'How well can you focus on tasks?',
		description: 'Think about your ability to concentrate without distraction',
		type: 'scale',
		min: 1,
		max: 10
	},
	{
		id: 6,
		category: 'Social Connection',
		question: 'How connected do you feel to others?',
		description: 'Rate the quality of your relationships and social support',
		type: 'scale',
		min: 1,
		max: 10
	},
	{
		id: 7,
		category: 'Physical Activity',
		question: 'How often do you engage in physical activity?',
		description: 'Consider exercise, movement, and active hobbies',
		type: 'scale',
		min: 1,
		max: 10
	},
	{
		id: 8,
		category: 'Purpose & Meaning',
		question: 'How clear is your sense of purpose?',
		description: 'Think about what motivates and drives you',
		type: 'scale',
		min: 1,
		max: 10
	}
];

// Helper function to get a question by ID
export function getQuestionById(id: number): QuizQuestion | undefined {
	return quizQuestions.find((q) => q.id === id);
}

// Get total number of questions
export const totalQuestions = quizQuestions.length;