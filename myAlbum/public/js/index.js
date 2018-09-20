$(function () {
  $('.row').on('click', '.link-route-name', function () {
    console.log('dasdas');

    let name = $(this).find('.flie-name').eq(0).html().trim();
    let url = window.location.href + name;
    console.log(url);
    window.location.href = url;
  });
});