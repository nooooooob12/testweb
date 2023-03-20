<template>
        <footer class="inner_footer">
            <div class="footer-message">개인 포트폴리오를 위한 제작용 웹 사이트입니다.</div>
            <div class="footer-center">E-mail : hay8268@gmail.com</div>
            <div class="footer-copyright">CopyRight 2023. All  Rights Reserved</div>
        <nav class="footer_Shortcuts">
            <router-link to="https://github.com/nooooooob12"><font-awesome-icon :icon="['fab','github']"/><span id="Shortcuts-message">GitHub 바로가기</span></router-link>
        </nav>
        </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
a{text-decoration: none; color:#8a8c8f}
html,body{margin: 0px; padding: 0px;}
.inner_footer{position:absolute; bottom:100%;
  min-height: auto; width: 100%; padding: 0 25px; line-height: 25px; 
  color: #8a8c8f;border-top: 1px solid #dee5e7;background-color: #f2f2f2;

  .footer-message{font-weight: 0.375rem; color: #333;}
  .footer-center{padding-top: 12px;}
  .footer-copyright{padding-bottom: 12px;}
.footer_Shortcuts{ display: flex; flex-direction: column;  
  #Shortcuts-message{margin-left: 0.375rem; }
 }
}
    @media screen and (max-width:768px) {
        .footer{bottom:0px;}
    }
</style>