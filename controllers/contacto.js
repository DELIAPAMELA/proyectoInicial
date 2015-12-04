exports.registroContacto= function (req, res){
res.render('registro_contacto.ejs', {titulo:'registro de contacto'} )

}
exports.respuestaContacto= function (req, res){
res.render('registro_contacto.ejs',{mensaje:'se registro al contactar'})
}