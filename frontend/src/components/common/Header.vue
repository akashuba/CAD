<template>
	<div class="header">
		<div class="configItem">
			<label class="inputLabel" for="boardName">Щит автоматики</label>
			<b-form-input
				id="boardName"
				name="boardName"
				size="sm"
				:value="boardName"
				@input.native="onBoardNameChange"
				class="custom-input"
			></b-form-input>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Header',

	data() {
		return {
			boardName: 'ЩАУ-1',
		}
	},

	onBoardNameChange(event) {
		this.boardName = event.target.value
	},
}
</script>
<style scoped>
.header {
	height: 50px;
	vertical-align: middle;
    line-height: 50px;
}

.configItem {
	display: flex;
	align-items: center;
	margin-left: 350px;
}

.custom-input {
	flex: 0 0 120px;
	margin-left: 10px;
	text-align: center;
	font-weight: 600;
}

.inputLabel {
	margin-bottom: 0;
	font-weight: 600;
}
</style>
