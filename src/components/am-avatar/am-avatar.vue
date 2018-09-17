<template>
    <canvas ref="canvas" class="am-avatar"></canvas>
</template>

<script>
    import {oneOf} from '../../scripts/utils';

    export default {
        name: 'am-avatar',
        props: {
            src: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                default: 100
            },
            shape: {
                type: String,
                default: 'drop',
                validator(val) {
                    return oneOf(val, ['drop', 'star', 'heart']);
                },
            }
        },
        data() {
            return {
                image: new Image(),
            };
        },
        created() {
            this.image.src = this.src;
            this.image.addEventListener('load', this._handleImageOnLoad);
        },
        methods: {
            _handleImageOnLoad(e) {
                this[`draw${this.shape.charAt(0).toUpperCase() + this.shape.substring(1)}`](this.image);
            },
            /*水滴形*/
            drawDrop(image) {
                let ctx = this.$refs.canvas.getContext('2d');
                this.$refs.canvas.width = this.size;
                this.$refs.canvas.height = this.size;

                ctx.beginPath();

                ctx.arc(this.size / 2, this.size / 2, this.size / 2, 0, 1.5 * Math.PI);
                ctx.lineTo(this.size, 0);
                ctx.lineTo(this.size, this.size / 2);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(image, 0, 0, this.size, this.size);
            },
            /*星型*/
            drawStar(image) {
                let ctx = this.$refs.canvas.getContext('2d');
                this.$refs.canvas.width = this.size;
                this.$refs.canvas.height = this.size;

                let r = this.size / 4, R = this.size / 2, x = this.size / 2, y = this.size / 2 + this.size / 20,
                    rot = 0;
                ctx.beginPath();
                for (var i = 0; i < 5; i++) {
                    ctx.lineTo(Math.cos((18 + 72 * i - rot) / 180 * Math.PI) * R + x, -Math.sin((18 + 72 * i - rot) / 180 * Math.PI) * R + y);
                    ctx.lineTo(Math.cos((54 + 72 * i - rot) / 180 * Math.PI) * r + x, -Math.sin((54 + 72 * i - rot) / 180 * Math.PI) * r + y);
                }
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(image, 0, 0, this.size, this.size);
            },
            /*心型*/
            drawHeart(image) {
                let ctx = this.$refs.canvas.getContext('2d');
                this.$refs.canvas.width = this.size;
                this.$refs.canvas.height = this.size;
                let x = this.size / 2;
                let y = (this.size / 2) - (this.size / 20);
                let a = (this.size * 3) / 100;                                                    //?
                let vertices = [];
                for (let i = 0; i < 50; i++) {
                    let step = i / 50 * (Math.PI * 2);//设置心上面两点之间的角度，具体分成多少份，好像需要去试。
                    let vector = {
                        x: a * (16 * Math.pow(Math.sin(step), 3)),
                        y: a * (13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step))
                    };
                    vertices.push(vector);
                }
                ctx.save();
                ctx.beginPath();
                ctx.translate(x, y);
                ctx.rotate(Math.PI);
                for (let i = 0; i < 50; i++) {
                    let vector = vertices[i];
                    ctx.lineTo(vector.x, vector.y);
                }
                ctx.restore();
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(image, 0, 0, this.size, this.size);
            },
        },
    };
</script>
