$(document).ready(function(){
  page.init();
});


var page = {
  url: 'http://tiy-fee-rest.herokuapp.com/collections/terry',
  init: function(){
    page.initStyling();
    //page.initEvents();
  },
  initStyling: function(){
    page.getTeams();
  },
  getTeams: function(){
    $.ajax({
        url: page.url,
        method: 'GET',
        success: function(teamsArr){
          teamsArr.forEach(function(el){
            $('body').prepend("<div class='team' data-teamid='"+el._id+"'><img src='"+el.logo_url+"'><h3>" + el.team + '<br>'+ el.wins + ' - ' + el.losses + '</h3>');
          });
        }
      });
    }
};
