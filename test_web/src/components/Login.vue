<template>
    <article class="Login_wrap">
            <img src="https://ouch-cdn2.icons8.com/OLOAByYH5WhDY5MEYYC4mnC9xSkIXl0ySOA-9xI2Gp0/rs:fit:512:527/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODQz/LzU1NTU5NWJjLWE3/NDctNGFlNi1hYzQ1/LTRkZTZjNGQ0ZDgy/OS5zdmc.png" alt="Login_img" id="Login_img">
            <h2 class="main_message">찾아주셔서 감사합니다.</h2>
            <p class="sub_message">프론트엔드 개발자가 되고 싶어 준비하며 만들어본 웹 사이트입니다.</p>
            <div class="SNS_wrap">
                <span class="SNS_title">SNS로그인</span>
            </div>
            <ul class="SNS_Login">
                <li class="SNS_item"><router-link to="#"><font-awesome-icon :icon="['fab','github']"/></router-link></li>
                <li class="SNS_item"><router-link to="#"><font-awesome-icon :icon="['fab','twitter']"/></router-link></li>
                <li class="SNS_item"><router-link to="#"><font-awesome-icon :icon="['fab','google']"/></router-link></li>
            </ul>
            <div class="Web_wrap">
                <span class="Web_title">Coding_Web 계정으로 로그인</span>
            </div>
            <form action="post">
                <div class="Web_Login">
                    <div>
                        <label for="user-id">아이디</label>
                        <div class="ID_box">
                            <input type="text" name="user-id" autocomplete="on">
                        </div>
                    </div>
                    <div>
                        <label for="user-pw">패스워드</label>
                        <div class="PW_box">
                            <input type="password" name="user-pw" autocomplete="on">
                        </div>
                    </div>
                </div>
                <div class="account_find">
                    <router-link to="account">계정찾기</router-link>
                </div>
                <button class="sign_in">로그인</button>
            </form>
    </article>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
input:focus{outline: 0;}
    .Login_wrap{ display: block; margin: 0 auto; min-height: 100%; width: 460px; box-sizing: border-box; margin-top: 10%;align-items: center; justify-content: center; text-align: center;
    #Login_img{width: 10rem;}
    .main_message{margin-top:1.5rem; color: rgb(75,85,99); font-size: 1.5rem; line-height: 2rem; font-weight: bold;}
    .sub_message{margin-top:0.5rem; font-size: small; color: rgb(75,85,99);}
    .SNS_title{margin-top:2.5rem;float: left; font-size: medium;}
    .SNS_Login{display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); margin-top: 5.5rem;gap: 0.75rem;
        .SNS_item{list-style: none; display: block; border: 1px solid black; border-radius: 3px; text-decoration: none;  box-sizing: border-box;
            &:hover{box-shadow: 1px 0px 5px gray;}
            >a{color:rgb(75,85,99); font-size: large; width:100%; height:100%}
        }
    }
    .Web_wrap{position: relative; display: flex; justify-content: center; font-size: small; margin-top: 1.75rem;
        .Web_title{padding-left: 0.5rem; padding-right: 0.5rem; color: rgb(107, 114, 128);      
    }
}    
.Web_Login{display:flex; justify-content:space-between; margin-top: 0.875rem; text-align: left; min-height: 200px;flex-direction: column;
.ID_box,.PW_box{display:block;margin-top: 0.875rem; margin-bottom: 1.275rem; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgb(0,0,0/0.05); width: 460px; padding: 8px 12px;}
}
.account_find{display: flex; align-items: center; justify-content: end;}
.sign_in{background-color: rgb(0,144,249); width: 100%; min-height: 100%; border-radius: 5px; padding: 8px 24px; margin-top: 0.875rem; margin-bottom: 1.275rem; color: white; font-weight: 700;}
}
</style>