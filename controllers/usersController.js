const userController = {
    detallePost: function(req, res){
        return res.render('detallePost')
    },
    resultadoBusqueda: function(req, res){
        return res.render('resultadoBusqueda')
    },
    detalleUsuario: function(req, res){
        return res.render('detalleUsuario')
    },
}

module.exports = userController;
