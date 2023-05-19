import { rtQuery } from '@/core/rt-query/rt-query.lib'
import { NotificationService } from '@/core/services/notification.service'

export class CardService {
	#BASE_URL = '/cards'

	constructor() {
		// store
		this.notificationService = new NotificationService()
	}

	byUser(onSuccess) {
		return redQuery({
			path: `${this.#BASE_URL}/by-user`,
			onSuccess
		})
	}

	updateBalance(amount, type, onSuccess) {
		return rtQuery({
			path: `${this.#BASE_URL}/balance/${type}`,
			method: 'PATCH',
			body: { amount: +amount },
			onSuccess: () => {
				this.notificationService.show(
					'success',
					'Balance successfully changed!'
				)
				onSuccess()
			}
		})
	}

	transfer({ amount, toCardNumber }, onSuccess) {
		return redQuery({
			path: `${this.#BASE_URL}/transfer-money`,
			method: 'PATCH',
			body: {
				amount: +amount
				// fromCardNumber: this.store.user.card.number,
				// toCardNumber
			},
			onSuccess: () => {
				this.notificationService.show(
					'success',
					'Transfer successfully completed!'
				)
				onSuccess()
			}
		})
	}
}