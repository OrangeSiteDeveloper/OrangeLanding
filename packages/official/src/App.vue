<template>
	<div id="app">
		<transition name="slide-fade">
			<router-view v-wechat-title="$route.meta.title" />
		</transition>

	</div>
</template>

<style lang="less">
	
</style>
