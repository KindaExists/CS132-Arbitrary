<script lang="ts">
	export let datasetName: string;
	export let href: string;
	export let author: string;
	export let dateStart: string;
	export let dateEnd: string;
	export let initialCount: number;
	export let processedCount: number;
</script>

<div class="bg-white shadow-lg flex flex-col items-center gap-4 p-6 w-full md:w-3/5 lg:w-2/5">
	<h3 class="font-souvenirstd text-blue text-2xl font-bold">
		<a {href} target="_blank" class="link link-accent no-underline transition-colors"
			>{datasetName}</a
		>
	</h3>
	<div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 items-center">
		<div class="badge bg-blue-300 text-lg text-white p-4 w-full">Author</div>
		<p class="text-lg">{author}</p>
		<div class="badge bg-blue-300 text-lg text-white p-4 w-full">Date Start</div>
		<p class="text-lg">{dateStart}</p>
		<div class="badge bg-blue-300 text-lg text-white p-4 w-full">Date End</div>
		<p class="text-lg">{dateEnd}</p>
		<div class="badge bg-blue-300 text-lg text-white p-4 w-full">Initial Count</div>
		<p class="text-lg">{initialCount}</p>
		<div class="badge bg-blue-300 text-lg text-white p-4 w-full">Processed Count</div>
		<p class="text-lg">{processedCount}</p>
	</div>
</div>
