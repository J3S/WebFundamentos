$("#ingresar").click(function(event) {
    var user_estudiante = "estudiante";
    var user_profesor = "profesor";
    var usuario = $("#usuario");
    var contrasenia = $("#contrasenia");
    if (usuario.val() !== "" && contrasenia.val() !== "") {
        if (usuario.val() === user_estudiante && contrasenia.val() === user_estudiante) window.location.replace("./pages/sandbox/estudiante");
        else if (usuario.val() === user_profesor && contrasenia.val() === user_profesor) window.location.replace("./pages/sandbox/profesor");
        else{
            $("#usuario-group").addClass("has-error");
            $("#error-msg-usuario").addClass("hidden");
            $("#contrasenia-group").addClass("has-error");
            $("#error-msg-contrasenia").addClass("hidden");
            $("#error-msg-combinacion").removeClass("hidden");
            $("#combinacion-group").addClass("has-error");
        }
    } else {
        $("#error-msg-combinacion").addClass("hidden");
        if (usuario.val() === "") {
            $("#usuario-group").addClass("has-error");
            $("#error-msg-usuario").removeClass("hidden");
        } else {
            $("#usuario-group").removeClass("has-error");
            $("#error-msg-usuario").addClass("hidden");
        }
        if (contrasenia.val() === "") {
            $("#contrasenia-group").addClass("has-error");
            $("#error-msg-contrasenia").removeClass("hidden");
        } else {
            $("#contrasenia-group").removeClass("has-error");
            $("#error-msg-contrasenia").addClass("hidden");
        }
    }
});