<template>
	<div id="app">
		<div class="appContainer">
			<Header />
			<div class="ventUnits">
				<Supply />
				<Exhaust />
			</div>
			<GeneralConfig />
		</div>
	</div>
</template>

<script>
import Supply from './components/supplyUnit/Supply.vue';
import Header from './components/common/Header.vue';
import Exhaust from './components/exhaustUnit/Exhaust.vue';
import GeneralConfig from './components/generalConfig/GeneralConfig.vue';

export default {
	name: 'App',
	components: {
		Supply,
		Header,
		Exhaust,
		GeneralConfig,
	},

	created() {
		this.fetchTemplate();
	},

	methods: {
		async fetchTemplate() {
			const result = await fetch('/VENT.xml');
			const resultText = await result.text();

			if (result.ok) {
				window.XMLTemplate = resultText;
			} else {
				console.log(result.status, resultText);
			}
		}
	}
};

</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background-color: #bfcddb;
	width: 100%;
}

label {
	margin: 0;
}

.ventUnits {
	display: flex;
	justify-content: space-between;
}

.custom-control-label {
	line-height: 1.2;
}

.appContainer {
	width: 1470px;
	background-color: #bfcddb;
	padding-right: 10px;
	padding-left: 10px;
	margin-left: auto;
	margin-right: auto;
}
</style>
