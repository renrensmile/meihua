---
home: true
heroImage: /logo.svg
heroText: 梅花易数学习笔记
tagline: 观象取意，明体察用；记录从基础到实践的每一次推演。
actions:
  - text: 从入门开始 →
    link: /guide/
    type: primary
  - text: 浏览基础体系
    link: /basics/
    type: secondary
features:
  - title: 由象入理
    details: 从阴阳、五行、八卦等基础概念出发，建立清晰的象数框架。
  - title: 重在推演
    details: 记录起卦方法、体用关系与互变卦的判断过程，避免只记结论。
  - title: 持续复盘
    details: 用案例沉淀观察、判断和应验后的反思，让理解逐步深入。
footer: 梅花易数学习笔记 · 谨记：学习与文化研究用途，不作为现实决策的唯一依据
---

## 学习路径

<div class="study-path">
  <a class="study-card" href="/basics/">
    <span class="study-card__number">壹</span>
    <span class="study-card__title">基础体系</span>
    <span class="study-card__desc">阴阳、五行、八卦与卦象基础</span>
  </a>
  <a class="study-card" href="/divination/">
    <span class="study-card__number">贰</span>
    <span class="study-card__title">起卦方法</span>
    <span class="study-card__desc">时间、数字、方位与触机起卦</span>
  </a>
  <a class="study-card" href="/cases/">
    <span class="study-card__number">叁</span>
    <span class="study-card__title">案例与复盘</span>
    <span class="study-card__desc">从取象到判断，记录完整推演过程</span>
  </a>
  <a class="study-card" href="/tools/">
    <span class="study-card__number">肆</span>
    <span class="study-card__title">学习工具</span>
    <span class="study-card__desc">用刷题工具巩固六十四卦记忆</span>
  </a>
</div>

## 当前学习章节

- [第一章：记住卦名和卦序](/basics/chapter-01-hexagram-names.html)
- [八卦基础](/basics/bagua.html)
- [六十四卦记忆刷题工具](/tools/64gua-quiz.html)

## 记录原则

> 先辨象，再明理；先写依据，再下判断；重视复盘，不执一断。

- **写清背景**：何时、何事、何种触机。
- **保留过程**：本卦、互卦、变卦、体用与取象依据。
- **及时复盘**：记录后续发展，并修正自己的理解。

::: tip 温馨提示
梅花易数笔记用于传统文化学习、个人观察与思维训练。涉及健康、法律、财务等重要现实问题，请以专业人士意见和可靠事实为准。
:::

<style>
:root {
  --vp-c-brand-1: #7c4a2d;
  --vp-c-brand-2: #9a6540;
  --vp-c-brand-3: #b67c52;
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #5b321e 30%, #a36438);
}

.vp-hero-info-wrapper {
  background: radial-gradient(circle at 50% 0, rgba(181, 124, 75, 0.14), transparent 56%);
}

.study-path {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.75rem 0 2.5rem;
}

.study-card {
  display: flex;
  flex-direction: column;
  min-height: 10.5rem;
  padding: 1.5rem;
  color: var(--vp-c-text);
  text-decoration: none;
  background: linear-gradient(145deg, #fffdf8, #f6eee3);
  border: 1px solid #e5d3bf;
  border-radius: 0.75rem;
  box-shadow: 0 6px 20px rgba(86, 51, 29, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.study-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(86, 51, 29, 0.15);
}

.study-card__number {
  color: #a36438;
  font-family: KaiTi, STKaiti, serif;
  font-size: 1.25rem;
}

.study-card__title {
  margin-top: 0.75rem;
  color: #5b321e;
  font-family: KaiTi, STKaiti, serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.study-card__desc {
  margin-top: 0.55rem;
  color: #765e4b;
  line-height: 1.65;
}

@media (max-width: 719px) {
  .study-path {
    grid-template-columns: 1fr;
  }
}
</style>
