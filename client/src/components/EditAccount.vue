<template>
  <div id="editaccount">
    <br/>
    <br/>
    <br/>
    <div class="container-fluid">
		<div class="row">
			<div class="col-sm-12">
				<ul class="breadcrumb">
					<li>
						<a href="/edit">Basics</a>
					</li>
					<li>
						<a href="/editstory">Story</a>
					</li>
					<li>
						<a href="/editperks">Perks</a>
					</li>
					<li>
						<a href="/editabout">About you</a>
					</li>
					<li>
						<a href="/editaccount">Account</a>
					</li>
				</ul>
			</div>
			<div class="col-sm-8">
				<h1>Tell us more about yourself</h1>
				<p>Add a bio and links to your website and social media profiles. Think of it as your creative resume.</p>
				<form>
					<div class="form-group light-blue">
						<div class="form-group row">
							<label for="example-text-input" class="col-3 col-form-label">Contact details</label>
							<div class="col-9">
								<input class="form-control" type="email" value="test@example.com" id="example-search-input"> </div>
						</div>
					</div>
					<div class="form-group light-blue">
						<div class="form-group row">
							<label for="example-text-input" class="col-3 col-form-label">Funds recipient</label>
							<div class="col-9">
								<p class="mt-1">Enter the account you’d like to use to receive funds if your project is successfully funded. The account should belong
									to the person or legal entity running this project. Once you launch, this information cannot be changed.</p>
								<div
								    class="row">
									<div class="col-12">
										<div class="input-group">
											<span class="input-group-btn">
												<button class="btn btn-secondary" type="button">Your name</button>
											</span>
											<input type="text" class="form-control" placeholder="First name">
											<input type="text" class="form-control" placeholder="Last name"> </div>
									</div>
							</div>
							<div class="row mt-3">
								<div class="col-12">
									<div class="input-group">
										<span class="input-group-btn">
											<button class="btn btn-secondary" type="button">Birthday</button>
										</span>
										<div class="input-group-btn">
											<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Day </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div role="separator" class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="input-group-btn">
											<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Month </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div role="separator" class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="input-group-btn">
											<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Year </button>
											<div class="dropdown-menu">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
												<div role="separator" class="dropdown-divider"></div>
												<a class="dropdown-item" href="#">Separated link</a>
											</div>
										</div>
										<div class="input-group-btn"> </div>
									</div>
								</div>
							</div>
							<div class="row mt-3">
								<div class="col-12">
									<div class="card">
										<div class="card-block p-3">
											<div class="row">
												<div class="col-4">
													<p>Home address</p>
												</div>
												<div class="col-8">
													<input type="text" class="form-control" placeholder="House Number and street name">
													<input type="text" class="form-control" placeholder="Town">
													<input type="text" class="form-control" placeholder="Postcode/ZIP code">
													<input type="text" class="form-control" placeholder="United Kingdom"> </div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
							<div class="row mt-3">
								<div class="col-12">
									<a href="edit.html" class="btn btn-primary pull-right">Save</a>
								</div>
							</div>
						</div>
					</div>
			</div>
			<div class="form-group light-blue">
				<div class="form-group row">
					<label for="example-text-input" class="col-3 col-form-label">Bank Account
						<br />
						<a href="#" class="mt-2">+ Add new</a>
					</label>
					<div class="col-9">
						<table class="table table-sm mt-2">
							<thead class="thead-default">
								<tr>
									<th>#</th>
									<th>Account number</th>
									<th>Sort code</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">
										<label class="custom-control custom-radio">
											<input name="radio" type="radio" class="custom-control-input" checked="">
											<span class="custom-control-indicator"></span>
										</label>
									</th>
									<td>70872490</td>
									<td>40-47-84</td>
								</tr>
								<tr>
									<th scope="row">
										<label class="custom-control custom-radio">
											<input name="radio" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
										</label>
									</th>
									<td>13537846</td>
									<td>20-51-32</td>
								</tr>
								<tr>
									<th scope="row">
										<label class="custom-control custom-radio">
											<input name="radio" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
										</label>
									</th>
									<td>23354647</td>
									<td>56-00-03</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="form-group light-blue">
				<div class="form-group row">
					<label for="example-text-input" class="col-3 col-form-label">Payment source
						<br />
						<a href="#" class="mt-2">+ Add new</a>
					</label>
					<div class="col-9">
						<table class="table table-sm mt-2">
							<thead class="thead-default">
								<tr>
									<th>#</th>
									<th>Card number</th>
									<th>Expiry</th>
									<th>Type</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">
										<label class="custom-control custom-radio">
											<input id="radio2" name="radio2" type="radio" class="custom-control-input" checked="">
											<span class="custom-control-indicator"></span>
										</label>
									</th>
									<td>XXXX-XXXX-XXXX-2315</td>
									<td>08-27</td>
									<td>MasterCard</td>
								</tr>
								<tr>
									<th scope="row">
										<label class="custom-control custom-radio">
											<input name="radio2" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
										</label>
									</th>
									<td>XXXX-XXXX-XXXX-4587</td>
									<td>07-25</td>
									<td>Visa</td>
								</tr>
								<tr>
									<th scope="row">
										<label class="custom-control custom-radio">
											<input name="radio2" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
										</label>
									</th>
									<td>example@paypal.com</td>
									<td>N/A</td>
									<td>Paypal</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			</form>
		</div>
		<div class="col-sm-4">
			<div class="row">
				<div class="col-sm-10 offset-sm-2">
					<strong>Getting started?</strong>
					<p>Visit Campus to read discussions about preparing for a project and more.</p>
					<br />
					<strong>Preview</strong>
					<hr />
					<div class="card box">
						<a href="project.html">
							<img src="http://i.expresspixel.com/unsplash.it/310/210?image=11" class="img-fluid hidden-xs-down" />
							<img src="http://i.expresspixel.com/unsplash.it/610/210?image=11" class="img-fluid hidden-sm-up" /> </a>
						<div class="card-block pb-1" style="position: relative; padding-bottom: 60px; min-height: 250px;">
							<h6>
								<a href="project.html">architect frictionless supply-chains</a>
							</h6>
							<p class="text-muted">By
								<strong>
									<a href="project.html" class="text-muted">Jonathan Howell</a>
								</strong>
							</p>
							<p class="desc">MTS ASL Curriculum Workbook is a reproducible study book to build Early Literacy and Academic skills for primary school
								age children.</p>
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
											<p class="mt-0 mb-0">Backers</p>
											<h6 class="mt-0 mb-0">
												<strong>117</strong>
											</h6>
										</div>
										<div class="col-4 text-center">
											<p class="mt-0 mb-0">Pledged</p>
											<h6 class="mt-0 mb-0">
												<strong>&dollar;50,000</strong>
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
	<br />
	<br />
	<br />
</div>
  <nav class="navbar fixed-bottom navbar-light bg-faded" style="background: #fff; border-top: 1px solid #eee">
		<div class="container">
			<a href="edit.html" class="btn btn-primary btn-lg float-right">Save campaign</a>
			<a href="edit.html" class="btn btn-link btn-lg float-right">Discard changes</a>
		</div>
	</nav>

  </div>
</template>

<script>
export default {
  name: "EditAccount"
};
</script>

<style>

</style>
