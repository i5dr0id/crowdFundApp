<template>
	<div id="asdb">
		<br/>
		<br/>
		<div class="container inner">
			<div class="row">
				<div class="col-sm-8">
					<div class="row">
						<div class="col-sm-12">
							<div class="row">
								<div class="col-sm-2">
									<!-- <div class="avatar-me-wrapper">
									<span class="avatar-me">A</span>
								</div> --></div>
								<div class="col-sm-10">
									<!-- <h3>{{alias}}</h3> -->
									<h3> Vote for {{alias}} to get the change you deserved </h3>
									<br />
									<p class="mb-1">24% funded</p>
									<div class="progress">
										<div class="progress-bar" role="progressbar" style="width: 29%" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<h3>&#8358;0</h3>
											<p class="mb-1">Donation from 132 people</p>
										</div>
										<div class="col-sm-6 text-right">
											<!-- <h3>$2,947</h3> -->
											<h3>&#8358;{{fund}}</h3>
											<p class="mb-1">Funding goal</p>
										</div>
									</div>
									<br />
									<br />
									<iframe v-if="video" width="100%" height="350" src="https://www.youtube.com/embed/Pwq89K6RBTI" frameborder="0"
									allowfullscreen></iframe>
									<div v-else class="campImg">
										<img ref="candidate_img" src="https://res.cloudinary.com/crowdpac/image/upload/c_fill,f_auto,g_face,h_370,q_auto,w_620/v1/assets/campaign-image-empty"
										class="img-fluid rounded img-thumbnail" alt="Responsive image"> </div>
								</div>
							</div>
							<br />
							<br />
							<!-- <div class="row">
							<div class="col-md-12">
								<ul class="nav nav-tabs">
									<li class="nav-item">
										<a class="nav-link active" href="#">Overview</a>
									</li>
									<li class="nav-item" style="width: 100%">
										<span class="badge badge-pill badge-info float-sm-right" style="margin-left: 5px;margin-top: 5px;">Technology</span>
										<span class="badge badge-pill badge-danger float-sm-right" style="margin-left: 0px;margin-top: 5px;">Prototype Stage</span>
									</li>
								</ul>
							</div>
						</div> -->
							<!-- <br />
						<br />	 -->
							<!-- <div class="row">
							<div class="col-md-4">
								<a href="#">
									<img class="img-fluid" src="https://unsplash.it/310/210?image=1"/> </a>
							</div>
							<div class="col-md-8">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam odio est, placerat nec iaculis ut, sodales nec libero.
									Quisque ac est quis velit pharetra sollicitudin. Mauris maximus, libero non fermentum placerat, turpis nulla laoreet
									sapien, ut cursus nisi metus et ligula. Integer semper porttitor condimentum. Sed vulputate urna sapien, non feugiat
									nulla tincidunt eu. Quisque aliquet quam sed libero consectetur mollis. Nunc id hendrerit eros. In porta, urna sed
									condimentum aliquam, felis orci vestibulum odio, et dictum risus libero at nisi.</p>
							</div>
						</div> -->
							<br />
							<br />
							<ul class="nav nav-tabs" role="tablist">
								<li class="nav-item">
									<a class="nav-link active" data-toggle="tab" active="" href="#home" role="tab">STORY</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#updates" role="tab">UPDATES ({{"1"}})</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#comments" role="tab">ENDORSEMENTS {{'1'}}</a>
								</li>
								<li class="nav-item">
									<a class="nav-link disabled" href="#backers" role="tab">DONATORS ({{"1"}})</a>
								</li>
							</ul>
							<br />
							<br />
							<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
							<!-- Tab panes -->
							<div class="tab-content">
								<div class="tab-pane active" id="home" role="tabpanel" aria-expanded="true">
									<p>
										<strong>I'm gonna build me an airport, put my name on it. Why, Michael? So you can fly away from your feelings? I don't
											care if it takes from now till the end of Shrimpfest.</strong>
									</p>
									<h6>
										<strong>Lorem Ipsum is not a major key to success. </strong>
									</h6>
									<p>I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Fan luv. Always remember in the
										jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Watch your back,
										but more importantly when you get out the shower, dry your back, it’s a cold world out there. Every chance I get,
										I water the plants, Lion! You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo.
										Bless up.</p>
									<h6>
										<strong>Hammock talk come soon. </strong>
									</h6>
									<p>Hammock talk come soon. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why
										live rough? To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. How’s business?
										Boomin. How’s business? Boomin. I’m up to something. Stay focused. Cloth talk. Let me be clear, you have to make
										it through the jungle to make it to paradise, that’s the key, Lion!</p>
									<h6>
										<strong>Ohhh little guy. .</strong>
									</h6>
									<p>Ohhh little guy. The tears aren't coming. The tears just aren't coming. Look, you are playing adults…with fully
										formed libidos, not 2 young men playing grab-ass in the shower. Boy, I sure feel like a Mary without a Peter and
										a Paul. And although the intervention didn't work, it turned into one of the Bluth family's better parties. I'm
										tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. </p>
								</div>
								<div class="tab-pane" id="updates" role="tabpanel" aria-expanded="false">
									<div class="card mb-4">
										<div class="card-block">
											<h5 class="card-title">We made it!!!</h5>
											<h6 class="card-subtitle mb-2 text-muted">March 16</h6>
											<p class="card-text">
												<b>We did it! In less than 3 days (52 hours to be exact!) we hit our minimum funding goal.</b> I seriously can’t
												believe it. Nunc id hendrerit eros. In porta, urna sed condimentum aliquam, felis orci vestibulum odio, et dictum
												risus libero at nisi.</p>
											<a href="#" class="card-link">Read more</a>
										</div>
									</div>
									<!-- <div class="card mb-4">
										<div class="card-block">
											<h5 class="card-title">The Mid-Campaign March + 300 Backers!</h5>
											<h6 class="card-subtitle mb-2 text-muted">March 7</h6>
											<p class="card-text">Within the last 24 hours, our campaign has surpassed
												<b>300 backers and $35,000</b>! THANK YOU to everyone who has graciously donated to our campaign over the past two
												weeks....</p>
											<a href="#" class="card-link">Read more</a>
										</div>
									</div> -->
									<!-- <div class="card">
										<div class="card-block">
											<h5 class="card-title">Wow! 50% funded... in the first 9 hours???</h5>
											<h6 class="card-subtitle mb-2 text-muted">March 7</h6>
											<p class="card-text">Within the last 9 hours, our campaign has made 50% of what we set out to reach. Thanks so much guys!!! Nunc id
												hendrerit eros. In porta, urna sed condimentum aliquam, felis orci vestibulum odio, et dictum risus libero at
												nisi.</p>
											<a href="#" class="card-link">Read more</a>
										</div>
									</div> -->
								</div>
								<div class="tab-pane" id="comments" role="tabpanel" aria-expanded="false">
									<ul class="comment-section mt-0">
										<li class="comment user-comment">
											<!-- <div class="info"> -->
												<h6 href="#" class="float-left"><strong>Anie Silverston</strong></h6>
												<!-- <span>4 hours ago</span> -->
											<!-- </div> -->
											<a class="avatar" href="#">
												<!-- <img src="images/team/pixeliris.jpg" width="35" alt="Profile Avatar" title="Anie Silverston">  -->
												</a>
											<p class="float-right">Suspendisse gravida sem? Suspendisse gravida sem? </p>
										</li>
										<!-- <li class="comment author-comment">
											<div class="info">
												<a href="#">Jack Smith</a>
												<span>3 hours ago</span>
											</div>
											<a class="avatar" href="#">
												<img src="images/team/commadelimited.jpg" width="35" alt="Profile Avatar" title="Jack Smith"> </a>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida sem sit amet molestie portitor.</p>
										</li> -->
										<!-- <li class="comment user-comment">
											<div class="info">
												<a href="#">Bradley Jones</a>
												<span>1 hour ago</span>
											</div>
											<a class="avatar" href="#">
												<img src="images/team/pixeliris.jpg" width="35" alt="Profile Avatar" title="Bradley Jones"> </a>
											<p>Suspendisse gravida sem sit amet molestie portitor?</p>
										</li> -->
										<!-- <li class="comment author-comment">
											<div class="info">
												<a href="#">Jack Smith</a>
												<span>1 hour ago</span>
											</div>
											<a class="avatar" href="#">
												<img src="images/team/commadelimited.jpg" width="35" alt="Profile Avatar" title="Jack Smith"> </a>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisee gravida sem sit amet molestie porttitor.</p>
										</li> -->
										<li class="write-new">
											<form action="#" method="post">
												<div class="row">
												<div class="col-md-6 mb-6">
													<label for="">Full name: </label>
													<input type="text" v-model="fname" class="form-control" id="fn" placeholder="Full name"
													required> </div>
												<div class="col-md-6 mb-6">
													<label for="">Email: </label>
													<input type="text" v-model="email" class="form-control" id="emailEnd" placeholder="email" required> </div>
											</div>
											<br>
											<!-- <br> -->
												<!-- <div class="row"> -->
													<textarea placeholder="Write your comment here" name="comment"></textarea>
												<!-- </div> -->
												<div>
													<!-- <img src="images/team/commadelimited.jpg" width="35" alt="Profile of Bradley Jones" title="Bradley Jones"> -->
													<button type="submit" class="btn btn-primary">ENDORSE</button>
												</div>
											</form>
										</li>
									</ul>
								</div>
								<div class="tab-pane" id="settings" role="tabpanel">...</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-4 ">
					<div class="row ">
						<div class="col-sm-11 offset-sm-1 ">
							<div class="card ">
								<div class="card-block pb-1">
									<div class="row ">
										<div class="col-sm-12 ">
											<h4>ASPIRANT/CANDIDATE</h4>
											<div class="row ">
												<div class="col-sm-4 ">
													<a href="# ">
														<img ref="candidate_img2" src="https://randomuser.me/api/portraits/men/51.jpg" class="img-fluid rounded-circle "
														/> </a>
													<br />
													<br /> </div>
												<div class="col-sm-7 ">
													<!-- WORK ON THIS LATER -->
													<h3 class="mb-0 ">
														<strong>{{firstname +' '+ lastname }}</strong>
													</h3>
													<h4 class="mt-0 mb-0 ">{{ city }}, {{ state }}</h4>
													<p class="mt-0 mb-0 ">OFFICE:
														<strong>{{ position }}</strong>
													</p>
													<br />
													<br /> </div>
											</div>
											<a href="# " class="btn btn-lg btn-primary btn-block ">Support this campaign</a>
											<br />
											<!-- <p>This project will only be funded if at least $15,000 is pledged by Wednesday May 8, 3:00pm</p> -->
										</div>
									</div>
								</div>
							</div>
							<br />
							<br />
							<h3>DONATE</h3>
							<hr />
							<div id="accordion " role="tablist " aria-multiselectable="true ">
								<div class="card ">
									<div class="card-header " role="tab " id="heading2 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse2 " aria-expanded="true " aria-controls="collapse2 ">
											Donante &#8358;5000 or more </a>
										</h6>
									</div>
									<div id="collapse2 " class="collapse " role="tabpanel " aria-labelledby="heading2 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div>
								<div class="card ">
									<div class="card-header " role="tab " id="heading3 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse3 " aria-expanded="true " aria-controls="collapse3 ">
											Donate &#8358;10,000 or more </a>
										</h6>
									</div>
									<div id="collapse3 " class="collapse " role="tabpanel " aria-labelledby="heading3 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div>
								<div class="card ">
									<div class="card-header " role="tab " id="heading4 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse4 " aria-expanded="true " aria-controls="collapse4 ">
											Donate &#8358;20,000 or more </a>
										</h6>
									</div>
									<div id="collapse4 " class="collapse " role="tabpanel " aria-labelledby="heading4 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div>
								<div class="card ">
									<div class="card-header " role="tab " id="heading5 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse5 " aria-expanded="true " aria-controls="collapse5 ">
											Pledge &#8358;50,000 or more </a>
										</h6>
									</div>
									<div id="collapse5 " class="collapse " role="tabpanel " aria-labelledby="heading5 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div>
								<div class="card ">
									<div class="card-header " role="tab " id="heading6 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse6 " aria-expanded="true " aria-controls="collapse6 ">
											Donate &#8358;100,000 or more </a>
										</h6>
									</div>
									<div id="collapse6 " class="collapse " role="tabpanel " aria-labelledby="heading6 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div>
								<div class="card ">
									<div class="card-header " role="tab " id="heading7 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse7 " aria-expanded="true " aria-controls="collapse7 ">
											Donate &#8358;100,000 or more </a>
										</h6>
									</div>
									<div id="collapse7 " class="collapse " role="tabpanel " aria-labelledby="heading7 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div>
								<div class="card ">
									<div class="card-header " role="tab " id="heading8 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse8 " aria-expanded="true " aria-controls="collapse8 ">
											Donate &#8358;1,000,000 or more </a>
										</h6>
									</div>
									<div id="collapse8 " class="collapse " role="tabpanel " aria-labelledby="heading8 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div>
								<div class="card ">
									<div class="card-header text-center" role="tab " id="heading9 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse9 " aria-expanded="true " aria-controls="collapse9 ">
											Others </a>
										</h6>
									</div>
									<div id="collapse9 " class="collapse " role="tabpanel " aria-labelledby="heading9 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div>
								<!-- <div class="card ">
									<div class="card-header " role="tab " id="heading10 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse10 " aria-expanded="true " aria-controls="collapse10 ">
											Pledge $10 or more </a>
										</h6>
									</div>
									<div id="collapse10 " class="collapse " role="tabpanel " aria-labelledby="heading10 ">
										<div class="card-block ">
											<h5>
												<strong>SuperBox Receiver</strong>
											</h5>
											<p>Have more than one device? Get another Android or iOS receiver for your smartphone! Free shipping!</p>
											<p>Items included:</p>
											<ul>
												<li>Receiver</li>
												<li>Receiver</li>
											</ul>
											<small class="text-muted ">172 claimed</small>
											<br />
											<small class="text-muted ">Ships Worldwide</small>
											<br />
											<br />
											<a href="# " class="btn btn-lg btn-primary btn-block ">Select this reward</a>
										</div>
									</div>
								</div> -->
								<br>
								<br>
								<div class="card ">
									<div class="card-header text-center" role="tab " id="heading1 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse1 " aria-expanded="true " aria-controls="collapse1 ">
											Donators ({{ '1' }}) </a>
										</h6>
									</div>
									<div id="collapse1 " class="collapse show " role="tabpanel " aria-labelledby="heading1 ">
										<div class="card-block ">
											<!-- <h5>
												<strong>SuperBox Receiver</strong>
											</h5> -->
											 <div>  <!-- LOOP FROM HERE -->
												<div class="clearfix">
													<div class="pull-left donation-list-left">
														<h4 class="header-label m-none"> Erika Esau </h4>
														<!-- <p class="label-small m-none">1 day ago</p> -->
													</div>
													<div class="pull-right align-right">
														<h4 class="header-label no-margin recent-donate-amount">&#8358;10,000</h4>
													</div>
												</div>
												<hr class="simple-rule"> </div>
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
		name: "Login",
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
				api: "https://onepercent-crowdfund.herokuapp.com/aspirants/5a932b6e875f590014c49814",
				items: []
			};
		},
		methods: {},
		mounted() {
			// this.api = "https://onepercent-crowdfund.herokuapp.com/aspirants/" + this.candidate_ID;
			this.axios.get(this.api).then(response => {
				console.log("===================");
				console.log(response.data);
				console.log("===================");
				this.item = response.data.aspirant;
				console.log(this.item);
				this.alias = this.item.alias;
				this.city = this.item.city;
				this.created = this.item.created;
				this.email = this.item.email;
				this.firstname = this.item.firstname;
				this.fund = this.item.fund;
				this.gender = this.item.gender;
				this.image = this.item.image;
				this.lastname = this.item.lastname;
				this.party = this.item.party;
				this.position = this.item.position;
				//  this.facebook = this.item.social[0];
				//  this.twitter = this.item.socail[0];
				this.state = this.item.state;
				this.story = this.item.story;
				this.updated = this.item.updated;
				this.user_id = this.item.user_id;
				// this.video = this.item.video;
				this.vision = this.item.vision;
				this._id = this.item._id
				// this.donation = this.item.donation;
				// this.$refs.candidate_img2.src = this.image;
				console.log("===================");
				console.log(this.$refs);
				console.log("===================");
				// this.$refs.candidate_img.src = this.image;
				// this.$refs.candidate_img2.src = this.image;
				// console.log(this.$refs);
			});
		},
		created() {
			// console.log("Before Created");
			// this.candidate_ID = window.location.pathname.split("/")[2];
		}
	};
</script>
<style>
	.campImg {
		height: 350px;
		width: 100%;
		background-color: powderblue;
	}
</style>