<template>
    <div class="footer">
        <article>
            <h2>footer</h2>
        </article>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.footer{  position: absolute;
  height: 60px;width: 100%;padding: 0 25px;line-height: 60px;
  color: #8a8c8f;border-top: 1px solid #dee5e7;background-color: #f2f2f2;bottom: 0px;}
    @media screen and (max-width:768px) {
        .footer{bottom:0px;}
    }
</style>