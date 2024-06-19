<script>
	import wordcloud from '$lib/images/wordcloud.png';
</script>

<article
	id="top"
	class="bg-white flex flex-col lg:flex-row items-center px-8 lg:px-56 py-32 gap-4 lg:gap-12 shadow-[inset_0px_2px_3px_0px_#0000001a]"
>
	<div class="flex flex-col justify-center gap-6">
		<h1 class="font-souvenirstd text-blue text-6xl leading-tight">
			Hi. We are <strong class="font-bold">Arbitrary</strong>. <br />
			This is our project, <br />
			<strong class="font-bold hover:text-accent transition-colors">SIM Spam Slam</strong>
		</h1>
		<p class="text-blue text-2xl text-justify">
			Like the popular canned food brand it is named after, spam texts can come in all kinds of
			varieties. This data project aims to uncover the commonalities between these messages and
			analyze the trends and patterns that they follow.
		</p>
	</div>
	<img src={wordcloud} alt="word cloud" class="aspect-[1446/2139] w-full lg:w-80" />
</article>
