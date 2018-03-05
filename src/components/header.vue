<template>
<div>
  <nav class="navbar navbar-toggleable-sm navbar-light bg-primary fixed-top" id="navbar" v-cloak>
		<div class="container top-nav">
			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
			    aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<a class="navbar-brand" href="/index">CrowdFundApp</a>
			<div class="collapse navbar-collapse" id="navbarColor01">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="/index">Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/explore">Explore</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/add">Start a project</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/about"><router-link>
            </router-link> About us</a>
					</li>
				</ul>

				<!-- LOGGED IN USER NAV -->
				<ul class="navbar-nav" v-if="username">
					<li class="nav-item">
						<a class="nav-link" href="/campaign">My Campaigns</a>
					</li>
					<!-- <li class="nav-item">
						<a class="nav-link" href="/register" data-toggle="modal" data-target=".signup-modal-lg">Sign up</a>
					</li> -->
					<li>
						<div class="dropdown">
							<button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{{ username }}
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<a class="dropdown-item" href="#" @click.prevent="btnLogout">Log Out</a>
							</div>
						</div>
					</li>
				</ul>

				<!-- GUEST USER NAV -->
				<ul class="navbar-nav" v-else>
					<!-- <li class="nav-item">
						<a class="nav-link" href="/login" data-toggle="modal" data-target=".login-modal-lg">Login</a>
					</li> -->
					<!-- <li class="nav-item">
						<a class="nav-link" href="/register" data-toggle="modal" data-target=".signup-modal-lg">Sign up</a>
					</li> -->
					<li class="nav-item">
						<a class="nav-link" href="/login">Login</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/register">Sign up</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

    <!--  -->
    <!--  -->
    <!--  -->
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
  name: "App",
  data() {
    return {
      username: "",
      login: {
        username: "",
        password: ""
      },
      api: "https://onepercent-crowdfund.herokuapp.com/users/authenticate",
      loggedIn: false
    };
  },
  methods: {
    btnLogout() {
      localStorage.clear();
      window.location.reload(true);
      this.$router.push("/");
    }
  },

  computed: {},

  mounted() {
    this.username = localStorage.getItem("username");

    Event.$on("loggedIn", () => {
      this.username = localStorage.getItem("username");
    });
  },
  created() {
    this.username = localStorage.getItem("username");
    if (this.username) {

    }
  },
  beforeCreate() {

    this.username = localStorage.getItem("username");

  }
};
</script>

<style>
.dropdown:hover > .dropdown-menu {
  display: block;
}

.dropdown > .dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
  pointer-events: none;
}
.btn-primary {
  background-color: #4caf50;
  color: white;
  /* padding: 16px; */
  font-size: 16px;
  border: none;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
