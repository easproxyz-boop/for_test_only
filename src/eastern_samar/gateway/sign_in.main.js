import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SERVER_NODEJS } from '/src/helper/serverside/server_nodejs.js';

// Make the body a relative container
$('body').css({
  'position': 'relative',
  'min-height': '100vh',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'font-family': 'sans-serif',
  'overflow': 'hidden',
  'background-image': "url('/public/assets/images/background/es_capitol.jpg')",
  'background-size': 'cover',
  'background-position': 'center',
  'background-repeat': 'no-repeat'
});

// Add dark overlay
$('body').prepend(`
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: -1;
  "></div>
`);

// Inject Bootstrap sign-in card
$('#html_gateway_sign_in').html(`
  <div class="card shadow-lg p-4 p-md-5 text-center" style="width: 24rem; backdrop-filter: blur(8px); background-color: rgba(255, 255, 255, 0.9); border-radius: 1rem;">
    
    <img src="/public/assets/images/logo/provincial-capitol-logo.png" class="card-img-top mx-auto mb-4" style="width: 80px; height: 80px;" alt="Provincial Capitol Logo" />

    <h1 class="h4 fw-bold mb-2 text-primary">Eastern Samar Action Center</h1>
    <p id="sign-in-message" class="text-muted mb-4 small">Welcome! Please sign in to continue with your official Google account.</p>

    <button id="google-sign-in" class="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center mb-3">
      <img src="/public/assets/icons/google-logo.svg" class="me-2" style="width: 24px; height: 24px;" alt="Google logo" />
      Sign in with Google
    </button>

    <p class="mt-3 text-muted small">
      By signing in, you agree to our 
      <a href="#" class="text-primary">Terms of Service</a> and 
      <a href="#" class="text-primary">Privacy Policy</a>.
    </p>
  </div>
`);

// Attach click handler
$('#google-sign-in').on('click', () => {
  $('#sign-in-message').text('Redirecting to Google sign-in...');
  window.location.href = `${SERVER_NODEJS}/auth/google`;
});
