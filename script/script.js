window.onload = function () {
    const formulario = document.getElementById("registroForm");
    const pass1 = document.getElementById("password1");
    const pass2 = document.getElementById("password2");
    const fechaInicioInput = document.getElementById("fechaInicio");
    const btnEnviar = document.getElementById("btnEnviar");

    function validarPasswords() {
        if (pass1.value !== pass2.value) {
            pass2.setCustomValidity("Las passwords deben coincidir");
        } else {
            pass2.setCustomValidity("");
        }
    }

    pass1.addEventListener("input", validarPasswords);
    pass2.addEventListener("input", validarPasswords);


    btnEnviar.onclick = function () {
        let fechaActual = new Date();
        let fechaIni = new Date(fechaInicioInput.value);

        fechaActual.setHours(0, 0, 0, 0);

        if (fechaIni < fechaActual) {
            alert("La fecha de inicio debe ser mayor o igual que la actual.");
            return;
        }

        if (formulario.checkValidity()) {
            alert("Formulario enviado correctamente");
            formulario.submit();
        } else {
            formulario.reportValidity();
        }
    };
};