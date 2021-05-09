<template>
	<div>
		<MessagesSection/>
		<SliderSection/>
	</div>
</template>

<script>

export default {
	name: 'HomePage',
	components: {
		MessagesSection: () => import('@/views/HomePage/components/MessagesSection/MessagesSection.vue'),
		SliderSection: () => import('@/views/HomePage/components/SliderSection/SliderSection.vue')
	}
}
</script>
