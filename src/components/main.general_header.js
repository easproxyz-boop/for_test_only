
export const MAIN_GENERAL_HEADER = `
    <!-- HEADER -->
  <header class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm border-bottom">
    <div class="container-fluid">
      <!-- Offcanvas menu toggle -->
      <button class="btn btn-primary me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuMain" aria-controls="offcanvasMenuMain">
        <i class="ri-menu-2-fill"></i>
      </button>

      <!-- Brand / Logo -->
      <a class="navbar-brand text-white d-flex align-items-center fw-semibold" href="javascript:void(0)">
        <img src="/assets/images/logo/provincial-capitol-logo.png" alt="Logo" width="45" class="me-2">
        <div class="lh-sm">
          <div>Eastern Samar</div>
          <small class="fw-normal text-secondary" style="font-size: .9rem;">
            User role: <span class="user-access-role"></span>
          </small>
        </div>
      </a>

      <!-- Right Icons -->
      <div class="d-flex ms-auto align-items-center">

        <!-- Chat Dropdown -->
        <div class="dropdown me-4">
          <a class="nav-link position-relative text-white p-0" href="#" id="chatDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="ri-wechat-fill fs-3"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">0</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="chatDropdown" style="width:300px;">
            <li class="dropdown-header fw-semibold">Messages</li>
            <li><a class="dropdown-item small" href="#">💬 New message received</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-center text-primary small" href="#">View all messages</a></li>
          </ul>
        </div>

        <!-- Notification Dropdown -->
        <div class="dropdown me-4">
          <a class="nav-link position-relative text-white p-0" href="#" id="notificationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="ri-notification-4-fill fs-3"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">0</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="notificationDropdown" style="width:300px;">
            <li class="dropdown-header fw-semibold">Notifications</li>
            <li><a class="dropdown-item small" href="#">🔔 New system update</a></li>
            <li><a class="dropdown-item small" href="#">📄 New report submitted</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-center text-primary small" href="#">View all notifications</a></li>
          </ul>
        </div>

            <!-- Account Dropdown -->
            <div class="dropdown">
            <a class="nav-link p-0" href="#" id="navbarDropdownAccount" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/images/default-picture/account-circle-fill.png" class="rounded-circle user-picture" width="45" alt="User">
            </a>
            <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="navbarDropdownAccount" style="width:300px;">
                <li class="mb-2 px-3">
                <div class="d-flex align-items-center">
                    <img src="assets/images/default-picture/account-circle-fill.png" class="rounded-circle me-2 user-picture" width="40">
                    <div>
                    <div class="fw-semibold user-name">Example Name</div>
                    <div class="text-secondary user-email">example@gmail.com</div>
                    </div>
                </div>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger fs-5" href="#" id="sign-out-links"><i class="ri-logout-box-line me-2"></i> Sign Out</a></li>
            </ul>
            </div>


      </div>
    </div>
  </header>


`;