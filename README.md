# Portfólio pessoal

Página estática de Nikollas Beltrão. No workspace, inicie com
`docker compose up -d portfolio` na pasta principal e acesse
http://localhost:8186.

O currículo para download fica em `assets/curriculo-atualizado.pdf`. A versão
editável está em `assets/curriculo-atualizado.html` e usa a foto local
`assets/curriculo-foto.jpg`; gere novamente o PDF após editar o HTML. O currículo
original permanece em `assets/curriculo.pdf`. Revise os dados pessoais antes de
publicar o site.
As demonstrações publicadas aparecem no portfólio em
https://nikollas-beltrao.duckdns.org/. O Compose da pasta principal
inclui demos separadas, com banco e dados fictícios, para Acadêmico, Gráfica
e Banca. Consulte o README da pasta principal para portas, credenciais e
limitações. Os bancos, documentos e imagens dos backups originais não são
usados por essas três demonstrações; a API acadêmica reaproveita arquivos PHP.

Bootstrap, Bootstrap Icons e Devicon são carregados por CDN; a foto vem do
GitHub. É necessária conexão com a internet para esses recursos.
