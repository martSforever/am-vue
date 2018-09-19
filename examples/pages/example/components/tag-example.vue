<template>
    <div class="tag-example example-page">

        <div class="example-row">
            <am-button-group>
                <am-button @click="tags1.push({label: 'new tag'})">push</am-button>
                <am-button @click="tags1.pop()">pop</am-button>
            </am-button-group>
        </div>

        <div class="title">基本用法</div>
        <div class="example-row">
            <am-tag-input :tags="tags1" @confirm="handleConfirm"/>
        </div>
        <am-button label="button"/>

        <div class="title">tag-input的外观</div>
        <div class="example-row">
            <am-tag-input :tags="tags1" @confirm="handleConfirm" type="fill"/>
            <am-tag-input :tags="tags1" @confirm="handleConfirm" type="line"/>
            <am-tag-input :tags="tags1" @confirm="handleConfirm" type="none"/>
        </div>

        <div class="title">tag-input的形状</div>
        <div class="example-row">
            <am-tag-input :tags="tags1" @confirm="handleConfirm" shape="fillet"/>
            <am-tag-input :tags="tags1" @confirm="handleConfirm" shape="round"/>
            <am-tag-input :tags="tags1" @confirm="handleConfirm" shape="none"/>
        </div>
        <div class="title">tag-input的颜色</div>
        <div class="example-row">
            <am-tag-input :tags="tags1" @confirm="handleConfirm" color="primary"/>
            <am-tag-input :tags="tags1" @confirm="handleConfirm" color="info"/>
            <am-tag-input :tags="tags1" @confirm="handleConfirm" color="success"/>
            <am-tag-input :tags="tags1" @confirm="handleConfirm" color="warn" style="margin-top: 12px"/>
            <am-tag-input :tags="tags1" @confirm="handleConfirm" color="error" style="margin-top: 12px"/>
        </div>

        <div class="title">tag-input的大小</div>
        <div class="example-row">
            <div style="margin-bottom: 12px">
                <am-tag-input :tags="tags1" @confirm="handleConfirm" size="large"/>
                <am-button label="large" size="large"/>
            </div>
            <div style="margin-bottom: 12px">
                <am-tag-input :tags="tags1" @confirm="handleConfirm" size="default"/>
                <am-button label="default" size="default"/>
            </div>
            <div style="margin-bottom: 12px">
                <am-tag-input :tags="tags1" @confirm="handleConfirm" size="small"/>
                <am-button label="small" size="small"/>
            </div>
        </div>
        <div class="title">长编辑框</div>
        <div class="example-row">
            <am-tag-input :tags="tags1" @confirm="handleConfirm" long/>
        </div>
        <div class="title">禁用(禁用状态下，默认无输入框)</div>
        <div class="example-row">
            <am-tag-input :tags="tags1" @confirm="handleConfirm" disabled/>
        </div>
        <div class="title">无输入框</div>
        <div class="example-row">
            <am-tag-input :tags="tags1" @confirm="handleConfirm" not-input/>
        </div>
        <div class="title">tag样式</div>
        <div class="example-row">
            <am-tag-input :tags="tags2"/>
        </div>

        <div class="title">使用渲染函数渲染tag内容</div>
        <div class="example-row">
            <am-tag-input :tags="tags2" :render-func="render1"/>
        </div>
        <div class="title">使用作用域插槽渲染tag内容</div>
        <div class="example-row">
            <am-tag-input :tags="tags2">
                <div slot-scope="{item}">
                    <am-icon icon="fas-minus"/>
                    <span>{{item.label}}</span>
                </div>
            </am-tag-input>
        </div>

    </div>
</template>

<script>


    export default {
        name: 'tag-example',
        data() {
            return {
                tags1: [
                    {color: 'primary', label: 'primary'},
                    {color: 'info', label: 'info'},
                    {color: 'success', label: 'success'},
                    {color: 'warn', label: 'warn'},
                    {color: 'error', label: 'error'},
                ],
                tags2: [
                    {color: 'primary', label: 'primary-fill-fillet', type: 'fill', shape: 'fillet'},
                    {color: 'info', label: 'info-fill-round', type: 'line', shape: 'round',},
                    {color: 'success', label: 'success-fill-none', type: 'none', shape: 'none',},
                    {color: 'warn', label: 'warn-fill-round', type: 'fill', shape: 'round',},
                    {color: 'error', label: 'error-fill-fillet', type: 'line', shape: 'fillet',},
                ]
            };
        },
        methods: {
            handleConfirm(label) {
                this.tags1.push({label});
            },
            render1(h, {item}) {
                return (
                    <div>
                        <am-icon icon="fas-plus"/>
                        <span>{item.label}</span>
                    </div>
                );
            },
        },
    };
</script>
