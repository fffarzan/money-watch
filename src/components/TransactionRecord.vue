<script setup>
import BaseIcon from '@/components/DSM/BaseIcon.vue'
</script>

<template>
	<section class="transaction-record">
		<BaseIcon icon="mdi-account" />
		<div class="transaction-record__cat-info">
			<span>کتگوری</span>
			<span>زیر کتکوری</span>
		</div>
		<div class="transaction-record__datetime">
			<span>4/12/01</span>
			<span>11:24</span>
		</div>
		<div>
			<span>+</span>
			<span>120,000</span>
			(<span>IRR</span>)
		</div>
	</section>
</template>
