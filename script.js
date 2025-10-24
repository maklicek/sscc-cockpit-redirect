function loadModule(lang) {
 const url = lang === 'cz' ? './SSCC_ExportCZ/export-cz.html' : './SSCC_ExportEN/export-en.html';
    .then(response => {
      if (!response.ok) throw new Error('Soubor nenalezen');
      return response.text();
    })
    .then(html => {
      document.getElementById('content').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('content').innerHTML = `<p>Chyba při načítání modulu: ${error.message}</p>`;
    });
}
