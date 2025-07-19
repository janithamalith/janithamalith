---
layout: post
title: The Tarski-Vaught Test
date: 2025-06-17 11:12:00-0400
description:
tags: notes
categories: model-theory
related_posts: false
---

<p align="justify">
   It’s been a while since my last blog post. I’ve been busy working on Project Numina during this time; formalized over 150 problems, which is exciting progress. Now that we’re on a brief break, I decided to revisit model theory to refresh my memory. In this post, I’ll cover a few key ideas about elementary substructures, and the Tarski-Vaught test.
</p>

<p align="justify">
 Let's begin by recalling the definition of a substructure (also called a submodel). This concept generalizes familiar algebraic constructions; just as we have subgroups in group theory and subspaces in linear algebra, substructures capture this notion of "sub-objects" in model theory. Formally, a substructure is itself a model that lives within a larger model.
</p>

<p align="justify">
To make this precise, fix a language $\mathcal{L}$ and let $\mathfrak{A} = \langle A, \ldots \rangle$ be an $\mathcal{L}$-structure. We say $\mathfrak{A}'$ is a substructure of $\mathfrak{A}$ (written $\mathfrak{A}' \subset \mathfrak{A}$) if $A'$ is a subset of $A$ and if each $n$-ary relation $R'$ , $n$-ary function $F'$ , and constant $c'$ of $\mathfrak{A}'$ can be interpreted using the corresponding $n$-ary relation $R$, $n$-ary function $F$, and constant $c$ of $\mathfrak{A}$. More precisely if:

<ol>
  <li>$R' = R \cap (A')^n$ </li>
  <li>$F' = F \upharpoonright (A')^n$</li>
  <li>$c' = c^{\mathfrak{A}}$.</li>
</ol>
</p>

<p align="justify">
Compare this with the statement "$H$ is a subgroup of the group $G$." All the operations of $H$ are precisely the restrictions of the operations of $G$, and the identity element of $H$ is exactly the identity element of $G$. 
</p>

<p align="justify">
To present an alternative characterization of substructures, we first need the notion of $\mathcal{L}$-embeddings. Consider two $\mathcal{L}$-structures $\mathfrak{A} = \langle A, \ldots \rangle$ and $\mathfrak{B} = \langle B, \ldots \rangle$. A map $j : A \to B$ is an $\mathcal{L}$-embedding from $\mathfrak{A}$ to $\mathfrak{B}$ if $j$ is one-to-one and preserves the interpretations of relation, function and constant symbols. That is:

<ol>
  <li>For any $n$-ary relation symbol $R$ and $a_1,\ldots,a_n \in A$, $j(R^{\mathfrak{A}} (a_1,\ldots,a_n))$ if and only if $R^{\mathfrak{B}}(j(a_1),\ldots,j(a_n))$</li>
  <li>For any $n$-ary function symbol $f$ and $a_1,\ldots,a_n \in A$, $j(f^{\mathfrak{A}} (a_1,\ldots,a_n)) = f^{\mathfrak{B}}(j(a_1),\ldots,j(a_n))$</li>
  <li>$j(c^{\mathfrak{A}}) = c^{\mathfrak{B}}$.</li>
</ol>

If $j$ is onto $B$, we say $j$ is an $\mathcal{L}$-isomorphism between $\mathfrak{A}$ and $\mathfrak{B}$. Now, $\mathfrak{A} \subset \mathfrak{B}$ precisely when $A\subseteq B$ and the inclusion map $\iota : A \hookrightarrow B$ is an $\mathcal{L}$-embedding from $\mathfrak{B}$ to $\mathfrak{A}$. In the context of group theory, the inclusion map from a subgroup $H$ to $G$ is a group homomorphism.
</p>

<br>

<p align="justify">
It turns out that the formulas without any quantifiers behave nicely with respect to substructures. Precisely, if $\mathfrak{A} = \langle A, \ldots \rangle$ is a structure and $\mathfrak{A}' = \langle A', \ldots\rangle$ is any substructure of $\mathfrak{A}$, then for any quantifier free formula $\varphi (\underline{x})$ of the language and any tuple $\underline{a}$ of elements of $A'$ we have $\mathfrak{A'} \vDash \varphi (\underline{a})$ if and only if $\mathfrak{A} \vDash \varphi(\underline{a})$. Note our stipulation about the tuple $\underline{a}$; it comes from the smaller model. 
</p>

<p align="justify">
Now, what if we remove the condition "$\ldots$ for any quantifier free formula $\ldots$" and obtain the stronger statement, for <em>any</em> formula $\varphi (\underline{x})$ of the language and any tuple $\underline{a}$ of elements of $A'$ we have $\mathfrak{A'} \vDash \varphi (\underline{a})$ if and only if $\mathfrak{A} \vDash \varphi(\underline{a})$? Then we get a special kind of substructures called <em>elementary</em> substructures. So, for a substructure to be an elementary substructure, the smaller model needs to have the same theory as the bigger model. In other words, whatever the smaller model thinks is true, is true in the bigger model, and whatever the bigger model thinks is true, is true in the smaller model. We denote "$\mathfrak{A}$ is an elementary substructure of $\mathfrak{A}'$" by $\mathfrak{A}'\prec\mathfrak{A}$. In this event, we also say that $\mathfrak{A}$ is an elementary extension of $\mathfrak{A}'$.
</p>

