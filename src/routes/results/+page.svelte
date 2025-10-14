<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
	<div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
		<h1 class="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h1>
		<p class="text-gray-700 mb-6">
			Your results will be displayed here. We'll add score calculation and AI insights next.
		</p>

		<button
			onclick={() => goto('/')}
			class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
		>
			← Back to Home
		</button>
	</div>
</div>