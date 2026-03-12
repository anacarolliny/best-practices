# 🏗 Architecture Lab API

Projeto criado para estudar e aplicar na prática conceitos modernos de arquitetura de software backend utilizando **NestJS**.

Este projeto funciona como um **laboratório arquitetural**, onde diferentes padrões, estratégias de desacoplamento e práticas de engenharia são explorados de forma progressiva.

---

# 🎯 Objetivo

Construir uma API modular que sirva como laboratório para aplicar padrões arquiteturais modernos, mantendo:

- Core desacoplado da infraestrutura
- Dependências apontando para dentro
- Código testável
- Baixo acoplamento
- Alta coesão
- Evolução arquitetural progressiva

Este projeto não tem como foco apenas funcionalidades, mas sim **evolução arquitetural consciente**.

---

# 🧱 Estrutura Arquitetural

```
src/
 ├── core/
 │    ├── entities/
 │    ├── services/
 │
 ├── application/
 │    ├── use-cases/
 │    ├── interfaces/
 │    ├── dto/
 │
 ├── infrastructure/
 │    ├── http/
 │    ├── gateways/
 │    ├── email/
 │    ├── cache/
 │
 ├── presentation/
 │
 ├── app.module.ts
```

Cada camada possui responsabilidades bem definidas e respeita a **regra de dependência da Clean Architecture**.

---

# 🔁 Fluxo de Dependência

```
Presentation → Application → Core
                    ↓
            Infrastructure (via interfaces)
```

### Regra principal

> O **Core nunca conhece a Infrastructure**.

Infraestrutura sempre depende de **interfaces definidas nas camadas internas**.

---

# 🧩 Conceitos Aplicados

## Clean Architecture

Separação clara entre:

- Core (domínio)
- Application (casos de uso)
- Infrastructure (implementações externas)
- Presentation (entrada da aplicação)

---

## Inversão de Dependência (DIP)

Use cases dependem de **interfaces**, nunca de implementações concretas.

Exemplo:

```
UseCase → PaymentGateway (interface)
                ↓
        AbacatePayGateway (implementação)
```

---

## Injeção de Dependência (DI)

Bindings são feitos através do sistema de **providers do NestJS**.

Isso permite:

- trocar implementações
- facilitar testes
- reduzir acoplamento

---

## Adapter Pattern

Gateways externos são tratados como **adapters**.

Exemplos:

- AbacatePayGateway
- RedisCacheProvider
- EmailProvider

---

## Strategy Pattern

Permite trocar dinamicamente providers.

Exemplo:

```
EmailStrategy
 ├── SendgridProvider
 ├── SESProvider
 └── MockProvider
```

---

## Composition

Regras reutilizáveis compostas dentro dos UseCases.

Exemplo:

```
CreatePaymentUseCase
 ├── DiscountService
 ├── PaymentGateway
 └── CacheService
```

---

# 📦 Camadas de Cache

## 1️⃣ Application Cache (Redis)

- Interface `CacheService`
- Implementação `RedisCacheProvider`
- Aplicado dentro dos UseCases

Objetivo:

Reduzir chamadas externas e melhorar performance.

---

## 2️⃣ HTTP Cache (em estudo)

Utilizando:

- Cache-Control
- ETag
- Interceptors no NestJS

---

## 3️⃣ CDN Cache (Akamai)

Estratégias combinadas entre:

- Application Cache
- HTTP Cache
- Edge Cache

Exemplo:

```
Cache-Control: public, s-maxage=300, stale-while-revalidate=60
```

---

# 🧭 Diagrama de Arquitetura

```
                ┌─────────────────────────┐
                │       Presentation      │
                │      Controllers        │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │       Application       │
                │        Use Cases        │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │           Core          │
                │  Entities + Services    │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │      Infrastructure     │
                │ Gateways / Cache / HTTP │
                └─────────────────────────┘
```

---

# 🔗 Diagrama de Dependências

```
        ┌───────────────┐
        │  Controller   │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │   Use Case    │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │   Interface   │
        │ PaymentGateway│
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │ AbacatePay    │
        │ Gateway       │
        └───────────────┘
```

---

# 🚀 Roadmap do Laboratório

## 🔹 Fase 1 – Base Arquitetural

- [x] Estruturar camadas
- [x] Criar HttpClientService
- [x] Criar Gateway de pagamento
- [x] Implementar UseCase desacoplado
- [x] Implementar Cache Redis com DIP

---

## 🔹 Fase 2 – Email Provider

- [ ] Criar interface EmailProvider
- [ ] Implementar provider real
- [ ] Injetar via DIP
- [ ] Simular troca de provider

---

## 🔹 Fase 3 – Cache Avançado

- [ ] Implementar Cache-Control no Nest
- [ ] Criar interceptor customizado
- [ ] Implementar ETag
- [ ] Simular comportamento CDN (Akamai)

---

## 🔹 Fase 4 – Composição e Regras de Negócio

- [ ] Criar DiscountService
- [ ] Aplicar composição em múltiplos casos
- [ ] Isolar regra pura do gateway

---

## 🔹 Fase 5 – Evolução do HTTP Client

- [ ] Logging centralizado
- [ ] Retry automático
- [ ] Timeout configurável
- [ ] Interceptors globais
- [ ] Observabilidade

---

# 🔭 Evolução Arquitetural (Estudos Avançados)

Após consolidar a base arquitetural, o projeto evoluirá para explorar práticas usadas em sistemas distribuídos modernos.

---

## 🧩 Microservices

Estudo de decomposição de serviços.

Objetivos:

- bounded contexts
- separação de domínios
- comunicação entre serviços
- escalabilidade horizontal

---

## 📊 Observabilidade

Adicionar visibilidade operacional ao sistema.

Estudos:

- logging estruturado
- métricas
- tracing distribuído

Ferramentas possíveis:

- OpenTelemetry
- Prometheus
- Grafana

---

## 🛡 Resiliência

Implementar padrões de tolerância a falhas.

Estudos:

- Retry automático
- Circuit Breaker
- Timeout
- Fallback

Aplicação prática:

- HTTP Client resiliente
- Gateways externos protegidos

---

## ⚙️ Pipeline

Criar pipeline automatizado para validação do projeto.

Etapas:

- build
- lint
- testes automatizados
- análise de segurança

---

## 🤖 GitHub Actions

Automatizar fluxo de CI/CD.

Exemplos:

- execução automática de testes
- validação de pull requests
- lint e build

---

## 🧬 GraphQL

Estudar alternativa ao modelo REST.

Objetivos:

- schema-first
- resolvers
- query optimization
- comparação REST vs GraphQL

---

## 🔐 Dependabot

Automatizar atualização de dependências.

Benefícios:

- atualização automática de libs
- correções de segurança
- pull requests automáticos

---

# 🎓 Objetivo Educacional do Projeto

Este projeto funciona como um **laboratório arquitetural progressivo**, permitindo explorar desde fundamentos até práticas avançadas utilizadas em sistemas reais.

Competências trabalhadas:

- Clean Architecture
- Dependency Injection avançada
- Design Patterns
- Gateways desacoplados
- Cache multi-camada
- HTTP Clients resilientes
- Observabilidade
- CI/CD
- Arquitetura distribuída