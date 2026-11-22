# Standard Calculator (No `eval()`)

A non-scientific arithmetic calculator built with a custom expression tokenizer and precedence evaluator in vanilla JavaScript—without using `eval()` or `new Function()`—paired with an AI-generated UI.

## Why No `eval()`?
- **Problem-Solving:** Using eval would make it too simple.
- **Control:** Evaluates tokens explicitly using `parseFloat()` and custom precedence passes, making it straightforward to customize error handling and input rules.

## How the Logic Works (`calculator.js`)
1. **Input Guarding:** Restricts invalid starting operators (`x`, `/`, `+`, `.`), prevents leading `00`, and permits `-` after `x` or `/` for negative operands.
2. **Tokenization (`createArray`):** Scans the display string and groups multi-digit/decimal numbers separately from operator tokens (`+`, `-`, `x`, `/`).
3. **Negative Token Merging (`formatNegative`):** Combines adjacent operator/sign tokens so negative numbers are parsed cleanly.
4. **Precedence Evaluation (`func`, `calculate`, `update`):**
   - First pass evaluates `/` and `x` left-to-right.
   - Second pass evaluates `+` and `-` left-to-right.
   - Reduces `inpArr` in place with `Array.prototype.splice()`.
5. **Division-by-Zero Guard (`checkZero`):** Checks for division by `0` before reducing the expression and displays a clear message on the screen.

## AI-Generated UI Note
- The HTML structure and CSS styling (gradient backdrop, card layout, grid keypad, and button hover/active states) were generated with AI assistance.
- All JavaScript calculation, tokenization, operator precedence, and error-handling logic in `calculator.js` was written from scratch.

## Project Structure
```text
.
├── index.html      # Calculator markup and AI-generated CSS styles
├── calculator.js   # Custom tokenizer, precedence engine, and UI event bindings
└── README.md
