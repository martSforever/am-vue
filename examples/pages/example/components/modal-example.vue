<template>
    <div class="modal-example example-page">
        <!-- <div class="title">基本用法</div>
         <div class="example-row">
             <am-button @click="show1 = !show1">normal</am-button>
             <am-modal v-model="show1" title="基本用法" message="快捷消息内容"/>
         </div>
         <div class="title">无遮罩</div>
         <div class="example-row">
             <am-button @click="show2 = !show2">shadow="false"</am-button>
             <am-modal v-model="show2" title="无遮罩" message="快捷消息内容" :shadow="false"/>
         </div>
         <div class="title">遮罩颜色</div>
         <div class="example-row">
             <am-button @click="show3 = !show3">shadow-color="black"</am-button>
             <am-modal v-model="show3" title="遮罩颜色" message="快捷消息内容" shadow-color="black"/>
         </div>

         <div class="title">对话框形状</div>
         <div class="example-row">
             <am-button @click="(shape = 'fillet') && (show4 = !show4)">shape="fillet"</am-button>
             <am-button @click="(shape = 'none') && (show4 = !show4)">shape="none"</am-button>
             <am-modal v-model="show4" title="对话框形状" message="快捷消息内容" :shape="shape"/>
         </div>

         <div class="title">没有标题栏以及底部栏（默认两者都是存在并且会占用空间的）</div>
         <div class="example-row">
             <am-button @click="show15 = !show15">no-header no-footer</am-button>
             <am-modal v-model="show15" title="没有标题栏以及底部栏" message="快捷消息内容" no-header no-footer/>
         </div>

         <div class="title">自定义对话框展示动画transition-name</div>
         <div class="example-row">
             <am-button @click="show5 = !show5">transition-name</am-button>
             <am-modal v-model="show5" title="transition-name" message="快捷消息内容" transition-name="cst-scale"/>
         </div>

         <div class="title">自定义宽度以及高度</div>
         <div class="example-row">
             <am-button @click="show6 = !show6">width/height</am-button>
             <am-modal v-model="show6" title="width/height" message="快捷消息内容" width="600px" height="600px"/>
         </div>
         <div class="title">全屏大小</div>
         <div class="example-row">
             <am-button @click="show7 = !show7">full</am-button>
             <am-modal v-model="show7" title="full" message="快捷消息内容" full/>
         </div>
         <div class="title">显示消息级别</div>
         <div class="example-row">
             <am-button-group>
                 <am-button @click="(type = 'primary') && (show8 = !show8)" color="primary">type="primary"</am-button>
                 <am-button @click="(type = 'info') && (show8 = !show8)" color="info">type="info"</am-button>
                 <am-button @click="(type = 'success') && (show8 = !show8)" color="success">type="success"</am-button>
                 <am-button @click="(type = 'warn') && (show8 = !show8)" color="warn">type="warn"</am-button>
                 <am-button @click="(type = 'error') && (show8 = !show8)" color="error">type="error"</am-button>
             </am-button-group>

             <am-modal v-model="show8" title="type" message="快捷消息内容" :type="type"/>
         </div>

         <div class="title">确认按钮以及取消按钮</div>
         <div class="example-row">
             <am-button @click="show9 = !show9">foot button</am-button>
             <am-modal v-model="show9" title="确认按钮以及取消按钮" message="快捷消息内容" confirm-button cancel-button
                       @on-confirm="e=>log('confirm')" @on-cancel="e=>log('cancel')"/>
         </div>

         <div class="title">对话框位置</div>
         <div class="example-row">
             <am-radio-group v-model="vertical">
                 <am-button>vertical:{{vertical}}</am-button>
                 <am-radio radio-key="start" label="start"/>
                 <am-radio radio-key="center" label="center"/>
                 <am-radio radio-key="end" label="end"/>
             </am-radio-group>
             <am-radio-group v-model="horizontal">
                 <am-button>horizontal:{{horizontal}}</am-button>
                 <am-radio radio-key="start" label="start"/>
                 <am-radio radio-key="center" label="center"/>
                 <am-radio radio-key="end" label="end"/>
             </am-radio-group>
         </div>
         <div class="example-row">
             <am-button @click="show10 = !show10">toggle</am-button>
             <am-modal v-model="show10" title="vertical/horizontal" message="快捷消息内容" :vertical="vertical"
                       :horizontal="horizontal"/>
         </div>

         <div class="title">通过left/right/top/bottom调整对话框位置</div>
         <div class="example-row">
             <am-button>left:</am-button>
             <am-number-input v-model="left"/>
             <am-button>right:</am-button>
             <am-number-input v-model="right"/>
             <am-button>top:</am-button>
             <am-number-input v-model="top"/>
             <am-button>bottom:</am-button>
             <am-number-input v-model="bottom"/>
         </div>
         <div class="example-row">
             <am-button @click="show11 = !show11">toggle</am-button>
             <am-modal v-model="show11" title="position" message="快捷消息内容"
                       :left="left+'vw'"
                       :right="right+'vw'"
                       :top="top+'vh'"
                       :bottom="bottom+'vh'"/>
         </div>

         <div class="title">自定义内容插槽，标题栏插槽以及底部栏插槽</div>
         <div class="example-row">
             <am-button @click="show12 = !show12">toggle</am-button>
             <am-modal v-model="show12" shape="none">
                 <div>
                     自定义内容
                 </div>
                 <div slot="head">自定义顶部栏</div>
                 <div slot="foot">自定义底部栏</div>
             </am-modal>
         </div>

         <div class="title">通过渲染函数自定义内容、标题栏、底部栏的渲染内容（注意：渲染函数渲染的内容与插槽内容不能共存，这里渲染函数优先显示）</div>
         <am-button @click="show14 = !show14">toggle</am-button>
         <am-modal v-model="show14" shape="none"
                   :head-render="headRender"
                   :content-render="contentRender"
                   :foot-render="footRender"/>

         <div class="title">最大化按钮</div>
         <div class="example-row">
             <am-button @click="show13 = !show13">maxable</am-button>
             <am-modal v-model="show13" title="maxable" message="快捷消息内容" maxable confirm-button cancel-button/>
         </div>

         <h3>以服务的形式调用对话框提示信息，$modal.show(properties)，通过properties可以modal组件的所有的props属性。</h3>
         <div class="title">消息级别</div>
         <div class="example-row">
             <am-button @click="$modal.primary({title:'modal title',message:'modal message'})">$modal primary</am-button>
             <am-button @click="$modal.info({title:'modal title',message:'modal message'})">$modal info</am-button>
             <am-button @click="$modal.success({title:'modal title',message:'modal message'})">$modal success</am-button>
             <am-button @click="$modal.warn({title:'modal title',message:'modal message'})">$modal warn</am-button>
             <am-button @click="$modal.error({title:'modal title',message:'modal message'})">$modal error</am-button>
         </div>
         <div class="title">确认按钮以及取消按钮</div>
         <div class="example-row">
             <am-button @click="showConfirm">$modal.show:onConfirm+onCancel</am-button>
         </div>
         <div class="title">输入对话框</div>
         <div class="example-row">
             <am-button @click="showInput">$modal.show:hasInput</am-button>
         </div>
         <div class="title">通过渲染函数自定义渲染内容</div>
         <div class="example-row">
             <am-button @click="showRender">$modal.show:render</am-button>
         </div>-->

        <h3>
            窗口最小化，窗口最小化有一个前提，首先是，无论是使用插槽或者render渲染函数，其内容都有可能与当前页面组件的数据进行绑定，
            窗口最小化之后，用户可能会通过路由跳转到其他页面，如果是普通的路由，当前的页面数据就会消失，为了确保窗口数据绑定正确，也就是为了
            确保当前页面数据不会丢失，当前页面所在路由应该使用keep-alive包裹起来，进行页面缓存，如果窗口不与当前页面数据进行绑定，而是
            一个静态页面或者与vuex中的状态进行绑定，则可以无视上面几句话
        </h3>
        <div class="title">窗口最小化</div>

        <div class="example-row">
            <am-button-group>
                <am-button :label="show16+'->>minimize'" @click="show16 = !show16"/>
            </am-button-group>

            <am-modal v-model="show16" title="最小化窗口标题" message="最小化窗口内容" minable maxable/>
        </div>

        <div class="example-row">
            <am-button-group>
                <am-button label="primary" @click="newModal('primary')" color="primary"/>
                <am-button label="info" @click="newModal('info')" color="info"/>
                <am-button label="success" @click="newModal('success')" color="success"/>
                <am-button label="warn" @click="newModal('warn')" color="warn"/>
                <am-button label="error" @click="newModal('error')" color="error"/>
            </am-button-group>
        </div>


    </div>
