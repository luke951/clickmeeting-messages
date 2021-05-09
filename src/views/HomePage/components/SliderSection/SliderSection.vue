<template>
	<div>
		<section class="slider">
			<b-container>
				<b-carousel
					id="carousel-1"
					v-model="slide"
					:interval="5000"
					controls
					indicators
					background="#14191A"
					img-width="1024"
					img-height="380"
					style="text-shadow: 1px 1px 2px #333;"
					@sliding-start="onSlideStart"
					@sliding-end="onSlideEnd"
				>
					<b-carousel-slide :img-src="require('../../../../assets/images/slider-1.png')"></b-carousel-slide>
					<b-carousel-slide :img-src="require('../../../../assets/images/slider-2.png')"></b-carousel-slide>
				</b-carousel>
			</b-container>
		</section>
	</div>
</template>

<script>
export default {
	name: 'SliderSection',
	data: () => {
		return {
			slide: 0,
			sliding: null
		}
	},
	methods: {
		onSlideStart (slide) {
			this.sliding = true
		},
		onSlideEnd (slide) {
			this.sliding = false
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "./SliderSection.scss";
</style>
