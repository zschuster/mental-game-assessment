<script lang="ts">
	// Props for the progress bar
	interface Props {
		current: number;
		total: number;
	}

	let { current, total }: Props = $props();

	// Calculated percentage (derived value)
	let percentage = $derived(Math.round((current / total) * 100));
</script>

<div class="progress-bar-container">
	<!-- Progress text -->
	<div class="flex justify-between items-center mb-2">
		<span class="text-sm font-medium text-gray-700">
			Question {current} of {total}
		</span>
		<span class="text-sm font-semibold text-indigo-600">
			{percentage}%
		</span>
	</div>

	<!-- Progress bar track -->
	<div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
		<!-- Progress bar fill with smooth transition -->
		<div
			class="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500 ease-out"
			style="width: {percentage}%"
		></div>
	</div>
</div>