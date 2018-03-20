<template>
	<div class="index">
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!-- <div class="container-fluid inner hidden-xs-down" style="height: 560px;"> -->
			<!-- <br />
			<br /> -->
			<div class="row mt-5">
				<div class="col-2 carousel-list">
					<div class="row">
						<div class="col-sm-10"> </div>
					</div>
				</div>
				<div class="col-lg-8 col-sm-12">
					<div id="home-swiper" class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" data-hash="art">
								<div>
									<h2 class="text-center">Crowdfunding for politics
										<!-- <span class="text-primary">Art</span> -->
									</h2>
									<br />
									<div class="card embed-responsive embed-responsive-16by9">
										<iframe  class=" card embed-responsive-item"  src="https://www.youtube.com/embed/cXoZRv3ywMo" frameborder="0"
									allowfullscreen></iframe>
									
									</div>
									<!-- <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-2 carousel-list">
					<div class="row">
						<div class="col-sm-10"> </div>
					</div>
				</div>
			</div>
			<br>
			<br>
			<br>
		<!-- </div> -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<div class=" light-green  mt-3 pt-5 pb-5">
			<div class="container-fluid inner">
				<div class="row">
					<div class="col-8">
						<h3>Trending Campaigns</h3>
					</div>
					<div v class="col-4">
						<a href="/explore" class="btn btn-secondary pull-right">View all</a>
					</div>
				</div>
				<div class="row">
					<div class="boxes swiper-container">
						<div class="row mt-2 swiper-wrapper">
							<div v-for="item,index in items" class="col-md-4 col-lg-3 col-sm-6 col-xs-3  col-12 swiper-slide">
								<div class="card box">
									<a href="#">
										<router-link :to="/aspirant/ + item._id">
										<img v-if="item.image" ref="imgg" :src="imageUri(item.image)" class="card-img-top img-fluid">
										<div v-else>
										<img src="http://i.expresspixel.com/unsplash.it/310/210?image=11" class="img-fluid hidden-xs-down" />
										<img src="http://i.expresspixel.com/unsplash.it/610/210?image=11" class="img-fluid hidden-sm-up" />
										</div>
										</router-link> 
										</a> 
									<div class="card-block pb-1" style="position: relative; padding-bottom: 60px; min-height: 250px;">
										<h6>
											<a href="#" class="limited-text-vision"><router-link :to="/aspirant/ + item._id">{{ item.vision }}</router-link></a>
										</h6>
										<p class="text-muted">By
											<strong>
												<a href="#" class="text-muted"><router-link :to="/aspirant/ + item._id">{{ item.firstname +' '+ item.lastname }}</router-link></a>
											</strong>
										</p>
										<p class="desc limited-text-story">{{ item.story }}</p>
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
														<p class="mt-0 mb-0">Donator</p>
														<h6 class="mt-0 mb-0">
															<strong>117</strong>
														</h6>
													</div>
													<div class="col-4 text-center">
														<h6 class="mt-0 mb-0">Target</h6>
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
							</div>>
						</div>
						<div class="swiper-button-next hidden-lg-up">
							<i class="fa fa-chevron-right" aria-hidden="true"></i>
						</div>
						<div class="swiper-button-prev hidden-lg-up">
							<i class="fa fa-chevron-left" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<div class="mt-5">
			<div class="container-fluid inner">
				<div class="row">
					<div class="col-8">
						<h3>Recent additions</h3>
					</div>
					<div class="col-4">
						<a href="/explore" class="btn btn-secondary pull-right">View more</a>
					</div>
				</div>
				<div class="row">
					<div class="boxes swiper-container">
						<div class="row mt-2 swiper-wrapper">
							<div v-for="cand,index in latest" class="col-md-4 col-lg-3 col-sm-6 col-xs-3  col-12 swiper-slide">
								<div class="card box">
									<a href="#">
										<router-link :to="/aspirant/ + cand._id">
										<img v-if="cand.image" ref="imgg" :src="cand.image" class="card-img-top img-fluid">
										<div v-else>
										<img src="http://i.expresspixel.com/unsplash.it/310/210?image=51" class="img-fluid hidden-xs-down" />
										<img src="http://i.expresspixel.com/unsplash.it/610/210?image=51" class="img-fluid hidden-sm-up" /> 
										</div>
										</router-link>
									</a>
									<div class="card-block pb-1" style="position: relative; padding-bottom: 60px; min-height: 250px;">
										<h6>
											<a href="#" class="limited-text-vision"><router-link :to="/aspirant/ + cand._id"> {{ cand.firstname +' '+ cand.lastname }}</router-link></a>
										</h6>
										<p class="text-muted limited-text-vision">
											<strong>
												<a href="#" class="text-muted"><router-link :to="/aspirant/ + cand._id">{{ cand.vision }}</router-link></a>
											</strong>
										</p>
										<p class="desc limited-text-story">{{ cand.story }}</p>
										<a href="#"><router-link :to="/aspirant/ + cand._id"><span>read more</span></router-link></a>
										<div style="position: absolute; bottom: 10px; width: 86%; ">
											<div class="progress">
												<div class="progress-bar" role="progressbar" style="width: 78%" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<p class="mb-1">78% funded</p>
										</div>
									</div>
									<div class="card-footer text-muted">
										<div class="row ">
											<div class="col-12"> </div>
											<div class="col-12">
												<div class="row">
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">Donator</p>
														<h6 class="mt-0 mb-0">
															<strong>30</strong>
														</h6>
													</div>
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">Target</p>
														<h6 class="mt-0 mb-0">
															<strong>&#8358;{{ cand.fund }}</strong>
														</h6>
													</div>
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">Days&nbsp;Left</p>
														<h6 class="mt-0 mb-0">
															<strong>4</strong>
														</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-button-next hidden-lg-up">
							<i class="fa fa-chevron-right" aria-hidden="true"></i>
						</div>
						<div class="swiper-button-prev hidden-lg-up">
							<i class="fa fa-chevron-left" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<div class=" light-green  mt-5 pt-5 pb-5">
			<div class="container-fluid inner">
				<div class="row">
					<div class="col-8">
						<h3 class="explore">Explore</h3>
					</div>
					<div class="col-4">
						<a href="/explore" class="btn btn-secondary pull-right">View more</a>
					</div>
				</div>
				<div class="row">
					<div class="boxes swiper-container">
						<div class="row mt-2 swiper-wrapper">
							<div v-for="item,index in items" class="col-md-4 col-lg-3 col-sm-6 col-xs-3  col-12 swiper-slide">
								<div class="card box">
									<a href=""><router-link :to="/aspirant/ + item._id">
										<img v-if="item.image" ref="imgg" :src="item.image" class="card-img-top img-fluid">
										<div v-else>
										<img src="http://i.expresspixel.com/unsplash.it/310/210?image=91" class="img-fluid hidden-xs-down" />
										<img src="http://i.expresspixel.com/unsplash.it/610/210?image=91" class="img-fluid hidden-sm-up" /> 
										</div>
										</router-link></a>
									<div class="card-block pb-1" style="position: relative; padding-bottom: 60px; min-height: 250px;">
										<h6>
											<a href="#"><router-link :to="/aspirant/ + item._id">{{ item.vision }}</router-link></a>
										</h6>
										<p class="text-muted">By
											<strong>
												<a href="#" class="text-muted"><router-link :to="/aspirant/ + item._id">{{ item.firstname +' '+ item.lastname }}</router-link></a>
											</strong>
										</p>
										<p class="desc">{{ item.vison}}</p>
										
										<div style="position: absolute; bottom: 10px; width: 86%; ">
											<div class="progress">
												<div class="progress-bar" role="progressbar" style="width: 51%" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<p class="mb-1">51% funded</p>
										</div>
									</div>
									<div class="card-footer text-muted">
										<div class="row ">
											<div class="col-12"> </div>
											<div class="col-12">
												<div class="row">
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">Donator</p>
														<h6 class="mt-0 mb-0">
															<strong>143</strong>
														</h6>
													</div>
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">Target</p>
														<h6 class="mt-0 mb-0">
															<strong>&#8358;{{ item.fund }}</strong>
														</h6>
													</div>
													<div class="col-4 text-center">
														<p class="mt-0 mb-0">Days&nbsp;Left</p>
														<h6 class="mt-0 mb-0">
															<strong>15</strong>
														</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-button-next hidden-lg-up">
							<i class="fa fa-chevron-right" aria-hidden="true"></i>
						</div>
						<div class="swiper-button-prev hidden-lg-up">
							<i class="fa fa-chevron-left" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<div class="container-fluid inner hidden-xs-down" style="height: 560px;">
			<br />
			<br />
			<div class="row mt-5">
				<div class="col-2 carousel-list">
					<div class="row">
						<div class="col-sm-10"> </div>
					</div>
				</div>
				<div class="col-8">
					<div id="home-swiper" class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" data-hash="art">
								<div>
									<h2 class="text-center">Fund This Campaign 
										<!-- <span class="text-primary">Art</span> -->
									</h2>
									<br />
									<div class="cardd ">
										<div class="card-blocks">
											<div class="row ">
												<div class="col-sm-6">
													<!-- <a href="" class="thumbnail"><img class="img-fluid img-thumbnail" src="images/eat-1892990_1920.jpg" /></a> -->
													<a href="#" class="thumbnaidl">
														<img class="card-img-top img-fluid" src="https://unsplash.it/310/210?image=1081" /> </a>
												</div>
												<div class="col-sm-6">
													<h4 class="display-8">
														<a href="#">Goverment for the people</a>
													</h4>
													<p class="text-muted">
														<strong>
															<a href="http://templates.expresspixel.com/project" class="text-muted">Israel Benoni</a>
														</strong> for 
														<strong>Chairman, Yaba</strong>
													</p>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate et odio eu tempus. Donec turpis
														justo.Suspendisse vulputate et odio eu tempus. Suspendisse vulputate et odio eu tempus. </p>
													<br />
													<div class="progress">
														<div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
													<p>20% funded</p>
												</div>
											</div>
										</div>
										<div class="card-footer text-muted mt-4" style="background: #f7f8fa">
											<div class="row ">
												<div class="col-sm-12">
													<div class="row ">
														<div class="col">
															<p class="mt-0 mb-0">Target</p>
															<h5 class="mt-0 mb-0">&dollar;50,000</h5>
														</div>
														<div class="col">
															<p class="mt-0 mb-0">Donators</p>
															<h5 class="mt-0 mb-0">250</h5>
														</div>
														<div class="col">
															<p class="mt-0 mb-0">Days Left</p>
															<h5 class="mt-0 mb-0">27</h5>
														</div>
														<div class="col">
															<p class="mt-0 mb-0">Funding goal</p>
															<h5 class="mt-0 mb-0">&dollar;175,000</h5>
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
				<div class="col-2 carousel-list">
					<div class="row">
						<div class="col-sm-10"> </div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<div class=" light-green  mt-5 pt-5 pb-5">
			<div class="container-fluid">
				<div class="row mt-3">
					<div class="col-12 col-md-10 offset-md-1">
						<div class="row">
							<div class="col-sm-10 offset-sm-1">
								<h3 class="display-6 text-center">How does it work?</h3>
								<p class="text-center text-muted">Access your data anywhere from any device</p>
							</div>
						</div>
						<div class="row mt-3">
							<div class="col-5  offset-1">
								<p>Access your data from absolutely anywhere and on any device your phone, ipad, laptop. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit.</p>
							</div>
							<div class="col-5  offset-1">
								<p>Create your own graphs and visualizztions to you can capture trends immediately. Donec nec tortor lorem. Integer
									nulla quam, convallis ut consectetur vel, dignissim et ex.</p>
							</div>
							<div class="col-5  offset-1">
								<p>Ideal for shop owners selling over 100 products a day. We make sure you find our what your best products are, what
									products you could sell.</p>
							</div>
							<div class="col-5  offset-1">
								<p> Nam porttitor quam pellentesque, mollis arcu tincidunt, faucibus tellus. Fusce nec sem ut risus auctor iaculis id
									a libero. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-5 pt-2 pb-2">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12 col-md-10 offset-md-1">
						<div class="card ">
							<div class="card-block">
								<div class="row">
									<div class="col-sm-8">
										<h4 class="card-title">We crowdfund Political Campaigns</h4>
										<p class="card-text">Build your own crowdfunding or fundraising website. Raise money online or through your Facebook profile. Get started
											today.</p>
									</div>
									<div class="col-sm-4 text-center">
										<br />
										<a href="/add" class="btn btn-primary btn-lg">Crowdfund your campaign
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
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<div class="modal fade login-modal-lg" tabindex="-1" data-backdrop="static" role="dialog" aria-labelledby="myLargeModalLabel"
		aria-hidden="true">
			<div class="modal-dialog modal-sm">
				<div class="modal-content" style="background: transparent; border: none;">
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-12">
								<div class="row">
									<div class="col-sm-12  pull-right">
										<h4 style="color: #fff; font-weight: 100;">Login</h4>
										<a href="#" data-dismiss="modal" style="position: absolute; top: 0; right: 0;">
											<i class="icon-close icons" aria-hidden="true" style="color: #fff; font-size: 26px"></i>
										</a>
										<div class="card mt-3" style="background: #fff; padding: 10px">
											<h6 style="color: #000;font-weight: 100;">Already have an account</h6>
											<p>Please login to continue.</p>
											<br />
											<form>
												<div class="form-group row">
													<div class="col-sm-12">
														<input type="email" class="form-control" id="inputEmail3" placeholder="Email"> </div>
												</div>
												<div class="form-group row">
													<div class="col-sm-12">
														<input type="password" class="form-control" id="inputPassword3" placeholder="Password"> </div>
												</div>
												<div class="form-group row">
													<label class="col-sm-2s"></label>
													<div class="col-sm-10">
														<div class="form-check">
															<label class="form-check-label">
																<input class="form-check-input" type="checkbox"> Remember me </label>
														</div>
													</div>
												</div>
												<br />
												<br />
												<div class="form-group row">
													<div class="offset-sm-3 col-sm-6 text-center">
														<a href="account-dashboard.html" class="btn btn-primary btn-block">Sign in</a>
													</div>
												</div>
												<div class="form-group row">
													<div class="offset-sm-2 col-sm-8 text-center">
														<a href="#" class="mt-2">Forgotten your password</a>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<div class="modal fade signup-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content" style="background: transparent; border: none;">
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-12">
								<div class="row">
									<div class="col-md-11 col-sm-12">
										<h4 style="color: #fff; font-weight: 100;">Register</h4>
										<a href="#" data-dismiss="modal" style="position: absolute; top: 0; right: 0;">
											<i class="icon-close icons" aria-hidden="true" style="color: #fff; font-size: 26px"></i>
										</a>
										<div class="card  mt-3" style="background: #fff; padding: 10px">
											<h6 style="color: #000">New to CrowdFunding?</h6>
											<p>A crowdfunding account is required to continue.</p>
											<form role="form">
												<div class="form-group">
													<input type="email" class="form-control " placeholder="Enter email"> </div>
												<div class="row">
													<div class="col-6">
														<div class="form-group">
															<input type="text" class="form-control" placeholder="First name"> </div>
													</div>
													<div class="col-6">
														<div class="form-group">
															<input type="text" class="form-control" placeholder="Last name"> </div>
													</div>
												</div>
												<div class="row">
													<div class="col-6">
														<div class="form-group">
															<input type="password" class="form-control" placeholder="Password"> </div>
													</div>
													<div class="col-6">
														<div class="form-group">
															<input type="password" class="form-control" placeholder="Confirm password"> </div>
													</div>
												</div>
												<div class="text-center">
													<br />
													<br />
													<p>By signing up you agree to our terms and conditions and privacy policy</p>
													<a href="account-dashboard.html"
													class="btn btn-primary">Create account</a>
													<br />
													<br /> </div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
		<!--  -->
	</div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      items: [],
      api: "https://onepercent-crowdfund.herokuapp.com/aspirants",
      org_link:
        "https://res.cloudinary.com/dmdvs9djh/image/upload/c_limit,h_310,w_210/v1519818069/",
      revs: []
    };
  },
  computed: {
    latest: function() {
      return this.revs.sort(function(left, right) {
        return moment.utc(right.created).diff(moment.utc(left.created));
      });
    }
  },

  methods: {
    imageUri: function(imgUri) {
      var splitted = imgUri.split("/");
      // console.log(this.org_link+splitted[splitted.length-1].split('.')[0]+'.png');
      return (
        this.org_link + splitted[splitted.length - 1].split(".")[0] + ".png"
      );
      return imgUri;
    }
  },
  mounted() {
    console.time("Fetching Data");
    this.axios.get(this.api).then(response => {
      console.log("===================");
      console.log(response.data);
      console.log("===================");
      this.items = response.data.aspirants;
      this.revs = JSON.parse(JSON.stringify(this.items));
    });
    console.timeEnd("Fetching Data");
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-green {
  background-color: #e6fde6;
}

.card-img-top {
  width: 100%;
  height: 13vw;
  object-fit: cover;
}

.btn-primary {
  background-color: #006600 !important;
}

.card {
  border: 1px solid rgb(254, 205, 11);
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

.btn {
  border: 2px solid rgb(254, 205, 11);
  border-radius: 0.25rem;
  background-color: #006600;
  color: #ddd;
}
.progress {
  background-color: #ffe795;
}

.progress-bar {
  background-color: #006600;
}

a:focus,
a:hover {
  color: rgb(254, 205, 11);
  text-decoration: underline;
}

a {
  color: #006600;
}

/* MEDIA QUERY */

@media only screen and (min-width: 320px) {
  /* Mobile Small: */
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
}
</style>