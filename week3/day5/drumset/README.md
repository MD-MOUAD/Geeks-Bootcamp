# 🥁 Drumset Mini Project

A fun, interactive drumkit built with **HTML**, **CSS**, and **JavaScript**.  
Click buttons or press corresponding keys on your keyboard to play drum sounds and see a flashy animation!

---

## 📖 Project Brief

**Goal:**  
Create a virtual drumset where:

- Pressing a key or clicking a button triggers a drum sound.
- The button visually animates with a glow and scale effect for a short, consistent duration.
- Focus on JavaScript logic first — then styling.

---

## 🎯 Features

- Play audio using **HTML `<audio>` elements** and JavaScript.
- Handle both **keyboard keypress events** and **mouse click events**.
- Visual feedback with a `.playing` CSS class, applied and removed using a fixed delay for consistency.
- Dynamic drum button and audio creation from a JS object array.
- Clean, modern CSS transitions for button animations.

---

## 📦 Tech Stack

- HTML5
- CSS3 (with transitions and optional keyframe animations)
- Vanilla JavaScript (no frameworks)

---

## 📝 How It Works

1. Listen for:

   - **Keyboard keypress events** (`keydown`)
   - **Mouse click events** on drum buttons

2. Use the key or button’s `data-key` attribute to:

   - Play the correct audio element
   - Add a `.playing` class for visual effect

3. Remove the `.playing` class after **150ms** for a consistent UX (independent of sound duration).

---

## 🖥️ Demo

![Drumset Screenshot](./screenshot.png?raw=true)

---

## 🔥 Final Notes

This project started as a simple exercise and turned out **funny and cool to build** 😄.  
Features snappy button flashes, clean UX, and a flexible config — just add more drums to the array to extend it!
