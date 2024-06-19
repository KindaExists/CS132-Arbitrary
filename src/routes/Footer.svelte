<script>
	import Castillo from '$lib/images/castillo.jpg';
	import Trinidad from '$lib/images/trinidad.jpg';
	import Salazar from '$lib/images/salazar.jpg';
</script>

<footer
	id="team"
	class="bg-[#303030] text-white flex flex-col gap-12 px-8 lg:px-28 xl:px-56 py-32 shadow-md"
>
	<section class="flex flex-col items-center gap-8">
		<h2 class="text-3xl lg:text-4xl font-bold">Meet the team</h2>
		<div class="flex flex-col items-center gap-8">
			<div class="card w-full md:w-3/4 bg-neutral-800 shadow-[0.5em_0.5em_0_#2a2a2a]">
				<figure><img src={Castillo} alt="Ehren Castillo" class="w-full" /></figure>
				<div class="card-body items-center">
					<h3 class="card-title text-2xl">Ehren Castillo</h3>
					<p class="prose text-lg text-neutral-500 text-justify">
						Hey! I'm Ehren. I'm a 2nd year BS Computer Science student at the University of the
						Philippines, Diliman. I'm generally interested in software and web development, as well
						as trying out a wide variety of technologies and programming languages. In my free time,
						I enjoy programming, playing games, and reading manga.
					</p>
				</div>
			</div>
			<div class="card w-full md:w-3/4 bg-neutral-800 shadow-[0.5em_0.5em_0_#2a2a2a]">
				<figure><img src={Salazar} alt="Hans Salazar" class="w-full" /></figure>
				<div class="card-body items-center">
					<h3 class="card-title text-2xl">Hans Salazar</h3>
					<p class="prose text-lg text-neutral-500 text-justify">
						Heyo! I'm Hans Miguel Salazar, a 4th year computer science student with interests in web
						development, artificial intelligence and game development. I hope to contribute to the
						nation through the projects that we create and to make the world a better place, one
						line of code at a time. When I'm not doing that though, I read manga and novels, and
						play games as well.
					</p>
				</div>
			</div>
			<div class="card w-full md:w-3/4 bg-neutral-800 shadow-[0.5em_0.5em_0_#2a2a2a]">
				<figure><img src={Trinidad} alt="Kevin Trinidad" class="w-full" /></figure>
				<div class="card-body items-center">
					<h3 class="card-title text-2xl">Kevin Trinidad</h3>
					<p class="prose text-lg text-neutral-500 text-justify">
						Hello! I'm Kevin and I'm a 2nd year computer science student with interests in game and
						software developement. I've been helping my dad with computers ever since I was young so
						both physical and digital aspects computers are something I'm fond of. My free time is
						usually spent playing games, reading novels, and exploring software tweaks.
					</p>
				</div>
			</div>
		</div>
	</section>
</footer>
