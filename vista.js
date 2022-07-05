export function cargarVista(vista, destino='#cuerpo'){
    fetch(`vistas/${vista}.html`)
    .then(res=>{
        res.text()
        .then(data=>{
            // document.querySelector(destino).insertAdjacentHTML("afterend", data);
            let destinos = document.querySelectorAll(destino)
            for (var i=0; i<destinos.length; i++)
                destinos[i].innerHTML= data;

            let js = document.head.querySelectorAll('script') ;

            let existe=false;
            for (var i=0; i<js.length; i++){
                let diagonal = js[i].src.lastIndexOf('/');
                let nombre = js[i].src.substring(diagonal+1);
                if (nombre == vista + '.js') existe=true;
            }

            if (!existe) {
                const miScript = document.createElement('SCRIPT');
                miScript.src = `vistas/${vista}.js`;
                miScript.type = 'module';
                document.head.append(miScript);
            }
        })
    })
}

