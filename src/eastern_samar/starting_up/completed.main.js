
import { SERVER_NODEJS } from '/src/helper/serverside/server_nodejs.js';
import { CHECK_GOOGLE_ACCESS } from '/src/controller/processing.main.controller.js';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TomSelect from 'tom-select/dist/js/tom-select.complete.min.js';
import 'tom-select/dist/css/tom-select.bootstrap5.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Icons
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'remixicon/fonts/remixicon.css';

// Run Google access check
CHECK_GOOGLE_ACCESS(SERVER_NODEJS);

// Inject Bootstrap card into DOM
$('#html_starting_up_completed_XuS11e').html(`

  <nav class="sticky-top bg-dark border border-bottom border-1 p-3">
    <a id="revokeBtn" class="btn btn-danger btn-sm">
      <i class="ri-arrow-left-fill"></i>
      Back to sign-in
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
      <div class="flex-fill border-top border-2 border-primary mx-1"></div>
      <!-- STEP 2 -->
      <div class="text-center flex-fill">
        <span class="badge rounded-pill bg-primary px-3 py-2">2</span>
        <div class="small fw-semibold mt-1">Provide Profile Details</div>
      </div>
      <div class="flex-fill border-top border-2 border-primary mx-1"></div>
      <!-- STEP 3 -->
      <div class="text-center flex-fill">
        <span class="badge rounded-pill bg-primary px-3 py-2">3</span>
        <div class="small fw-semibold mt-1">Completed</div>
      </div>
    </div>
  </div>



    <div class="card mt-5">
        <div class="card-header">
            <h3 class="fs-3">Completed</h3>
        </div>
        <div class="card-body">

          <form id="formCompletedXS">

            <!-- GOOGLE USER CARD -->
            <div class="card bg-dark bg-opacity-10 mb-4 border-0 google-card">
              <div class="card-body d-flex align-items-center gap-3">
                <img
                  src="/default-avatar.png"
                  alt="Google Profile"
                  class="user-picture google-avatar rounded-circle border border-2"
                  width="55"
                  height="55"
                >
                <div class="flex-grow-1">
                  <div class="fw-bold user-name fs-6 text-dark">Guest User</div>
                  <div class="text-muted small user-email">email@gmail.com</div>
                  <span class="badge bg-light text-secondary mt-1 user-id">
                    Google ID
                  </span>
                </div>
                <div class="text-end">
                  <i class="ri-google-fill text-danger fs-3"></i>
                </div>
              </div>
            </div>

            <hr class="mb-2">


            <div class="d-flex justify-content-center align-items-center">
              <i class="ri-mail-check-fill text-muted" style="font-size: 6rem;"></i>
            </div>

            <h3 class="text-center fw-semibold text-muted">
              You're all done! Every step has been completed successfully.<br>
              Your information is safe, processed, and fully updated in the system.
            </h3>

            <div class="d-flex justify-content-center align-items-center">

            <button type="submit" id="btn-getstarted-3-completed" class="btn btn-dark w-50 mt-4 mb-4 fs-5">
              Continue
            </button>

            </div>


          </form>





        </div>
    </div>
  </main>

`);




$(document).ready(function () {
  $('#formCompletedXS').on('submit', function (e) {
    e.preventDefault();

    const $btn = $('#btn-getstarted-3-completed');
    $btn.prop('disabled', true).text('Proccessing...');
    const completedId = '1';
    $.ajax({
      url: `${SERVER_NODEJS}/insert/starting_up/completed`,
      type: 'POST',
      dataType: 'json',
      xhrFields: { withCredentials: true },
      data: { completed_id: completedId},
      success(res) {
        if (!res.status || res.status.toLowerCase() !== 'success') {
          iziToast.error({
            title: 'Error',
            message: res.message || 'Invalid.',
            position: 'topRight'
          });
          $btn.prop('disabled', false).text('Continue');
          return;
        }

        iziToast.success({
          title: 'Success',
          message: res.message,
          position: 'topRight',
          timeout: 2000,
          onClosed() {
            window.location.href = '../main';
          }
        });
        $btn.prop('disabled', false).text('Continue');
      },
      error(xhr) {
        // Parse JSON from server response
        let errorMsg = 'Server error.';
        try {
          const resJson = JSON.parse(xhr.responseText);
          errorMsg = resJson.message || errorMsg;
        } catch (e) {
          console.error('Failed to parse JSON:', e);
        }

        iziToast.error({
          title: 'Error',
          message: errorMsg,
          position: 'topRight'
        });
        $btn.prop('disabled', false).text('Continue');
      }

    });
  });

});
