$(document).ready(function(){
  var parent = document.querySelector('.content'),
      lang = document.querySelector('.languages'),
      skills = document.querySelector('.skills-courses'),
      science = document.querySelector('.science');

  moveLang();
  $(window).resize(moveLang);

  function moveLang() {
    if (document.documentElement.clientWidth > 768) {
      console.log('first rule')
      parent.insertBefore(lang, science);
    } else {
      console.log('second rule')
      parent.insertBefore(lang, skills);
    }
    console.log('Width: ' + document.documentElement.clientWidth)
  }
});
//{% url 'set_language' %}