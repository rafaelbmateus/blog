---
slug: edge-proxy-service-proxy-api-gateway-service-mesh
title: "Desvendando o Ecossistema de APIs: Edge Proxy, Service Proxy, API Gateway e Service Mesh"
description: "Artigo desvendando o Ecossistema de APIs: Comparando Edge Proxy, Service Proxy, API Gateway e Service Mesh"
authors: rafaelbmateus
tags: [Edge Proxy, Service Proxy, API Gateway, Service Mesh]
---

# Desvendando o Ecossistema de APIs: Edge Proxy, Service Proxy, API Gateway e Service Mesh

A evolução da arquitetura de microsserviços e a crescente importância das APIs trouxeram alguns componentes
com o objetivo de solucionar ou simplesmente facilitar esses processos.
Neste artigo, exploraremos quatro componentes desse ecossistema:
Edge Proxy, Service Proxy, API Gateway e Service Mesh.
E ao final, uma análise comparativa das solução aplicadas em diferentes cenários.

<!-- truncate -->

## Edge Proxy: Segurança e Roteamento na Entrada da Rede de APIs

O primeiro a explorar sua função é o Edge Proxy.
Esse componente é utilizado como front-layer, sendo utilizado como borda da infraestrutura,
com o objetivo de gerenciar o tráfego na borda da rede, atuando como um intermediário entre o tráfego externo e os serviços internos.
O legal é de assegurar que todas as requisições sigam padrões, garantindo segurança, autenticação e autorização,
controle de headers upstream, criptografia, etc.

Uma opção legal para Edge Proxy é o [Envoy](https://envoyproxy.io).
O Envoy é [CNCF](https://cncf.io) Graduated e utilizado em outros componentes.
Atualmente com 22.6k de estrelas no [GitHub](https://github.com/envoyproxy/envoy).

O Envoy é uma ferramenta extremamente flexível que pode desempenhar vários papéis,
incluindo o de Edge Proxy, você pode configurá-lo para tratar questões como:

- TLS Termination: O Envoy pode gerenciar a criptografia e a descriptografia do tráfego TLS, deixando os serviços internos focados em processar os dados.

- Roteamento: Pode rotear o tráfego com base em várias condições, como cabeçalhos HTTP, métodos, URLs, etc., direcionando as requisições para os serviços corretos.

- Autenticação e Autorização: Pode fazer verificação de token JWT, integrar-se com sistemas de autenticação externos e tomar decisões de autorização com base em políticas de acesso.

- Balanceamento de Carga: Pode distribuir o tráfego de entrada de maneira equilibrada entre os serviços, garantindo que eles não sejam sobrecarregados.

- Circuit Breaking e Recuperação de Falhas: Pode monitorar a saúde dos serviços e implementar circuit breaking para evitar que serviços com problemas afetem outros. Além disso, ele oferece mecanismos de recuperação de falhas para minimizar o impacto de falhas em serviços.

- Observabilidade: Fornece métricas, logs e informações de rastreamento que podem ser usadas para monitorar e solucionar problemas de comunicação entre serviços.


## Service Proxy: Simplificando a Comunicação Interna entre APIs

O segundo componente a ser analisado é o Service Proxy.
Seu objetivo é fazer o papel de proxy apenas do serviço especifico, ao contrário do Edge Proxy que funciona de maneira global.
Podendo ser aplicado com sidecar quando o deploy estiver em conjunto com o microserviço, ou desacoplado, em uma camada superior.
Nesse caso, o [Envoy](https://envoyproxy.io) também pode ser configurado como Service Proxy, mantendo todas aquelas funcionalidades porém aplicadas no domínio
do microserviço específico.

## API Gateway: Simplificando a Exposição e Gerenciamento de APIs

O API Gateway é um componente na arquitetura que atua como um ponto de entrada único para várias APIs, simplificando a exposição, gerenciamento e consumo de APIs.
Ele oferece uma camada intermediária entre os clientes e os microsserviços subjacentes, permitindo controlar e otimizar a comunicação e a interação.

Funções de um API Gateway:

- Roteamento Avançado: Permite rotear solicitações com base em condições como URLs, métodos HTTP, cabeçalhos ou parâmetros.

- Autenticação e Autorização: Ele oferece recursos de autenticação e autorização, permitindo que apenas usuários autorizados acessem determinadas APIs. Isso inclui autenticação baseada em tokens, como JWT (JSON Web Tokens), e integração com sistemas de gerenciamento de identidade.

- Transformação de Dados: O API Gateway pode transformar os dados de entrada e saída para corresponder aos formatos esperados pelos clientes ou pelos microsserviços, facilitando a interoperabilidade.

- Controle de Acesso e Limitação de Taxa: O API Gateway pode definir políticas de controle de acesso, limitando o número de solicitações que um cliente pode fazer em um determinado período de tempo.

- Monitoramento e Análise: Ele coleta métricas, logs e informações de rastreamento relacionados às solicitações e respostas das APIs, permitindo monitorar o desempenho e identificar problemas.

- Cache: O API Gateway pode implementar cache para reduzir a carga nos microsserviços e melhorar a latência, armazenando temporariamente respostas frequentemente solicitadas.

- Versionamento: Ele pode gerenciar versões de APIs, permitindo que os clientes acessem diferentes versões com facilidade.

## Service Mesh: Gerenciando Comunicação e Operações em Ambientes Complexos

À medida que os sistemas de microsserviços se expandem, o gerenciamento da comunicação entre eles se torna mais desafiador.
Um Service Mesh, como o [Istio](https://istio.io) (CNCF Graduated), entra em cena para fornecer recursos avançados,
incluindo descoberta automática de serviços, roteamento baseado em políticas, recuperação de falhas e segurança de ponta a ponta.

Exemplo: Um Service Mesh gerencia a comunicação entre diversos microsserviços que compõem uma aplicação de entrega sob demanda,
otimizando o roteamento com base nas preferências do usuário e garantindo uma experiência contínua.

## Comparação Final: Escolhendo a Solução Adequada para Cada Cenário

A escolha entre Edge Proxy, Service Proxy, API Gateway e Service Mesh depende das necessidades e metas do projeto.
O Edge Proxy é a primeira linha de defesa para segurança externa, enquanto o Service Proxy simplifica a comunicação interna.
O API Gateway é a escolha para gerenciar exposição e acesso a APIs, enquanto o Service Mesh lida com complexidade operacional
e comunicação em ambientes de microsserviços.

Neste mundo orientado por APIs e microsserviços, as soluções citadas são fundamentais para alcançar uma comunicação eficiente, segura e escalável.
Compreender as capacidades únicas de cada uma ajuda a escolher a solução mais adequada para atender aos objetivos do projeto.
A decisão correta não apenas impulsiona a eficiência operacional, mas também estabelece uma base sólida para o crescimento futuro
e a inovação contínua no cenário de APIs em constante evolução.

# Referências

- https://envoyproxy.io/docs
- https://landscape.cncf.io
- https://github.com/istio/istio
