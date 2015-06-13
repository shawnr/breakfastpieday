// scripts go here
$(document).on('ready', function(){
    $('.social-poster').on('click', function(){
        ga('send', {
          'hitType': 'event',          // Required.
          'eventCategory': 'social',   // Required.
          'eventAction': 'download',      // Required.
          'eventLabel': 'shareables',
          'eventValue': 1
        });
    })
});