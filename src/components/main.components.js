// =========================
// Imports
// =========================
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// DataTables
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';

// Select2
import 'select2/dist/css/select2.min.css';
import 'select2-bootstrap-5-theme/dist/select2-bootstrap-5-theme.min.css';
import 'select2';

// Notifications
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import Swal from 'sweetalert2';
import 'animate.css/animate.min.css';

// Charts
import Chart from 'chart.js/auto';

// Face API
import * as faceapi from '@vladmandic/face-api';

// QR Code Scanner
import { Html5Qrcode } from 'html5-qrcode';

// Other utils
import moment from 'moment';
import QRious from 'qrious';
import lottie from 'lottie-web';

// Icons
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'remixicon/fonts/remixicon.css';

// Custom server config
import { SERVER_NODEJS } from '/src/helper/serverside/server_nodejs.js';

import { CHECK_GOOGLE_ACCESS } from '/src/controller/processing.main.controller.js';

// =========================
// RUN INITIALIZATIONS
// =========================
CHECK_GOOGLE_ACCESS(SERVER_NODEJS); // Verify user access

// =========================
// CSS for Sticky Settings Button
// =========================
$('<style>')
  .prop('type', 'text/css')
  .html(`
    .settings-sticky-oiuvtt66 {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1050;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .settings-sticky-oiuvtt66 .btn {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    }
  `)
  .appendTo('head');

