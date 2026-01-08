
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
$('#html_starting_up_profile_XuS11e').html(`

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
            <h3 class="fs-3">Profile Information</h3>
        </div>
        <div class="card-body">

            <form id="profileForm">

              <!-- GOOGLE USER CARD -->
              <div class="bg-dark bg-opacity-10 mb-4 border-0 google-card">
                <div class="card-body d-flex align-items-center gap-3">
                  <img class="user-picture google-avatar rounded-circle border border-2" src="/default-avatar.png" alt="Google Profile">
                  <div class="flex-grow-1">
                    <div class="fw-bold user-name fs-6 text-dark">Guest User</div>
                    <div class="text-muted small user-email">email@gmail.com</div>
                    <div class="badge bg-light text-secondary mt-1 user-id">Google ID</div>
                  </div>
                  <div class="text-end">
                    <i class="ri-google-fill text-danger fs-3"></i>
                  </div>
                </div>
              </div>

              <hr>

              

              <h6 class="text-center bg-secondary text-white p-2">Profile Details</h6>

              <!-- PERSONAL INFO -->
              <div class="border border-dark border-1 p-3 mb-1">
              <p class="section-label">I. FULLNAME</p>
              <div class="row g-3 mb-4">
                <div class="col-md-3">
                  <label class="form-label">First Name <small class="text-danger">Required.</small></label>
                  <input type="text" name="pd_firstname" id="pd_firstname" class="form-control fw-bold text-uppercase" placeholder="ENTER FIRST NAME" requiredxxxx>
                </div>
                <div class="col-md-3">
                  <label class="form-label">Middle Name <small class="text-danger">Required.</small></label>
                  <input type="text" name="pd_middlename" id="pd_middlename" class="form-control fw-bold text-uppercase" placeholder="ENTER MIDDLE NAME" requiredxxxx>
                </div>
                <div class="col-md-3">
                  <label class="form-label">Last Name <small class="text-danger">Required.</small></label>
                  <input type="text" name="pd_lastname" id="pd_lastname" class="form-control fw-bold text-uppercase" placeholder="ENTER LAST NAME" requiredxxxx>
                </div>
                <div class="col-md-3">
                <label class="form-label">Suffix <small class="text-danger">Required.</small></label>
                <div class="input-group">
                    <select name="pd_suffix" id="pd_suffix" class="form-select fw-bold text-uppercase" requiredxxxx>
                    <option value="" selected disabled>Select Suffix</option>
                    <option value="N/A">N/A</option>
                    <option value="JR.">JR.</option>
                    <option value="SR.">SR.</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                    </select>
                    <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" id="na_suffix">
                    <label class="form-check-label ms-1 mb-0" for="na_suffix">N/A</label>
                    </div>
                </div>
              </div>
              </div>
              </div>

              <!-- DATE OF BIRTH -->
              <div class="border border-dark border-1 p-3 mb-1">
              <p class="section-label">II. DATE OF BIRTH</p>
              <div class="row g-3 mb-4">
                <div class="col-md-4">
                  <label class="form-label">Year <small class="text-danger">Required.</small></label>
                  <select id="pd_birth_year" name="pd_birth_year" class="form-select fw-bold text-uppercase" requiredxxxx>
                    <option value="" disabled selected>Year</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label">Month <small class="text-danger">Required.</small></label>
                  <select id="pd_birth_month" name="pd_birth_month" class="form-select fw-bold text-uppercase" requiredxxxx>
                    <option value="" disabled selected>Month</option>
                    <option value="N/A">N/A</option>

                  </select>
                </div>
                <div class="col-md-4">
                  <label class="form-label">Day <small class="text-danger">Required.</small></label>
                  <select id="pd_birth_day" name="pd_birth_day" class="form-select fw-bold text-uppercase" requiredxxxx>
                    <option value="" disabled selected>Day</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>
              </div>
              </div>

  
            <!-- GENDER AND CONTACT NO -->
            <div class="border border-dark border-1 p-3 mb-1">

            <p class="section-label">III. GENDER AND CONTACT INFORMATION</p>
            <div class="row g-3 mb-4">

            <!-- Gender -->
            <div class="col-md-6">
                <label class="form-label">Gender <small class="text-danger">Required.</small></label>
                <select id="pd_gender" name="pd_gender" class="form-select fw-bold text-uppercase" requiredxxxx>
                    <option value="" disabled selected>-- SELECT --</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                </select>
            </div>

            <!-- Contact Number -->
            <div class="col-md-6">
                <label for="pd_contact_no" class="form-label">Contact Number <small class="text-danger">Required.</small></label>
                <div class="input-group">
                    <input type="text" 
                            id="pd_contact_no" 
                            name="pd_contact_no" 
                            class="form-control fw-bold text-uppercase" 
                            placeholder="E.G., 0900-000-0000" 
                            title="Format: 0900-000-0000" 
                            requiredxxxx>
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="checkbox" id="na_contact">
                        <label class="form-check-label ms-1 mb-0" for="na_contact">N/A</label>
                    </div>
                </div>
            </div>

            </div>
            </div>







              <!-- ADDRESS -->
              <div class="border border-dark border-1 p-3 mb-1">

              <p class="section-label">IV. ADDRESS INFORMATION</p>
              <div class="row g-3 mb-4">
                <div class="col-md-6">
                  <label class="form-label">Town / Municipality <small class="text-danger">Required.</small></label>
                  <select id="pd_address_town" name="pd_address_town" class="form-select fw-bold text-uppercase">
                    <option value="">Select Town</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Barangay <small class="text-danger">Required.</small></label>
                  <select id="pd_address_brgy" name="pd_address_brgy" class="form-select fw-bold text-uppercase" disabled>
                    <option value="">Select Barangay</option>
                  </select>
                </div>
              </div>
              </div>

              <hr>

              <h6 class="text-center bg-secondary text-white p-2">Work Details</h6>


            <div class="border border-dark border-1 p-3 mb-3">
            <p class="section-label mb-1">I. OFFICE INFORMATION</p>

                <!-- Containers for dynamic office content -->
                <div class="row g-3 mb-3">
                    <div class="col-12">
                        <label class="form-label">Office / Department <small class="text-danger">Required.</small></label>
                        <select id="pd_office_department_name" name="pd_office_department_name" class="form-select fw-bold text-uppercase">
                          <option value="" disabled>Select Department</option>
                        </select>
                    </div>
                </div>

                <div class="row g-3 mb-4">
                    <div class="col-md-3">
                        <label class="form-label">Eligibility <small class="text-danger">Required.</small></label>
                        <input type="text" id="pd_eligibility" name="pd_eligibility" class="form-control fw-bold text-uppercase" placeholder="E.G., REGISTER SOCIAL WORKER" requiredxxxx>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">Position <small class="text-danger">Required.</small></label>
                        <input type="text" id="pd_position_rank" name="pd_position_rank" class="form-control fw-bold text-uppercase" placeholder="E.G., SOCIAL WORKER, ETC." requiredxxxx>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">Position (acronym) <small class="text-danger">Required.</small></label>
                        <input type="text" id="pd_position_rank_acronym" name="pd_position_rank_acronym" class="form-control fw-bold text-uppercase" placeholder="E.G., SW, ETC." requiredxxxx>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">status <small class="text-danger">Required.</small></label>
                        <select id="pd_position_status" name="pd_position_status" class="form-select fw-bold text-uppercase" requiredxxxx>
                            <option value="" disabled selected>-- SELECT --</option>
                            <option value="PERMANENT">PERMANENT</option>
                            <option value="JOB ORDER">JOB ORDER</option>
                        </select>
                    </div>
                </div>


            </div>

              
              <hr>


              <div class="d-flex justify-content-end gap-2 mb-3">
                <button type="reset" class="btn btn-outline-secondary px-4">Clear</button>
                <button type="submit" id="btn-getstarted-2-profile" class="btn btn-primary px-5">Save Profile</button>
              </div>

            </form>


        </div>
    </div>
  </main>




`);


