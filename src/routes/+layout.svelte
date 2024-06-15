<script>
    import NavButton from '$lib/components/NavButton.svelte';
    import '../app.css';
</script>

<nav class="navbar min-h-12 lg:min-h-16 bg-primary justify-center gap-2 sticky top-0">
    <NavButton href="#top">Top</NavButton>
    <NavButton href="#top">Overview</NavButton>
    <NavButton href="#top">Background</NavButton>
    <NavButton href="#top">Collection</NavButton>
    <NavButton href="#top">Methodology</NavButton>
    <NavButton href="#top">Results</NavButton>
    <NavButton href="#top">Team</NavButton>
</nav>

<slot />