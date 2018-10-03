<template>
    <div class="i18n-example example-page">
        <div>{{$amvue.$i18n.locale['languageName']}}</div>
        <am-button-group>
            <am-button v-for="lang in $amvue.$i18n.langs" @click="$amvue.$i18n.setLocale(lang.locale)">
                {{lang['languageName']}}
            </am-button>
        </am-button-group>
        <test-i18n/>
    </div>
</template>

<script>

    export default {
        name: "i18n-example",
        components: {
            'test-i18n': {
                render(h) {
                    return (
                        <div>hello</div>
                    )
                },
            }
        }
    }
</script>
