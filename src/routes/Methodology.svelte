<script>
    import cleaningIcon from '$lib/images/cleaning.png';
    import preprocessingIcon from '$lib/images/preprocessing.png';
    import modelingIcon from '$lib/images/modeling.png';
    import splittingIcon from '$lib/images/data-split.png';

	import Badge from '$lib/components/Badge.svelte';
	import MethodologyCard from '$lib/components/MethodologyCard.svelte';
</script>

<article id="methodology" class="flex flex-col gap-12 px-8 lg:px-28 xl:px-56 py-32 shadow-md">
    <section class="flex flex-col items-center gap-4">
        <h2 class="text-3xl lg:text-4xl font-bold">How was the data handled?</h2>
        <p class="prose text-2xl lg:text-3xl">
            Through Python and its many libraries
        </p>
    </section>
    <div class="flex flex-row w-full gap-8 items-center border-l-[2em] border-info pl-6">
        <h3 class="text-2xl text-info font-bold">Tools</h3>
        <div class="flex flex-row flex-wrap gap-1 justify-end w-full">
            <Badge>Python</Badge>
            <Badge>Jupyter</Badge>
            <Badge>Notebook</Badge>
            <Badge>Google Colab</Badge>
            <Badge>Google Sheets</Badge>
            <Badge>Pandas</Badge>
            <Badge>Deep Translator</Badge>
            <Badge>Natural Language Toolkit</Badge>
            <Badge>Regular Expressions</Badge>
            <Badge>NumPy</Badge>
            <Badge>Scikit-learn</Badge>
            <Badge>Plotly</Badge>
        </div>
    </div>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MethodologyCard>
            <img src={cleaningIcon} alt="" class="aspect-square w-80"/>
            <h3 class="text-2xl font-bold">Cleaning</h3>
            <div class="flex flex-col gap-4">
                <p class="prose text-lg text-justify">
                    The datasets were cleaned by filtering out entries that had insufficient data or contained data which could not be used.
                    <br/><br/>
                    For this step, the entries containing the following properties were filtered out of the initial datasets:
                </p>
                <ul class="prose text-lg list-disc ml-8">
                    <li>non-exact duplicates</li>
                    <li>non-spam (Data Set A)</li>
                    <li>no phone number</li>
                    <li>no alphabetical characters in body</li>
                    <li>
                        hidden or broken content<br/>
                        ("Content not supported" or "{"<Redacted>"}")
                    </li>
                </ul>
            </div>
        </MethodologyCard>
        <MethodologyCard>
            <img src={preprocessingIcon} alt="" class="aspect-square w-80"/>
            <h3 class="text-2xl font-bold">Preprocessing</h3>
            <div class="flex flex-col gap-4">
                <p class="prose text-lg text-justify">
                    With both datasets cleaned, they were combined into a single compiled dataset. From here, several pieces of information were extrapolated from each entry including:
                </p>
                <ul class="prose text-lg list-disc ml-8">
                    <li>year</li>
                    <li>month</li>
                    <li>day of week</li>
                    <li>sender carrier</li>
                    <li>SMS length</li>
                </ul>
                <br/>
                <p class="prose text-lg text-justify">
                    Lastly, the SMS messages were prepared for topic modeling by applying the following:
                </p>
                <ul class="prose text-lg list-disc ml-8">
                    <li>emoticons were removed</li>
                    <li>text was translated to English</li>
                    <li>tokenization</li>
                    <li>lemmatization</li>
                    <li>stopword filtering</li>
                    <li>stemming</li>
                </ul>
            </div>
        </MethodologyCard>
        <MethodologyCard>
            <img src={modelingIcon} alt="" class="aspect-square w-80"/>
            <h3 class="text-2xl font-bold">Topic Modeling</h3>
            <p class="prose text-lg text-justify">
                Using the prepared data obtained, topic modeling was performed on the SMS messages in the dataset to form ten topic clusters.
                <br/><br/>
                From this, each entry was assigned to a cluster depending on which topic it was most dominantly similar to, thus grouping SMS messages with similar or possibly related content.
            </p>
        </MethodologyCard>
        <MethodologyCard>
            <img src={splittingIcon} alt="" class="aspect-square w-80"/>
            <h3 class="text-2xl font-bold">Dataset Splitting</h3>
            <p class="prose text-lg text-justify">
                The deadline for SIM Card Registration was July 25, 2023. The processed data set was split into two dataframe whether the message was received before or after this data. From each of these two dataframes, 200 random samples were taken to equalize them for statistical testing.
            </p>
        </MethodologyCard>
    </section>
    <section class="flex flex-col items-center gap-8">
        <p class="prose text-2xl lg:text-3xl text-center">
            The Jupyter notebook illustrating this process is available on Google Colab.
        </p>
        <a target="_blank" href="https://colab.research.google.com/drive/1M8YJQMv2aG4FSf4ppGqhyp7ngR2VqLvG?usp=sharing" class="btn btn-accent btn-lg text-lg text-white shadow-md">Visit the Jupyter Notebook</a>
    </section>
</article>