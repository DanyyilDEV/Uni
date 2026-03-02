# 📝 Cheat Sheet LaTeX per Obsidian

> [!TIP] Utilizzo Rapido
> - **In linea:** `$formula$` (es. $\sqrt{x}$)
> - **Blocco centrato:** `$$formula$$` (es. $$\sum_{i=0}^n x_i$$)
> - **Testo nelle formule:** `\text{testo}` (es. $x=2 \implies \text{vero}$)

## 1. Operatori e Struttura Base
| Concetto | Comando LaTeX | Risultato |
| :--- | :--- | :--- |
| **Frazione** | `\frac{a}{b}` | $\frac{a}{b}$ |
| **Esponente** | `x^{2}` | $x^{2}$ |
| **Pedice** | `x_{n}` | $x_{n}$ |
| **Radice Quadrata** | `\sqrt{x}` | $\sqrt{x}$ |
| **Radice n-esima** | `\sqrt[n]{x}` | $\sqrt[n]{x}$ |
| **Vettore** | `\vec{v}` | $\vec{v}$ |
| **Puntini di sospensione** | `1, 2, \dots, n` | $1, 2, \dots, n$ |
| **Parentesi Adattive** | `\left( \frac{a}{b} \right)` | $\left( \frac{a}{b} \right)$ |

## 2. Analisi Matematica (Analisi 1)
| Concetto | Comando LaTeX | Risultato |
| :--- | :--- | :--- |
| **Limite** | `\lim_{x \to \infty}` | $\lim_{x \to \infty}$ |
| **Sommatoria** | `\sum_{i=0}^{n}` | $\sum_{i=0}^{n}$ |
| **Integrale** | `\int_{a}^{b} f(x) \, dx` | $\int_{a}^{b} f(x) \, dx$ |
| **Derivata** | `\frac{df}{dx}` | $\frac{df}{dx}$ |
| **Derivata Parziale** | `\frac{\partial f}{\partial x}` | $\frac{\partial f}{\partial x}$ |
| **Infinito** | `\infty` | $\infty$ |

## 3. Logica e Insiemistica (Informatica)
| Concetto | Comando LaTeX | Risultato |
| :--- | :--- | :--- |
| **Per ogni / Esiste** | `\forall, \exists` | $\forall, \exists$ |
| **Appartiene / Non app.** | `\in, \notin` | $\in, \notin$ |
| **Insiemi Reali/Nat.** | `\mathbb{R}, \mathbb{N}, \mathbb{Z}` | $\mathbb{R}, \mathbb{N}, \mathbb{Z}$ |
| **Inclusione** | `\subset, \subseteq` | $\subset, \subseteq$ |
| **Unione / Intersez.** | `\cup, \cap` | $\cup, \cap$ |
| **Implicazione / Equiv.** | `\implies, \iff` | $\implies, \iff$ |
| **Negazione (NOT)** | `\neg P` | $\neg P$ |
| **AND / OR (Logico)** | `\land, \lor` | $\land, \lor$ |
| **XOR** | `\oplus` | $\oplus$ |

## 4. Relazioni e Simboli Greci
| Concetto | Comando LaTeX | Risultato |
| :--- | :--- | :--- |
| **Confronto** | `\neq, \approx, \le, \ge` | $\neq, \approx, \le, \ge$ |
| **Alfa, Beta, Gamma** | `\alpha, \beta, \gamma` | $\alpha, \beta, \gamma$ |
| **Delta (min/MAIUSC)** | `\delta, \Delta` | $\delta, \Delta$ |
| **Epsilon, Pi, Theta** | `\epsilon, \pi, \theta` | $\epsilon, \pi, \theta$ |
| **Omega, Phi, Sigma** | `\omega, \phi, \sigma` | $\omega, \phi, \sigma$ |


## 5. Matrici

```
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
```

$$
\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}
$$