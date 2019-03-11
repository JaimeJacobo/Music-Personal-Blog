

// This instructions are for making the music from inside the details-modal to stop when the modal is closed

//Instruction to stop the music from the Avantasia - Moonglow album
$("#Avantasia-Moonglow").on('hidden.bs.modal', ()=> {
  $("#Avantasia-Moonglow iframe").attr("src", $("#Avantasia-Moonglow iframe").attr("src"));
});


$("#Avantasia-Moonglow").click( ()=> {
  $("#details-modal__album-cover").attr('href', dataBase.Avantasia.Moonglow.albumLink);
  $("#details-modal__album-cover").html(dataBase.Avantasia.Moonglow.albumCover);
  $("#details-modal__album").html(dataBase.Avantasia.Moonglow.album);
  $("#details-modal__artist").html(dataBase.Avantasia.Moonglow.artist);
  $("#details-modal__year").html(dataBase.Avantasia.Moonglow.year);
  $("#details-modal__genre").html(dataBase.Avantasia.Moonglow.genre);
  $("#details-modal__subgenre").html(dataBase.Avantasia.Moonglow.subgenre);
  $("#details-modal__spotifyPlaylist").html(dataBase.Avantasia.Moonglow.spotifyPlaylist);
});


$("#MagoDeOz-IraDei").click( ()=> {
  $("#details-modal__album-cover").attr('href', dataBase.MagoDeOz.IraDei.albumLink);
  $("#details-modal__album-cover").html(dataBase.MagoDeOz.IraDei.albumCover);
  $("#details-modal__album").html(dataBase.MagoDeOz.IraDei.album);
  $("#details-modal__artist").html(dataBase.MagoDeOz.IraDei.artist);
  $("#details-modal__year").html(dataBase.MagoDeOz.IraDei.year);
  $("#details-modal__genre").html(dataBase.MagoDeOz.IraDei.genre);
  $("#details-modal__subgenre").html(dataBase.MagoDeOz.IraDei.subgenre);
  $("#details-modal__spotifyPlaylist").html(dataBase.MagoDeOz.IraDei.spotifyPlaylist);
});


$("#ModoAvion-ModoAvion").click( ()=> {
  $("#details-modal__album-cover").attr('href', dataBase.ModoAvion.ModoAvion.albumLink);
  $("#details-modal__album-cover").html(dataBase.ModoAvion.ModoAvion.albumCover);
  $("#details-modal__album").html(dataBase.ModoAvion.ModoAvion.album);
  $("#details-modal__artist").html(dataBase.ModoAvion.ModoAvion.artist);
  $("#details-modal__year").html(dataBase.ModoAvion.ModoAvion.year);
  $("#details-modal__genre").html(dataBase.ModoAvion.ModoAvion.genre);
  $("#details-modal__subgenre").html(dataBase.ModoAvion.ModoAvion.subgenre);
  $("#details-modal__spotifyPlaylist").html(dataBase.ModoAvion.ModoAvion.spotifyPlaylist);
});