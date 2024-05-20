


function obterLarguraPagina() {
    const largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return largura;
}

window.addEventListener('resize', () => {
    const btn_comprar = document.querySelector('.btn-comprar')
    const largura = obterLarguraPagina();
    
    if (largura <= 500) {
        btn_comprar.textContent = 'Comprar'
    } else {
        btn_comprar.textContent = 'Adicionar ao carrinho'
    }
});