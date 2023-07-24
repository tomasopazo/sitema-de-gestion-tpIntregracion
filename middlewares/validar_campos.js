const {validationResult } = require('express-validator');
const {response} = require('express');
const { requiere } = require('express');
const validarCampos = (req = requiere, res = response, next) => {

    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }
    next();
};

module.exports = {
    validarCampos
};