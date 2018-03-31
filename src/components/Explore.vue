<template>
	<div id="explorer">
		<div class="mt-5">
			<div class="container inner">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h3>Fund campaigns you love.</h3>
					</div>
				</div>

				<hr />
		
				<div class="row">
					<div class="col-sm-12">
						<div class="row mt-2">
							<div v-for="item,index in items"  class="col-sm-3 mb-4">
								<div class="card box">
									<a href="#">
										<!-- <router-link :to="/campaigns/ + item._id">{{ item.alias }}</router-link> -->
										<router-link :to="/aspirant/ + item._id">
									<div class="size-up">
										<img v-if="item.image" ref="imgg" :src="item.image" class="card-img-top img-fluid">
										<div v-else>
										<img ref="imgg" src="http://i.expresspixel.com/unsplash.it/310/210?image=11" class="img-fluid hidden-xs-down img-thumbnail" />
										<img src="http://i.expresspixel.com/unsplash.it/610/210?image=11" class="img-fluid hidden-sm-up img-thumbnail" /></div></div></router-link>  </a>
									<div class="card-block pb-1" style="position: relative; padding-bottom: 60px; min-height: 250px;">
										<h6>
											<a href="#"><router-link :to="/aspirant/ + item._id">{{ item.firstname +' '+ item.lastname }}</router-link></a>
										</h6>
										<p class="text-muted">
											<strong>
												<a href="#" class="text-muted"><router-link :to="/aspirant/ + item._id"><p class="limited-text-vision">{{ item.vision }}</p></router-link></a>
											</strong>
										</p>
										<p v-if="item.story" class="desc limited-text-story">{{ item.story }}</p>
										<p v-else class="desc">MTS ASL Curriculum Workbook is a reproducible study book to build Early Literacy and Academic skills for primary
											school age children.</p>
										<a href="#"><router-link :to="/aspirant/ + item._id"><span>read more</span></router-link></a>
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
											<a href="/add" class="btn btn-primary btn-lg btn">Create your campaign
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
  name: "Explorer",
  data() {
    return {
      alias: "",
      city: "",
      created: "",
      email: "",
      firstname: "",
      fund: "",
      gender: "",
      image: "",
      lastname: "",
      party: "",
      position: "",
      facebook: "",
      twitter: "",
      state: "",
      story: "",
      updated: "",
      user_id: "",
      video: "",
      vision: "",
      _id: "",
      items: [],
      api: "https://onepercent-crowdfund.herokuapp.com/aspirants"
    };
  },
  methods: {
    getNumberDonantion() {}
  },
  mounted() {
    this.axios.get(this.api).then(response => {
      this.items = response.data.aspirants;
      //   console.log(this.items);
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
      this._id = this.items._id;
    });

    this.axios
      .get("https://onepercent-crowdfund.herokuapp.com/aspirants/")
      .then(res => {
        var result = res.data.donations_array[0].donations;
        console.log(result);
        // result.forEach
      });
  },
  created() {
    this.axios.get(this.api).then(response => {
      this.items = response.data.aspirants;
      //   console.log(this.items);
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
      this._id = this.items._id;
    });
  }
};
</script>

<style scoped>
img {
  width: 100%; /* or any custom size */
  min-height: 100%;
  object-fit: contain;
}

.card-img-top {
  width: 100%;
  height: 13vw;
  object-fit: cover;
}

.limited-text-vision {
  display: block;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.limited-text-story {
  word-break: break-all;
}

.progress {
  background-color: #ffe795;
}

.progress-bar {
  background-color: #006600;
}

.btn {
  border: 2px solid rgb(254, 205, 11);
  border-radius: 0.25rem;
  background-color: #006600;
  color: #ddd;
}

a:focus,
a:hover {
  color: rgb(254, 205, 11);
  text-decoration: underline;
}
.card {
  border: 1px solid rgb(254, 205, 11);
}

/* MEDIA QUERY */

@media only screen and (min-width: 320px) {
  /* Mobile Small: */
  .fullscreen {
    padding-top: 10%;
  }
  h1 {
    /* font-size: 20px; */
    padding: 5%;
  }
  .card {
    /* height: 457px; */
    /* margin-left: 15%;
			left: -3%; */
  }
  .card-img-top {
    /* width: 100%; */
    height: 50vw;
  }
}

@media only screen and (min-width: 375px) {
  /* Mobile medium: */
}

@media only screen and (min-width: 425px) {
  /* Mobile Large: */
}

@media only screen and (min-width: 768px) {
  /* Tablet: */
}

@media only screen and (min-width: 1024px) {
  /* laptop */
  .fullscreen {
    padding-top: 0;
  }
  h1 {
    font-size: 2.5rem;
  }
  .card-img-top {
    /* width: 100%; */
    height: 13vw;
  }
}
</style>