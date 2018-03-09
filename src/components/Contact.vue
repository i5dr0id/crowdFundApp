<template>
  	<div id ="contact">
		<section>
			<div class="jumbotron text-center">
       			<h2>Contact Us</h2>
        		<h4>We Are Your Campaign Financial Assistant<br>We Help You Achieve Your Dream.</h4> 
     		</div>
		</section>
		<section>
			<!-- <div class="container"> -->
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">                        
					
				</div>
			</div>
			<div class="row">
				
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 contact">
					<h4> Send Email </h4>
					<form id="contact-form" class="form" action="#" method="POST" role="form">
						<div class="form-group">
							<label class="form-label" for="name">Your Name</label>
							<input type="text" class="form-control form-control-lg" id="name" name="name" tabindex="1" required>
						</div>                            
						<div class="form-group">
							<label class="form-label" for="email">Your Email</label>
							<input type="email" class="form-control form-control-lg" id="email" name="email" tabindex="2" required>
						</div>                            
						<div class="form-group">
							<label class="form-label" for="subject">Subject</label>
							<input type="text" class="form-control form-control-lg" id="subject" name="subject" tabindex="3">
						</div>                            
						<div class="form-group">
							<label class="form-label" for="message">Message</label>
							<textarea rows="5" cols="50" name="message" class="form-control form-control-lg" id="message"  tabindex="4" required></textarea>                                 
						</div>
						<div class="text-center">
							<button type="submit" class="btn btn-start-order">Send Message</button>
						</div>
					</form>
				</div>
				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 schedule">
					<div class="info"> 
						<h4><i class="fa fa-location-arrow"></i> Address </h4>
						<span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet est vitae earum praesentium accusamus natus quibusdam. Non culpa ea autem accusamus? Minima tenetur porro reprehenderit reiciendis ex itaque dolores repellendus!</span>

					</div>	
						<div class="info"> 
						<h4><i class="fa fa-phone"></i> Phone </h4>
							<span><strong> +2349082125158 </strong></span>
					</div>

					<div class="info"> 
						<h4> <i class="fa fa-envelope"></i> Email </h4>
							<span><strong> Contact@onepercentlab.com </strong></span>
					</div>
					
							
				</div>
					
			</div>
		<!-- </div> -->
		</section>		
	</div>
</template>

<style>
textarea {
	resize: none;
}
.form-label {
	font-size: 12px;
	color: #5e9bfc;
	margin: 0;
	display: block;
	opacity: 1;
	-webkit-transition: .333s ease top, .333s ease opacity;
	transition: .333s ease top, .333s ease opacity;
}
.form-control {
	border-radius: 0;
	border-color: #ccc;
   	border-width: 0 0 2px 0;
   	border-style: none none solid none;
   	box-shadow: none;
}
.form-control:focus {
	box-shadow: none;
	border-color: #04963a;
}
.js-hide-label {
	opacity: 0; 	
}
.js-unhighlight-label {
	color: #999 
}
.btn-start-order {
	background: 0 0 #ffffff;
    border: 1px solid #2f323a;
    border-radius: 3px;
    color: #2f323a;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    line-height: inherit;
    margin: 30px 0;
    padding: 10px 50px;
    text-transform: uppercase;
    transition: all 0.25s ease 0s;
}
.btn-start-order:hover,.btn-start-order:active, .btn-start-order:focus {
	border-color: #04963a;
	color: #04963a;
}

.schedule{
	margin-left:50px;
	border-left:#cccccc 1px solid;
	padding-left:50px;
}
.contact{
	margin-left:50px;
	
}
h3{
	text-align: center;
	color: green;
}
.info{
	padding: 30px;
}
.info h4{
	color: green;
}

</style>

