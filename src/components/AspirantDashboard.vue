<template>
	<div id="asdb">
		<br/>
		<br/>
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
									<h3> Vote for {{alias|capitalize}} to get the change you deserved </h3>
									<br />
									<p class="mb-1">{{perNum}}% funded</p>
									<div class="progress">
										<div class="progress-bar" ref="perpro" v-bind:class="{percentage:true}" role="progressbar" aria-valuenow="29" aria-valuemin="0"
										aria-valuemax="100"></div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<h3>&#8358;{{ tAmount }}</h3>
											<p v-if="numDonator == '1'" class="mb-1">Donation from {{ numDonator }} person</p>
											<p v-else class="mb-1">Donation from {{ numDonator }} people</p>
										</div>
										<div class="col-sm-6 text-right">
											<!-- <h3>$2,947</h3> -->
											<h3>&#8358;{{fund}}</h3>
											<p class="mb-1">Target</p>
										</div>
									</div>
									<br />
									<br />
									<iframe v-if="video" width="100%" height="350" src="https://www.youtube.com/embed/Pwq89K6RBTI" frameborder="0"
									allowfullscreen></iframe>
									<div v-else class="campImg">
										<img v-if="image" ref="imgg" :src="image" class="img-fluid rounded img-thumbnail">
										<img v-else ref="candidate_img" src="https://res.cloudinary.com/crowdpac/image/upload/c_fill,f_auto,g_face,h_370,q_auto,w_620/v1/assets/campaign-image-empty"
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
									<a class="nav-link" data-toggle="tab" href="#updates" role="tab">UPDATES ({{"0"}})</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="tab" href="#comments" role="tab">ENDORSEMENTS ({{ endorLenght }})</a>
								</li>
								<li class="nav-item">
									<a class="nav-link disabled" href="#backers" role="tab">DONATORS ({{ numDonator }})</a>
								</li>
							</ul>
							<br />
							<br />
							<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
							<!-- Tab panes -->
							<div class="tab-content">
								<div class="tab-pane active" id="home" role="tabpanel" aria-expanded="true">
									<!-- <p>
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
										tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. </p> -->
									<h6 style="line-height: 150%;">{{story|capitalize}}</h6>
								</div>
								<!-- UPDATE CORNER -->
								<!-- <div class="tab-pane" id="updates" role="tabpanel" aria-expanded="false">
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
	
								</div> -->
								<div class="tab-pane" id="comments" role="tabpanel" aria-expanded="false">
									<ul class="comment-section mt-0">
										<li v-for="user in users " class="comment user-comment">
											<!-- <div class="info"> -->
											<h6 href="#" class="float-left">
												<strong>{{ user.username|capitalize }}</strong>
											</h6>
											<!-- <span>4 hours ago</span> -->
											<!-- </div> -->
											<a class="avatar" href="#">
												<!-- <img src="images/team/pixeliris.jpg" width="35" alt="Profile Avatar" title="Anie Silverston">  -->
											</a>
											<p class="float-right">{{ user.endorsement|capitalize}}</p>
										</li>
										<li class="write-new">
											<form v-on:submit="post_endorsme">
												<!-- <div class="row">
												<div class="col-md-6 mb-6">
													<label for="">Full name: </label>
													<input type="text" v-model="fullname" class="form-control" id="fn" placeholder="Full name"
													required> </div>
												<div class="col-md-6 mb-6">
													<label for="">Email: </label>
													<input type="text" v-model="email" class="form-control" id="emailEnd" placeholder="email" required> </div>
											</div> -->
												<br>
												<!-- <br> -->
												<!-- <div class="row"> -->
												<h4>Show your support for this campaign by endorsing it and sharing why!</h4>
												<textarea v-model="message" placeholder="Write your comment here"
												name="comment"></textarea>
												<!-- </div> -->
												<div>
													<!-- <img src="images/team/commadelimited.jpg" width="35" alt="Profile of Bradley Jones" title="Bradley Jones"> -->
													<button v-if="tokken" type="submit" @click.prevent="post_endorsme" class="btn btn-pri">ENDORSE</button>
													<a v-else class="btn btn-pri" href="/login">Login to Endorse</a>
													<!-- <button  class="btn btn-pri"><router-link >Login to Endorse</button> -->
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
														<img ref="candidate_img2" :src="image" class="img-fluid rounded-circle " /> </a>
													<br />
													<br /> </div>
												<div class="col-sm-7 ">
													<!-- WORK ON THIS LATER -->
													<h3 class="mb-0 ">
														<strong>{{firstname|capitalize}}  {{' '}} {{lastname|capitalize }}</strong>
													</h3>
													<h4 class="mt-0 mb-0 ">{{ city }}, {{ state }}</h4>
													<p class="mt-0 mb-0 ">OFFICE:
														<strong>{{ position }}</strong>
													</p>
													<br />
													<br /> </div>
											</div>
											<a href="#" data-toggle="modal" data-target="#donationbox" class="btn btn-lg btn-pri btn-block ">Support this campaign</a>
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
									<div class="card-header text-center" role="tab " id="heading2 ">
										<h6 class="mb-0 ">
											<a v-on:click="showModal('5000',$event)" data-toggle="modal" data-target="#exampleModalLong" href="#"  value="5000"> Donante &#8358;5000 </a>
										</h6>
									</div>
								</div>
								<div class="card ">
									<div class="card-header text-center" role="tab " id="heading3 ">
										<h6 class="mb-0 ">
											<a v-on:click="showModal('10000',$event)" data-toggle="modal" data-target="#exampleModalLong" href="#" value="10000"> Donate &#8358;10,000 </a>
										</h6>
									</div>
								</div>
								<div class="card ">
									<div class="card-header text-center " role="tab " id="heading4 ">
										<h6 class="mb-0 ">
											<a v-on:click="showModal('20000',$event)" data-toggle="modal" data-target="#exampleModalLong" href="#"> Donate &#8358;20,000 </a>
										</h6>
									</div>
								</div>
								<div class="card ">
									<div class="card-header text-center " role="tab " id="heading5 ">
										<h6 class="mb-0 ">
											<a v-on:click="showModal('50000',$event)" data-toggle="modal" data-target="#exampleModalLong" href="#"> Donate &#8358;50,000 </a>
										</h6>
									</div>
								</div>
								<div class="card ">
									<div class="card-header text-center " role="tab " id="heading6 ">
										<h6 class="mb-0 ">
											<a v-on:click="showModal('100000',$event)" data-toggle="modal" data-target="#exampleModalLong" href="#"> Donate &#8358;100,000 </a>
										</h6>
									</div>
								</div>
								<div class="card ">
									<div class="card-header  text-center" role="tab " id="heading7 ">
										<h6 class="mb-0 ">
											<a v-on:click="showModal('200000',$event)" data-toggle="modal" data-target="#exampleModalLong" href="#"> Donate &#8358;200,000 </a>
										</h6>
									</div>
								</div>
								<div class="card ">
									<div class="card-header  text-center" role="tab " id="heading7 ">
										<h6 class="mb-0 ">
											<a v-on:click="showModal('500000',$event)" data-toggle="modal" data-target="#exampleModalLong" href="#"> Donate &#8358;500,000 </a>
										</h6>
									</div>
								</div>
								<div class="card ">
									<div class="card-header text-center" role="tab " id="heading8 ">
										<h6 class="mb-0 ">
											<a v-on:click="showModal('1000000',$event)" data-toggle="modal" data-target="#exampleModalLong" href="#" value="1000000"> Donate &#8358;1,000,000 </a>
										</h6>
									</div>
								</div>
								<div class="card ">
									<div class="card-header text-center" role="tab " id="heading9 ">
										<h6 class="mb-0 ">
											<a data-toggle="modal" data-target="#donationbox" href="#"> Others </a>
										</h6>
									</div>
								</div>
								<br>
								<br>
								<div class="card ">
									<div class="card-header text-center" role="tab " id="heading1 ">
										<h6 class="mb-0 ">
											<a data-toggle="collapse " data-parent="#accordion " href="#collapse1 " aria-expanded="true " aria-controls="collapse1 ">
											Donators ({{ numDonator }}) </a>
										</h6>
									</div>
									<div id="collapse1 " class="collapse show " role="tabpanel " aria-labelledby="heading1 ">
										<div class="card-block ">
											<!-- <h5>
												<strong>SuperBox Receiver</strong>
											</h5> -->
											<div v-for="donator in donators">
												<!-- LOOP FROM HERE -->
												<div class="clearfix">
													<div class="pull-left donation-list-left">
														<h4 class="header-label m-none"> {{ donator.donator|capitalize }} </h4>
														<!-- <p class="label-small m-none">1 day ago</p> -->
													</div>
													<div class="pull-right align-right">
														<h4 class="header-label no-margin recent-donate-amount">&#8358;{{ donator.fund }}</h4>
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
		<!-- DONATION MODAL -->
		<div class="modal fade centered-modal" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
		aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" style="max-width: 50%;">
				<div class="modal-content">
					<div class="modal-header" style="margin: 0 auto">
						<h3 class="text-center" style="margin-top: 20px;margin-bottom: 10px;font-family: inherit;font-weight: 500;line-height: 1.1;color: inherit;">Donate to
							<span style="display: inline-block;">
								<!-- <a href="index"> {{ alias|capitalize }} </a> -->
								<a href="index"> {{firstname|capitalize}}  {{' '}} {{lastname|capitalize }} </a>
								
							</span>
						</h3>
					</div>
					<div class="modal-body">
						<form v-on:submit="addDonation" style="padding: 30px">
							<div class="form-group">
								<div class="row">
									<div class="col-6">
										<!-- Alias Frist and last name row -->
										<label for="">Full name</label>
										<input type="text" v-model="userFullname" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="Full Name" readonly>
										<div class="form-element span12 ">
											<label class="checkbox-public label-extrasmall m-medium m-top-tiny">
												<input type="checkbox" v-model="toggle" @click="check($event)" true-value="yes" false-value="no" name="public"
												value="1">Do not show my name in "Donators box" </label>
										</div>
									</div>
									<div class="col-6">
										<label for="">Email</label>
										<input type="email" v-model="userEmail" class="form-control form-control-lg" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Enter email" readonly> </div>
									<!--  -->
									<!--  -->
								</div>
							</div>
							<div class="form-group">
								<div class="row">
									<div class="col-12">
										<label for="">Street Address</label>
										<input type="text" v-model="userAddress" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="Address"> </div>	
								</div>
							</div>
							<div class="form-group">
								<div class="row">
									<div class="col-6">
										<label for="">City</label>
										<input type="text" v-model="userCity" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="City"> </div>
									<div class="col-3">
										<label for="">State</label>
										<input type="text" v-model="userState" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="State"> </div>
									<div class="col-3">
										<label for="">Donation Amount (&#8358;)</label>
										<input type="text" v-model="userFund" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="Amount" readonly="readonly"> </div>
								</div>
							</div>
							<div class="form-group">
								<div class="row">
									<div class="col-6">
										<label for="">Credit card number</label>
										<input type="text" v-model="userCCN" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="CCN"> </div>
									<div class="col-3">
										<label for="">CSC</label>
										<input type="text" v-model="userCSC" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="CSC"> </div>
									<div class="col-3">
										<label for="">Expiration</label>
										<input type="text" v-model="userExpir" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="EXP"> </div>
								</div>
							</div>
							<div class="form-group">
								<div class="row">
									<div class="col-12">
										<label for="">Occupation</label>
										<input type="text" v-model="userOccupation" class="form-control form-control-lg" id="exampleInputFirstname"
										placeholder="Occupation"> </div>
								</div>
							</div>
							<br>
							<!-- <div class="form-group checkbox checkbox-primary">
								<input type="checkbox"> Remember Me </div> -->
							<div class="form-group mx-auto">
								<div class="row">
									<div class="col-12 d-flex justify-content-center">
										<button v-if="userFullname" type="submit" v-on:click="addDonation" value="donate" name="donate" class="btn btn-block btn-lg btn-donate"
										style="">Donate</button>
										<a v-else class="btn btn-pri" href="/login">Login to Donate</a>
										<!-- <button v-else type="submit" v-on:click="addDonation" value="donate" name="donate" class="btn btn-block btn-lg btn-donate"
										style="">Donate</button> -->
									</div>
								</div>
							</div>
						</form>
					</div>
					<!-- <div>
						<p class="form-footer text-center">Don't have an account?
							<span>
								<a href="/join">Register Here </a>
							</span>
						</p>
					</div> --></div>
			</div>
		</div>
		<!-- DONATION MODAL ENDS-->
		<!--  -->
		<!-- SELECT AMOUNT MODAL -->
		<div class="modal fade centered-modal" id="donationbox" tabindex="-1" role="dialog" aria-labelledby="donationbox" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" style="max-width: 50%;">
				<div class="modal-content">
					<div class="modal-header modal-header2" style="margin: 0 auto">
						<!-- <div class="row"> -->
						<h3 class="text-center" style="margin-top: 20px;margin-bottom: 10px;font-family: inherit;font-weight: 500;line-height: 1.1;color: inherit;">Donate to
							<span style="display: inline-block;">
								<a href="index"> {{ alias }} </a>
							</span>
						</h3>
						<!-- <br> -->
						<!-- </div> -->
					</div>
					<div class="text-center">Choose an amount to donate
						<hr style="width:100%; border-color:#000;"> </div>
					<div class="modal-body">
						<div class="row justify-content-center">
							<div class="col-3">
								<a v-on:click="showModal('7000',$event)" data-amount="$3" href="#" data-dismiss="modal" data-toggle="modal" data-target="#donationbox,#exampleModalLong"
								class=" btn-contribute-amount js-btn-contribute-amount btn btn-block btn-large donate-amount-3">₦7000</a>
							</div>
							<div class="col-3">
								<a v-on:click="showModal('15000',$event)" data-amount="$3" href="#" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong" class=" btn-contribute-amount js-btn-contribute-amount btn btn-block btn-large donate-amount-3">₦15,000</a>
							</div>
							<div class="col-3">
								<a v-on:click="showModal('30000',$event)" data-amount="$3" href="#" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong" class=" btn-contribute-amount js-btn-contribute-amount btn btn-block btn-large donate-amount-3">₦30,000</a>
							</div>
						</div>
						<br>
						<br>
						<div class="row justify-content-center">
							<div class="col-3">
								<a v-on:click="showModal('70000',$event)"  href="#" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong" class=" btn-contribute-amount js-btn-contribute-amount btn btn-block btn-large donate-amount-3">₦70,000</a>
							</div>
							<div class="col-3">
								<a v-on:click="showModal('150000',$event)"  href="#" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong" class=" btn-contribute-amount js-btn-contribute-amount btn btn-block btn-large donate-amount-3">₦150,000</a>
							</div>
							<div class="col-3">
								<a v-on:click="showModal('1000000',$event)"  href="#" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong" class=" btn-contribute-amount js-btn-contribute-amount btn btn-block btn-large donate-amount-3">₦1,000,000</a>
							</div>
						</div>
						<br>
						<br>
						<div class="row text-center">
							<div class="col-12 text-center">
								<label>
									Enter Amount: </label>
								<input class="amt" v-model="userFund"  type="text" placeholder="amount here">  
								<button class="btn-sub" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong">Submit</button>
								</div>
						</div>
						<br> </div>
				</div>
			</div>
		</div>
		<!-- SELECT AMOUNT MODAL ENDS-->
		<!--  -->
	</div>
</template>
<script>
export default {
  name: "Login",
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
      api:
        "https://onepercent-crowdfund.herokuapp.com/aspirants/5a932b6e875f590014c49814",
      items: [],
      candidate_ID: "",
      fullname: "",
      message: "",
      api_endrosment: "https://onepercent-crowdfund.herokuapp.com/endorsements",
      endorse_data: {},
      users: [],
      endorLenght: "",
      tokken: "",
      userAddress: "",
      userFund: "",
      userOccupation: "",
      userExpir: "",
      userCSC: "",
      userCCN: "",
      userState: "",
      userCity: "",
      donators: [],
      numDonator: 0,
      perNum: 0,
      tAmount: "",
      toggle: false,
      userFullname: ""
    };
  },
  methods: {
    post_endorsme() {
      this.endorse_data = {
        voter_id: localStorage.getItem("id"),
        id: this.candidate_ID,
        message: this.message,
        username: localStorage.getItem("fullname")
      };
      console.log(this.endorse_data);
      this.axios.post(this.api_endrosment, this.endorse_data).then(
        response => {
          console.log(response.data);
          this.get_endorsme();
        },
        function(err) {
          console.log("ERROR!");
          console.log(err);
        }
      );
      this.message = "";
    },
    get_endorsme() {
      this.get_endorsme_api =
        "https://onepercent-crowdfund.herokuapp.com/endorsements/all/" +
        this.candidate_ID;
      this.axios.get(this.get_endorsme_api).then(response => {
        this.users = response.data.endorsement.slice().reverse();
        this.endorLenght = this.users.length;
      });
    },
    addDonation(e) {
      this.candidate_ID = window.location.pathname.split("/")[2];
      this.tokken = localStorage.getItem("token");
      this.userID = localStorage.getItem("id");
      this.dataDonate = {
        donator: this.userFullname,
        id: this.candidate_ID,
        address: this.userAddress,
        aspirant: this.alias,
        fund: this.userFund,
        expected_fund: this.fund,
        ocupation: this.userOccupation,
        email: this.userEmail,
        card_details: [
          {
            card_type: "VERVE"
          }
        ]
      };
      this.axios
        .post(
          "https://onepercent-crowdfund.herokuapp.com/donations",
          this.dataDonate
        )
        .then(response => {
          if (response.data.responseCode == "00") {
            console.log(response);
            window.location = "/aspirant/" + this.candidate_ID;
          } else if (response.data.responseCode == "03") {
            console.log(response);
          } else {
            console.log(response);
          }
        })
        .catch(error => {
          console.log(response);
        });
      e.preventDefault();
    },
    comPer() {
      this.perNum = parseInt(
        parseInt(this.tAmount) / parseInt(this.fund) * 100
      );
      this.$refs.perpro.style.width =
        String(parseInt(parseInt(this.tAmount) / parseInt(this.fund) * 100)) +
        "%";
    },
    somefunction() {
      console.log("chehck box xhekx");
    },
    check(e) {
      if (e.target.checked) {
        console.log(e.target.value);
        this.userFullname = "Anonymous";
        this.userEmail = "Anonymous";
      } else {
        this.userFullname =
          localStorage
            .getItem("fullname")
            .charAt(0)
            .toUpperCase() + localStorage.getItem("fullname").slice(1);
        this.userEmail = localStorage.getItem("email");
      }
    },

    dntcheck(e) {
      // console.log(this.$refs.btndnt.attributes['value'].value);
      console.log(this.$refs.btndnt);
    },

    showModal(text, event) {
      console.log(text, event.target.id);
      this.userFund = text;
    }
  },
  computed: {
    reverseItems() {
      return this.items.slice().reverse();
    }
  },
  watch: {},
  mounted() {
    this.api =
      "https://onepercent-crowdfund.herokuapp.com/aspirants/" +
      this.candidate_ID;
    this.axios.get(this.api).then(response => {
      this.item = response.data.aspirant;
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
      this.state = this.item.state;
      this.story = this.item.story;
      this.updated = this.item.updated;
      this.user_id = this.item.user_id;
      this.vision = this.item.vision;
      this._id = this.item._id;
    });
    this.get_endorsme();
    this.axios
      .get(
        "https://onepercent-crowdfund.herokuapp.com/donations/all/" +
          this.candidate_ID
      )
      .then(response => {
        this.donators = response.data.donation;
        this.tAmount = response.data.total;
        this.numDonator = response.data.donation.length;
        this.comPer();
      });
  },
  created() {
    this.candidate_ID = window.location.pathname.split("/")[2];
    this.tokken = localStorage.getItem("token");
    this.userFullname =
      localStorage
        .getItem("fullname")
        .charAt(0)
        .toUpperCase() + localStorage.getItem("fullname").slice(1);
    this.userEmail = localStorage.getItem("email");
    this.userID = localStorage.getItem("id");
  }
};
</script>
<style>
.campImg {
  height: 350px;
  width: 100%;
  background-color: powderblue;
}

