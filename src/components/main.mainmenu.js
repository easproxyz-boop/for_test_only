
export const MAIN_MENU = `

<!-- OFFCANVAS MENU -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenuMain" aria-labelledby="offcanvasMenuMainLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title fs-5" id="offcanvasMenuMainLabel">
      <i class="ri-menu-2-line me-2"></i> Menu
    </h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>

  <div class="offcanvas-body p-0 mt-4" id="offcanvas-body-menu-8888s">


            <div class="list-group list-group-flush p-2">

                <!-- HOME -->
                <a href="/pages/maingeneral/menu/home.html"
                   id="asidebari_home"
                   class="asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
                    <i class="ri-home-9-line me-2"></i> Home
                </a>


                <!-- REVIEW TIMELINE -->
                <a href="/pages/maingeneral/menu/review_timeline.html"
                   id="asidebari_review_timeline"
                   class="asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
                    <i class="ri-timeline-view me-2"></i> Review Timeline
                </a>






                <!-- PROFILE -->
                <a href="/pages/maingeneral/menu/profile_information.html"
                   id="asidebari_profile_information"
                   class="asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
                    <i class="ri-account-box-2-line me-2"></i> Profile Information
                </a>


                <!-- LOG IN AND OUT -->
                <a href="/pages/maingeneral/menu/qrcode_login_and_out.html"
                   id="asidebari_qrcode_login_and_out"
                   class="asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
                    <i class="ri-login-box-line me-2"></i> QR Code Login / Logout                
                </a>




            </div>





  </div>

  <div class="offcanvas-footer mt-auto p-3 border-top">
    <small class="text-muted">Version 2.0.0</small>
  </div>
</div>
`;