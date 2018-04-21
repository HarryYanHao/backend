<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.title" placeholder="标题"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getArtical">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="articals" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="title" label="标题" width="120" sortable>
				</el-table-column>
				<el-table-column prop="author" label="作者" width="100"  sortable>
				</el-table-column>
				<el-table-column prop="number" label="阅读量" width="100" sortable>
				</el-table-column>
				<el-table-column prop="content" label="内容" width="120" :formatter="fmtContent" sortable>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getArticalList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					title: ''
				},
				loading: false,
				articals: [
				]
			}
		},
		methods: {
			//格式化显示
			fmtContent:function(row){
				if(row.content.length >= 20){
					return row.content.slice(0,19);

				}
			},
			//获取用户列表
			getArtical: function () {
				let para = {
					title: this.filters.title
				};
				this.loading = true;
				//NProgress.start();
				getArticalList(para).then((res) => {
					console.log(res.data.articals);
					this.articals = res.data.articals;
					this.loading = false;
					//NProgress.done();
				});
			}
		},
		mounted() {
			this.getArtical();
		}
	};

</script>

<style scoped>

</style>