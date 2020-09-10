var category = {};
var comments ={};

document.addEventListener("DOMContentLoaded", function(e){
   
    getJSONDataProductInfo(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            category = resultObj.data;
            var productNameHTML = document.getElementById("productName");
            var productDescriptionHTML = document.getElementById("productDescription");
            var productSoldHTML = document.getElementById("productSold");
            var productCategoryHTML = document.getElementById("productCategory");
            var productPriceHTML = document.getElementById("productPrice");
    
            productNameHTML.innerHTML = category.name;
            productDescriptionHTML.innerHTML = category.description;
            productSoldHTML.innerHTML = category.soldCount;
            productCategoryHTML.innerHTML = category.category;
            productPriceHTML.innerHTML = category.cost;
            showImagesGallery(category.images);
        }
    });
        
    getJSONDataProductComments(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        comments = resultObj.data;
        showCommentsList(comments);
        });
    });

function showImagesGallery(array){
let htmlContentToAppend = "";
    for(let i=0; i<array.length; i++){
    let imageSrc = array[i];
    htmlContentToAppend += `<div class="col-lg-3 col-md-4 col-6">
    <div class="d-block mb-4 h-100">
    <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
    </div>
    </div>`
    document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function countStars(i){
var cStars = new String;
var calification = parseInt(i);
    for (x=0 ; x<calification ; x++){
        cStars+=`<span class= "fas fa-star" style="color:#FFFFFF;"></span>`
    };
    return cStars;
}

function calculoPuntaje(arreglo){
var valor;
    for(i=0;i<arreglo.length; i++){
        if (arreglo[i].checked){
        valor = parseInt(arreglo[i].value); 
        }
    }
    return valor;
}

function showCommentsList(array){
let htmlContentToAppend = "";
for(let i=0; i<array.length; i++){
let commentElement = array[i];
var scorePoints = commentElement.score;
htmlContentToAppend += `
<div id="comentario">
    <h6 style="text-align: left;">
</span>   
<span 
    style="vertical-align: bottom;" id="userComment">
    <strong>`+commentElement.user+`</strong>
</span>
<span style="float: right; padding-right: 10px ;" id="score">Reputación: `+countStars(scorePoints)+`</span>    
<hr>
    <span style="float: left; id="descriptionComment">`+commentElement.description+`</span>
    <span style="float: right;" id="dateComment;">Fecha: <em>`+commentElement.dateTime+`</em></span>
<hr>    
    </div>`
        document.getElementById("comments").innerHTML = htmlContentToAppend;
    }
}
   
function enviarComentario(){
    var nombre = document.getElementById("idNewComment").value;
    var hoy = new Date();
    var fecha= hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+hoy.getDate();
    var hora=hoy.getHours()+":"+hoy.getMinutes()+":"+hoy.getSeconds();
    var fechaYhora=fecha+" "+hora;
    var arrayEstrellas = document.getElementsByClassName("scoreStar");
    var calificacion = calculoPuntaje(arrayEstrellas);
    var comentario = document.getElementById("newComment").value;
    var comentarioCompleto = {
        "user": nombre,
        "dateTime": fechaYhora,
        "score": calificacion,
        "description": comentario
    }
    if(nombre.trim()!="" && comentario.trim()!=""){
    comments.push(comentarioCompleto);
    showCommentsList(comments);}
    else{
        alert("Debes completar todos los campos antes de publicar un comentario")
    }
}