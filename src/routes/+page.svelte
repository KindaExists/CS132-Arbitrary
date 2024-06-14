<script>
    import wordcloud from '$lib/images/wordcloud.png';
</script>

<article class="bg-white flex flex-row px-56 py-12 gap-12">
    <div class="flex flex-col justify-center gap-6">
        <h1 class="text-6xl">
            Hi. We are <strong class="font-bold">Arbitrary</strong>. <br/>
            This is our project, <br/>
            <strong class=font-bold>SIM Spam Slam</strong>
        </h1>
        <p class="prose text-2xl">
            Like the popular canned food brand it is named after, spam texts can come in all
            kinds of varieties. This data project aims to uncover the commonalities between
            these messages and analyze the trends and patterns that they follow.
        </p>
    </div>
    <img src={wordcloud} alt="word cloud" class="aspect-auto w-80"/>
</article>

