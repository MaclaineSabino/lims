
lista = [
{titulo:"Inteligência artificial",imagem:"images/tecnologia.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Python para pentest",imagem:"images/tecnologia2.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Nova biblioteca",imagem:"images/tecnologia3.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Novas apis",imagem:"images/tecnologia4.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Robótica avançada",imagem:"images/tecnologia5.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Robótica no lims",imagem:"images/tecnologia6.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Nova parceria no lims",imagem:"images/tecnologia7.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"O novo site do lims",imagem:"images/tecnologia8.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Inteligência artificial",imagem:"images/tecnologia.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Python para pentest",imagem:"images/tecnologia2.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Nova biblioteca",imagem:"images/tecnologia3.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Novas apis",imagem:"images/tecnologia4.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Robótica avançada",imagem:"images/tecnologia5.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Robótica no lims",imagem:"images/tecnologia6.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"Nova parceria no lims",imagem:"images/tecnologia7.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"},
{titulo:"O novo site do lims",imagem:"images/tecnologia8.jpg",texto:"Novas tecnologias estão sendo desenvolvidas no lims"+
"onde, com parceria de alunos e professores, grandes conquistas estão sendo realizadas"}

];

function inserirConteudo(n){
	
	$('.carrosel_nibble .capas img').remove();
	$('.carrosel_nibble .titulo').empty();
	$('.carrosel_nibble .conteudo_carrosel').empty();
	
	$('.carrosel_nibble #capa0').append("<img src="+lista[n].imagem+">");
	$('.carrosel_nibble #titulo0').append(lista[n].titulo);
	$('.carrosel_nibble #conteudo0').append(lista[n].texto);
	n++;
	
	$('.carrosel_nibble #capa1').append("<img src="+lista[n].imagem+">");
	$('.carrosel_nibble #titulo1').append(lista[n].titulo);
	$('.carrosel_nibble #conteudo1').append(lista[n].texto);
	n++;
	
	$('.carrosel_nibble #capa2').append("<img src="+lista[n].imagem+">");
	$('.carrosel_nibble #titulo2').append(lista[n].titulo);
	$('.carrosel_nibble #conteudo2').append(lista[n].texto);
	n++;
	
	$('.carrosel_nibble #capa3').append("<img src="+lista[n].imagem+">");
	$('.carrosel_nibble #titulo3').append(lista[n].titulo);
	$('.carrosel_nibble #conteudo3').append(lista[n].texto);
	mostrar("carrosel_nibble");
	
	
}
function deslocamento(classe,valor,deslocamento){
	$("."+classe).css("position","fixed");
		
	$("."+classe).css("margin-"+deslocamento,valor+"px");
	
}

function mostrar(classe){
	$("."+classe).fadeIn(1000);
}
function esconder(classe){
	$("."+classe).fadeOut(0);
}

var k=0;