// =========================
// Inject Main Layout
// =========================
$('#html_main_ic7x66').html(`

  <!-- MAIN CONTENT -->
  <main class="m-0 p-0">
    <div id="main-content-9999" class="container-fluid py-1"></div>
    <div style="margin-bottom: 200px;"></div>
  </main>

  <!-- FOOTER -->
  <footer class="text-secondary text-center p-3 shadow-sm border-top">
    &copy; 2025 Eastern Samar Provincial Capitol. All rights reserved.
  </footer>

  <!-- OFFCANVAS MENU -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenuMain" aria-labelledby="offcanvasMenuMainLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title fs-5" id="offcanvasMenuMainLabel"><i class="ri-menu-2-line me-2"></i> Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body p-0 mt-4" id="offcanvas-body-menu-8888s"></div>
    <div class="offcanvas-footer mt-auto p-3 border-top"><small class="text-muted">Version 2.0.0</small></div>
  </div>

  <!-- STICKY SETTINGS BUTTONS -->
  <div class="settings-sticky-oiuvtt66">
    <button class="btn btn-secondary mb-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasOnlineUsers" aria-controls="offcanvasOnlineUsers">
      <i class="ri-user-2-fill"></i>
    </button>
    <button class="btn btn-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSettings" aria-controls="offcanvasSettings">
      <i class="ri-settings-fill"></i>
    </button>
  </div>

  <!-- OFFCANVAS ONLINE USERS -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasOnlineUsers" aria-labelledby="offcanvasOnlineUsersLabel">
    <div class="offcanvas-header">
      <h5 class="fs-5" id="offcanvasOnlineUsersLabel">Online Users</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body"><p>Online users will be listed here.</p></div>
  </div>

  <!-- OFFCANVAS SETTINGS -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasSettings" aria-labelledby="offcanvasSettingsLabel">
    <div class="offcanvas-header">
      <h5 class="fs-5" id="offcanvasSettingsLabel">Settings</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="mb-3 fs-5">
        <span>User role: </span><span class="user-access-role fw-bold">Admin</span>
      </div>

      <div class="accordion" id="settingsAccordion">
        <!-- Dark Mode -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="darkModeHeading">
            <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#darkModeCollapse" aria-expanded="false" aria-controls="darkModeCollapse">
              <i class="ri-contrast-2-fill fs-5 me-2"></i> Dark Mode
            </button>
          </h2>
          <div id="darkModeCollapse" class="accordion-collapse collapse" aria-labelledby="darkModeHeading" data-bs-parent="#settingsAccordion">
            <div class="accordion-body p-2">
              <div class="d-grid gap-2">
                <div class="theme-option d-flex align-items-center gap-3 p-2 fs-5 rounded" data-theme="light" role="button">
                  <i class="ri-sun-fill fs-5 me-2"></i> Light
                </div>
                <div class="theme-option d-flex align-items-center gap-3 p-2 fs-5 rounded" data-theme="dark" role="button">
                  <i class="ri-moon-fill fs-5 me-2"></i> Dark
                </div>
                <div class="theme-option d-flex align-items-center gap-3 p-2 fs-5 rounded" data-theme="system" role="button">
                  <i class="ri-computer-line fs-5 me-2"></i>
                  <div><small class="fs-5">Follow system preference</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- User Account Management -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="userAccountManagementHeading">
            <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#userAccountManagementCollapse" aria-expanded="false" aria-controls="userAccountManagementCollapse">
              <i class="ri-shield-user-line fs-5 me-2"></i> User Account Management
            </button>
          </h2>
          <div id="userAccountManagementCollapse" class="accordion-collapse collapse" aria-labelledby="userAccountManagementHeading" data-bs-parent="#settingsAccordion">
            <div class="accordion-body p-2">
              <div class="list-group list-group-flush p-2">
                <a href="/pages/maingeneral/menu_settings/user_account_management/users" id="settingSidebariUsrm_users" class="list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
                  <i class="ri-group-line me-2 fs-5"></i> Users
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);










$(function () {

  let currentPage = ''; // Track current loaded page

  // =========================
  // PAGE LOADING FUNCTIONS
  // =========================
  function loadPage(page) {
    if (!page) return;

    // Force reload if same page
    if (page === currentPage) {
      $("#main-content-9999").html(''); // clear content
    }

    $("#main-content-9999").load(page, function (response, status, xhr) {
      if (status === "success") {
        currentPage = page;

        // Remove previous active states
        $(".asidebar-link-load-dropdown, .asidebar-link-load-000").removeClass("active");

        // Highlight active link
        $(`.asidebar-link-load-000[href="${page}"]`).addClass("active");
      } else {
        console.error("❌ Load error:", xhr.status, xhr.statusText);
        $("#main-content-9999").html("<p class='text-danger'>Failed to load content.</p>");
      }
    });
  }

  // =========================
  // INITIAL HOME PAGE LOAD
  // =========================


  function initHome() {
    loadPage("/eastern_samar/general/home");
    // Sidebar click handler
    $(document).on("click", ".asidebar-link-load-000", function (e) {
      e.preventDefault();
      const page = $(this).attr("href");
      loadPage(page);
    });
    // Sidebar dropdowns
    $(document).on('click', '.asidebar-link-load-dropdown', function () {
      $(this).next('.collapse').collapse('toggle');
    });
  }



  // =========================
  // LOAD SIDEBAR MENU VIA AJAX
  // =========================
  function loadSidebarMenu() {
    $.ajax({
      url: SERVER_NODEJS + '/getdata/controller/offcanvas_mainmenu_access',
      type: 'POST',
      dataType: 'json',
      xhrFields: { withCredentials: true },
      success: function (res) {
        const data = res?.data || {};
        let childPage_ATTENDANCE_SYSTEM = '';

        if ((data.dt_access_attendance_system || '').toUpperCase() === 'YES') {
          childPage_ATTENDANCE_SYSTEM = `
            <a class="asidebar-link-load-dropdown list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5"
               href="#collapseAttendanceSystem" data-bs-toggle="collapse" role="button" aria-expanded="false">
              <i class="ri-government-line me-2"></i> Human Resources
              <i class="ri-arrow-down-s-line ms-auto"></i>
            </a>
            <div class="collapse ps-3" id="collapseAttendanceSystem">
              <a href="/pages/maingeneral/menu/human_resources/employee_profile_info.html" class="asidebar-link-load-000 list-group-item list-group-item-action fw-semibold border-0 rounded-3 mb-1 fs-5">
                <i class="ri-user-line me-2"></i> Employee Profile
              </a>
              <a href="/pages/attendance_system/at_logs.html" class="asidebar-link-load-000 list-group-item list-group-item-action fw-semibold border-0 rounded-3 mb-1 fs-5">
                <i class="ri-time-line me-2"></i> Attendance Tracking
              </a>
              <a href="/pages/maingeneral/menu/human_resources/leave_and_requests.html" class="asidebar-link-load-000 list-group-item list-group-item-action fw-semibold border-0 rounded-3 mb-1 fs-5">
                <i class="ri-time-line me-2"></i> Leave & Requests
              </a>
              <a href="/pages/maingeneral/menu/human_resources/view_attendance_and_dtr.html" class="asidebar-link-load-000 list-group-item list-group-item-action fw-semibold border-0 rounded-3 mb-1 fs-5">
                <i class="ri-time-line me-2"></i> View Attendance & DTR
              </a>
              <a href="/pages/maingeneral/menu/human_resources/payroll_integration.html" class="asidebar-link-load-000 list-group-item list-group-item-action fw-semibold border-0 rounded-3 mb-1 fs-5">
                <i class="ri-time-line me-2"></i> Payroll Integration
              </a>
              <a href="/pages/attendance_system/at_reports.html" class="asidebar-link-load-000 list-group-item list-group-item-action fw-semibold border-0 rounded-3 mb-1 fs-5">
                <i class="ri-file-chart-line me-2"></i> Reports
              </a>
            </div>
          `;
        }

        const ContainerBody = `
          <div class="list-group list-group-flush p-2">
            <a href="/eastern_samar/general/home" class="asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
              <i class="ri-home-9-line me-2"></i> Home
            </a>
            <a href="/eastern_samar/general/review_timeline" class="asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
              <i class="ri-timeline-view me-2"></i> Review Timeline
            </a>
            <a href="/pages/maingeneral/menu/profile_information.html" class="asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
              <i class="ri-account-box-2-line me-2"></i> Profile Information
            </a>
            <a href="/pages/maingeneral/menu/qrcode_login_and_out.html" class="asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
              <i class="ri-login-box-line me-2"></i> QR Code Login / Logout
            </a>
            ${childPage_ATTENDANCE_SYSTEM}
          </div>
        `;

        $('#offcanvas-body-menu-8888s').html(ContainerBody);

        initHome(); // initialize page loading
      },
      error: function (xhr) {
        console.error('User access error:', xhr.responseText);
      }
    });
  }

  // =========================
  // RUN INITIALIZATIONS
  // =========================

  loadSidebarMenu();

});



















$(function () {
  // =========================
  // THEME HANDLING
  // =========================
  // Constants & Globals
  // =========================
  const THEME_KEY = 'app-theme';
  const $themeOptions = $('.theme-option');
  const toastOptions = { position: 'topRight', timeout: 2000 };

  // =========================
  // THEME FUNCTIONS
  // =========================
  function applyTheme(theme) {
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      $('html').attr('data-bs-theme', prefersDark ? 'dark' : 'light');
    } else {
      $('html').attr('data-bs-theme', theme);
    }
  }

  function updateActiveThemeUI(theme) {
    $themeOptions.removeClass('active bg-primary text-white');
    $themeOptions.filter(`[data-theme="${theme}"]`).addClass('active bg-primary text-white');
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'system';
    applyTheme(savedTheme);
    updateActiveThemeUI(savedTheme);

    // Click event for theme buttons
    $themeOptions.on('click', function () {
      const selectedTheme = $(this).data('theme');
      localStorage.setItem(THEME_KEY, selectedTheme);
      applyTheme(selectedTheme);
      updateActiveThemeUI(selectedTheme);

      if (typeof iziToast !== 'undefined') {
        iziToast.success({ ...toastOptions, title: 'Theme Changed', message: `Applied ${selectedTheme} mode` });
      }
    });

    // Watch for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    function handleSystemChange() {
      if (localStorage.getItem(THEME_KEY) === 'system') {
        applyTheme('system');
        updateActiveThemeUI('system');
      }
    }
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemChange);
    }
  }
  initTheme();
});