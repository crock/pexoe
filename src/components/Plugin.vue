<template>
    <tbody>
        <tr v-for="plugin in plugins">
            <td>{{ plugin.name }}</td>
            <td>{{ plugin.version }}</td>
            <td>{{ plugin.author }}</td>
            <td><button class="button is-info" :class="{ btnActive: format.selected, disabled: format.disabled }">{{ format.btnTxt }}</button></td>
        </tr>
    </tbody>
</template>

<script>

    export default {
        props: ['plugins'],
        computed: function () {
            if ( this.plugins != null ) {
                return this.plugins
            }
        }
    }

</script>

<style scoped>



</style>