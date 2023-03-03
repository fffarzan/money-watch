const BASE_URL = 'http://localhost:3000/'

export default {
	async httpGetTransactions() {
		const response = await fetch(`${BASE_URL}transactions`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return response.json()
	},
	async httpPostTransaction(data) {
		const response = await fetch(`${BASE_URL}/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		return response.json()
	},
}
