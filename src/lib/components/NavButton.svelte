<script lang="ts">
    export let href: string;
</script>

<a href={href} class="btn btn-sm lg:btn-md btn-primary hover:bg-neutral-700 lg:text-lg">
    <slot />
</a>