<template>
	<div>
		<FirstLoginContent />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import FirstLoginContent from '@/components/FirstLoginContent.vue';

@Component({
	components: { FirstLoginContent },
})
export default class FirstLogin extends Vue {}
</script>
