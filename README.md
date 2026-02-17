# 🏗 Architecture Lab API

Projeto criado para estudar e aplicar na prática:

- Clean Architecture
- Inversão de Dependência (DIP)
- Injeção de Dependência (DI)
- Composição
- Design Patterns
- Gateways desacoplados
- Cache (Application + HTTP + CDN)
- HTTP Client centralizado
- Modularização arquitetural no NestJS

---

# 🎯 Objetivo

Construir uma API modular que sirva como laboratório para aplicar padrões arquiteturais modernos, mantendo:

- Core desacoplado da infraestrutura
- Dependências apontando para dentro
- Código testável
- Baixo acoplamento
- Alta coesão
- Evolução arquitetural progressiva

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

---

# 🔁 Fluxo de Dependência

```
Presentation → Application → Core
                    ↓
            Infrastructure (via interfaces)
```

Regra principal:

> O Core nunca conhece a Infrastructure.

---

# 🧩 Conceitos Aplicados

## Inversão de Dependência (DIP)

Use cases dependem de interfaces.

## Injeção de Dependência (DI)

Bindings feitos via providers no módulo.

## Adapter Pattern

Gateways externos (AbacatePay, Redis, Email).

## Strategy Pattern

Troca dinâmica de providers (ex: Email).

## Composition

Regras reutilizáveis compostas dentro dos use cases.

---

# 📦 Camadas de Cache

## 1️⃣ Application Cache (Redis)

- Interface `CacheService`
- Implementação `RedisCacheProvider`
- Aplicado dentro dos UseCases

## 2️⃣ HTTP Cache (em estudo)

- Cache-Control
- ETag
- Interceptors

## 3️⃣ CDN Cache (Akamai)

- s-maxage
- stale-while-revalidate
- Estratégias combinadas Application + Edge

---

# 🚀 Roadmap Atualizado

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

# 🧠 Objetivo Final

Consolidar domínio prático de:

- Clean Architecture
- Design Patterns
- DI real
- Cache multi-camada
- Estratégia de CDN
- Código escalável e testável
