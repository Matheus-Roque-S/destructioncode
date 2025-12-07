require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });

require(["vs/editor/editor.main"], function () {
    window.editor = monaco.editor.create(document.getElementById("editor"), {
        value: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    \n</body>\n</html>",
        language: "html",
        theme: "vs-dark",
        automaticLayout: true,
    });
});