$(document).ready(function () {

  $('#profileForm').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    const $btn  = $('#btn-getstarted-2-profile');

    // prevent double submit
    if ($btn.prop('disabled')) return;

    $btn.prop('disabled', true).text('Saving...');

    $.ajax({
      url: `${SERVER_NODEJS}/insert/starting_up/profile`,
      type: 'POST',
      dataType: 'json',
      xhrFields: { withCredentials: true },
      data: $form.serialize(),

      success: (res) => {
        if (!res || !res.status || res.status.toLowerCase() !== 'success') {
          iziToast.error({
            title: 'Error',
            message: res?.message || 'Invalid token.',
            position: 'topRight'
          });

          $btn.prop('disabled', false).text('Save Profile');
          return;
        }

        iziToast.success({
          title: 'Success',
          message: res.message || 'Profile saved successfully.',
          position: 'topRight',
          timeout: 2000,
          onClosed: () => {
            window.location.href = './completed';
          }
        });

        $btn.prop('disabled', false).text('Save Profile');
      },

      error: (xhr) => {
        let errorMsg = 'Server error. Please try again.';

        if (xhr.responseText) {
          try {
            const resJson = JSON.parse(xhr.responseText);
            errorMsg = resJson.message || errorMsg;
          } catch (err) {
            console.error('Failed to parse JSON:', err);
          }
        }

        iziToast.error({
          title: 'Error',
          message: errorMsg,
          position: 'topRight'
        });

        $btn.prop('disabled', false).text('Save Profile');
      }
    });
  });

});







  // =======================
