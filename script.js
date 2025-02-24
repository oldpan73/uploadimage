document.addEventListener('DOMContentLoaded', function() {
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('imageInput1');
    const imageBase64_1 = document.getElementById('imageBase64_1');
    const previewContainer = document.getElementById('previewContainer');

    // Evento per il click che apre il file input
    dropArea.addEventListener('click', () => fileInput.click());

    // Evento per il caricamento del file
    fileInput.addEventListener('change', (event) => {
        handleImageUpload(event.target.files[0]);
    });

    // Eventi Drag & Drop
    dropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropArea.classList.add('dragover');
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('dragover');
    });

    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        dropArea.classList.remove('dragover');
        if (event.dataTransfer.files.length > 0) {
            handleImageUpload(event.dataTransfer.files[0]);
        }
    });

    function handleImageUpload(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const dataUrl = event.target.result;
                imageBase64_1.value = dataUrl;
                displayPreview(dataUrl);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Seleziona un file immagine valido!");
        }
    }

    function displayPreview(dataUrl) {
        previewContainer.innerHTML = ''; // Pulisce il contenuto precedente
        const img = document.createElement('img');
        img.src = dataUrl;
        previewContainer.appendChild(img);
    }
});
