
$(document).ready(function(){

   $('.weekly-top-ranking').hide();
   
   $.ajaxSetup({ cache: false });

   $.getJSON('data.json', function(data) {
      $.each(data, (key, value)=>{
         $('#prueba').append($('<button type="button" id="'+ value.position +'" class="each-album-button" data-toggle="modal" data-target="#details-modal"><img id="'+ value.position +'" src="'+ value.albumCover +'" alt="'+ value.imageAlt +'"></button>'));
      });
   });

   $('#search').keyup(()=>{
      $('#prueba').html('');
         setTimeout(()=>{
            $('.each-album-button').click(()=>{
               cleanModal();
               getModalInfo(event.target.id);
            });
         }, 10);
      // $('#state').val('');
      let searchField = $('#search').val();
      let expression = new RegExp(searchField, "i");
      $.getJSON('data.json', (data)=>{
         $.each(data, (key, value)=>{
            if (value.artist.search(expression) != -1 || value.album.search(expression) != -1){
               $('#prueba').append($('<button type="button" id="'+ value.position +'" class="each-album-button" data-toggle="modal" data-target="#details-modal"><img id="'+ value.position +'" src="'+ value.albumCover +'" alt="'+ value.imageAlt +'"></button>'));
            };
         });
      });
   });

   let cleanModal = ()=> {
      $('#details-modal__complete-name').html('');
      $('#details-modal__album').html('');
      $('#details-modal__artist').html('');
      $('#details-modal__year').html('');
      $('#details-modal__genre').html('');
      $('#details-modal__subgenre').html('');
      $('#details-modal__spotifyPlaylist').html('');
   };

   let getModalInfo = (position)=>{
      $.getJSON('data.json', (data)=>{
         $('#details-modal__complete-name').append(data[position].imageAlt);
         $('#details-modal__album-cover').attr('href', data[position].albumLink);
         $('#details-modal__album-cover-image').attr('src', data[position].albumCover);
         $('#details-modal__album').append(data[position].album);
         $('#details-modal__artist').append(data[position].artist);
         $('#details-modal__year').append(data[position].year);
         $('#details-modal__genre').append(data[position].genre);
         $('#details-modal__subgenre').append(data[position].subgenre);
         $('#details-modal__spotifyPlaylist').append(data[position].spotifyPlaylist);
      });
   };

   //Instruction to stop the music from the Avantasia - Moonglow album
   $("#prueba2").on('hidden.bs.modal', ()=> {
      $("#prueba2 iframe").attr("src", $("#prueba2 iframe").attr("src"));
   });

   // This is to show the 'All Albums Content' on the main page
   $('#all-albums-button').click(()=>{
      $('.all-albums-content').show();
      $('.weekly-top-ranking').hide();
   });
 
   // This is to show the 'Top Weekly Ranking' on the main page
   $('#weekly-top-ranking-button').click(()=>{
      $('.weekly-top-ranking').show();
      $('.all-albums-content').hide();
   });

   // This is to open the Avantasia - Moonglow modal when you hit the details button
   $('#Avantasia-Moonglow-button').click(()=>{
      event.target.id = "8";
      $('#8').click();
   });


   setTimeout(()=>{
      $('.each-album-button').click(()=>{
         cleanModal();
         getModalInfo(event.target.id);
      });
   }, 10);

});



   

   



      