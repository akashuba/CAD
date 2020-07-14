<template>
<div>
    <div :class="`schemeContainer ${difRelayCheckbox ? 'schemeBgImg1' : 'schemeBgImg2'}`">
    </div>
</div>
</template>
<script>
export default {
    name: 'ExhaustScheme',

    computed: {
        difRelayCheckbox() {
			return this.$store.getters.ventExhaustUnit['C8']
		},
    }
}
</script>
<style scoped>
.schemeContainer {
    width: 167px;
	height: 250px;
	position: relative;
	background-repeat: no-repeat;
	background-color: white;
}

.schemeBgImg1 {
	background-image: url('../../../assets/vent/vyt.bmp');
}

.schemeBgImg2 {
	background-image: url('../../../assets/vent/vyt_dP.bmp');
}
</style>