<template>
	<footer class="footer">
		<b-container>
			<b-row>
				<b-col cols="12" lg="2">
					<img class="footer__logo img-fluid" src="../../assets/images/logotype_dark.svg" alt="logo">
				</b-col>
				<b-col cols="12" lg="8">
					<p class="footer__text">Copyright © 2021 Wszystkie prawa zastrzeżone.</p>
				</b-col>
				<b-col cols="12" lg="2">
					<p class="footer__text">Wybierz język: PL</p>
				</b-col>
			</b-row>
		</b-container>
	</footer>
</template>

<script>
export default {
	name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
	@import "./FooterComponent.scss";
</style>
