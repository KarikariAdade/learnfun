<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
	<title>
		LearnFun - Free Stuff
	</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/all.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<?php include 'includes/navbar.php'; ?>
<div class="container-fluid become_tutor_intro" style="margin-bottom: 5%;">
        <div class="our_courses_intro">
            <h2>Free Books & Media Listing</h2>
            <p style="font-size: 23px;">The best books and media for college StudentsThe best books and media for college Students
            The best books and media for college Students</p>
            <p><button class="btn"><a href="#">See More</a></button></p>
        </div>
    </div>
	<div class="container-fluid" style="padding: 39px;">
		<div class="row">
      <?php include 'includes/store_sidebar.php'; ?>
      <?php include 'includes/free_books.php'; ?>

            <div class="container">
    <div>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">5</a>
        </li>
      </ul>
    </div>
  </div>
    </div>
  </div>
  <?php include 'includes/footer.php';?>
  <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
  <script type="text/javascript" src="js/popper.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/all.js"></script>
  <script type="text/javascript" src="js/learnfun.js"></script>
</body>
</html>