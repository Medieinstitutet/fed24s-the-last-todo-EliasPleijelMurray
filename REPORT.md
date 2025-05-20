# 📌 Rättningsrapport – fed24s-the-last-todo-EliasPleijelMurray

## 🎯 Uppgiftens Krav:
För er som inte ser readme-filen:

Inlämningsuppgift Todo
I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation. Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

Betyg G
Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
Implementera klickhändelse för att hantera borttagandet av en todo.
Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.
Betyg VG
Alla punkter under G
Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
Kunna sortera ordningen på dina todos.
Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.
Allmänt
Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

npm i
och

npm run dev
för att köra projektet.

Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
Ni får gärna ändra strukturen i projektet, detta är bara en grund.
Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken 🙂

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/VLovMVBC)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både betyg G och VG. Den är välstrukturerad, och det finns inga större brister i kodkvalitet eller funktionalitet. Hårdkodade todos visas korrekt på skärmen, och funktioner för att lägga till, markera som klar, och sortera todos är implementerade och fungerar som förväntat. React-funktionalitet och moderna JavaScript-tekniker används korrekt.

💡 **Förbättringsförslag:**  
1. Hantera fall då användaren försöker lägga till en tom todo. Det skulle vara bra att inte tillåta att todos läggs till utan en titel.
2. Styling kan förbättras ytterligare med mer visuellt tilltalande design, antingen genom att använda fler funktioner från ett CSS-ramverk som Tailwind eller genom att lägga till fler egendefinierade stilar.
3. Det finns några stavfel i funktionsnamn (t.ex. 'handelClick' istället för 'handleClick'). Det kan förbättras för att hålla konsistens och tydlighet i koden.
4. Lägg till användarvänlig feedback efter olika användaråtgärder, t.ex. ett meddelande när en todo har lagts till.