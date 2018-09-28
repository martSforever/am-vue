<template>
    <div class="am-input-area">
        <div>{{currentValue}}</div>
        <div
            ref="input"
            :contenteditable="true"
            :style="styles"
            @input="_handleInput"
        >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'am-input-area',
        props: {
            value: {},

        },
        watch: {
            value(val) {
                if (this.currentValue !== val) {
                    this.currentValue = val;
                }
            },
            currentValue(val) {
                this.$emit('input', val);
                if (this.$refs.input.innerHTML !== val) {
                    this.$refs.input.innerHTML = val;
                }
            }
        },
        data() {
            return {
                currentValue: this.value,
            };
        },
        methods: {
            _handleInput(e) {
                this.currentValue = e.target.innerHTML;
            }
        },
        computed: {
            styles() {
                return {
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#f2f2f2'
                };
            }
        }
    };
</script>
