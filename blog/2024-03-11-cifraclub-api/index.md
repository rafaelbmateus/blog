---
slug: cifraclub-api
title: "Facilitando a vida dos músicos geeks: Projeto Cifra Club API"
description: "Se você é um músico geek como eu, provavelmente já pensou em como seria incrível se o Cifra Club tivesse uma API para acessar suas cifras, não é mesmo? Pois bem, recentemente tive essa mesma ideia e decidi colocá-la em prática."
authors: rafaelbmateus
tags: [Cifra Club, API, GitHub, Open Source]
---

# Facilitando a vida dos músicos geeks: Projeto Cifra Club API

E aí, pessoal! Se você é um músico geek como eu, provavelmente já pensou em como seria incrível
se o Cifra Club tivesse uma API para acessar suas cifras, não é mesmo?
Pois bem, recentemente tive essa mesma ideia e decidi colocá-la em prática.

O objetivo é simples: facilitar a integração das cifras do Cifra Club com outros sistemas.
Imagina só poder automatizar processos como montar uma "pastinha" com todas as cifras que
você precisa sem ter que abrir o navegador e copiar uma por uma?
Parece um sonho, mas é exatamente o que estou trabalhando para tornar realidade.

O projeto que iniciei neste fim de semana consiste em disponibilizar as cifras
do Cifra Club em formato JSON através de uma interface de API.
Isso significa que será possível acessar as informações das músicas de forma estruturada e automatizada.

Para alcançar esse objetivo, estou utilizando Python como linguagem de programação,
com Flask como framework na camada HTTP e Selenium para interagir com a página HTML
do Cifra Club e extrair as informações necessárias, como nome da música, nome do artista,
cifra, link para YouTube e link do Cifra Club.

Já consegui avançar bastante no projeto, mas é claro que sempre há espaço para melhorias.
Alguns dos próximos passos que estou planejando incluem:

- Implementar a funcionalidade de mudar o tom da música, o que seria especialmente útil para músicos que desejam adaptar as cifras para suas vozes ou instrumentos.
- Dar aos usuários a opção de exibir ou não a tablatura na cifra, para atender às preferências individuais de cada um.
- Otimizar a busca do Selenium na página HTML do Cifra Club para tornar o processo ainda mais rápido e eficiente.

Se você também é um entusiasta da música e da tecnologia e quer saber mais sobre o projeto ou contribuir
de alguma forma, sinta-se à vontade para
[dar uma estrela no projeto](https://github.com/code4music/cifraclub-api)
no GitHub ou
[abrir um pull request](https://github.com/code4music/cifraclub-api/pulls)
com suas sugestões e contribuições.

Até a próxima!
