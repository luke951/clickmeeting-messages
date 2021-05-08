<template>
	<div id="app">
		<HeaderComponent />
		<main>
			<router-view />
		</main>
		<FooterComponent />
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {
		HeaderComponent: () => import('@/components/HeaderComponent/HeaderComponent.vue'),
		FooterComponent: () => import('@/components/FooterComponent/FooterComponent.vue')
	}
}
</script>
