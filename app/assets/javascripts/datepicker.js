document.addEventListener("turbolinks:load", function() {

  let parsedUrl = new URL(window.location.href);
  let date = new Date(parsedUrl.searchParams.get("date"));

  let datePickers = bulmaCalendar.attach('#bulmaDatepicker', {
    overlay: true,
    maxDate: new Date(),
    selectedDate: date
  });
  window.setTimeout(function() {
    [].forEach.call(datePickers, function(datePicker) {
    datePicker.on('datepicker:date:selected', function(datePicker) {
      let date = new Date(datePicker.date);
      Turbolinks.visit('/projects?date=' + moment(date).format('YYYY-M-D'))
      datepicker.value = date;
    });
  })}, 100);
});
