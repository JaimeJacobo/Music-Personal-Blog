

// This instructions are for making the music from inside the details-modal to stop when the modal is closed

//Instruction to stop the music from the Avantasia - Moonglow album
$("#Avantasia-Moonglow").on('hidden.bs.modal', ()=> {
    $("#Avantasia-Moonglow iframe").attr("src", $("#Avantasia-Moonglow iframe").attr("src"));
});


$("#modalButton").click( ()=> {
    let name = $("");
  });