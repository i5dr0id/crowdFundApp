<template>
  <div id="edit">
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
					<!-- <li>
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
					</li> -->
				</ul>
			</div>
			<div class="col-sm-8">
				<h1>Let’s get started.</h1>
				<p>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and
					project category.</p>
				<form>
					<div class="form-group light-blue">
						<label for="exampleInputEmail1">Project image</label>
						<p class="form-text text-muted"> This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free.
							Here are some tips. </p>
						<p class="form-control-static">
							<div style="border: 1px dashed #000; background: #fff; width: 100%; display: block; padding: 20px;" class="text-center">
								<p class="text-center">
									<a href="#">
										<strong>Choose an image from your computer</strong>
									</a>
								</p>
								<p>This is the main image associated with your project. Make it count!</p>
								<p>At least
									<strong>1024x576 pixels</strong> • 16:9 aspect ratio</p>
							</div>
						<!-- </p> -->
						<p class="form-text text-muted"> JPEG, PNG, GIF, or BMP • 50MB file limit </p>
					</div>
					<div class="form-group light-blue">
						<label for="exampleInputEmail1">Project title</label>
						<input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp"
						    placeholder="Enter email">
						<p class="form-text text-muted"> Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re
							making. Your profile name will be searchable, too.
							<br /> These words will help people find your project, so choose them wisely! Your name will be searchable too. </p>
					</div>
					<div class="form-group light-blue">
						<label for="exampleInputEmail1">Short blurb</label>
						<textarea class="form-control form-control-lg" rows="3"></textarea>
						<p id="passwordHelpBlock" class="form-text text-muted"> Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making. </p>
					</div>
					<div class="form-group light-blue">
						<label for="exampleInputEmail1">Category</label>
						<div class="row">
							<div class="col-6">
								<select class="form-control custom-select">
									<option value="1">Art</option>
									<option value="1">Comics</option>
									<option value="1">Crafts</option>
									<option value="1">Dance</option>
									<option value="1">Design</option>
									<option value="1">Fashion</option>
									<option value="1">Film & Video</option>
									<option value="1">Food</option>
									<option value="1">Games</option>
									<option value="1">Journalism</option>
									<option value="1">Music</option>
									<option value="1">Photography</option>
									<option value="1">Publishing</option>
									<option value="1">Technology</option>
									<option value="1">Theater</option>
								</select>
							</div>
							<div class="col-6">
								<select class="form-control custom-select">
									<option value="1">Subcategory (optional)</option>
									<option value="1">Art</option>
									<option value="1">Comics</option>
									<option value="1">Crafts</option>
									<option value="1">Dance</option>
									<option value="1">Design</option>
									<option value="1">Fashion</option>
									<option value="1">Film & Video</option>
									<option value="1">Food</option>
									<option value="1">Games</option>
									<option value="1">Journalism</option>
									<option value="1">Music</option>
									<option value="1">Photography</option>
									<option value="1">Publishing</option>
									<option value="1">Technology</option>
									<option value="1">Theater</option>
								</select>
							</div>
						</div>
					</div>
					<div class="form-group light-blue">
						<label for="exampleInputEmail1">Project location</label>
						<div class="input-group  input-group-lg">
							<span class="input-group-btn">
								<button class="btn btn-secondary" type="button">
									<i class="fa fa-location-arrow" aria-hidden="true"></i>
								</button>
							</span>
							<input type="text" class="form-control" placeholder="Search for..."> </div>
					</div>
					<div class="form-group light-blue">
						<label for="exampleInputEmail1">Funding duration</label>
						<div class="input-group">
							<input type="text" class="form-control form-control-lg" placeholder="" aria-describedby="basic-addon2">
							<span class="input-group-addon" id="basic-addon2">number of days</span>
						</div>
						<p id="passwordHelpBlock" class="form-text text-muted"> Up to 60 days, but we recommend 30 or fewer </p>
					</div>
					<div class="form-group light-blue">
						<label for="exampleInputEmail1">Funding goal</label>
						<div class="input-group  col-4 pl-0">
							<input type="text" class="form-control form-control-lg" placeholder="" value="0" aria-describedby="basic-addon2">
							<span class="input-group-addon" id="basic-addon2">GBP</span>
						</div>
						<p id="passwordHelpBlock" class="form-text text-muted"> If your project is successfully funded, the following fees will be collected from your funding total: 5% fee and payment
							processing fees (between 3% and 5%). Please note we do not withhold VAT. If funding isn’t successful, there are no
							fees. </p>
					</div>
					<div class="form-group light-blue">
						<label for="exampleInputEmail1">Project collaborators</label>
						<div class="row mb-2">
							<div class="col-6">
								<input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </div>
							<div class="col-6"> </div>
						</div>
						<div class="row">
							<div class="col-6">
								<input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </div>
							<div class="col-6">
								<p class="form-control-static pt-3">
									<a href="#">
										<i class="fa fa-plus" aria-hidden="true"></i> Add collaborator</a>
								</p>
							</div>
						</div>
					</div>
					<!-- </fieldset> -->
				</form>
				<br />
				<br />
				<br /> </div>
			<div class="col-sm-4">
				<div class="row">
					<div class="col-sm-10 offset-sm-2">
						<strong>Getting started?</strong>
						<p>Visit Campus to read discussions about preparing for a project and more.</p>
						<br/>
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
  name: "Edit",

    beforeCreate() {
	this.candidate_ID = window.location.pathname.split("/")[2];
	console.log(this.candidate_ID)
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

</style>
