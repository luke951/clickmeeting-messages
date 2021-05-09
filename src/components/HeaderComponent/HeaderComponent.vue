<template>
	<div>
		<header class="header">
			<b-container>
				<b-navbar toggleable="lg" type="dark" variant="dark">
					<b-navbar-brand href="#"><img class="header__logo img-fluid" src="../../assets/images/logotype_white_accent.svg" alt="logo"></b-navbar-brand>
					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav align="center">
							<li class="nav-item"><a class="header__link" href="#">Panel</a></li>
							<li class="nav-item"><a class="header__link" href="#">Oś czasu</a></li>
							<li class="nav-item"><a class="header__link" href="#">Statystyki</a></li>
							<li class="nav-item"><a class="header__link" href="#">Pliki</a></li>
							<li class="nav-item"><a class="header__link" href="#">Kontakty</a></li>
							<li class="nav-item"><a class="header__link" href="#">Baza wiedzy</a></li>
							<li class="nav-item"><a class="header__link header__link--orange" href="#">Wybierz pakiet</a></li>
							<li class="nav-item"><a class="header__link header__link--button" href="#">Stwórz wydarzenie</a></li>
							<li class="nav-item"><a class="header__link" href="#">Łukasz</a></li>
							<li class="nav-item"><a class="header__link" href="#">PL</a></li>
						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</b-container>
		</header>
	</div>
</template>

<script>
export default {
	name: 'HeaderComponent'
}
</script>

<style lang='scss' scoped>
@import './HeaderComponent.scss';
</style>
