<template>
    <li>
        <p class="email">{{ email }}</p>
        <p>{{ message }}</p>
    </li>
</template>

<script>
    export default {
        props: ['email', 'message']
    }
</script>

<style scoped>
    li {
        border: 1px solid gray;
        list-style: none;
        width: 70%;
        margin-inline: auto;
        padding-inline: .8rem;
        margin-bottom: 1rem;
    }
    .email {
        color: purple;
        font-weight: 800;
    }
</style>