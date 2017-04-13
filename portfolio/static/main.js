$(document).ready(function(){
  var parentWide = document.querySelector('.wide'),
      parentSide = document.querySelector('.side'),
      lang = document.querySelector('.languages'),
      skills = document.querySelector('.skills'),
      science = document.querySelector('.science'),
      experience = document.querySelector('.experience'),
      contacts = document.querySelector('.contacts');

  moveLang();
  $(window).resize(moveLang);

  function moveLang() {
    if (document.documentElement.clientWidth > 768) {
      parentSide.insertBefore(contacts, lang);
    } else {
      parentWide.insertBefore(contacts, experience);
    }
  }

  if (window.screen.width >= 640) {
  // include YouTube API
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // contain all needed variables for playback YouTube video
    var player = {
      instantYT: null,
      width: null,
      aspectRatio: null,
      iframe: null,
      play: function(e) {
        e.target.playVideo();
      }
    }

  // event for include iframe and start playback
    $('.run-video').click(function(e) {
      e.preventDefault();
      var videoId = this.getAttribute('data-video-id');
      var src = 'https://www.youtube.com/embed/' + videoId + '?enablejsapi=1';
      player.iframe = document.createElement('iframe');
      player.width = $("body").width() - $("body").width() * 0.5;
      player.aspectRatio = 315 / 560;

      $(player.iframe).attr({
        id: 'player',
        width:  player.width,
        height: player.width * player.aspectRatio,
        src: src,
        frameborder: false,
        allowfullscreen: true
      })

      $('.modal-video-wrap').append(player.iframe);
      $('.modal-video').css('display', 'block');
      setTimeout(function(){
        $('.modal-video').css('opacity', 1);
      }, 50)
      player.instantYT = new YT.Player('player', {
        events: { 'onReady': player.play }
      });
    })

  // fadeout modal window
    $('.modal-video, .modal-video-close').click(function(e) {
      var modal = $('.modal-video');
      $(modal).css('opacity', 0);
      $(modal).one('transitionend', function() {
        $(modal).css('display', 'none');
        player.instantYT.destroy();
      })
    })

  // change size of video iframe in modal window
    $(window).resize(function() {
      var w = $("body").width();
      player.width = w - w  * 0.5;
      $(player.iframe)
        .width(player.width)
        .height(player.width * player.aspectRatio);
    });
  }
});