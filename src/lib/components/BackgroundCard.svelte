<script lang="ts">
    export let header: string;
</script>

<div class="flex flex-row gap-4">
    <div class="flex flex-col justify-center border-r-2 border-r-neutral-300 w-52 p-4">
        <h3 class="text-2xl font-bold">{header}</h3>
    </div>
    <div class="flex flex-col justify-center w-full my-4">
        <div class="bg-white border-l-[1em] border-neutral-700 shadow-[0.5em_0.5em_0_#e8e8e8] flex flex-col justify-center w-full px-8 py-2">
            <p class="text-2xl"><slot /></p>
        </div>
    </div>
</div>