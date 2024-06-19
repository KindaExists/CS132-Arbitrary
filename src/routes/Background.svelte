<script>
	import BackgroundCard from '$lib/components/BackgroundCard.svelte';
</script>

<article id="background" class="flex flex-col gap-12 px-8 lg:px-28 xl:px-56 py-32 shadow-md">
	<section class="flex flex-col items-center gap-4">
		<h2 class="text-3xl lg:text-4xl font-bold">Background</h2>
		<h3 class="text-2xl text-center font-bold">
			Despite the country's best efforts, Spam texts remain a prevalent and persistent form of
			cybercriminal activity, with millions of messages being detected as of 2024.
		</h3>
		<div class="prose max-w-full">
			<p class="text-xl lg:text-2xl text-center m-0">
				Telecommunication companies such as Globe, PLDT and Smart have taken action against 5.5
				million spam messages in the past year. However, even with this preventive action, the
				Cybercrime Investigation and Coordinating Center (CICC) noted that the losses of Filipino
				mobile phone users to spam texts have reached <em>millions of dollars</em>. Moreover, some
				instances of spam messages have also been found in instant messaging apps, which are not
				covered by the Sim Registration Act.
			</p>
			<p class="text-lg text-center mt-1">
				References:
				<a
					target="_blank"
					href="https://business.inquirer.net/427513/spam-still-hounding-ph-over-5-5m-messages-blocked"
					class="link link-accent">[1]</a
				>
				<a
					target="_blank"
					href="https://www.gmanetwork.com/news/topstories/nation/846936/filipinos-lost-millions-of-dollars-due-to-text-scams-cicc/story/"
					class="link link-accent">[2]</a
				>
				<a
					target="_blank"
					href="https://www.philstar.com/headlines/2023/09/02/2293211/text-scams-have-shifted-online-apps-globe-warns"
					class="link link-accent">[3]</a
				>
			</p>
		</div>
	</section>
	<section class="flex flex-col items-center gap-4">
		<h3 class="text-2xl lg:text-3xl font-bold">What do we aim to do?</h3>
		<BackgroundCard header="Main Question"
			>What could be the trends and patterns of spam messages in the Philippines?</BackgroundCard
		>
		<BackgroundCard header="Secondary Question"
			>Is there a difference between Spam messages before and after the deadline of the Sim Card
			Registration Act?</BackgroundCard
		>
		<BackgroundCard header="Null Hypothesis"
			>The SIM card registration act has <strong class="font-bold">no</strong> effect on the content
			of spam messages.</BackgroundCard
		>
		<BackgroundCard header="Alternative Hypothesis"
			>The SIM card registration act has an effect on the content of spam messages.</BackgroundCard
		>
		<BackgroundCard header="Action Plan"
			>Utilize data science tools and Natural Language Processing (NLP) to identify the patterns and
			trends of Spam text content.</BackgroundCard
		>
	</section>
</article>