(function($){
  $(function(){
  	
  	
  	//carrosel
  	inserirConteudo(k);
	$("#conteiner_carrosel_nibble #botao_direito").click(function(e){
		
		
	  if(k+4<lista.length){
	  	k=k+4;
	  esconder("carrosel_nibble");
		inserirConteudo(k);
		}
       
		
	});
	$("#conteiner_carrosel_nibble #botao_esquerdo").click(function(e){
		if(k>=4){
		k=k-4;
		 esconder("carrosel_nibble");
		inserirConteudo(k);
		}
	});
	//fim carrosel

    $('.button-collapse').sideNav();
    
    $('#btn_membros').click(function(){
    	
    	$('#index-banner').css('display','none');
    	$('.section').css('display','none');
    	$('#nibble_lista').css('display','none');
    	$('#nibble_membros').css('display','block');
    	$('#pj_projetos').css('display','none');
    	
    });
    
      $('#btn_home').click(function(){
    	
    	$('#index-banner').css('display','block');
    	$('.section').css('display','block');
    	$('#nibble_membros').css('display','none');
    	$('#nibble_lista').css('display','none');
    	$('#pj_projetos').css('display','none');
    });
     $('#btn_publicacoes').click(function(){
    	
    	$('#index-banner').css('display','none');
    	$('.section').css('display','none');
    	$('#nibble_membros').css('display','none');
    	$('#nibble_lista').css('display','block');
    	$('#pj_projetos').css('display','none');
    });
    $('#btn_projetos').click(function(){
    	$('#index-banner').css('display','none');
    	$('.section').css('display','none');
    	$('#nibble_membros').css('display','none');
    	$('#nibble_lista').css('display','none');
    	$('#pj_projetos').css('display','block');
    });
    
    
    
    
    $('#pj_projetos #lis_projetos li').hover(function(e){ //efeito sobre a lista de projetos
    	
    	$(this).css('background-color','#D9EAF7');
    	
    	
    },
    function(e){
    	
    	$(this).css('background-color','#FFFFFF');
    	
    	
    });//fim efeito sobre lista projetos
    
    
    
    
    $('#nibble_membros li').hover(function(e){ //efeito sobre a lista de membros
    	
    	$(this).css('background-color','#D9EAF7');
    	
    	
    	
    },
    function(e){
    	
    	$(this).css('background-color','#FFFFFF');
    	
    	
    });//fim efeito sobre lista de membros
    
    
    $('.carrosel_nibble').hover(function(e){ //efeito sobre a lista do carrosel
    	
    	$(this).css('background-color','#D9EAF7');
    	$(this).css('cursor','pointer');
    	
    	
    	
    },
    function(e){
    	
    	$(this).css('background-color','#FFFFFF');
    	
    	
    });
    
    $('#login-nibble').hover(function(e){ //efeito sobre icone login
    	
    	$(this).css('color','#D9EAF7');
    	$(this).css('cursor','pointer');
    	 Materialize.toast('Área do administrador', 1000)
    	 
    	$('#formulario-nibble-login').css("display","block");
    	$('#formulario-nibble-login').slidDown(3000);
    	
    	
    	
    	
    },
    function(e){
    	
    	$(this).css('color','rgb(3, 169, 244)');
       	
    });
    
    $('#login-nibble').click(function(e){
    	$('#formulario-nibble-login').slideUp(1500);
    })
    
    $('#nibble_membros li img').hover(
    function(e){
    	
    	$(this).css('height','100px');
    	$(this).css('width','100px');
    	
    }, 
    function(e){
    	
    		$(this).css('height','45px');
    	$(this).css('width','45px');
    	
    	
    });
    
    
    
    
    
    var len=$('.conteudo').text().length; //efeito sobre a listagem de publicações
        if(len>80)
        {
           // $('.conteudo').text($('.conteudo').text().substr(0,90)+'...');
           var query = $('.conteudo').text().split(" ", 12);
                query.push('...');
                var res = query.join(' ');
            $('.conteudo').text(res);
        }
	
	
	$('#nibble_lista ul .listas').hover(function(e){
		$(this).css('box-shadow','10px 6px 11px 1px rgba(0,0,0,0.75)');
	},
	function(e){
		
		$(this).css('box-shadow','0px 0px 34px -14px rgba(0,0,0,0.75)');
		
	});//fim do efeito da listagem de publicações
    
    
    
    
    $('#btn_contato').click(function(){  //efeito formulario flutuante
    
    	
		$('#formulario-nibble').css('position','fixed');
		$('#formulario-nibble').css('display','block');
		$('#formulario-nibble').css('z-index','1000');
		$('#botao-nibble-fechar').css('z-index','1200');
		var largura = $('body').width();
		
	
		var larguraform = $('#formulario-nibble').width();
	
		var left = (largura-larguraform)/2;
	
		$('#formulario-nibble ~ nav').css('opacity','0.2');
		$('#formulario-nibble ~ div').css('opacity','0.2');
		$('#formulario-nibble ~ footer').css('opacity','0.2');
		
		
		$('#formulario-nibble').css('margin-top','100px');
		$('#formulario-nibble').css('margin-left',left+'px');
		$('#formulario-nibble').css('display','block');
		
		$('#botao-nibble-fechar').click(function(e){
			$('#formulario-nibble').css('display','none');
			$('#formulario-nibble ~ div').css('opacity','1.0');
			$('#formulario-nibble ~ nav').css('opacity','1.0');
		$('#formulario-nibble ~ div').css('opacity','1.0');
		$('#formulario-nibble ~ footer').css('opacity','1.0');
			
			
		});
	
		});  //fim formulario flutuante
		
		
		
		
  
  }); // end of document ready
  $('.carousel').carousel();
  
  


})(jQuery); // end of jQuery name space