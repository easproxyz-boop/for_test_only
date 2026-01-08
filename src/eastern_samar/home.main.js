import { SERVER_NODEJS } from '/src/helper/serverside/server_nodejs.js';
import { CHECK_GOOGLE_ACCESS } from '/src/controller/processing.main.controller.js';
// Run Google access check
CHECK_GOOGLE_ACCESS(SERVER_NODEJS);

import { $, Cropper, DataTable, Html5Qrcode, iziToast, toastr, Swal, moment, QRious, select2, io, TomSelect, Chart, lottie, faceapi } from '/src/vendor/main.vendor.js';

// Custom CSS
import '/src/css/button/main.sticky-settings.css';

// Components
import { MAIN_GENERAL_HEADER } from '/src/components/main.general_header.js';
import { MAIN_GENERAL_FOOTER } from '/src/components/main.general_footer.js';
import { MAIN_GEENERAL_STICKY_SETTINGS } from '/src/components/main.sticky-settings.js';


// -----------------------------
// SINGLE HTML TEMPLATE
// -----------------------------
export const MAIN_PAGE_HTML = `
${MAIN_GENERAL_HEADER}

<!-- MAIN CONTENT -->
<main class="m-0 p-0">
  <div id="main-content-9999" class="container-fluid py-1">
    <!-- Dynamic content will be injected here: Home page, Profile page, etc. -->
  </div>
  <div style="margin-bottom: 200px;"></div>
</main>

${MAIN_GENERAL_FOOTER}

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
      <a href="/eastern_samar/home.html"
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

${MAIN_GEENERAL_STICKY_SETTINGS}
`;


// -----------------------------
// RENDER TEMPLATE
// -----------------------------
$('#html_main_home_03011999').html(MAIN_PAGE_HTML);


// 1. Delegate click event for all asidebar links
$(document).on('click', '.asidebar-link-load-000', function(e) {
    e.preventDefault(); // prevent default link navigation

    const href = $(this).attr('href'); // get href link
    const targetDiv = $('#main-content-9999');

    if (href) {
        // Optional: show a loading spinner
        targetDiv.html('<div class="text-center py-5">Loading...</div>');

        // Load the HTML content into the div
        $.get(href, function(data) {
            targetDiv.html(data); // inject the content
        }).fail(function() {
            targetDiv.html('<div class="text-danger text-center py-5">Failed to load content.</div>');
        });

        // Close offcanvas menu if open (Bootstrap 5)
        const offcanvasEl = document.getElementById('offcanvasMenuMain');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (bsOffcanvas) bsOffcanvas.hide();
    }
});
