<script lang="ts">
	export let href: string;
</script>

<a {href} class="btn btn-sm lg:btn-md btn-primary hover:bg-white/10 hover:text-white lg:text-lg">
	<slot />
</a>
