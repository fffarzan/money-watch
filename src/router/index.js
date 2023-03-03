import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import TransactionRecords from '../views/TransactionRecordsView'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/transaction-records',
		name: 'transactionRecords',
		component: TransactionRecords,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
