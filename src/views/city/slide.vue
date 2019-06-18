<template>
    <ul class="slide">
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
    </ul>
</template>

<script>
export default{
    name: 'slide',
    props: {
        city: String
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'

.slide
    position: fixed
    top: 2rem
    right: .2rem
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
.slide li
    padding-top: .2rem
    color: $bgColor
</style>
