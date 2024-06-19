<script>
	import ResultsCard from '$lib/components/ResultsCard.svelte';
    import wordFreq from '$lib/images/wordfreq-bar.png';
    import wordFreqPre from '$lib/images/wordfreq-bar-pre.png';
    import wordFreqPost from '$lib/images/wordfreq-bar-post.png';
    import dayWeeksPre from  '$lib/images/dayWeeks-bar-pre.png';
    import dayWeeksPost from  '$lib/images/dayWeeks-bar-post.png';
    import tldPre from '$lib/images/tld-bar-pre.png';
    import tldPost from '$lib/images/tld-bar-post.png';
    import lengthPre from '$lib/images/charlength-bar-pre.png';
    import lengthPost from '$lib/images/charlength-bar-post.png';
</script>

<article id="results" class="flex flex-col items-center gap-8 px-8 lg:px-28 xl:px-56 py-32">
    <section class="flex flex-col items-center gap-4">
        <h2 class="text-3xl lg:text-4xl font-bold">Here are the results of data exploration.</h2>
        <p class="prose text-2xl lg:text-3xl text-center">
            With the data prepared, visualizations were generated. The confidence level for hypthesis testing was set to 95%. This will determine if the SIM Card Registration deadline on July 30, 2023 has an effect on certain parameters of spam messages.
        </p>
    </section>
    <section class="flex flex-col gap-8 w-full">
        <ResultsCard title="Frequency of words">
            <div class="flex flex-col gap-4">
                <h3 class="text-lg font-bold text-center">There is an association between the period before and after the SIM card registration act and the frequency of the top 10 most common words in spam messages.</h3>
                <p class="prose text-lg text-justify max-w-full">
                    For the hypothesis testing, chi-square test for independence was used on the top 10 most frequent words found in the spam messages and that resulted to p-value = 5e-23. The primary goal of spam messages is to mislead people and incite thoughtless behaviors. This can be accomplished through various methods but one of the most common tactics of spam messages is to take advantage of scarcity and desires [4]. Certain words are more effective for this than others and may be an indicator of spam.
                </p>
            </div>
            <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2"/>
            <figure>
                <img src={wordFreq} alt="bar plot of frequency of words in spam SMS" class="border border-neutral-500"/>
            </figure>
            <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2"/>
            <div class="flex flex-col gap-2">
                <h3 class="text-xl lg:text-2xl font-bold text-center">Before</h3>
                <figure>
                    <img src={wordFreqPre} alt="bar plot of frequency of words in spam SMS (pre-simreg)" class="border border-neutral-500"/>
                </figure>
            </div>
            <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2"/>
            <div class="flex flex-col gap-2">
                <h3 class="text-xl lg:text-2xl font-bold text-center">After</h3>
                <figure>
                    <img src={wordFreqPost} alt="bar plot of frequency of words in spam SMS (post-simreg)" class="border border-neutral-500"/>
                </figure>
            </div>
        </ResultsCard>
        <ResultsCard title="Frequency of spam messages received by day of the week">
            <div class="flex flex-col gap-4">
                <h3 class="text-lg font-bold text-center">
                    There is no association between the period before and after the SIM card registration act and the frequency of spam messages received by day of the week.
                </h3>
                <p class="prose text-lg text-justify max-w-full">
                    For the hypthesis testing, chi-square test for independence resulted to p-value = 0.499. This lack of effect could be attributed to the prominence of automated bots and scripts. While regular people only work during the weekdays, bots are different. The day of the week could be said to be irrelevant to the sources of these spam messages.
                </p>
            </div>
            <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2"/>
            <div class="flex flex-col xl:flex-row gap-12 xl:gap-8">
                <div class="flex flex-col gap-2">
                    <h3 class="text-xl lg:text-2xl font-bold text-center">Before</h3>
                    <figure>
                        <img src={dayWeeksPre} alt="bar plot of frequency of spam messages received by day of the week (pre-simreg)" class="border border-neutral-500"/>
                    </figure>
                </div>
                <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2 block xl:hidden"/>
                <div class="flex flex-col gap-2">
                    <h3 class="text-xl lg:text-2xl font-bold text-center">After</h3>
                    <figure>
                        <img src={dayWeeksPost} alt="bar plot of frequency of spam messages received by day of the week (post-simreg)" class="border border-neutral-500"/>
                    </figure>
                </div>
            </div>
        </ResultsCard>
        <ResultsCard title="Top-level domains of links in spam messages">
            <div class="flex flex-col gap-4">
                <h3 class="text-lg font-bold text-center">
                    There is an association between the period before and after the SIM card registration act and the presence of links in spam messages.
                </h3>
                <p class="prose text-lg text-justify max-w-full">
                    For the presence of links hypothesis testing, chi-square test for independence was used and it yielded p-value = 0.023. Due to the ever increasing accessibility of the internet, website links are now often seen in spam messages. If the words were meant to incite various psychological aspects, then the link is presented as the "gateway" to resolve those. However, the presence of a link in a message, though a good indicator, is not a conclusive metric.
                    <br/><br/>
                    Another important component of website links is the top-level domain (TLD) such as .com, .edu, and etc. No hypothesis testing was done for TLDs, TLDs are moderated by the Internet Corporation for Assigned Names and Numbers (ICANN) and the restrictions for each type can vary, however, lesser known TLDs have less stringent restrictions when compared to TLDs like ".com.ph" [5]. As a result, websites within these lesser known TLDs can be malicious in nature, therefore, links' TLDS are also a good indicator.
                </p>
            </div>
            <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2"/>
            <div class="flex flex-col gap-2">
                <h3 class="text-xl lg:text-2xl font-bold text-center">Before</h3>
                <figure>
                    <img src={tldPre} alt="bar plot of top-level domains of links in spam messages (pre-simreg)" class="border border-neutral-500"/>
                </figure>
            </div>
            <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2"/>
            <div class="flex flex-col gap-2">
                <h3 class="text-xl lg:text-2xl font-bold text-center">After</h3>
                <figure>
                    <img src={tldPost} alt="bar plot of top-level domains of links in spam messages (post-simreg)" class="border border-neutral-500"/>
                </figure>
            </div>
        </ResultsCard>
        <ResultsCard title="Character length of spam messages">
            <div class="flex flex-col gap-4">
                <h3 class="text-lg font-bold text-center">
                    There is no association between the period before and after the SIM card registration act and the character length of spam messages.
                </h3>
                <p class="prose text-lg text-justify max-w-full">
                    For the hypothesis test, Mann-Whitney U test was used and it yielded p-value = 0.639. Normality testing showed that the pre and post-deadline samples were not normally distributed, hence, a t-test would be unreliable. The distribution can be attributed the 160 characters per peso that prepaid carriers charge users for sending SMS messages. The test result may be an indicator that spammers made little to no changes in terms of content.
                </p>
            </div>
            <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2"/>
            <div class="flex flex-col gap-2">
                <h3 class="text-xl lg:text-2xl font-bold text-center">Before</h3>
                <figure>
                    <img src={lengthPre} alt="histogram of character lengths of spam messages (pre-simreg)" class="border border-neutral-500"/>
                </figure>
            </div>
            <hr class="h-px border-neutral-500 border-dotted border-t-4 w-1/2"/>
            <div class="flex flex-col gap-2">
                <h3 class="text-xl lg:text-2xl font-bold text-center">After</h3>
                <figure>
                    <img src={lengthPost} alt="histogram of character lengths of spam messages (post-simreg)" class="border border-neutral-500"/>
                </figure>
            </div>
        </ResultsCard>
    </section>

    <p class="prose text-xl lg:text-2xl text-center mt-8">
        Want to learn more and inspect the process? Visit the Jupyter notebook.
    </p>
    <a target="_blank" href="https://colab.research.google.com/drive/1M8YJQMv2aG4FSf4ppGqhyp7ngR2VqLvG?usp=sharing" class="btn btn-accent btn-lg text-lg text-white shadow-md">Visit the Jupyter Notebook</a>
</article>
