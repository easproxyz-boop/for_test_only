import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SERVER_NODEJS } from '/src/helper/serverside/server_nodejs.js';
import { CHECK_GOOGLE_ACCESS } from '/src/controller/processing.main.controller.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Icons
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'remixicon/fonts/remixicon.css';

// Run Google access check
CHECK_GOOGLE_ACCESS(SERVER_NODEJS);

// Inject Bootstrap card into DOM
$('#html_starting_up_token_XuS11e').html(`
  <nav class="sticky-top bg-dark border-bottom p-3">
    <a id="revokeBtn" class="btn btn-danger btn-sm">
      <i class="ri-arrow-left-fill"></i> Back to sign-in
    </a>
  </nav>

  <main class="py-5 container">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <!-- STEP 1 -->
        <div class="text-center flex-fill">
          <span class="badge rounded-pill bg-primary px-3 py-2">1</span>
          <div class="small fw-semibold mt-1">Token</div>
        </div>
        <div class="flex-fill border-top border-2 border-dark mx-1"></div>
        <!-- STEP 2 -->
        <div class="text-center flex-fill">
          <span class="badge rounded-pill bg-secondary px-3 py-2">2</span>
          <div class="small fw-semibold mt-1">Provide Profile Details</div>
        </div>
        <div class="flex-fill border-top border-2 border-dark mx-1"></div>
        <!-- STEP 3 -->
        <div class="text-center flex-fill">
          <span class="badge rounded-pill bg-secondary px-3 py-2">3</span>
          <div class="small text-muted mt-1">Completed</div>
        </div>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">
        <h3 class="fs-3">Token</h3>
      </div>
      <div class="card-body">
        <form id="formTokenX">
          <div class="alert alert-warning mb-4" role="alert">
            <strong>Restricted Access:</strong> You are attempting to access a private and secured system.
            Only users with a valid token may continue to register profile information.
            All actions are monitored and recorded for security purposes.
            Please contact the <strong>I.T. Team</strong> to obtain proper authorization.
          </div>

          <!-- GOOGLE USER CARD -->
          <div class="card bg-dark bg-opacity-10 mb-4 border-0 google-card">
            <div class="card-body d-flex align-items-center gap-3">
              <img src="/default-avatar.png" alt="Google Profile" class="user-picture google-avatar rounded-circle border border-2" width="55" height="55">
              <div class="flex-grow-1">
                <div class="fw-bold user-name fs-6 text-dark">Guest User</div>
                <div class="text-muted small user-email">email@gmail.com</div>
                <span class="badge bg-light text-secondary mt-1 user-id">Google ID</span>
              </div>
              <div class="text-end">
                <i class="ri-google-fill text-danger fs-3"></i>
              </div>
            </div>
          </div>

          <hr class="mb-4">

          <!-- TOKEN INPUT -->
          <div class="mb-4">
            <label for="gs1_token" class="form-label fw-semibold">Token</label>
            <input type="text" id="gs1_token" name="gs1_token" class="form-control text-dark fw-bold" placeholder="ENTER TOKEN" required>
          </div>

          <button type="submit" id="btn-getstarted-1-token" class="btn btn-dark w-100">Submit Token</button>
        </form>
      </div>
    </div>
  </main>
`);



$(document).ready(function () {
// Token form submission
$('#formTokenX').on('submit', function (e) {
  e.preventDefault();

  const $btn = $('#btn-getstarted-1-token');
  const token = $('#gs1_token').val().trim();

  if (!token) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a token.',
      position: 'topRight'
    });
    return;
  }

  $btn.prop('disabled', true).text('Processing...');

  $.ajax({
    url: `${SERVER_NODEJS}/insert/starting_up/token`,
    type: 'POST',
    dataType: 'json',
    xhrFields: { withCredentials: true },
    data: { gs1_token: token },
    success(res) {
      if (!res.status || res.status.toLowerCase() !== 'success') {
        iziToast.error({
          title: 'Error',
          message: res.message || 'Invalid token.',
          position: 'topRight'
        });
        $btn.prop('disabled', false).text('Submit Token');
        return;
      }

      iziToast.success({
        title: 'Success',
        message: res.message,
        position: 'topRight',
        timeout: 2000,
        onClosed() {
          window.location.href = './profile';
        }
      });

      $btn.prop('disabled', false).text('Submit Token');
    },
    error(xhr) {
      let errorMsg = 'Server error.';
      try {
        const resJson = JSON.parse(xhr.responseText);
        errorMsg = resJson.message || errorMsg;
      } catch (err) {
        console.error('Failed to parse JSON:', err);
      }

      iziToast.error({
        title: 'Error',
        message: errorMsg,
        position: 'topRight'
      });

      $btn.prop('disabled', false).text('Submit Token');
    }
  });
});
});
