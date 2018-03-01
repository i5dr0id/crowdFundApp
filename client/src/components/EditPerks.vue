<template>
  <div id="editpersk">
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
				<h1>Set your rewards and shipping costs.</h1>
				<p>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special
					experience, or a behind-the-scenes look into your process.</p>
				<form>
					<div class="form-group light-blue">
						<div class="row">
							<div class="col-md-3">
								<strong>Reward #1</strong>
								<br />
								<p>0 backers</p>
							</div>
							<div class="col-md-9">
								<div class="form-group row">
									<label for="example-text-input" class="col-3 col-form-label">Title</label>
									<div class="col-9">
										<input class="form-control" type="text" value="" placeholder="" id="example-text-input"> </div>
								</div>
								<div class="form-group row">
									<label for="example-search-input" class="col-3 col-form-label">Pledge amount</label>
									<div class="col-9">
										<input class="form-control" type="text" value="" id="example-search-input"> </div>
								</div>
								<div class="form-group row">
									<label for="example-email-input" class="col-3 col-form-label">Description</label>
									<div class="col-9">
										<textarea class="form-control" rows="6" type="text" value="" id="example-email-input"></textarea>
									</div>
								</div>
								<div class="form-group row">
									<label for="example-url-input" class="col-3 col-form-label">Estimated&nbsp;delivery</label>
									<div class="col-9">
										<input class="form-control" type="text" value="" id="example-url-input"> </div>
								</div>
								<div class="form-group row">
									<label for="example-tel-input" class="col-3 col-form-label">Shipping details</label>
									<div class="col-9">
										<input class="form-control" type="tel" value="" id="example-tel-input"> </div>
								</div>
							</div>
						</div>
					</div>
					<!-- </fieldset> -->
				</form>
				<a href="#" class="float-sm-right">
					<i class="fa fa-plus" aria-hidden="true"></i> Add reward/perk</a>
				<!-- </p> -->
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
								<p class="desc">MTS ASL Curriculum Workbook is a reproducible study book to build Early Literacy and Academic skills for primary
									school age children.</p>
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

  </div>
</template>

<script>
export default {
  name: 'EditPerks'
}
</script>

<style>

</style>
