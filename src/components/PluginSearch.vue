<template>
    <div class="field">
        <p class="control">
        <input class="input is-medium" type="text" placeholder="Search for plugin..." v-on:input="request($event.target.value)">
        </p>
    </div>
</template>

<script>

    export default {
        methods: {
            request: function (query) {
                this.$emit('input', query);
            }
        }
    }

</script>

<style scoped>



</style>