<script>
	import Badge from '$lib/components/Badge.svelte';
	import CollectionCard from '$lib/components/CollectionCard.svelte';
</script>

<article id="collection" class="bg-lightgray-100 bg-paper flex flex-col gap-12 px-8 lg:px-28 xl:px-56 py-32 shadow-[inset_0px_2px_3px_0px_#0000001a]">
	<section class="flex flex-col items-center gap-4">
		<h2 class="font-souvenirstd text-blue text-3xl lg:text-4xl font-bold">How was the data collected?</h2>
		<p class="text-blue text-xl lg:text-2xl text-center">
			The dataset used is a compilation of two public datasets available on <a
				target="_blank"
				href="https://kaggle.com/"
				class="link link-accent">Kaggle</a
			>. Both of these datasets contain Philippine spam messages personally received and compiled by
			these Kaggle users. Additionally, both datasets contain timestamps for when messages were
			received.
		</p>
	</section>
	<section class="flex flex-col gap-8">
		<div class="flex flex-row w-full gap-8 items-center border-l-[2em] border-blue pl-6">
			<h3 class="font-souvenirstd text-blue text-2xl font-bold">Keywords</h3>
			<div class="flex flex-row flex-wrap gap-1 justify-end w-full">
				<Badge>Text</Badge>
				<Badge>Spam</Badge>
				<Badge>SMS</Badge>
				<Badge>Registration</Badge>
				<Badge>Scam</Badge>
				<Badge>Philippines</Badge>
			</div>
		</div>
		<div class="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4">
			<CollectionCard
				datasetName="Data Set A"
				href="https://www.kaggle.com/datasets/scottleechua/ph-spam-marketing-sms-w-timestamps"
				author="Scott Lee Chua"
				dateStart="09/30/2022"
				dateEnd="02/27/2024"
				initialCount={3464}
				processedCount={467}
			/>
			<CollectionCard
				datasetName="Data Set B"
				href="https://www.kaggle.com/datasets/bwandowando/philippine-spam-sms-messages"
				author="BwandoWando"
				dateStart="12/11/2022"
				dateEnd="03/31/2024"
				initialCount={619}
				processedCount={595}
			/>
		</div>
	</section>
	<section class="flex flex-col items-center gap-8">
		<p class="text-blue text-xl lg:text-2xl text-center">
			The project's dataset was organized by applying Google sheets Regular Expressions on the SMS
			messages, decomposing/extrapolating information from existing data (Day of Week, message
			length, sender carrier, url, topic clusters).
		</p>
		<a
			target="_blank"
			href="https://docs.google.com/spreadsheets/d/1qfeeKcDPOK4uanmqMj5QxMkOqcvvSJ8LRvjnAAnBvwo/edit?usp=sharing"
			class="btn btn-accent btn-lg text-lg text-white shadow-md">Visit the project's dataset</a
		>
		<p class="text-blue text-xl lg:text-2xl text-center">
			After processing, <strong class="font-bold">1062 entries</strong> remained. Check out the
			<a href="#methodology" class="link link-accent">methodology</a> section for more details.
		</p>
	</section>
</article>
