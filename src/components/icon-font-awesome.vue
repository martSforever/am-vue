<template>
    <font-awesome-icon :icon="icon"/>
</template>

<script>

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import fontawesome from '@fortawesome/fontawesome'
    import solid from '@fortawesome/fontawesome-free-solid'
    import regular from '@fortawesome/fontawesome-free-regular'
    import brands from '@fortawesome/fontawesome-free-brands'

    fontawesome.library.add(solid)
    fontawesome.library.add(regular)
    fontawesome.library.add(brands)

    export default {
        name: 'icon-font-awesome',
        props:{
          icon:null
        },
        components: {
            FontAwesomeIcon
        }
    };
</script>
