			<style type="text/css">
           figure {
            height: 60vh;
            overflow: hidden;
            transition: .7s;
            padding-top: 5px;
        }

        figure:hover .figcaptionSection {
            top: -387px;
        }

        figure:hover .figcaptionIconSection {
            background-color: #002147;
        }

        figure:hover #figcaptionIconSpan {
            color: white;
        }

        .figcaptionSection {
            /*                                       background: rgba(249, 184, 30, 0.9);*/
            background: rgba(255, 69, 0, .9);
            width: 99%;
            z-index: 0;
            position: relative;
            top: -170px;
            height: 60vh;
            transition: .4s;
        }

        .figcaptionIconSection {
            background: rgb(255, 69, 0);
            opacity: 1;
            width: 50px;
            height: 49px;
            position: relative;
            z-index: 2;
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
            top: -24px;
            left: 100px;

            transform: rotate(45deg);
        }

        #figcaptionIconSpan {
            color: #002147;
            margin-top: 10px;
            text-align: center;
            transform: rotate(-45deg);
            margin-left: 10px;
        }

        .infoBlock {
            color: #002147;
            font-weight: 600;
            position: relative;
            z-index: 2;
            opacity: .7;
            text-align: center;
        }

        .infoBlock h4 {
            margin-top: 2%;
        }

        #infoBlockP {
            font-size: 15px;
            margin-bottom: 10px;
        }

        #infoBlockP a {
            text-decoration: none;
            font-size: 15px;
            transition: .5s;
        }

        #infoBlockP a:hover {
            color: white;
        }

        .rating {
            margin-top: -10px;
        }
        .iconOptions ul li{
          margin-top: -20px;
      }
      .iconOptions ul li a {
        background-color: transparent !important;
        margin-left: 60px;
        color: #fff;
    }         
</style>
<div class="col-md-8">
    <div class="container-fluid">
       <div class="row">
          <div class="col-md-4">
            <figure>
                <img src="img/categories/category-filter-img-02.jpg" style=" width: 99%;height:67vh; overflow: hidden; padding-top: 33px;">
                <figcaption>
                    <div class="figcaptionSection">
                        <div class="figcaptionIconSection">
                            <p id="figcaptionIcon"><span class="fa fa-2x fa-book" id="figcaptionIconSpan"></span></p>
                        </div>
                        <div class="infoBlock">
                            <h4>Book Title</h4>
                            <p><span class="author"><strong>Author:</strong> Karikari Adade</span></p>
                            <p><span class="author"><strong>ISBN:</strong> 9781581573268</span></p>
                            <div class="rating">
                                <span class="fa fa-sm fa-star"></span>
                                <span class="fa fa-sm fa-star"></span>
                                <span class="fa fa-sm fa-star"></span>
                                <span class="fa fa-sm fa-star"></span>
                                <span class="fa fa-sm fa-star"></span>
                            </div>
                            <p id="infoBlockP">It is a long established fact that a reader will be distracted by the readable content of.....<br>
                                <a href="book_detail.php">Read More <i class="fa fa-sm fa-arrow-right" style="font-size: 13px;"></i></a>
                            </p>
                            <div class="iconOptions">
                                <ul>
                                    <!-- <li><a href=""><i class="fa fa-cart-plus fa-lg"></i></a></li> -->
                                    <li><a href=""><i class="fa fa-lg fa-cart-plus"></i></a></li>
                                    <!-- <li><a href=""><i class="fa fa-lg fa-heart"></i></a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
        <div class="col-md-4">
         <figure>
            <img src="img/categories/category-filter-img-02.jpg" style=" width: 99%;height:67vh; overflow: hidden; padding-top: 33px;">
            <figcaption>
                <div class="figcaptionSection">
                    <div class="figcaptionIconSection">
                        <p id="figcaptionIcon"><span class="fa fa-2x fa-book" id="figcaptionIconSpan"></span></p>
                    </div>
                    <div class="infoBlock">
                        <h4>Book Title</h4>
                        <p><span class="author"><strong>Author:</strong> Karikari Adade</span></p>
                        <p><span class="author"><strong>ISBN:</strong> 9781581573268</span></p>
                        <div class="rating">
                            <span class="fa fa-sm fa-star"></span>
                            <span class="fa fa-sm fa-star"></span>
                            <span class="fa fa-sm fa-star"></span>
                            <span class="fa fa-sm fa-star"></span>
                            <span class="fa fa-sm fa-star"></span>
                        </div>
                        <p id="infoBlockP">It is a long established fact that a reader will be distracted by the readable content of.....<br>
                            <a href="book_detail.php">Read More <i class="fa fa-sm fa-arrow-right" style="font-size: 13px;"></i></a>
                        </p>
                        <div class="iconOptions">
                            <ul>
                                <!-- <li><a href=""><i class="fa fa-cart-plus fa-lg"></i></a></li> -->
                                <li><a href=""><i class="fa fa-lg fa-cart-plus"></i></a></li>
                                <!-- <li><a href=""><i class="fa fa-lg fa-heart"></i></a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </figcaption>
        </figure>
    </div>
    <div class="col-md-4">
     <figure>
        <img src="img/categories/category-filter-img-02.jpg" style=" width: 99%;height:67vh; overflow: hidden; padding-top: 33px;">
        <figcaption>
            <div class="figcaptionSection">
                <div class="figcaptionIconSection">
                    <p id="figcaptionIcon"><span class="fa fa-2x fa-book" id="figcaptionIconSpan"></span></p>
                </div>
                <div class="infoBlock">
                    <h4>Book Title</h4>
                    <p><span class="author"><strong>Author:</strong> Karikari Adade</span></p>
                    <p><span class="author"><strong>ISBN:</strong> 9781581573268</span></p>
                    <div class="rating">
                        <span class="fa fa-sm fa-star"></span>
                        <span class="fa fa-sm fa-star"></span>
                        <span class="fa fa-sm fa-star"></span>
                        <span class="fa fa-sm fa-star"></span>
                        <span class="fa fa-sm fa-star"></span>
                    </div>
                    <p id="infoBlockP">It is a long established fact that a reader will be distracted by the readable content of.....<br>
                        <a href="book_detail.php">Read More <i class="fa fa-sm fa-arrow-right" style="font-size: 13px;"></i></a>
                    </p>
                    <div class="iconOptions">
                        <ul>
                            <!-- <li><a href=""><i class="fa fa-cart-plus fa-lg"></i></a></li> -->
                            <li><a href=""><i class="fa fa-lg fa-cart-plus"></i></a></li>
                            <!-- <li><a href=""><i class="fa fa-lg fa-heart"></i></a></li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </figcaption>
    </figure>
</div>
</div>
</div>
</div>