.campImg > img {
  width: 100%;
  height: 100%;
}

.card {
  border: 1px solid rgb(254, 205, 11);
}

.card-header {
  background-color: #ffffff;
  border-bottom: none;
  color: green;
}

.card-header:hover {
  background-color: #006600;
  border-bottom: none;
  color: rgb(254, 205, 11);
}

a:focus,
a:hover {
  color: rgb(254, 205, 11);
  text-decoration: underline;
}

hr {
  border-color: rgb(254, 205, 11);
}

.btn-pri {
  color: rgb(254, 205, 11);
  background-color: #006600;
  border-color: rgb(254, 205, 11) !important;
}

.btn-pri:hover {
  background-color: rgb(254, 205, 11);
  color: #006600;
  border-color: #006600 !important;
}

.progress {
  background-color: #ffe795;
}

.progress-bar {
  background-color: #006600;
}

.nav-tabs {
  border-bottom: 1px solid #ffe795;
}

.img-thumbnail {
  border-color: #ffe795;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #006600;
  background-color: #fff;
  border-color: #ffe795 #ffe795 #fff;
}

.nav-tabs > li > a {
  color: #818a91;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  border-color: #ffe795 #ffe795 #ffe795;
}

.btn-donate {
  width: 50%;
  color: rgb(254, 205, 11);
  background-color: #006600;
}

.btn-donate:hover {
  color: #006600;
  background-color: rgb(254, 205, 11);
}

.centered-modal .modal-dialog {
  /* top: 30%;
  margin: 0 auto; */
}

.donate-amount-3 {
  border-color: #ff4814;
  border-radius: 0;
  width: 70%;
  padding: 1.5rem;
  background-color: #ffffff;
  color: green;
}

.donate-amount-3:hover {
  border-radius: 0;
  width: 70%;
  padding: 1.5rem;
  background-color: #006600;
  color: rgb(254, 205, 11);
}

.modal-header2 {
  border-bottom: none;
}

.amt {
  outline: none;
  font-size: 16px;
  height: 2.5rem;
  padding: 10px;
  width: 15%;
}

.btn-sub {
  color: rgb(254, 205, 11);
  background-color: #006600;
  border-color: #006600 !important;
}

.btn-sub:hover {
  background-color: rgb(254, 205, 11);
  color: #006600;
  border-color: #006600 !important;
}

</style>