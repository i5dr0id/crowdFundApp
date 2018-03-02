<template>
	<div id="explorer">
		<div class="mt-5">
			<div class="container inner">
				<br />
				<br />
				<div class="row">
					<div class="col-sm-12 text-center">
						<h3>Fund campaigns you love.</h3>
					</div>
				</div>
				<br />
				<br />
				<br />
				<!-- <a href="#" class="float-right" data-toggle="collapse" data-target="#filters">Toggle filters</a>
			<br /> -->
				<hr />
				<br />
				<br />
				<div class="row">
					<div class="col-sm-12">
						<div class="row mt-2">
							<div v-for="item,index in items"  class="col-sm-3 mb-4">
								<div class="card box">
									<a href="#">
										<!-- <router-link :to="/campaigns/ + item._id">{{ item.alias }}</router-link> -->
										<router-link :to="/aspirant/ + item._id">
									<div class="size-up">
										<img v-if="item.image" ref="imgg" :src="item.image" class="img-thumbnail">
										<img v-else ref="imgg" src="http://i.expresspixel.com/unsplash.it/310/210?image=11" class="img-fluid hidden-xs-down img-thumbnail" />
										<img src="http://i.expresspixel.com/unsplash.it/610/210?image=11" class="img-fluid hidden-sm-up img-thumbnail" /></div></router-link>  </a>
									<div class="card-block pb-1" style="position: relative; padding-bottom: 60px; min-height: 250px;">
										<h6>
											<a href="#"><router-link :to="/aspirant/ + item._id">{{ item.firstname +' '+ item.lastname }}</router-link></a>
										</h6>
										<p class="text-muted">
											<strong>
												<a href="/aspdb" class="text-muted">{{ item.vision }}</a>
											</strong>
										</p>
										<p class="desc">MTS ASL Curriculum Workbook is a reproducible study book to build Early Literacy and Academic skills for primary
											school age children.</p>
										<div style="position: absolute; bottom: 10px; width: 86%; ">
											<div class="progress">
												<div class="progress-bar" role="progressbar" style="width: 76%" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<p class="mb-1">76% funded</p>
										</div>
									</div>
									<div class="card-footer text-muted">
										<div class="row ">
											<div class="col-12"> </div>
											<div class="col-12">
												<div class="row">
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">Donators</p>
														<h6 class="mt-0 mb-0">
															<strong>117</strong>
														</h6>
													</div>
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">TARGET</p>
														<h6 class="mt-0 mb-0">
															<strong>&#8358;{{ item.fund }}</strong>
														</h6>
													</div>
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">Days&nbsp;Left</p>
														<h6 class="mt-0 mb-0">
															<strong>14</strong>
														</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-5 pt-2 pb-2">
				<div class="container">
					<div class="row">
						<div class="col-md-10 offset-md-1  col--sm-12">
							<div class="card ">
								<div class="card-block">
									<div class="row">
										<div class="col-md-8">
											<h4 class="card-title">We crowdfund political campaigns</h4>
											<p class="card-text">Build your own crowdfunding profile. Raise money online or through our plateform. Get started today.</p>
										</div>
										<div class="col-md-4 text-center">
											<br />
											<a href="/add" class="btn btn-primary btn-lg">Start your project
												<i class="fa fa-chevron-right" aria-hidden="true"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	export default {
		name: 'Explorer',
		data() {
			return {
				alias: '',
				city: '',
				created: '',
				email: '',
				firstname: '',
				fund: '',
				gender: '',
				image: '',
				lastname: '',
				party: '',
				position: '',
				facebook: '',
				twitter: '',
				state: '',
				story: '',
				updated: '',
				user_id: '',
				video: '',
				vision: '',
				_id: '',
				items: [],
				api: "https://onepercent-crowdfund.herokuapp.com/aspirants",
			};
		},
		mounted() {
			this.axios.get(this.api).then(response => {
				// console.log("===================");
				// console.log(response.data);
				// console.log("===================");
				this.items = response.data.aspirants;
				console.log(this.items);
				this.alias = this.items.alias;
				this.city = this.items.city;
				this.created = this.items.created;
				this.email = this.items.email;
				this.firstname = this.items.firstname;
				this.fund = this.items.fund;
				this.gender = this.items.gender;
				this.image = this.items.image;
				this.lastname = this.items.lastname;
				this.party = this.items.party;
				this.position = this.items.position;
				this.state = this.items.state;
				this.story = this.items.story;
				this.updated = this.items.updated;
				this.user_id = this.items.user_id;
				this.vision = this.items.vision;
				this._id = this.items._id
				console.log("===================");
				console.log(this.$refs);
				console.log("===================");
				// console.log(this.image)
				// this.$refs.imgg.src = this.image;
				// this.$refs.candidate_img2.src = this.image;
				// console.log(this.$refs);

				// this.$refs.candidate_img2.src = this.image;
			});
		},
		created() {
			// this.axios.get(this.api).then(response => {
			// 	// console.log("===================");
			// 	// console.log(response.data);
			// 	// console.log("===================");
			// 	this.items = response.data.aspirants;
			// 	console.log(this.items);
			// 	this.alias = this.items.alias;
			// 	this.city = this.items.city;
			// 	this.created = this.items.created;
			// 	this.email = this.items.email;
			// 	this.firstname = this.items.firstname;
			// 	this.fund = this.items.fund;
			// 	this.gender = this.items.gender;
			// 	this.image = this.items.image;
			// 	this.lastname = this.items.lastname;
			// 	this.party = this.items.party;
			// 	this.position = this.items.position;
			// 	this.state = this.items.state;
			// 	this.story = this.items.story;
			// 	this.updated = this.items.updated;
			// 	this.user_id = this.items.user_id;
			// 	this.vision = this.items.vision;
			// 	this._id = this.items._id
			// 	console.log("===================");
			// 	console.log(this.$refs);
			// 	console.log("===================");
			// 	// console.log(this.image)
			// 	// this.$refs.imgg.src = this.image;
			// 	// this.$refs.candidate_img2.src = this.image;
			// 	// console.log(this.$refs);

			// 	// this.$refs.candidate_img2.src = this.image;
			// });
		}
	}
</script>

<style>
img {
    width: 100%; /* or any custom size */
    height: 100%; 
    object-fit: contain;
}
</style>