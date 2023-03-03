<script setup>
import { ref, onMounted } from 'vue'
import repositoryService from '@/services/repositoryService'
import TransactionRecord from '@/components/TransactionRecord.vue'

const transactionsData = ref([])

async function getTransactionRecords() {
	const data = await repositoryService.transactionService.httpGetTransactions()
	transactionsData.value = data
}

onMounted(() => {
	getTransactionRecords()
})
</script>

<template>
	<TransactionRecord v-for="transactionData in transactionsData" :key="transactionData.id" :transaction-data="transactionData" />
</template>
