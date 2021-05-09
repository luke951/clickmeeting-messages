import { MESSAGES_PENDING, GET_MESSAGES } from '../mutationTypes'

const messages = {
	state: {
		messages: null,
		messagesPending: false
	},
	getters: {
		getMessages (state) {
			return state.messages
		},
		getMessagesPending (state) {
			return state.messagesPending
		}
	},
	mutations: {
		[MESSAGES_PENDING] (state, value) {
			state.messagesPending = value
		},
		[GET_MESSAGES] (state, value) {
			state.messages = value
		}
	},
	actions: {
		async getMessages (context) {
			context.commit(MESSAGES_PENDING, true)
			// Random date generator
			const getRandomDate = (start, end) => {
				return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0]
			}
			if (!context.state.messages) {
				try {
					// API endpoint call mockup
					setTimeout(() => {
						const itemCount = 1000
						const items = Array.from({ length: itemCount }, (v, i) => ({
							id: i,
							type: 'info',
							title: `Temat wiadomości ${i}`,
							date: getRandomDate(new Date(2015, 0, 1), new Date()),
							sender: 'support@clickmeeting.com',
							text: `Treść wiadomości ${i}: Cieszymy się, że będziesz korzystać z naszej platformy do organizowania webinarów i spotkań online. Zależy nam, aby możliwości ClickMeeting pomogły Ci w osiąganiu najlepszych wyników i wygody pracy.`
						}))
						context.commit(GET_MESSAGES, items)
						context.commit(MESSAGES_PENDING, false)
					}, 2000)
				} catch (error) {
					context.commit(MESSAGES_PENDING, false)
				}
			} else {
				context.commit(MESSAGES_PENDING, false)
			}
		}
	}
}

export default messages
