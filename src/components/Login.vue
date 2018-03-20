<template>
  <div id="login">
    <div class="login-div">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="margin: 0 auto">
					<h3 class="text-center">Sign In to
						<span style="display: inline-block;">
							<a href="index"> CrowdFundApp </a>
						</span>
					</h3>
				</div>
				<div class="modal-body">
					<form v-on:submit="btnLogin">
						<div class="form-group">
							<input v-model="login.username" type="text" name="username" class="form-control input-lg" placeholder="username" autocomplete="off"> </div>
						<div class="form-group">
							<input v-model="login.password" type="password" name="password" class="form-control input-lg" placeholder="Password" autocomplete="off"> </div>
						<br>
						<div class="form-group checkbox checkbox-primary">
							<input type="checkbox"> Remember Me </div>
						<div class="form-group">
							<button type="submit" value="login" name="login" class="btn btn-block btn-lg btn-pri" @click.prevent="btnLogin">Login</button>
						</div>
							 <p style="text-align:center"><i class="fa fa-spinner fa-spin" v-show="loading" style="font-size:60px;"></i></p>
					</form>
				</div>
				<div>
					<p class="form-footer">Don't have an account?
						<span>
							<a href="/register">Register Here </a>
						</span>
					</p>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
	  return {
		  login: {
			  username: '',
			  password: ''
		  },
		  api: "https://onepercent-crowdfund.herokuapp.com/users/authenticate",
		  loading:false
	  }
  },
  methods: {
	   btnLogin(e) {
		  if(this.login.username == "" || this.login.password == ""){
             swal("Please fill all fields","","error");
			 return;
		  }
		  this.loading = true;
		  this.axios.post(this.api,this.login).then((response) => {
			  console.log(response.data);
			  this.loading = false;
			  if (response.data.responseCode == "00") {
				    swal("Authentication Successful !!!","","success")
					localStorage.setItem("id", response.data.user._id);
					localStorage.setItem("token", response.data.token);
					localStorage.setItem("username", response.data.user.username);
					localStorage.setItem("email", response.data.user.email);
					localStorage.setItem("fullname", response.data.user.fullname);
					Event.$emit('loggedIn', response.data.user.username);
					this.$router.push('/');
			  }else if(response.data.responseCode == "02"){
				   swal("Authentication failed. User not found","","error")
				   console.log('Authentication failed. User not found')
			  }else if(response.data.responseCode == "05"){
				  swal("Authentication failed. You need to verify your mail","","error")
				  console.log('Authentication failed. You need to verify your mail')
			  }else {
				  console.log('Authentication failed. Password not found')
				  swal("Authentication failed. Password not found","","error")
			  }
			  
		  },(err) => {
			  this.loading = false;
			  console.log(err)
			  swal("Authentication failed. Please check your network","","error")
		  });
		  e.preventDefault();
	  }
  }
};
</script>

<style>
* {		
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	}

	body {
		/* background-color: #563d7c; */
	}

	.login-div {
		/* padding-top: 3%; */
	}

	.modal-dialog {
		max-width: 400px;
		margin-top: 5rem;
	}

	.modal-content {
		box-shadow: 0 3px 9px #ddd;
		border: 1px solid #ddd;
	}

	.form-footer {
		text-align: center;
		margin-top: 2rem;
	}

	button {
		color: #fff;
		background-color: #05296b;
	}

	.modal-header {
		border: none;
	}

	h3 {
		font-size: 24px;
		margin-top: 20px;
		margin-bottom: 10px;
		font-family: inherit;
		font-weight: 500;
		line-height: 1.1;
		color: inherit;
	}

	input[type="text"],
	input[type="password"] {
		outline: none;
		font-size: 16px;
		height: 3.5rem;
	}

	.btn-pri{
	color : rgb(254,205,11);
	background-color:  #006600;
		border-color:  rgb(254,205,11)!important;
}

.btn-pri:hover{
	background-color: rgb(254,205,11);
	color : #006600;
		border-color:  #006600!important;
}
</style>
