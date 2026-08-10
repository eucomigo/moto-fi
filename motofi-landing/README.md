# Moto Fi — Landing Page

## Arquivos

- `MotoFiLanding.tsx` — componente completo da landing page.
- `images/motofi-control.png` — criativo de controle financeiro.
- `images/motofi-rider.png` — criativo com motociclista e aplicativo.

## Configuração do WhatsApp

No início de `MotoFiLanding.tsx`, altere:

```ts
const WHATSAPP_NUMBER = "5521965069442";
const WHATSAPP_MESSAGE = "Olá! Quero saber mais sobre o Moto Fi.";
```

O número deve ser informado com código do país e DDD, sem espaços, parênteses ou hífens.

## Uso no sandbox

Copie as imagens para `images/` e use os caminhos:

```tsx
<img src="/__mockup/images/motofi-control.png" alt="Tela de controle financeiro do Moto Fi" />
<img src="/__mockup/images/motofi-rider.png" alt="Tela do Moto Fi para acompanhar a rotina de quem roda" />
```

O componente usa React, Tailwind CSS e `lucide-react`.
