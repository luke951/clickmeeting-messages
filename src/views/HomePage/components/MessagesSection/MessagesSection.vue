<template>
	<div>
		<section class="messages">
			<b-container fluid class="messages__header">
				<b-container>
					<b-row>
						<b-col cols="12">
							<h2 class="main-title"><b-icon icon="envelope-open"></b-icon> Wiadomości</h2>
						</b-col>
					</b-row>
				</b-container>
			</b-container>
			<b-container>
				<div v-if="!getMessagesPending && getMessages" class="messages__section">
					<h2 class="main-title">Moja skrzynka odbiorcza</h2>
					<!-- Filter -->
					<b-input-group>
						<b-form-input id="filter-input" class="messages__filter" v-model="filter" type="search" placeholder="Wpisz aby wyszukać"></b-form-input>
						<b-input-group-append>
							<b-button :disabled="!filter" @click="clearFilter">Wyczyść</b-button>
						</b-input-group-append>
					</b-input-group>
					<!-- Table -->
					<b-table hover responsive head-variant="dark" id="messagesTable" :items="getMessages" :fields="fields" :per-page="perPage" :current-page="currentPage" :filter="filter" :filter-ignored-fields="['id']" @filtered="onFiltered">
						<template #cell(type)>
							<b-icon class="messages__files-icon" icon="files"></b-icon>
						</template>
						<template #cell(sender)="row">
							<a :href="`mailto:${row.item.sender}`">{{ row.item.sender }}</a>
						</template>
						<template #cell(details)="row">
							<button @click="details(row.item, $event.target)" class="btn messages__button" type="button">
								<b-icon icon="zoom-in"></b-icon>
							</button>
						</template>
						<template #cell(delete)="row">
							<button @click="deleteMessage(row.item.id)" class="btn messages__button" type="button">
								<b-icon icon="x"></b-icon>
							</button>
						</template>
					</b-table>
					<!-- Pagination -->
					<b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" aria-controls="messagesTable"></b-pagination>
					<!-- Modal -->
					<b-modal :id="detailsModal.id" :title="detailsModal.header" ok-only @hide="resetDetailsModal">
						<h2>{{ detailsModal.title }}</h2>
						<p>{{ detailsModal.text }}</p>
					</b-modal>
				</div>
				<!-- Spinner -->
				<div v-else class="messages__section">
					<Spinner size="medium" line-fg-color="#6ebe3b" />
				</div>
			</b-container>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from 'vue-simple-spinner'
export default {
	name: 'MessagesSection',
	components: {
		Spinner
	},
	data: () => {
		return {
			fields: [
				{
					key: 'type',
					label: 'Typ',
					sortable: true
				},
				{
					key: 'title',
					label: 'Tytuł',
					sortable: true
				},
				{
					key: 'date',
					label: 'Data',
					sortable: true
				},
				{
					key: 'sender',
					label: 'Nadawca',
					sortable: true
				},
				{ key: 'details', label: '' },
				{ key: 'delete', label: '' }
			],
			totalRows: 1,
			currentPage: 1,
			perPage: 5,
			filter: null,
			detailsModal: {
				id: 'detailsModal',
				title: '',
				content: ''
			}
		}
	},
	beforeCreate () {
		this.$store.dispatch('getMessages')
	},
	methods: {
		details (item, button) {
			this.detailsModal.header = 'Otrzymana wiadomość'
			this.detailsModal.title = item.title
			this.detailsModal.text = item.text
			this.$root.$emit('bv::show::modal', this.detailsModal.id, button)
		},
		deleteMessage (id) {
			const message = this.getMessages.find(item => item.id === id)
			this.getMessages.splice(this.getMessages.indexOf(message), 1)
		},
		resetDetailsModal () {
			this.detailsModal.title = ''
			this.detailsModal.text = ''
		},
		onFiltered (filteredItems) {
			this.totalRows = filteredItems.length
		},
		clearFilter () {
			this.filter = ''
		}
	},
	computed: {
		...mapGetters([
			'getMessagesPending',
			'getMessages'
		])
	},
	watch: {
		getMessages (newValue, oldValue) {
			this.totalRows = newValue.length
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "./MessagesSection.scss";
</style>
