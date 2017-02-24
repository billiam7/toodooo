// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function() {
  $('#task_name').focus();

  $('.modal-footer .btn-primary').click(function() {
    console.log($('.submit'));
  });
  $('button.btn.btn-primary').on('click', function() {
    $('#edit_task_3 > div.actions > input[type="submit"]').click();
  });
});
