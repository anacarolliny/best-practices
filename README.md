# 🏗 Architecture Lab API

Projeto criado para estudar e aplicar na prática:

- Clean Architecture
- Inversão de Dependência (DIP)
- Injeção de Dependência (DI)
- Composição
- Herança  
- Design Patterns
- Gateways desacoplados
- Cache 
- HTTP Client centralizado
- Modularização arquitetural no NestJS

---

# 🎯 Objetivo

Construir uma API modular que sirva como laboratório para aplicar padrões arquiteturais modernos, mantendo:

- Core desacoplado da infraestrutura
- Dependências apontando para dentro
- Providers 
- Código testável
- Baixo acoplamento
- Alta coesão

---

# 🧱 Estrutura Arquitetural

```
src/
 ├── core/                         → Regras puras de negócio
 │    ├── entities/
 │    ├── services/
 │
 ├── application/                  → Casos de uso
 │    ├── use-cases/
 │    ├── interfaces/
 │
 ├── infrastructure/               → Implementações externas
 │    ├── http/
 │    │    ├── http-client.service.ts
 │    │    ├── http.module.ts
 │    │
 │    ├── gateways/
 │    │    ├── abacate-pay.provider.ts
 │    │
 │    ├── email/
 │    │    ├── sendgrid.provider.ts
 │    │
 │    ├── cache/
 │    │    ├── redis.provider.ts
 │
 ├── presentation/                 → Controllers
 │    ├── payments.controller.ts
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

# 🧩 Conceitos que serão aplicados

## 1️⃣ Inversão de Dependência (DIP)

Use cases dependem de interfaces, nunca de implementações concretas.

```ts
export interface PaymentGateway {
  createPayment(data: any): Promise<any>;
}
```

---

## 2️⃣ Injeção de Dependência (DI)

Implementações concretas registradas via providers:

```ts
{
  provide: 'PaymentGateway',
  useClass: AbacatePayProvider,
}
```

---

## 3️⃣ Composição

Regras reutilizáveis via composição:

```ts
export class DiscountService {
  calculate(amount: number): number {
    if (amount > 1000) return amount * 0.9;
    return amount;
  }
}
```

UseCase usa o serviço:

```ts
constructor(
  private readonly discountService: DiscountService,
) {}
```

---

## 4️⃣ HTTP Centralizado

`HttpClientService` será responsável por:

- Criar instâncias axios
- Padronizar tratamento de erro
- Configurar baseURL
- Futuramente aplicar retry/logging/interceptors

---

## 5️⃣ Gateways Externos (Adapter Pattern)

- AbacatePay

Todos implementando a mesma interface.

---

## 6️⃣ Email Provider (Strategy Pattern)

```ts
export interface EmailProvider {
  send(to: string, subject: string, body: string): Promise<void>;
}
```

Implementações:
- Sendgrid
- SMTP
- Mock

---

## 7️⃣ Cache Provider

```ts
export interface CacheProvider {
  get(key: string): Promise<any>;
  set(key: string, value: any, ttl?: number): Promise<void>;
}
```

Implementações:
- Redis
- Memory Cache

---

# 📦 Design Patterns que serão aplicados

- Adapter Pattern (Gateways)
- Strategy Pattern (troca de gateway/email)
- Factory Pattern (seleção dinâmica de provider)
- Provider Pattern
- Composition 
- Singleton (via Nest providers)
- Dependency Inversion Principle
- Open/Closed Principle
- Interface Segregation Principle

---

# 🚀 Roadmap de Estudo

## 🔹 Fase 1 – Base Arquitetural
- [ ] Estruturar camadas
- [ ] Criar HttpClientService
- [ ] Criar Gateway de pagamento
- [ ] Implementar UseCase desacoplado

---

## 🔹 Fase 2 – Email
- [ ] Criar interface EmailProvider
- [ ] Criar implementação concreta
- [ ] Injetar via DIP
- [ ] Testar troca de provider

---

## 🔹 Fase 3 – Cache
- [ ] Criar CacheProvider
- [ ] Implementar RedisProvider
- [ ] Usar cache em UseCase
- [ ] Implementar fallback memory cache

---

## 🔹 Fase 4 – Composição e Regras de Negócio
- [ ] Criar DiscountService
- [ ] Usar composição em múltiplos casos de uso
- [ ] Separar regra pura do gateway

---

## 🔹 Fase 5 – Evolução do HTTP
- [ ] Adicionar logging centralizado
- [ ] Adicionar retry automático
- [ ] Adicionar timeout global
- [ ] Implementar interceptors

---

# 🧠 Objetivo Final

Ter uma API que demonstre domínio de:

- Arquitetura limpa
- Padrões de projeto
- DI real
- Baixo acoplamento
- Alta escalabilidade
- Código testável
- Separação clara de responsabilidades

---

# 📚 Este projeto é um laboratório

Não tem regra de negócio fixa.
Ele existe para consolidar conhecimento arquitetural na prática.
