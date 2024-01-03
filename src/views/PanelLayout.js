const PanelLayout =()=>{
    const container = document.createElement('span')
    const title = document.createElement('h2')
    const input = document.createElement('input')
    const boton = document.createElement('button')
    input.setAttribute('placeholder', 'Escribe aqui un texto')
    boton.textContent='Haz click para enviar'
    title.textContent='Soy el panel'
    container.append(title, input, boton);

    return container;
}

export default PanelLayout