# ⛵ Site Oficial Jackson Patacho (@jackson_patacho)

> **Passeios de Jangada, Piscinas Naturais & Churrasco de Frutos do Mar na Praia do Patacho, Porto de Pedras - AL**

Site institucional e landing page de alta conversão desenvolvido para o perfil [@jackson_patacho](https://www.instagram.com/jackson_patacho/). O projeto foi criado com foco em velocidade máxima, design tropical refinado, experiência mobile perfeita para turistas e integração direta com o WhatsApp.

---

## 🌟 Principais Recursos do Site

1. **Agendamento Rápido no WhatsApp (Calculadora no Hero):**
   - O turista seleciona a experiência desejada (Jangada Tradicional, Jangada + Churrasco Gourmet, Transfer Aeroporto ou Passeio Privativo), a data da viagem e o número de pessoas.
   - O botão gera instantaneamente uma mensagem personalizada e estruturada direto para o WhatsApp do Jackson!

2. **Simulador Inteligente da Tábua de Marés:**
   - Como os passeios nas piscinas naturais do Patacho dependem exclusivamente da maré baixa, o site conta com um simulador que analisa as fases da lua (maré de sizígia e quadratura) e recomenda a melhor janela de horário para a data escolhida pelo turista.

3. **Seção de Churrasco de Frutos do Mar no Oceano:**
   - Destaque especial para o grande diferencial do Jackson: preparo de lagosta fresca na brasa, camarões e frutas tropicais em alto mar.

4. **Transfer & Translado Receptivo:**
   - Apresentação do serviço de transfer dos Aeroportos de Maceió (MCZ) e Recife (REC) até Porto de Pedras, Praia do Patacho, São Miguel dos Milagres e Japaratinga.

5. **Galeria de Fotos do Patacho:**
   - Exibição de imagens em alta resolução dos bancos de areia, mar azul turquesa caribenho e jangadas.

6. **Depoimentos Reais & Social Proof:**
   - Comentários e avaliações 5 estrelas de turistas.

7. **Perguntas Frequentes (FAQ com Accordion):**
   - Dúvidas sobre marés, roupas, o que levar, crianças e idosos.

8. **Botão Flutuante do WhatsApp:**
   - Widget permanente no canto inferior direito com pulso animado e status "Online".

---

## 📁 Estrutura dos Arquivos

```text
jackson-patacho-website/
├── index.html       # Estrutura HTML5 semântica e otimizada para SEO
├── style.css        # Estilos modernos, responsivos e tema tropical
├── app.js           # Lógica do formulário WhatsApp, simulador de maré e FAQ
├── config.js        # Arquivo de configuração fácil (número de WhatsApp, links e textos)
├── README.md        # Documentação e instruções de uso
└── assets/
    └── avatar.jpg   # Foto de perfil oficial do Instagram @jackson_patacho
```

---

## ⚙️ Como Personalizar os Dados (WhatsApp, Preços e Textos)

Para alterar o número de WhatsApp onde chegam os pedidos de passeios, abra o arquivo `config.js` e edite a linha:

```javascript
whatsappNumber: "5582999999999", // Coloque: 55 + DDD + Número do Jackson (ex: 5582981234567)
whatsappDisplay: "(82) 98123-4567",
```

Tudo no site (cabeçalho, formulário, botões dos passeios, simulador de maré e botão flutuante) passará a direcionar automaticamente para o novo número!

---

## 🚀 Como Visualizar no Navegador

- **Opção 1:** Dê um duplo-clique no arquivo `index.html` em sua máquina para abri-lo diretamente no Google Chrome, Microsoft Edge ou seu navegador de preferência.
- **Opção 2 (Com servidor local):**
  No PowerShell dentro da pasta:
  ```powershell
  python -m http.server 8080
  # ou
  npx serve .
  ```
  E acesse `http://localhost:8080`.

---

## 🌐 Como Publicar na Internet Gratuitamente

Você pode colocar este site no ar em menos de 2 minutos usando qualquer uma das seguintes opções gratuitas:

1. **Vercel / Netlify:**
   - Arraste a pasta `jackson-patacho-website` diretamente para o painel do [Netlify Drop](https://app.netlify.com/drop) ou [Vercel](https://vercel.com).
   - O site ficará no ar com link `https://jacksonpatacho.netlify.app` ou similar, com certificado SSL (HTTPS) gratuito.
2. **GitHub Pages:**
   - Suba os arquivos em um repositório no GitHub e ative o GitHub Pages nas configurações.
3. **Domínio Próprio:**
   - Se o Jackson desejar ter um domínio como `jacksonpatacho.com.br`, basta registrar no Registro.br e apontar para a hospedagem do Netlify/Vercel.
