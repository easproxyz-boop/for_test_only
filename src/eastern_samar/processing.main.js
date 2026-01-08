import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SERVER_NODEJS } from '/src/helper/serverside/server_nodejs.js';

import { CHECK_GOOGLE_ACCESS } from '/src/controller/processing.main.controller.js';

// Run Google access check
CHECK_GOOGLE_ACCESS(SERVER_NODEJS);

// Make body a relative container
$('body').css({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
  overflow: 'hidden'
});

// Inject Bootstrap loading/sign-in card
$('#html_check_processing_po9cx6').html(`
  <div class="text-center" style="max-width: 20rem; backdrop-filter: blur(6px);">
    <img src="/public/assets/images/logo/provincial-capitol-logo.png" 
         class="mx-auto mb-4" 
         style="width: 200px; height: 200px;" 
         alt="Provincial Capitol Logo" />

    <h2 class="h5 fw-semibold mb-3 text-primary">Loading</h2>

    <div class="d-flex justify-content-center gap-2">
      <span class="dot bg-primary rounded-circle" style="width:16px; height:16px; animation: bounce-custom 0.6s infinite; animation-delay:0s;"></span>
      <span class="dot bg-primary rounded-circle" style="width:16px; height:16px; animation: bounce-custom 0.6s infinite; animation-delay:0.15s;"></span>
      <span class="dot bg-primary rounded-circle" style="width:16px; height:16px; animation: bounce-custom 0.6s infinite; animation-delay:0.3s;"></span>
    </div>
  </div>
`);

// Add custom bounce animation
$('<style>').text(`
  @keyframes bounce-custom {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`).appendTo('head');
