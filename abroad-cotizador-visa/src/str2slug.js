str2slug(str) {
  /* str2slug(str)
    Elimina espacios y modifica acentos y simbolos para usarla en 
    Nombre de imagen y archivo pdf 
    ej: corea del sur ==> coreadelsur
  */
  var rep = '_';
  str = str.toLowerCase()
  .replace(/\s+/g, rep) // replace whitespace

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç";
  var to   = "aaaaeeeeiiiioooouuuunc";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(
                new RegExp(from.charAt(i), 'g'),
                to.charAt(i)
            );
  }
        // remove invalid chars
  str = str.replace(new RegExp('[^a-z0-9'+rep+']',"g"), '')
        .replace(/-+/g, rep); // collapse dashes;

  return str;
};