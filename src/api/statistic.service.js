import { rtQuery } from "@/core/rt-query/rt-query.lib"

export class StatisticService {
	#BASE_URL = '/statistics'

	main(onSuccess) {
		return rtQuery({
			path: this.#BASE_URL,
			onSuccess
		})
	}
}