<!DOCTYPE html>
<html>
<head>
	<?php include 'includes/header.php'; ?>
	<title>
		LearnFun
	</title>
</head>
<body class="wow fadeIn" data-wow-duration="3s">
	<!--=============== HEADER ===============-->
	<?php include 'includes/navbar.php'; ?>
	<?php include 'includes/login.php'; ?>
	<?php include 'includes/sign_up.php'; ?>

	<div class="container-fluid become_tutor_intro" style="margin-bottom: 5%;">
		<div class="our_courses_intro">
			<h2>Tutors Home</h2>
			<p>Create an online video course and earn money by teaching people around the world </p>
			<p><button class="btn"><a href="become_tutor.php">Learn More</a></button></p>
		</div>
	</div>
	<div class="container tutor_login">
		<div class="row" align="center">
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-12">
						<h1>CREATE AN ACCOUNT</h1>
						<div class="tutor_sign_up">
							   <form method="POST">
                  <div class="form-group">
                    <div class="input-group credential_form">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-user-plus"></i></span>
                      </div>
                      <input class="form-control" placeholder="Full Name" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group credential_form">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                      </div>
                      <input class="form-control" placeholder="Email" type="email">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group credential_form">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-lock"></i></span>
                      </div>
                      <input class="form-control" placeholder="Password" type="password">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group credential_form">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-lock-open"></i></span>
                      </div>
                      <input class="form-control" placeholder="Confirm Password" type="password">
                    </div>
                  </div>
                  <button class="btn tutor_sign_up_btn" type="submit">Sign Up</button>
                </form>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-12">
						<h1>SIGN IN</h1>
							<div class="tutor_sign_in">
							   <form method="POST">
                  <div class="form-group">
                    <div class="input-group credential_form">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                      </div>
                      <input class="form-control" placeholder="Email" type="email">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group credential_form">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-lock"></i></span>
                      </div>
                      <input class="form-control" placeholder="Password" type="password">
                    </div>
                  </div>
                  
                  <button class="btn tutor_sign_up_btn" type="submit">Sign In</button>
                </form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php include 'includes/footer.php'; ?>
</body>
</html>