<p align="justify">
Let's now look at some examples. Consider the language $\mathcal{L} = \{ < \}$, and the structures $\langle \mathbb{Q}, < \rangle$ and $\langle \mathbb{R}, < \rangle$, where $<$ is interpreted as the usual ordering. Then these two structures have the same $\mathcal{L}$-theory. So, $\langle \mathbb{Q}, < \rangle \prec \langle \mathbb{R}, < \rangle$. However, $\mathbb{Q}$ is not an elementary substructure of $\mathbb{R}$ in the language of ring theory. Do you see why? Hint: see the next example.
</p>

<p align="justify">
 Consider the language of rings. We know that the set of complex numbers has solutions to the equation $x^2 + 1 = 0$, whereas the set of real numbers doesn't. So, in the language of rings we have $\mathbb{C} \vDash \exists x (x^2 + 1 = 0)$ and $\mathbb{R} \nvDash \exists x (x^2 + 1 = 0)$. So even though, $\mathbb{R}$ is a substructure of $\mathbb{C}$ in the language of rings, $\mathbb{R}$ is not an elementary substructure of $\mathbb{C}$ in the language of rings.
</p>

<p align="justify">
The <em>Tarski-Vaught Test </em> tells us exactly when a substructure is an elementary substructure. Fix a language $\mathcal{L}$, and suppose $\mathfrak{A} = \langle A, \ldots\rangle$ and $\mathfrak{A} = \langle A',\ldots\rangle$ are two $\mathcal{L}$-structures with $\mathfrak{A}'\subset \mathfrak{A}$. Then :
</p>

<p align="justify">
<strong>Theorem</strong> : $\mathfrak{A}'\prec\mathfrak{A}$ if and only if for any $\mathcal{L}$-formula $\varphi(x,\underline{y})$ and for any tuple $\underline{a}$ of elements of $A'$, if there exists $b\in A$ such that $\mathfrak{A}\vDash \varphi(b,\underline{a})$, then there is $c\in A'$ such that $\mathfrak{A}\vDash \varphi(c,\underline{a})$.
</p>

<p align="justify">
In other words, $\mathfrak{A}'\prec\mathfrak{A}$ if and only if for $\underline{a}$ from $A'$, if $\mathfrak{A} \vDash \exists x \varphi(x, \underline{a})$, then there is $c \in A'$ such that $\mathfrak{A}\vDash \varphi(c, \underline{a})$. Let's look at some examples.
</p>

<p align="justify">
This example is from <a href="https://math.stackexchange.com/questions/726808/what-is-the-use-of-tarski-vaught-test">Math SE</a>. Consider $\mathfrak{N} = \langle \mathbb{N}, <\rangle$, and let $\mathfrak{M}= \langle M,\leq\rangle$ be any substructure of $\mathfrak{N}$, where $<$ is interpreted as the usual ordering on natural numbers. We will show that if $\mathfrak{M} \prec \mathfrak{N}$, then $\mathfrak{N} = \mathfrak{M}$. Assume $M\subsetneq \mathbb{N}$. Then for some $k\in M,~ \{0,\ldots,k\}\subsetneq M$; let $m$ be the least such $k$. Then, $m-1 \notin M$. Let $n = \max ~ M \cap \{0,\ldots,m-1\}$. Then $\mathfrak{N} \vDash \exists x (n < x \wedge x < m)$, but for any $c \in M, ~ \mathfrak{N} \nvDash (n < c \wedge c < m)$. So, if $\mathfrak{M}$ is elementary, then $M = \mathbb{N}$, as desired.
</p>

<p align="justify">
Let's look at a fun construction. Let the language be the language of rings. We will build $\mathfrak{M}=\langle M, \ldots\rangle $ such that $\mathfrak{M}$ is a <em>countable</em> elementary substructure of $\mathbb{R}$. Start with $\mathbb{Q}$, and let $M_0 = \mathbb{Q}$. Next, add witnesses for each formula $\varphi(x,q_1,\ldots,q_n)$ with $q_i \in \mathbb{Q}$ and $\mathbb{R}\vDash \exists x \varphi(x,q_1,\ldots,q_n)$; pick $r\in \mathbb{R}$ satisfying $\varphi$ and toss it into $M_1$. For example, if $\varphi$ is $\exists y (y^2 = 2)$, then add $\sqrt{2}$ to $M_1$. Continue this process for all formulas with parameters from $M_n$. Put $M = \bigcup_{n = 0}^\infty M_n$. Then, $M$ is countable as we add at most a countable number of witnesses at each step because the set of all formulas is at most countable. Then by the Tarski-Vaught test, $\mathfrak{M} = \langle M,\ldots\rangle$ must be an elementary substructure of $\mathbb{R}$.
</p>

