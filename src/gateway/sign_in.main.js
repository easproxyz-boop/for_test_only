import $ from 'jquery';
import '/src/css/tailwind.css'; // Import Tailwind

// Make the body a relative container
$('body').css({
  'position': 'relative',
  'min-height': '100vh',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'font-family': 'sans-serif',
  'overflow': 'hidden'
});

// Add the background image with dark overlay
$('body').prepend(`
  <div class="absolute top-0 left-0 w-full h-full" style="
    background-image: url('/public/assets/images/background/es_capitol.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.5);
    z-index: -1;
  "></div>
`);

// Inject the modern sign-in card
$('#html_gateway_sign_in').html(`
  <div class="bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl w-96 max-w-full text-center transition-transform transform hover:scale-105 backdrop-blur-sm">
    
    <img src="/public/assets/images/logo/provincial-capitol-logo.png" class="w-20 h-20 mx-auto mb-6" alt="Provincial Capitol Logo" />

    <h1 class="text-3xl font-extrabold mb-2 text-blue-700">Eastern Samar Action Center</h1>
    <p id="sign-in-message" class="text-gray-500 mb-8 text-sm">Welcome! Please sign in to continue with your official Google account.</p>

    <button id="google-sign-in" class="flex items-center justify-center w-full px-4 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-lg shadow hover:shadow-md transition hover:bg-gray-50">
      <img src="/public/assets/icons/google-logo.svg" class="w-6 h-6 mr-3" alt="Google logo" />
      Sign in with Google
    </button>

    <p class="mt-6 text-gray-400 text-xs">By signing in, you agree to our <a href="#" class="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.</p>
  </div>
`);

// Attach click handler
$('#google-sign-in').on('click', () => {
  $('#sign-in-message').text('Redirecting to Google sign-in...');
  window.location.href = '/auth/google';
});
