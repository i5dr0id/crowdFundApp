<template>
  <div id="register">
      <div class="register-div">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="margin: 0 auto">
          <h3 class="text-center">Sign Up to
            <span style="display: inline-block;">
              <a href="index"> CrowdFunApp </a>
            </span>
          </h3>
        </div>
        <div class="modal-body">
          <form v-on:submit="btnRegister">
            <div class="form-group">
              <input v-model="register.fullname" type="text" name="fullname" class="form-control input-lg" placeholder="FullName" autocomplete="off"> </div>
            <div class="form-group">
              <input v-model="register.username" type="text" name="username" class="form-control input-lg" placeholder="Username" autocomplete="off"> </div>
            <div class="form-group">
              <input v-model="register.email" type="text" name="email" class="form-control input-lg" placeholder="Email" autocomplete="off"> </div>
            <div class="form-group">
              <input v-model="register.password" type="password" name="password" class="form-control input-lg" placeholder="Password" autocomplete="off"> </div>
              <br>
              <div class="form-group checkbox checkbox-primary">
                <input type="checkbox"> I accept
                <span>
                  <a href="#"> Terms and Conditions </a>
                </span>
              </div>
              <div class="form-group">
                <button type="submit" value="register" name="register" class="btn btn-block btn-lg btn-pri" @click.prevent="btnRegister">REGISTER</button>
              </div>
              <p style="text-align:center"><i class="fa fa-spinner fa-spin" v-show="loading" style="font-size:60px;"></i></p>
          </form>
          </div>
        </div>
        <div>
          <p class="form-footer">Already have an account?
            <span>
              <a href="/login">Sign In</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      api: 'https://onepercent-crowdfund.herokuapp.com/users/',
      loading:false,
      register: {
        username: '',
        password: '',
        fullname: '',
        email: ''
      }
    }
  },
  methods: {
    btnRegister(e) {
		  console.log(this.register.username);
		  console.log(this.register.password);
		  console.log(this.register.fullname);
		  console.log(this.register.email);
			if(this.register.username == "" || this.register.password == "" || this.register.fullname == "" || this.register.email == "" ){
        swal("Please fill all fields","","error");
				return;
		  }
		  this.loading = true;
		  this.axios.post(this.api,this.register).then((response) => {
				this.loading = false;
			  console.log(response.data);
				if (response.data.responseCode == "00") {
						console.log("LOGIN SUCESSESFUL");
					 swal("Registration Successful. Please Go to your mail and Activate this account","","success")
					}else if(response.data.responseCode == "02"){
							swal("User already exists","","error")
					}else{
              console.log(response.data.responseCode);
							swal("Error adding User","","error")
				}
				 this.emptyFields();
			  })
		  e.preventDefault();
	  },
		emptyFields(){
			this.register.username = "";
			this.register.password = "";
			this.register.fullname = "";
			this.register.email = "";
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
.modal-dialog {
  max-width: 400px;
  margin-top: 3rem;
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
