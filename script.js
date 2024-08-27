// script.js

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
    const encryptBtn = document.querySelector(".encrypt-btn");
    const decryptBtn = document.querySelector(".decrypt-btn");
    const copyBtn = document.querySelector(".copy-btn"); // Nuevo botón de copiar
    const imageSection = document.querySelector(".image-section p");

    function encrypt(text) {
        const encryptionRules = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return text.replace(/[eioua]/g, match => encryptionRules[match]);
    }

    function decrypt(text) {
        const decryptionRules = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionRules[match]);
    }

    function isValid(text) {
        return /^[a-z\s]*$/.test(text);
    }

    encryptBtn.addEventListener("click", () => {
        const text = textarea.value;
        if (isValid(text)) {
            const encryptedText = encrypt(text);
            imageSection.textContent = encryptedText;
        } else {
            alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        }
    });

    decryptBtn.addEventListener("click", () => {
        const text = textarea.value;
        if (isValid(text)) {
            const decryptedText = decrypt(text);
            imageSection.textContent = decryptedText;
        } else {
            alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        }
    });

    // Función para copiar el texto al portapapeles
    copyBtn.addEventListener("click", () => {
        const textToCopy = imageSection.textContent;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert("Texto copiado al portapapeles.");
            }).catch(err => {
                alert("Hubo un problema al copiar el texto.");
            });
        } else {
            alert("No hay texto para copiar.");
        }
    });
});
