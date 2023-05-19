import { rtQuery } from "@/core/rt-query/rt-query.lib"

export class TransactionService {
	#BASE_URL = '/transactions'

	getAll(onSuccess) {
		return rtQuery({
			path:
				this.#BASE_URL +
				`?${new URLSearchParams({
					orderBy: 'desc'
				})}`,
			onSuccess
		})
	}
}