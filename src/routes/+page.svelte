<script lang="ts">
	// TypeScript interface - defines the shape of quiz answer data
	interface QuizAnswer {
		questionId: number;
		value: number;
		label: string;
	}

	// Svelte 5 "runes" - these are the new reactive primitives
	let count = $state(0); // $state() makes this reactive
	let doubled = $derived(count * 2); // $derived() auto-updates when count changes
    let tripled = $derived(count * 3);

	// Example quiz data with TypeScript typing
	let sampleAnswers: QuizAnswer[] = $state([
		{ questionId: 1, value: 5, label: 'Stress Level' },
		{ questionId: 2, value: 6, label: 'Sleep Quality' },
		{ questionId: 3, value: 9, label: 'Energy Level' }
	]);

	// Computed average (this is how we'll calculate quiz results!)
	let averageScore = $derived(
		sampleAnswers.length > 0
			? Math.round((sampleAnswers.reduce((sum, a) => sum + a.value, 0) / sampleAnswers.length) * 10) / 10
			: 0
	);

	// Function to handle clicks
	function increment() {
		count ++; // Just update the variable - Svelte handles the rest!
	}

    function reset() {
        count = 0;
    }
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
	<div class="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
		<h1 class="text-4xl font-bold text-gray-900 mb-6 text-center">
			Mental Fitness Assessment
		</h1>

		<!-- Call to action -->
		<div class="mb-8 text-center">
			<p class="text-lg text-gray-700 mb-6">
				Discover your mental fitness score and get personalized insights to improve your wellbeing.
			</p>
			<a
				href="/quiz"
				class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
			>
				Start Assessment →
			</a>
			<p class="text-sm text-gray-500 mt-4">Takes about 3 minutes</p>
		</div>

		<hr class="my-8 border-gray-200" />

		<div class="space-y-4">
			<!-- Demo: Svelte 5 Reactivity -->
			<div class="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
				<h2 class="text-xl font-semibold mb-4 text-gray-800">
					Reactivity Demo
				</h2>

				<p class="mb-2 text-gray-700">Count: <span class="font-mono font-bold text-blue-600">{count}</span></p>
				<p class="mb-4 text-gray-700">Doubled: <span class="font-mono font-bold text-blue-600">{doubled}</span></p>
                <p class="mb-4 text-gray-700">Triple: <span class="font-mono font-bold text-blue-600">{tripled}</span></p>

                {#if count > 5}
                    <p class="text-red-600 font-bold">You've clicked {count} times!</p>
                {/if}

				<button
					onclick={increment}
					class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
				>
					Click me! ({count})
				</button>

                <button
                    class="w-full font-semibold py-3 px-6 rounded-lg transition-colors {count > 0 ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}"
                    onclick={reset}
                    disabled={count <= 0}
                >
                    Reset Count
                </button>
			</div>

			<p class="text-sm text-gray-600 text-center">
				Click the button to see Svelte 5 reactivity in action
			</p>

			<!-- New section: TypeScript + Expressions demo -->
			<div class="border-2 border-purple-200 rounded-lg p-6 bg-purple-50 mt-4">
				<h2 class="text-xl font-semibold mb-4 text-gray-800">
					TypeScript + Expressions Demo
				</h2>

				<!-- Example: Loop through array with {#each} -->
				<div class="space-y-2 mb-4">
					{#each sampleAnswers as answer}
						<div class="flex justify-between items-center bg-white p-2 rounded">
							<span class="text-sm font-medium">{answer.label}</span>
							<!-- Expression: String interpolation and conditional color -->
							<span class="font-mono font-bold {answer.value >= 8 ? 'text-green-600' : 'text-orange-600'}">
								{answer.value}/10
							</span>
						</div>
					{/each}
				</div>

				<!-- Example: Multiple expressions in one element -->
				<div class="bg-white p-4 rounded-lg">
					<p class="text-sm text-gray-600 mb-1">Average Score:</p>
					<!-- Complex expression: toFixed for formatting -->
					<p class="text-3xl font-bold {averageScore >= 8 ? 'text-green-600' : averageScore >= 6 ? 'text-yellow-600' : 'text-red-600'}">
						{averageScore.toFixed(1)}
					</p>
					<!-- Expression: Ternary nested in string template -->
					<p class="text-sm mt-2 {averageScore >= 7 ? 'text-green-700' : 'text-gray-600'}">
						{averageScore >= 8 ? '🎉 Excellent mental fitness!' : averageScore >= 6 ? '😊 Good, with room to grow' : '⚠️ Needs attention'}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
