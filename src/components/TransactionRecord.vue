<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
	transactionData: Object,
})

const transactionDate = computed(() => props.transactionData.datetime)
const transactionTime = computed(() => props.transactionData.datetime)
</script>

<template>
	<section class="transaction-record">
		<img />
		<div class="transaction-record__cat-info">
			<span>{{ transactionData.walletCategory }}</span>
			<span>{{ transactionData.walletSubCategory }}</span>
		</div>
		<div class="transaction-record__datetime">
			<span>{{ transactionDate }}</span>
			<span>{{ transactionTime }}</span>
		</div>
		<div>
			<span>+</span>
			<span>{{ transactionData.amount }}</span>
			(<span>{{ transactionData.currency }}</span
			>)
		</div>
	</section>
</template>
