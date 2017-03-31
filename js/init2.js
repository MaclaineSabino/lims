(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
  
  //pagina projeto.html
    $('#icone_proje').click(function(e){
    	
    	window.location.href="arquivos/segurançasmtp.pdf";
    	
    	
    });
    
    $(window).scroll(function(e){
        var a = $(window).scrollTop();
        
        var cont = $('#central_publica').height();
        
        if(a>cont){
        	$('#menu_popup').slideDown('slow');
        	$(this).off();
        }
    });
    
    $('#menu_popup #botao_fechar_popup').click(function(){
    	$('#menu_popup').css('display','none');
    	
    	
    });
    
    
    //fim projeto.html
})(jQuery); // end of jQuery name space