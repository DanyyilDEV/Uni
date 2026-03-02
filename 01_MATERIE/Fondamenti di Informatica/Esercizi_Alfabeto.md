

>[!NOTE] Es1
>Dato l'alfabeto $\Sigma = \{0,1,2\}$
>Dimostrare che la stringa $\text{"}102 \text{"} \in \Sigma^*$

1) Passo base
	- Sappiamo per definizione che $\epsilon \in \Sigma^*$
	- Sappiamo anche (sempre per definizione) che $1\in \Sigma$
2) Otteniamo il Primo carattere
	-  $1\circ\epsilon\in\Sigma^*$ per definizione di $\Sigma^*$ 
	- Sappiamo che $\epsilon$ fa sempre parte di $\Sigma^*$ e tramite la concatenazione $1\circ\epsilon$ otteniamo la stringa "$1$" $\implies1\circ\epsilon=1\in\Sigma^*$
3) Otteniamo il secondo carattere 
	- In breve ripetiamo lo stesso processo ma al posto di $\epsilon$ usiamo direttamente il nostro primo carattere "$1$"
	- $0\in\Sigma$
	- $1\in\Sigma^* \implies 1\circ0\in\Sigma^*$
4) Otteniamo il terzo carattere
	- $2\in\Sigma$
	- $10\in\Sigma^*$
	- $\implies 1\circ0\circ2\in\Sigma^*$
Quindi:
- $\Sigma=\{0,1,2\}$
- $102\in\Sigma^*$ 

---

>[!NOTE] Es2
>Dati i linguagi $L_1=\{\epsilon,a,b\}, L_2=\{a,ab\}$
>Calcolare:
>1. $L_1\cup L_2$
>2. $L_1\cap L_2$
>3. $L_1\circ L_2$
>4. $L_2\circ L_1$

1. $L_1\cup L_2$ = {$\epsilon,a,b,ab$}
2. $L_1\cap L_2$ = {$a$}
3. $L_1\circ L_2$ = {$a,ab,aa,aab,ba,bab$}
4.  $L_2\circ L_1$ = {$a,aa,ab,aba,abb$}