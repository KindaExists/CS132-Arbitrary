<script lang="ts">
	export let title: string;
</script>

<div class="bg-white shadow-lg flex flex-col items-center gap-12 p-16 w-full">
	<h2 class="font-souvenirstd text-blue text-3xl lg:text-4xl font-bold w-full p-2 text-center border-b-2 border-neutral-400">
		{title}
	</h2>
	<slot />
</div>
