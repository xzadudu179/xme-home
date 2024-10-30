<template>
    <article class="item">
        <h2 class="title">
            <slot name="title"></slot>
        </h2>
        <div class="content">
            <slot></slot>
        </div>
    </article>
</template>

<style scoped>
    .title {
        text-indent: -1.5em;
        font-size: 1.2em;
        font-weight: 600;
        color: var(--primary-color);
    }
    .content {
        padding: 10px 0;
    }
</style>