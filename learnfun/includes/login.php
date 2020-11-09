    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!-- <div class="modal-header"> -->
            <div class="modal-title" style="padding-bottom: 8%">
              <p>Sign In with</p>
              <div class="container">
                <div class="row" align="center;">
                  <div class="col-md-5">
                    <button class="btn facebook_login">
                      <a href="" id="login_text"><span class="fab fa-lg fa-facebook login_icon"></span> FACEBOOK </a>
                    </button>
                  </div>
                  <div class="col-md-2"></div>
                  <div class="col-md-5">
                    <button class="btn google_login">
                      <a href="" id="login_text"><span class="fab fa-lg fa-google-plus-g login_icon"></span> GOOGLE </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-body">
              <p>Or Sign In with Credentials</p>
              <div class="form">
                <form method="POST">
                  <div class="form-group">
                    <div class="input-group credential_form">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                      </div>
                      <input class="form-control" placeholder="Email" type="email">
                    </div>
                  </div>
                  <div class="form-group mb-3">
                    <div class="input-group credential_form">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-lock"></i></span>
                      </div>
                      <input class="form-control" placeholder="Password" type="password">
                    </div>
                  </div>
                  <div style="display: flex;">
                    <div class="custom-control custom-checkbox">
                      <input class="custom-control-input" id="customCheckLogin" type="checkbox">
                      <label class="custom-control-label" for="customCheckLogin">
                        <span>Remember me</span>
                      </label>
                    </div>
                    <small class="forgot_password"><a href="#">Forgot Password?</a></small>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal_end">
              <button type="button" class="btn">SIGN IN</button>
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
            </div>
          </div>
        </div>
      </div>