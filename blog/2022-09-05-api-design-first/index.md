---
slug: api-design-first
title: Desenhe primeiro sua interface de API, antes de começar a desenvolver
description: |
  Projetar interfaces de API na maioria das vezes é a melhor forma para validar o contrato e funcionamento da API.
  Esse é o princípio do Design First de API.
authors: rafaelbmateus
tags: [rafaelbmateus, blog]
---

Projetar interfaces de API na grande maioria das vezes é a melhor forma para validar o contrato e funcionamento da API, antes de começar a programar.
Esse é o princípio do Design First de API. Antes de desenvolver códigos para o backend, criar a especificação do contrato de API.

**É muito mais fácil ajustar a documentação do que um código!**

<!-- truncate -->

# Identifique os resources

O conceito fundamental em qualquer API RESTful é o recurso.
Um recurso é um objeto com um tipo, dados associados, relacionamentos com outros recursos e um conjunto de métodos que operam nele.
É semelhante a uma instância de objeto em uma linguagem de programação orientada a objetos, com a importante diferença de que apenas
alguns métodos padrão são definidos para o recurso (correspondendo aos métodos padrão HTTP GET, POST, PUT, DELETE, …),
enquanto uma instância de objeto geralmente tem outros métodos.

Os resources podem ser agrupados em collections. Cada collection é homogênea para que contenha apenas um tipo de resource.
Os resources também podem existir fora de qualquer collection. Nesse caso, nos referimos a esses recursos como singleton resource.
As collections também são resources.

As coleções podem existir globalmente, no nível superior de uma API, mas também podem estar contidas em um único recurso.
Neste caso, nos referimos a essas collections como subcoleções. As subcollections geralmente são usadas para expressar algum
tipo de relacionamento “contido em”.

O diagrama abaixo ilustra os principais conceitos em uma API RESTful.

<imagem/>

# Design First

Em Design-first, a descrição da API é escrita primeiro e, em seguida, o código. As primeiras vantagens óbvias são que o código
já tem um esqueleto e que algumas ferramentas podem fornecer código clientes automaticamente.

Que pra mim faz todo o sentido, ir validando a API em etapas e construindo junto a solução junto com o cliente ou personas externas.
Isso faz com que se crie o contrato, documentação, mock, validação antes de começar a escrever o código da API.

Aqui na [Neoway](https://neoway.com.br), utilizamos o OpenAPI Specification para descrever o comportamento da API.
Essa especificação é um padrão disseminado no mercado, usado por muitos serviços e softwares, podendo facilmente ser
importado e ter a documentação suficiente para conhecer o contrato de API e iniciar a integração.

# OpenAPI Specification

A OpenAPI Specification (OAS) define uma interface padrão independente de linguagem para APIs HTTP que permite que humanos
e computadores descubram e compreendam os recursos do serviço sem acesso ao código-fonte, documentação ou por meio de inspeçãode tráfego de rede.
Quando definido corretamente, um consumidor pode entender e interagir com o serviço remoto com uma quantidade mínima de lógica de implementação.
Uma definição OpenAPI pode ser usada por ferramentas de geração de documentação para exibir a API, ferramentas de geração de código para gerar
servidores e clientes em várias linguagens de programação, ferramentas de teste e muitos outros casos de uso.

# Endpoints e Verbos

Os endpoints e os verbos são os endereços para acessar alguma funcionalidade da API, são as formas de solicitar alguma coisa,
algo como: "Me dá os dados da minha conta ai”, resultaria em um GET em `/accounts/me`.
O conjunto de endpoints, formam o produto de API, como nesse exemplo, um micro serviço de pedidos de compras:

# Schemas

Os schemas representam os objetos de domínio. O objeto Schema permite a definição de tipos de dados de entrada e saída.
Esses tipos podem ser objetos, mas também primitivos e arrays.

# Especificação perto do código

As especificações do OpenAPI ficam em arquivos yaml ou json, podendo ser lidos com facilidade por uma pessoa com perfil técnico.

O legal de ter a documentação via código, é que podemos fazer commit desses arquivos em um repositório e ter controle de versão sobre eles.
Eaí fechou! Colocamos as pipelines de CI/CD para rodar🤘 

As descrições da OpenAPI não são apenas um artefato de documentação: são arquivos de origem de primeira classe que podem conduzir um grande
número de processos automatizados, incluindo geração de boilerplate, teste de unidade e renderização da documentação.

Como tal, a descrição do OpenAPI deve ser mantida no seu repositório, de fato, deve estar entre os primeiros arquivos a serem confirmados.
A partir daí, eles também devem participar dos processos de Integração Contínua.

Se quiser saber mais sobre configurar a pipeline leia esse artigo: Como validar seu Guideline de API na pipeline do CI

# Referências

https://oai.github.io/Documentation/best-practices.html
https://developers.redhat.com/blog/2019/02/25/full-api-lifecycle-management-a-primer
https://rapidapi.com/blog/api-lifecycle-management
https://restful-api-design.readthedocs.io/en/latest/resources.html
