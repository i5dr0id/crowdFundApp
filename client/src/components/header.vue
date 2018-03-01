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
						<a class="nav-link" href="explore.html">Explore</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/edit">Start a project</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/about">About us</a>
					</li>
				</ul>
				<ul class="navbar-nav">

					<li class="nav-item">
						<a class="nav-link" href="/login" data-toggle="modal" data-target=".login-modal-lg">Login</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/register" data-toggle="modal" data-target=".signup-modal-lg">Sign up</a>
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
												<input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                      </div>
										</div>
										<div class="form-group row">
											<div class="col-sm-12">
												<input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                      </div>
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
											<a href="account-dashboard.html" class="btn btn-primary">Create account</a>
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
   <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" style="max-width: 400px;">
				<div class="modal-content">
					<div class="modal-header" style="margin: 0 auto">
						<h3 class="text-center" style="font-size: 24px;margin-top: 20px;margin-bottom: 10px;font-family: inherit;font-weight: 500;line-height: 1.1;color: inherit;">Sign In to
							<span style="display: inline-block;">
								<a href="index"> ALGOSTACKS </a>
							</span>
						</h3>
					</div>
					<div class="modal-body">
						<form method="POST" action="/login" style="padding: 30px">
							<div class="form-group">
									<label>Email: </label>
								<input type="text" name="email" class="form-control input-lg" placeholder="Email" autocomplete="off" style="border-radius:0;"> </div>
							<div class="form-group">
								<label>Password: </label>
								<input type="password" name="password" class="form-control input-lg" placeholder="Password" autocomplete="off" style="border-radius:0;"> </div>
							<br>
							<div class="form-group checkbox checkbox-primary">
								<input type="checkbox"> Remember Me </div>
							<div class="form-group">
								<button type="submit" value="register" name="register" class="btn btn-block btn-lg" style="color:#fff;background-color:#05296b;">Login</button>
							</div>
						</form>
					</div>
					<div>
						<p class="form-footer text-center">Don't have an account?
							<span>
								<a href="/join">Register Here </a>
							</span>
						</p>
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
