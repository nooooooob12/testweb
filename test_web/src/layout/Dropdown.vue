<template>
<div class="menu-items">
    <router-link to="#">{{ title }}</router-link>
    <div class="sub-menu-items">
        <div v-for="(item,i) in items" :key="i" class="menu-items">
            <a :href="item.link">{{item.title }}</a>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'dropdown',
    props:['title','servieces']
}
</script>
<style lang="">
    
</style>