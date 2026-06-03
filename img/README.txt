GIFs animados (opcional)
========================

O site já funciona sem nenhuma imagem — o visual retrô é todo feito em CSS
(estrelas, divisor arco-íris, barra "under construction", botões 88x31).

Se quiser deixar MAIS autêntico, troque os emojis/CSS por GIFs de verdade da
época. Onde achar:

  • gifcities.org      — buscador do Internet Archive só de GIFs do GeoCities
                         (procure por: under construction, fire, email, new,
                          star, dancing, webring, guestbook)
  • archive.org/web    — coleção GeoCities arquivada
  • cyber.dabamos.de/88x31/ — arquivo gigante de botões 88x31 reais

Como usar:
  1. Baixe o .gif e salve aqui na pasta img/  (ex: img/construction.gif)
  2. No index.html, troque o trecho correspondente por uma <img>. Exemplos:

     Título:        <h1><img src="img/welcome.gif" alt="Bem-vindo"></h1>
     Fogo:          <img src="img/fire.gif" alt="">  (no lugar do 🔥)
     Construção:    <img src="img/construction.gif" alt="Em construção">
     Botão 88x31:   <a href="..."><img src="img/netscape.gif" width="88" height="31"></a>

  3. Pode trocar o fundo estrelado por um tile clássico: salve img/stars.gif e,
     no style.css, troque o bloco background-image do body por:
        background: #000033 url("img/stars.gif") repeat;
