<template>

<div class="format-list columns column">
    <div class="column" v-for="format in formats">
        <div class="info" :class="{ outline: format.selected }">
            <h4 class="plugin-name">{{ format.name }}</h4>
            <h5 class="plugin-version">version {{ format.version }}</h5>
            <a href="#" class="button is-primary" :class="{ btnActive: format.selected, disabled: format.disabled }" @click="select(format)">{{ format.btnTxt }}</a>
        </div>
    </div>
</div>

</template>

<script>

    export default {
		name: 'format',
        data() {
            return {
                formats: [
                    { name: 'PermissionsEx', version: '1.8.8', selected: false, btnTxt: 'Select', disabled: false },
                    { name: 'Group Manager', version: '1.8.8', selected: false, btnTxt: 'Select', disabled: true },
                    { name: 'bPermissions', version: '1.8.8', selected: false, btnTxt: 'Select', disabled: true }
                ]
            };
        },
        methods: {
            toggleFormat: function (index) {
                if (index.selected == false) {
                    index.btnTxt = "Selected"
                } else {
                    index.btnTxt = "Select"
                }
                index.selected = !index.selected
            },
            select: function(format) {
                this.toggleFormat(format);
                this.$emit('select', format);
            }
        }
    }

</script>

<style scoped>

.selected {
  background: #6489FF;
}

.outline {
  border: 2px inset #6489FF;
  box-sizing: border-box;
}

.btnActive {
  background: #6489FF !important;
}

.plugin-name {
  color: #fff;
  font-size: 1rem;
}

.plugin-version {
  color: #6A6B6F;
  font-size: 0.8rem;
}

</style>
