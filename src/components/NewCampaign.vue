<template>
	<div id="campaigns" class="container">
		<div class="main container">
			<h1 class="page-header text-center"> Create New Campaign </h1>
			<!-- <h4 class="text-center"> Create a campaign for yourself or your candidate</h4> -->
			<div>
				<form v-on:submit="addCampaign">
					<!-- First name Last Name -->
					<div class="card card-body bg-light ">
						<h4>Basic Info</h4>
						<br>
						<div class="form-group light-blue light-green">
							<div class="row">
								<div class="col-6">
									<!-- Alias Frist and last name row -->
									<label for="">First name</label>
									<input type="text" v-model="fname" class="form-control form-control-lg" id="exampleInputFirstname"
									placeholder="First name"> </div>
								<div class="col-6">
									<label for="">Last name</label>
									<input type="text" v-model="lname" class="form-control form-control-lg" id="exampleInputLastname"
									placeholder="Last name"> </div>
								<!--  -->
								<!--  -->
							</div>
							<br>
							<br>
							<div class="row">
								<div class="col-6">
									<!-- Alias Email row -->
									<label for="">Alias</label>
									<input type="text" v-model="alias" class="form-control form-control-lg" id="exampleInputFirstname"
									placeholder="alias"> </div>
								<div class="col-6">
									<label for="">Email</label>
									<input type="email" v-model="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"
									placeholder="Enter email"> </div>
							</div>
							<!--  -->
							<!--  -->
							<br>
							<br>
							<!-- Gender Political row -->
							<!-- <div class="card card-body"> -->
							<div class="row">
								<div class="form-group col-md-6">
									<label for="inputGender">Gender</label>
									<select id="inputGender" v-model="gender" class="form-control">
										<option>Male</option>
										<option>Female</option>
									</select>
								</div>
								<div class="form-group col-md-6">
									<label for="inputAddress">Address</label>
									<input type="text" class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor"> </div>
							</div>
						</div>
						<!-- </div> -->
					</div>
					<!-- SOCIAL -->
					<div class="card card-body bg-light">
						<h4>Social Info</h4>
						<br>
						<div class="form-group light-blue light-green">
							<div class="row">
								<div class="col-md-6 mb-6">
									<label for="">Facebook</label>
									<input type="text" v-model="facebook" class="form-control" id="fbL" placeholder="http://www.facebook.com/candidate"
									required> </div>
								<div class="col-md-6 mb-6">
									<label for="">Twitter</label>
									<input type="text" v-model="twitter" class="form-control" id="twL" placeholder="http://www.twitter.com/candidate"
									required> </div>
							</div>
							<div class="row">
								<div class="col-md-6 mb-6">
									<label for="">Website</label>
									<input type="text" v-model="website" class="form-control" id="web" placeholder="http://www.example.com"
									required> </div>
							</div>
						</div>
					</div>
					<!-- SOCIAL -->
					<!-- Campaign	 -->
					<div class="card card-body bg-light">
						<h4> Campaign Info </h4>
						<br>
						<div class="form-group light-blue light-green">
							<div class="row">
								<div class="col-md-6 mb-6">
									<label for="">State</label>
									<input type="text" v-model="state" class="form-control" id="st" placeholder="State" required> </div>
								<div class="col-md-6 mb-6">
									<label for="">City</label>
									<input type="text" v-model="city" class="form-control" id="ct" placeholder="City" required> </div>
							</div>
							<br>
							<div class="row">
								<div class="col-md-6 mb-6">
									<label for="">Political Party</label>
									<input type="text" v-model="polparty" class="form-control" id="pp" placeholder="Political party"
									required> </div>
								<div class="col-md-6 mb-6">
									<label for="">Position/Office</label>
									<input type="text" v-model="office" class="form-control" id="rf" placeholder="Running for"
									required> </div>
							</div>
							<br>
							<label for="amount">Fundraising Goal</label>
							<div class="row">
								<div class="input-group col-md-6">
									<span class="input-group-addon">$</span>
									<input type="text" v-model="fund" id="amount" class="form-control" aria-label="Amount (to the nearest dollar)">
									<span class="input-group-addon">.00</span>
								</div>
								<div class="col-md-6 mb-6">
									<label for="">Video</label>
									<input type="text" v-model="video" class="form-control" id="yt" placeholder="https://www.youtube.com/watch?"
									required> </div>
							</div>
						</div>
					</div>
					<!-- TEXTAREA  -->
					<div class="card card-body bg-light">
						<h4> More Info</h4>
						<br>
						<div class="form-group light-blue light-green">
							<div class="row">
								<div class="col-md-6 mb-6">
									<label for="">Vision</label>
									<textarea class="form-control" v-model="vision" id="vision" rows="3"></textarea>
									<!-- <input type="text" v-model="vision" class="form-control" id="pp" placeholder=""  required> -->
								</div>
								<div class="col-md-6 mb-6">
									<label for="">Mission</label>
									<textarea class="form-control" v-model="mission" id="mission" rows="3"></textarea>
									<!-- <input type="text" v-model="mission" class="form-control" id="rf" placeholder="" required> -->
								</div>
							</div>
							<br>
							<div class="row">
								<div class="col-md-12 mb-12">
									<label for="">Story</label>
									<!-- <textarea class="ckeditor" v-model="story" @input="onInput()" id="story" rows="10"></textarea> -->
									<textarea class="form-control" v-model="story" id="story" rows="10"></textarea>
									<!-- <h1>WHO IS THIS</h1>
								<div v-html="story"> {{ story }} </div> -->
								</div>
							</div>
						</div>
					</div>
					<div class="card card-body bg-light">
						<h4>Upload Photo</h4>
						<br>
						<div class="form-group light-blue light-green">
							<div class="card-picture card-body ">
								<div class="row">
									<div class="card-picture thumbnail">
										<img ref="camimg" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
										id="img-preview" class="img-thumbnail" />
										<label class="file-upload-container" for="file-upload">
											<input v-on:change="uploadFile" id="file-upload" type="file" style="display:none;" accept=".png, .jpg, .jpeg"> Select an Image </label>
									</div>
								</div>
							</div>
							<!--  -->
						</div>
					</div>
					<!--  -->
					<!--  -->
					<!-- <el-button :plain="true" @click="open">Show message</el-button>
					 <el-button type="primary">Primary</el-button> -->
					<!--  -->
					<!--  -->
					<button type="submit" v-on:click="addCampaign" class="btn btn-success ">CREATE</button>
					<p style="text-align:center">
						<i class="fa fa-spinner fa-spin" v-show="loading" style="font-size:60px;"></i>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "createCam",
		data() {
			return {
				id: '',
				content: '',
				fname: '',
				lname: '',
				alias: '',
				email: '',
				gender: '',
				address: '',
				twitter: '',
				facebook: '',
				website: '',
				state: '',
				city: '',
				polparty: '',
				office: '',
				fund: '',
				video: '',
				story: '',
				image: '',
				vision: '',
				mission: '',
				camData: {},
				imgFile: "",
				customer: {},
				cloudinary_url: "https://api.cloudinary.com/v1_1/dmdvs9djh/upload/",
				cloudinary_upload_preset: "kn1frgui",
				loading: false
				// fD: {}
			};
		},
		methods: {
			open() {
				this.$message('This is a message.');
			},
			// console.log(),
			onInput(e) {
				console.log(this.story);
			},
			addCampaign(e) {
				// console.log('CREATE CLICKED');
				this.id = localStorage.getItem("id");
				// console.log(localStorage.getItem("id"))
				this.dataCam = {
					'id': this.id,
					'story': this.story,
					'firstname': this.fname,
					'lastname': this.lname,
					'email': this.email,
					'gender': this.gender,
					'state': this.state,
					'city': this.city,
					'social': [this.facebook, this.twitter],
					'vision': this.vision,
					'video': this.video,
					'alias': this.alias,
					'party': this.polparty,
					'fund': this.fund,
					'image': this.image,
					'position': this.office
				}
				if (this.email == "" || this.story == "" || this.fname == "" || this.lname == "" || this.gender == "" || this.city ==
					"" || this.state == "" || this.facebook == "" || this.twitter == "" || this.vision == "" || this.video == "" ||
					this.alias == "" || this.polparty == "" || this.fund == "" || this.image == "" || this.position == "") {
					swal("Please fill all fields", "", "error");
					return;
				}
				this.loading = true;
				this.axios.post('https://onepercent-crowdfund.herokuapp.com/aspirants', this.dataCam).then(response => {
					//   console.log(response.data)
					this.loading = false;
					if (response.data.responseCode == "00") {
						swal("Successfully added a new campaign", "", "success");
						this.$router.push('/campaign');
					} else if (response.data.responseCode == "03") {
						swal("Campaign exists already", "", "error");
					} else {
						swal("Error adding campaign", "", "error");
					}
				}).catch(error => {
					this.loading = false;
					//   console.log(error)
					swal("Adding new campaign failed. Please check your network", "", "error")
				});
				e.preventDefault();
			},
			uploadFile(file) {
				this.imgFile = file.target.files[0];
				let fD = new FormData();
				fD.append("file", this.imgFile);
				fD.append("upload_preset", this.cloudinary_upload_preset);
				const config = {
					headers: {
						"X-Requested-With": "XMLHttpRequest"
					},
					// onUploadProgress
				};
				this.axios.post(this.cloudinary_url, fD, config).then(response => {
					this.image = response.data.secure_url;
					this.$refs.camimg.src = response.data.secure_url;
				}, error => {
					  console.log("ERRORRORORORORO");
					  console.log(error);
				});
			}
		},
		mounted() {
			// console.log(localStorage.getItem("id"))
			// console.log(this.story);
		}
	};
