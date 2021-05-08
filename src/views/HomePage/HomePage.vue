<template>
	<div>
		<MessagesSection/>
	</div>
</template>

<script>

export default {
	name: 'HomePage',
	components: {
		MessagesSection: () => import('@/views/HomePage/components/MessagesSection/MessagesSection.vue')
	}
}
</script>
