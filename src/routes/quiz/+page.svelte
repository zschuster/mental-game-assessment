<script lang="ts">
	import { goto } from '$app/navigation';
	import QuizQuestion from '$lib/components/QuizQuestion.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { quizQuestions, totalQuestions } from '$lib/data/questions';
	import type { QuizAnswer } from '$lib/types/quiz';
	import {dev} from '$app/environment';

	// Quiz state
	let currentQuestionIndex = $state(0);
	let answers: QuizAnswer[] = $state([]);

	// Derived values
	let currentQuestion = $derived(quizQuestions[currentQuestionIndex]);
	let currentAnswer = $derived(answers.find((a) => a.questionId === currentQuestion?.id));
	let canProceed = $derived(currentAnswer !== undefined);
	let isLastQuestion = $derived(currentQuestionIndex === totalQuestions - 1);

	// Handle answer selection
	function handleAnswer(value: number) {
		// Remove existing answer for this question if it exists
		answers = answers.filter((a) => a.questionId !== currentQuestion.id);

		// Add new answer
		answers = [
			...answers,
			{
				questionId: currentQuestion.id,
				value,
				timestamp: new Date()
			}
		];
	}

	// Navigate to next question
	function nextQuestion() {
		if (isLastQuestion) {
			// Navigate to results page
			goto('/results');
		} else {
			currentQuestionIndex += 1;
		}
	}

	// Navigate to previous question
	function previousQuestion() {
		if (currentQuestionIndex > 0) {
			currentQuestionIndex -= 1;
		}
	}
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
	<div class="max-w-3xl mx-auto py-8">
		<!-- Progress Bar -->
		<div class="mb-8">
			<ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
		</div>

		<!-- Quiz Question Card -->
		<div class="bg-white rounded-2xl shadow-xl p-8 mb-6">
			{#if currentQuestion}
				<QuizQuestion
					question={currentQuestion}
					currentValue={typeof currentAnswer?.value === 'number' ? currentAnswer.value : 0}
					onAnswer={handleAnswer}
				/>
			{/if}
		</div>

		<!-- Navigation Buttons -->
		<div class="flex justify-between gap-4">
			<button
				onclick={previousQuestion}
				disabled={currentQuestionIndex === 0}
				class="
					px-6 py-3 rounded-lg font-semibold transition-all
					{currentQuestionIndex === 0
						? 'bg-gray-200 text-gray-400 cursor-not-allowed'
						: 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'}
				"
			>
				← Previous
			</button>

			<button
				onclick={nextQuestion}
				disabled={!canProceed}
				class="
					px-6 py-3 rounded-lg font-semibold transition-all
					{canProceed
						? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
						: 'bg-gray-200 text-gray-400 cursor-not-allowed'}
				"
			>
				{isLastQuestion ? 'View Results →' : 'Next →'}
			</button>
		</div>

		{#if dev}
			<!-- Debug info (we'll remove this later) -->
			<div class="mt-8 p-4 bg-gray-800 text-white rounded-lg text-sm font-mono">
				<p class="font-bold mb-2">Debug Info:</p>
				<p>Current Question: {currentQuestionIndex + 1}/{totalQuestions}</p>
				<p>Answers Collected: {answers.length}</p>
				<p>Can Proceed: {canProceed}</p>
			</div>	
		{/if}
	</div>
</div>