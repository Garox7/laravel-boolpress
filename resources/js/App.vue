<template>
    <div>
        <NavComponent />

        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import NavComponent from './components/NavComponent.vue';

export default {
    name: 'App',
    components: {
        NavComponent,
    }
}
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
</style>
