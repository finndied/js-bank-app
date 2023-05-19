export function formatToCurrency(number) {
	return new Intl.NumberFormat('en-EN', {
		currency: 'USD',
		style: 'currency'
	}).format(number)
}