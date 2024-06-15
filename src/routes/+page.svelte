<script>
    import OverviewCard from '$lib/components/OverviewCard.svelte';
    import wordcloud from '$lib/images/wordcloud.png';
    import smsIcon from '$lib/images/sms-icon.png';
    import gavelIcon from '$lib/images/gavel.png';
    import chipIcon from '$lib/images/tech-chip.png';
	import BackgroundCard from '$lib/components/BackgroundCard.svelte';
</script>

<article id="top" class="bg-white flex flex-col lg:flex-row items-center px-8 lg:px-56 py-32 gap-4 lg:gap-12 shadow-md">
    <div class="flex flex-col justify-center gap-6">
        <h1 class="text-6xl leading-tight">
            Hi. We are <strong class="font-bold">Arbitrary</strong>. <br/>
            This is our project, <br/>
            <strong class="font-bold hover:text-accent transition-colors">SIM Spam Slam</strong>
        </h1>
        <p class="prose text-2xl">
            Like the popular canned food brand it is named after, spam texts can come in all
            kinds of varieties. This data project aims to uncover the commonalities between
            these messages and analyze the trends and patterns that they follow.
        </p>
    </div>
    <img src={wordcloud} alt="word cloud" class="aspect-[1446/2139] w-full lg:w-80"/>
</article>

<article id="overview" class="flex flex-col gap-12 px-8 lg:px-56 py-32 shadow-md">
    <section class="flex flex-col gap-4 items-center">
        <h2 class="text-3xl lg:text-4xl font-bold">Overview</h2>
        <h3 class="text-2xl font-bold">What is this project for?</h3>
        <p class="prose text-2xl text-center">
            The advent of Short Message Service (SMS) technology greatly shifted
            the nature of communication. The ease and accessibility of this method
            led to a rise in the number of spam texts. Bad actors are taking advantage
            of other people through malicous use of this technology.
        </p>
    </section>
    <section class="flex flex-col lg:flex-row gap-6">
        <OverviewCard>
            <img src={smsIcon} alt="SMS icon" class="aspect-square w-80"/>
            <h3 class="text-2xl font-bold">SMS Relevancy</h3>
            <p class="prose text-lg text-center">
                The rise of instant messaging (IM) has not eliminated SMS technology due to
                mobile data limitations and availability of devices. Many people in the Philippines
                still rely on SMS regularly.
            </p>
        </OverviewCard>
        <OverviewCard>
            <img src={gavelIcon} alt="Gavel" class="aspect-square w-80"/>
            <h3 class="text-2xl font-bold">Republic Act No. 11934</h3>
            <p class="prose text-lg text-center">
                Also known as the <strong class="font-bold">Subscriber Identity Module (SIM) Registration Act</strong>,
                it was approved on 10 Oct 2022 with the primary purpose of assisting
                local authorities in eliminating malicious usage of SMS technology.
            </p>
        </OverviewCard>
        <OverviewCard>
            <img src={chipIcon} alt="Tech chip" class="aspect-square w-80"/>
            <h3 class="text-2xl font-bold">Preventive Measures</h3>
            <p class="prose text-lg text-center">
                Technology and society is ever-changing, hence, a static solution is
                a band-aid solution at best. The use of machine models may allow an
                expandable framework for filtering spam texts.
            </p>
        </OverviewCard>
    </section>
    <section class="flex flex-col gap-4 items-center">
        <h2 class="text-3xl lg:text-4xl font-bold">Solution</h2>
        <p class="prose text-2xl text-center">
            To combat this, our data science solution aims to <strong class="font-bold">pinpoint the various patterns
            and trends in the content of these spam messages</strong> to make it easier for these messages
            to be tagged correctly as spam. The insights that we may find through this project
            can also be used in developing a more effective filter against spam.
        </p>
    </section>
</article>

<article id="background" class="flex flex-col gap-12 px-8 lg:px-56 py-32 shadow-md">
    <section class="flex flex-col items-center gap-4">
        <h2 class="text-3xl lg:text-4xl font-bold">Background</h2>
        <h3 class="text-2xl text-center font-bold">
            Despite the country's best efforts, Spam texts remain a prevalent and persistent
            form of cybercriminal activity, with millions of messages being detected as of 2024.
        </h3>
        <div class="prose max-w-full">
            <p class="text-xl lg:text-2xl text-center m-0">
                Telecommunication companies such as Globe, PLDT and Smart have taken action against
                5.5 million spam messages in the past year. However, even with this preventive action,
                the Cybercrime Investigation and Coordinating Center (CICC) noted that the losses of
                Filipino mobile phone users to spam texts have reached <em>millions of dollars</em>.
                Moreover, some instances of spam messages have also been found in instant messaging apps,
                which are not covered by the Sim Registration Act.
            </p>
            <p class="text-lg text-center mt-1">
                References:
                <a target="_blank" href="https://business.inquirer.net/427513/spam-still-hounding-ph-over-5-5m-messages-blocked" class="link link-accent">[1]</a>
                <a target="_blank" href="https://www.gmanetwork.com/news/topstories/nation/846936/filipinos-lost-millions-of-dollars-due-to-text-scams-cicc/story/" class="link link-accent">[2]</a>
                <a target="_blank" href="https://www.philstar.com/headlines/2023/09/02/2293211/text-scams-have-shifted-online-apps-globe-warns" class="link link-accent">[3]</a>
            </p>
        </div>
    </section>
    <section class="flex flex-col items-center gap-4">
        <h3 class="text-2xl lg:text-3xl font-bold">What do we aim to do?</h3>
        <BackgroundCard header="Main Question">What could be the trends and patterns of spam messages in the Philippines?</BackgroundCard>
        <BackgroundCard header="Secondary Question">Is there a difference between Spam messages before and after the deadline of the Sim Card Registration Act?</BackgroundCard>
        <BackgroundCard header="Null Hypothesis">The SIM card registration act has <strong class="font-bold">no</strong> effect on the content of spam messages.</BackgroundCard>
        <BackgroundCard header="Alternative Hypothesis">The SIM card registration act has an effect on the content of spam messages.</BackgroundCard>
        <BackgroundCard header="Action Plan">Utilize data science tools and Natural Language Processing (NLP) to identify the patterns and trends of Spam text content.</BackgroundCard>
    </section>
</article>