

// This instructions are for making the music from inside the details-modal to stop when the modal is closed

//Instruction to stop the music from the Avantasia - Moonglow album
$("#Avantasia-Moonglow").on('hidden.bs.modal', ()=> {
    $("#Avantasia-Moonglow iframe").attr("src", $("#Avantasia-Moonglow iframe").attr("src"));
});


$("#modalButton").click( ()=> {
    let name = $("#Avantasia-Moonglow").attr("id");
    
    if(name === 'Avantasia-Moonglow') {
        $("#details-modal__album").html(dataBase.Avantasia.Moonglow.album);
        $("#details-modal__artist").html(dataBase.Avantasia.Moonglow.artist);
        $("#details-modal__year").html(dataBase.Avantasia.Moonglow.year);
        $("#details-modal__genre").html(dataBase.Avantasia.Moonglow.genre);
        $("#details-modal__subgenre").html(dataBase.Avantasia.Moonglow.subgenre);
        $("#details-modal__spotifyPlaylist").html(dataBase.Avantasia.Moonglow.spotifyPlaylist);
    };
  });