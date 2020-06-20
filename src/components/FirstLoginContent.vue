<template>
	<div>
		<Row style="background:#eee;padding:20px">
			<Col span="6">
				<Card :bordered="false">
					<p slot="title">Borderless card</p>
					<p>Content of card</p>
					<p>Content of card</p>
					<p>Content of card</p>
				</Card>
			</Col>
			<Col span="6" offset="3">
				<Card shadow>
					<p slot="title">Use a card with a shadow effect</p>
					<p>Content of card</p>
					<p>Content of card</p>
					<p>Content of card</p>
				</Card>
			</Col>
			<Col span="6" offset="3">
				<Card shadow>
					<p slot="title">Use a card with a shadow effect</p>
					<p>Content of card</p>
					<p>Content of card</p>
					<p>Content of card</p>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
	// components: { },
})
export default class FirstLoginContent extends Vue {}
</script>
