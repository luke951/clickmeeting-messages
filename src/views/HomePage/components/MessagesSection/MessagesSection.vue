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
				<div class="messages__section">
					<h2 class="main-title">Moja skrzynka odbiorcza</h2>
					<!-- Filter -->
					<b-input-group>
						<b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>
						<b-input-group-append>
							<b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
						</b-input-group-append>
					</b-input-group>
					<!-- Table -->
					<b-table hover responsive head-variant="dark" id="messagesTable" :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage" :filter="filter" @filtered="onFiltered">
						<template #type>
							<p>type</p>
						</template>
						<template #cell(details)="row">
							<b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
								Info modal
							</b-button>
						</template>
						<template #cell(delete)="row">
							<b-button size="sm" @click="delete(row.item, row.index, $event.target)" class="mr-1">
								Delete
							</b-button>
						</template>
					</b-table>
					<!-- Pagination -->
					<b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" aria-controls="messagesTable"></b-pagination>
				</div>
				<!-- Modal -->
				<b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
					<pre>{{ infoModal.content }}</pre>
				</b-modal>
			</b-container>
		</section>
	</div>
</template>

<script>
export default {
	name: 'MessagesSection',
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
			items: [
				{ type: 'info', title: 'Temat wiadomości 1', date: '12.02.2020', sender: 'support@clickmeeting.com' },
				{ type: 'info', title: 'Temat wiadomości 2', date: '12.02.2020', sender: 'support@clickmeeting.com' },
				{ type: 'info', title: 'Temat wiadomości 3', date: '12.02.2020', sender: 'support@clickmeeting.com' },
				{ type: 'info', title: 'Temat wiadomości 4', date: '12.02.2020', sender: 'support@clickmeeting.com' },
				{ type: 'info', title: 'Temat wiadomości 5', date: '12.02.2020', sender: 'support@clickmeeting.com' }
			],
			totalRows: 1,
			currentPage: 1,
			perPage: 2,
			filter: null,
			infoModal: {
				id: 'info-modal',
				title: '',
				content: ''
			}
		}
	},
	mounted () {
		this.totalRows = this.items.length
	},
	methods: {
		info (item, index, button) {
			this.infoModal.title = `Row index: ${index}`
			this.infoModal.content = JSON.stringify(item, null, 2)
			this.$root.$emit('bv::show::modal', this.infoModal.id, button)
		},
		resetInfoModal () {
			this.infoModal.title = ''
			this.infoModal.content = ''
		},
		onFiltered (filteredItems) {
			this.totalRows = filteredItems.length
			this.currentPage = 1
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "./MessagesSection.scss";
</style>
