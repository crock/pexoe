<template>

    <p class="control is-loading">
        <textarea
            id="current"
            class="textarea"
            placeholder="Paste the contents of your current file..."
            v-on:input="update($event.target.value)">
        </textarea>
    </p>

</template>

<script>

    export default {
        methods: {
            update: function (yaml) {
                this.$emit('input', yaml);
            }
        }
    }

</script>

<style scoped>



</style>