</template>

<script>
    import AmButtonGroup from '../../../../src/components/am-button/am-button-group';
    import AmModal from '../../../../src/components/am-modal/am-modal';
    import AmRadioGroup from '../../../../src/components/am-radio-group/am-radio-group';
    import AmNumberInput from '../../../../src/components/am-number-input/am-number-input';

    export default {
        name: 'modal-example',
        components: {AmNumberInput, AmRadioGroup, AmModal, AmButtonGroup},
        data() {
            return {
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                show5: false,
                show6: false,
                show7: false,
                show8: false,
                show9: false,
                show10: false,
                show11: false,
                show12: false,
                show13: false,
                show14: false,
                show15: false,
                show16: false,


                type: 'primary',
                shape: 'fillet',
                vertical: 'start',
                horizontal: 'center',

                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
        },
        methods: {
            log(msg) {
                alert(msg);
            },
            showConfirm() {
                this.$modal.show({
                    hideOnClickOutside: false,
                    shadow: false,
                    confirmButton: true,
                    cancelButton: true,
                    maxable: true,
                    onConfirm() {
                        console.log('confirm callback');
                    },
                    onCancel() {
                        console.log('cancel callback');
                    },
                });
            },
            showInput() {
                this.$modal.show({
                    hideOnClickOutside: false,
                    title: '输入提示标题',
                    type: 'warn',
                    message: '提示：输入提示信息',
                    hasInput: true,
                    shadow: false,
                    onConfirm(input) {
                        console.log('confirm input:', input);
                    },
                    onCancel() {
                        console.log('cancel input');
                    },
                });
            },

            showRender() {
                this.$modal.show({
                    shape: 'none',
                    // shadow: false,
                    // hideOnClickOutside: false,

                    headRender: this.headRender,
                    contentRender: this.contentRender,
                    footRender: this.footRender,
                });
            },

            headRender(h) {
                return (
                    <div>left:{this.left}</div>
                );
            },
            contentRender(h) {
                return (
                    <div>right:{this.right}</div>
                );
            },
            footRender(h) {
                return (
                    <div>top:{this.top}</div>
                );
            },


            newModal(type) {
                this.$modal.new({
                    type,
                    minable: true,
                    maxable: true,
                    title: '窗口标题' + (new Date().getMinutes() + new Date().getSeconds()),
                    message: type,
                });
            },
        },
    };
</script>

<style lang="scss">
    .modal-example {

    }

    .cst-scale-enter-active, .cst-scale-leave-active {
        transform-origin: left;
        @include transition-all;
    }

    .cst-scale-enter, .cst-scale-leave-to {
        transform: scale(1.2);
    }
</style>
