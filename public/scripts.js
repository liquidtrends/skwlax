$( window ).load(function() {
  var $items = $('.tab-item');
  var $tabs = $('.tab-content');

  $('.tab-item').on('click', (event) => {
    var $item = $(event.target);
    var identifier = $item.data('tab');
    var $tab = $tabs.filter(`[data-tab="${identifier}"]`);

    $items.removeClass('is-active');
    $tabs.removeClass('is-active');

    $item.addClass('is-active');
    $tab.addClass('is-active');
  });
}
