export const MAIN_GEENERAL_STICKY_SETTINGS = `
<!-- STICKY SETTINGS BUTTONS -->
<div class="settings-sticky-oiuvtt66">
  <button class="btn btn-secondary mb-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasOnlineUsers" aria-controls="offcanvasOnlineUsers">
    <i class="ri-user-2-fill"></i>
  </button>
  <button class="btn btn-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSettings" aria-controls="offcanvasSettings">
    <i class="ri-settings-fill"></i>
  </button>
</div>
<!-- STICKY SETTINGS BUTTONS -->

<!-- OFFCANVAS ONLINE USERS -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasOnlineUsers" aria-labelledby="offcanvasOnlineUsersLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasOnlineUsersLabel" class="fs-5">Online Users</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <p>Online users will be listed here.</p>
  </div>
</div>


<!-- OFFCANVAS SETTINGS -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasSettings" aria-labelledby="offcanvasSettingsLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasSettingsLabel fs-5">Settings</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <div class="mb-3 fs-5">
      <span>User role: </span><span class="user-access-role fw-bold">Admin</span>
    </div>


    <div class="accordion" id="settingsAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="darkModeHeading">
          <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#darkModeCollapse" aria-expanded="false">
            <i class="ri-contrast-2-fill fs-5 me-2"></i> Dark Mode
          </button>
        </h2>
        <div id="darkModeCollapse" class="accordion-collapse collapse" aria-labelledby="darkModeHeading" data-bs-parent="#settingsAccordion">
          <div class="accordion-body p-2">
            <div class="d-grid gap-2">
              <div class="theme-option d-flex align-items-center gap-3 p-2 fs-5 rounded" data-theme="light" role="button"><i class="ri-sun-fill fs-5 me-2"></i> Light</div>
              <div class="theme-option d-flex align-items-center gap-3 p-2 fs-5 rounded" data-theme="dark" role="button"><i class="ri-moon-fill fs-5 me-2"></i>  Dark</div>
              <div class="theme-option d-flex align-items-center gap-3 p-2 fs-5 rounded" data-theme="system" role="button">
                <i class="ri-computer-line fs-5 me-2"></i>
                <div>
                  <small class="fs-5">Follow system preference</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="userAccountManagementHeading">
          <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#userAccountManagementCollapse" aria-expanded="false">
            <i class="ri-shield-user-line fs-5 me-2"></i> User Account Management
          </button>
        </h2>
        <div id="userAccountManagementCollapse" class="accordion-collapse collapse" aria-labelledby="userAccountManagementHeading" data-bs-parent="#settingsAccordion">
          <div class="accordion-body p-2">
            <div class="d-grid gap-2">

                <div class="list-group list-group-flush p-2">
                  <a href="/pages/maingeneral/menu_settings/user_account_management/users" id="settingSidebariUsrm_users" class="active asidebar-link-load-000 list-group-item list-group-item-action d-flex align-items-center fw-semibold rounded-3 mb-1 fs-5">
                    <i class="ri-group-line me-2 fs-5"></i> Users
                  </a>

                </div>


            </div>
          </div>
        </div>
      </div>
    </div>
`;


