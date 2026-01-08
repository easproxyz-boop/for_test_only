import $ from 'jquery';
import { io } from 'socket.io-client';
//import { SERVER_NODEJS } from '/src/helper/serverside/server_nodejs.js';

export function CHECK_GOOGLE_ACCESS(SERVER_NODEJS) {
  const currentPath = window.location.pathname;
  let targetPage = '/eastern_samar/processinng';

  $.ajax({
    url: `${SERVER_NODEJS}/getdata/user_access_google`,
    type: 'POST',
    dataType: 'json',
    xhrFields: { withCredentials: true },

    success: function (res) {
      const data = res.data || {};

      // If no Google email, redirect to sign-in
      if (!data.google_email) {
        if (currentPath !== '/sign-in') {
          window.location.replace('/sign-in');
        }
        return;
      }

      // Populate user info
      $('.user-id').text(data.google_id || 'N/A');
      $('.user-email').text(data.google_email || 'N/A');
      $('.user-name').text(data.google_name || 'N/A');
      $('.user-picture').attr('src', data.google_picture || '');
      $('.user-access-role').text(data.access_role || '');

      // Determine target page
      switch (data.current_status) {
        case 'TOKEN':
          targetPage = '/eastern_samar/starting_up/token';
          break;
        case 'PROFILE':
          targetPage = '/eastern_samar/starting_up/profile';
          break;
        case 'COMPLETED':
          targetPage = '/eastern_samar/starting_up/completed';
          break;
        case 'BLOCKED':
          targetPage = '/eastern_samar/gateway/sign-in';
          break;
        case 'ACTIVE':
          targetPage = '/eastern_samar/home';

          break;
        default:
          targetPage = '/eastern_samar/gateway/sign-in';
      }

      // Redirect if needed
      if (currentPath !== targetPage) {
        window.location.replace(targetPage);
      }

      // Initialize Socket.IO
      const socket = io(SERVER_NODEJS, { withCredentials: true });
      const email_address = data.google_email.toUpperCase();

      // Join room only once
      if (!window.emailRoomJoined) {
        socket.emit('join_email_room', email_address);
        window.emailRoomJoined = true;
        console.log('Joined email room:', email_address);
      }

      // Listen for updates
      socket.on('user_updated', (payload) => {
        console.log('User update received:', payload);
        location.reload();
      });
    },

    error: function (xhr) {
      console.error('Error fetching Google user access info:', xhr.responseText);
      //alert('Error fetching user access info. Please sign in again.');
/*       // Optionally redirect to sign-in on error
      if (currentPath !== '/sign-in') {
        window.location.replace('/sign-in');
      } */
    }
  });
}
