<script lang="ts">
	import type { QuizQuestion } from '$lib/types/quiz';

	// Svelte 5 way to define props using $props()
	interface Props {
		question: QuizQuestion;
		currentValue?: number;
		onAnswer: (value: number) => void;
	}

	let { question, currentValue = 0, onAnswer }: Props = $props();

	// Local state for the selected value
	let selectedValue = $state(currentValue);

	// When user selects a value
	function handleSelect(value: number) {
		selectedValue = value;
		onAnswer(value);
	}

	// Generate array of numbers for the scale (e.g., [1, 2, 3, ..., 10])
	let scaleOptions = $derived(
		Array.from({ length: (question.max || 10) - (question.min || 1) + 1 }, (_, i) => i + (question.min || 1))
	);
</script>

<div class="quiz-question">
	<!-- Category badge -->
	<div class="mb-2">
		<span class="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
			{question.category}
		</span>
	</div>

	<!-- Question text -->
	<h2 class="text-2xl font-bold text-gray-900 mb-2">
		{question.question}
	</h2>

	<!-- Optional description -->
	{#if question.description}
		<p class="text-gray-600 mb-6">
			{question.description}
		</p>
	{/if}

	<!-- Scale options -->
	{#if question.type === 'scale'}
		<div class="space-y-4">
			<!-- Label row -->
			<div class="flex justify-between text-sm text-gray-600 mb-2">
				<span>Low</span>
				<span>High</span>
			</div>

			<!-- Scale buttons -->
			<div class="grid grid-cols-5 sm:grid-cols-10 gap-2">
				{#each scaleOptions as value}
					<button
						onclick={() => handleSelect(value)}
						class="
							aspect-square rounded-lg font-semibold text-lg transition-all
							{selectedValue === value
								? 'bg-indigo-600 text-white shadow-lg scale-110'
								: 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'}
						"
						aria-label="Select {value}"
					>
						{value}
					</button>
				{/each}
			</div>

			<!-- Selected value display -->
			{#if selectedValue > 0}
				<p class="text-center text-sm text-gray-600 mt-4">
					You selected: <span class="font-bold text-indigo-600">{selectedValue}</span>
				</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	/* Scoped styles - only apply to this component */
	.quiz-question {
		/* Any custom styles can go here */
	}
</style>