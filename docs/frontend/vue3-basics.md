# Vue 3 基础

## 学习目标

建立 Vue 3 组合式 API 的基础认知。

## 关键结论

- 使用 `ref` 创建基本类型响应式数据。
- 使用 `reactive` 创建对象类型响应式数据。
- 在单文件组件中，优先使用 `<script setup>` 简化组件编写。

## 最小示例

```vue
<script setup>
import { computed, ref } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
</script>

<template>
  <button @click="count += 1">
    当前数量：{{ count }}，双倍：{{ doubleCount }}
  </button>
</template>
```

## 延伸阅读

- [Vue 官方文档](https://cn.vuejs.org/)
