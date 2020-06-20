<template>
	<div id="app">
		<div class="header">
			<Menu mode="horizontal" theme="dark" active-name="1">
				<div class="layout-nav">
					<MenuItem name="1" to="/FirstLogin">
						<Icon type="ios-navigate" />導流率
					</MenuItem>
					<MenuItem name="2" to="/PersonalRecord">
						<Icon type="ios-keypad" />個人紀錄
					</MenuItem>
					<MenuItem name="3" to="/GameSetting">
						<Icon type="ios-analytics" />遊戲設定
					</MenuItem>
					<MenuItem name="4">
						<Icon type="ios-paper" />語言切換
					</MenuItem>
				</div>
			</Menu>
		</div>
		<router-view class="container" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
