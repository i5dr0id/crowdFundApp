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
					<form method="POST" action="/login">
						<div class="form-group">
							<input type="text" name="email" class="form-control input-lg" placeholder="Email" autocomplete="off"> </div>
						<div class="form-group">
							<input type="password" name="password" class="form-control input-lg" placeholder="Password" autocomplete="off"> </div>
						<br>
						<div class="form-group checkbox checkbox-primary">
							<input type="checkbox"> Remember Me </div>
						<div class="form-group">
							<button type="submit" value="register" name="register" class="btn btn-block btn-lg">Login</button>
						</div>
					</form>
				</div>
				<div>
					<p class="form-footer">Don't have an account?
						<span>
							<a href="/join">Register Here </a>
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
  name: 'Login'
}
</script>

<style>
* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			background-color: #563d7c;
		}

		.login-div {
			padding-top: 3%;
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
</style>
