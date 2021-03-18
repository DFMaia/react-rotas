# Sobre esse projeto:
> - **_Exemplo no código: commit 1_**
> - O router utilizado precisa de três imports: `BrowserRouter`, `Switch` e `Route`.
> - Para cada página que for usada para ser roteada, é preciso importá-la.
> - Para cada arquivo de uma nova página, é preciso importar o `Link`.
> - Existe uma _**enorme**_ diferença entre o `Lnk` e o `<a href="">`.
> > - _**Link**_: Não recarrega ao direcionar.
> > - O **_`<a href="">`_** recarrega a aplicação toda.
> - O `exact` é usando somente para a página home. Informa exatamente o uso da `/`. As outras páginas não precisam desse termo.