</script>
<style scoped>
	.main {
		/* padding-top: 4%; */
	}

	#campaigns {
		/* padding-top: 10%;
    padding-bottom: 10%; */
		/* background-color: #787878; */
	}

	.card {
		margin-bottom: 20px;
	}

	.page-header {
		border-bottom: 1px solid #eee;
		padding-bottom: 9px;
		margin: 40px 0 20px;
	}

	.btn-success {
		background-color: #28a745;
	}

	.card-picture {
		/* background: white; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; */
	}

	.file-upload-container {
		width: 100%;
		height: 50px;
		overflow: hidden;
		background: #3f51b5;
		user-select: none;
		transition: all 150ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
		text-align: center;
		color: white;
		line-height: 50px;
		font-weight: 300;
		font-size: 20px;
	}

	.file-upload-container:hover {
		cursor: pointer;
		background: #3949ab;
	}

	.thumbnail img {
		height: 370px;
		width: 370px;
	}

	#amount {
		font-size: 50px;
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border: none;
		border-radius: 0.25rem;
	}

	img {
		min-height: auto;
	}

	.img-thumbnail {
		background-color: transparent;
		border: none;
	}

	/*  */

	/*  */

	/*  */

	/*  */

	.avatar-upload {
		position: relative;
		max-width: 205px;
		margin: 50px auto;
		.avatar-edit {
			position: absolute;
			right: 12px;
			z-index: 1;
			top: 10px;
			input {
				display: none;
				+label {
					display: inline-block;
					width: 34px;
					height: 34px;
					margin-bottom: 0;
					border-radius: 100%;
					background: #FFFFFF;
					border: 1px solid transparent;
					box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
					cursor: pointer;
					font-weight: normal;
					transition: all .2s ease-in-out;
					&:hover {
						background: #f1f1f1;
						border-color: #d6d6d6;
					}
					&:after {
						content: "\f040";
						font-family: 'FontAwesome';
						color: #757575;
						position: absolute;
						top: 10px;
						left: 0;
						right: 0;
						text-align: center;
						margin: auto;
					}
				}
			}
		}
		.avatar-preview {
			width: 192px;
			height: 192px;
			position: relative;
			border-radius: 100%;
			border: 6px solid #F8F8F8;
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
		}
		.avatar-preview>div {
			width: 100%;
			height: 100%;
			border-radius: 100%;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
	}

	.light-green {
    background-color: #e6fde6;
}
</style>