// AUTO-FORMAT CONTACT NUMBER & N/A CHECKBOXES
// =======================
$('#pd_contact_no').on('input', function() {
    let value = $(this).val().replace(/\D/g, '').substring(0, 11);
    if (value.length > 4 && value.length <= 7) {
        value = value.slice(0, 4) + '-' + value.slice(4);
    } else if (value.length > 7) {
        value = value.slice(0, 4) + '-' + value.slice(4, 7) + '-' + value.slice(7, 12);
    }
    $(this).val(value);
});

$('#na_contact').change(function() {
    if ($(this).is(':checked')) {
        $('#pd_contact_no').val('N/A').prop('disabled', true);
    } else {
        $('#pd_contact_no').val('').prop('disabled', false);
    }
});

$('#na_suffix').change(function() {
    if ($(this).is(':checked')) {
        $('#pd_suffix').val('N/A').prop('disabled', true);
    } else {
        $('#pd_suffix').val('').prop('disabled', false);
    }
});

// =======================
// BIRTHDATE DROPDOWNS
// =======================
const $year  = $('#pd_birth_year');
const $month = $('#pd_birth_month');
const $day   = $('#pd_birth_day');

// Populate Year
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1900; y--) {
    $year.append(`<option value="${y}">${y}</option>`);
}
$year.append('<option value="N/A">N/A</option>');

// Populate Month
const monthNames = [
    '[1] January','[2] February','[3] March','[4] April','[5] May','[6] June',
    '[7] July','[8] August','[9] September','[10] October','[11] November','[12] December'
];
monthNames.forEach((name, i) => {
    const val = (i + 1).toString().padStart(2, '0');
    $month.append(`<option value="${val}">${name}</option>`);
});
$month.append('<option value="N/A">N/A</option>');

// Populate Days based on selected year and month
function populateDays() {
    const y = parseInt($year.val());
    const m = parseInt($month.val());

    $day.empty();
    $day.append('<option value="">Day</option>');

    if (!y || !m) {
        refreshTomSelect('pd_birth_day');
        return;
    }

    const days = new Date(y, m, 0).getDate();

    for (let d = 1; d <= days; d++) {
        const val = d.toString().padStart(2, '0');
        $day.append(`<option value="${val}">${val}</option>`);
    }

    $day.append('<option value="N/A">N/A</option>');

    refreshTomSelect('pd_birth_day');
}

$year.on('change', populateDays);
$month.on('change', populateDays);

// =======================
// TOM SELECT STORAGE
// =======================
const tomSelectInstances = {};

// Initialize TomSelect for all selects
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const selects = main.querySelectorAll('select');

    selects.forEach(sel => {
        const ts = new TomSelect(sel, {
            plugins: ['dropdown_input'],
            create: false,
            placeholder: 'Select...',
            allowEmptyOption: true,
            closeAfterSelect: true,
            appendTo: main
        });
        tomSelectInstances[sel.id] = ts;
    });
});

// Refresh TomSelect options
function refreshTomSelect(id) {
    const ts = tomSelectInstances[id];
    if (!ts) return;

    const options = Array.from(document.querySelectorAll(`#${id} option`))
        .map(o => ({ value: o.value, text: o.textContent }));

    ts.clearOptions();
    ts.addOptions(options);
    ts.refreshOptions(false);
}

// =======================
// ADDRESS SELECT (TOWN & BARANGAY)
// =======================
const $town = $('#pd_address_town');
const $brgy = $('#pd_address_brgy');

// Enable or disable Barangay with TomSelect
function setBarangayEnabled(enabled) {
    const ts = tomSelectInstances['pd_address_brgy'];
    $brgy.prop('disabled', !enabled); // native select
    if (ts) ts.enable(enabled); // TomSelect
}

