<template>
    <div class="flex h-screen">
        <topbar />
        <navbar />
    </div>
</template>
<script>
    import topbar from './TopBar.vue';
    import navbar from './NavBar.vue';
    export default {
        name: 'SessionPage',
        components: {
            topbar,
            navbar
        }
    }
</script>