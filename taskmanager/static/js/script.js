document.addEventListener('DOMContentLoaded', function () {
  // sidenav initialization
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // datepicker initialization
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {
      done: "Select"
    },
  });

  // Select Initialization
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // Collapsible Initialization
  var collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);

  // modal initialization
  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

});