// Reset Barangay to default "Select Barangay" and disable
function resetBarangay() {
  //  $brgy.empty().append('<option value="">Select Barangay</option>');
    setBarangayEnabled(false);

    const ts = tomSelectInstances['pd_address_brgy'];
    if (ts) {
        ts.clear();
        ts.clearOptions();
        ts.addOption({ value: 'N/A', text: 'N/A' });
        ts.refreshOptions(false);
    }
}

// Load Barangays for a given town
function loadBarangays(town, search = '') {
    if (!town || town === 'N/A') {
        resetBarangay();
        return;
    }

    $.ajax({
        url: `${SERVER_NODEJS}/getdata/address/select_brgy`,
        type: 'POST',
        dataType: 'json',
        data: { town, brgy: search },
        success(rows) {
            setBarangayEnabled(true); // Enable only if town has real value

            $brgy.empty();
            $brgy.append('<option value="N/A">N/A</option>');

            rows.forEach(r => {
                $brgy.append(`<option value="${r.dt_brgy}">${r.dt_brgy}</option>`);
            });

            const ts = tomSelectInstances['pd_address_brgy'];
            if (ts) {
                ts.clear();
                refreshTomSelect('pd_address_brgy');
            }
        },
        error(err) {
            console.error('Failed to load barangays', err);
            resetBarangay();
        }
    });
}

// Load Towns
function loadTowns(search = '') {
    $.ajax({
        url: `${SERVER_NODEJS}/getdata/address/select_town`,
        type: 'POST',
        dataType: 'json',
        data: { town: search },
        success(rows) {
            $town.empty();
            $town.append('<option value="">Select Town</option>');
            $town.append('<option value="N/A">N/A</option>');

            rows.forEach(r => {
                $town.append(`<option value="${r.dt_town}">${r.dt_town}</option>`);
            });

            refreshTomSelect('pd_address_town');

            // Reset Barangay on initial load
            resetBarangay();
        },
        error(err) {
            console.error('Failed to load towns', err);
            resetBarangay();
        }
    });
}

// Town change event
$(document).on('change', '#pd_address_town', function () {
    const town = $(this).val();

    // If town is empty or "N/A", reset Barangay
    if (!town || town === 'N/A') {
        resetBarangay();
        return;
    }
    // If town has value, load corresponding barangays
    loadBarangays(town);
});

// Initial load
loadTowns();




// ------------------------
// Load Departments & Connect to TomSelect
// ------------------------
function loadDepartmentsXS() {
    const $departmentSelect = $('#pd_office_department_name');
    const tsInstance = tomSelectInstances['pd_office_department_name'];

    $.ajax({
        url: `${SERVER_NODEJS}/getdata/office/department`,
        type: 'GET',
        dataType: 'json',
        xhrFields: { withCredentials: true },
        success(response) {
            // Clear select
            $departmentSelect.empty();
            $departmentSelect.append('<option value="">Select Department</option>');
            $departmentSelect.append('<option value="N/A">N/A</option>');

            if (!response.status || response.status.toLowerCase() !== 'success' || !response.data || response.data.length === 0) {
                iziToast.warning({
                    title: 'Notice',
                    message: 'No departments found.',
                    position: 'topRight'
                });
                if (tsInstance) tsInstance.clearOptions();
                return;
            }

            // Add options from API
            response.data.forEach(dept => {
                const optionText = `${dept.office_id} - ${dept.office_name} - ${dept.office_acronym}`;
                const optionValue = `${dept.office_id} / ${dept.office_name} / ${dept.office_acronym}`;
                $departmentSelect.append(`<option value="${optionValue}">${optionText}</option>`);
            });

            // Refresh TomSelect options if initialized
            if (tsInstance) {
                refreshTomSelect('pd_office_department_name');
            } else {
                // Initialize if not yet
                const ts = new TomSelect($departmentSelect[0], {
                    plugins: ['dropdown_input'],
                    create: false,
                    valueField: 'value',
                    labelField: 'text',
                    searchField: ['text'],
                    placeholder: 'Select Department...',
                    allowEmptyOption: true,
                    closeAfterSelect: true,
                    render: {
                        option: function(item, escape) {
                            return `<div>${escape(item.text)}</div>`;
                        },
                        item: function(item, escape) {
                            return `<div>${escape(item.text)}</div>`;
                        }
                    }
                });
                tomSelectInstances['pd_office_department_name'] = ts;
            }
        },
        error(err) {
            console.error('Failed to load departments', err);
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch departments',
                position: 'topRight'
            });
        }
    });
}

// Load departments on document ready
$(document).ready(function () {
    loadDepartmentsXS();
});
