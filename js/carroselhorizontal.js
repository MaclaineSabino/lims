/**
 * @author Nibble
 */

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
	$('.carrosel_nibble .conteudo').empty();
	
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


function mostrar(classe){
	$("."+classe).fadeIn(1000);
}
function esconder(classe){
	$("."+classe).fadeOut(0);
}

var k=0;
$(document).ready(function(e){
	//alert(lista[1].imagem);
	
	
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
	
	
	
	
});
