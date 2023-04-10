<template>
    <div class="sign_wrap">
        <img src="https://ouch-cdn2.icons8.com/OLOAByYH5WhDY5MEYYC4mnC9xSkIXl0ySOA-9xI2Gp0/rs:fit:512:527/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODQz/LzU1NTU5NWJjLWE3/NDctNGFlNi1hYzQ1/LTRkZTZjNGQ0ZDgy/OS5zdmc.png" alt="sign_img" id="sign_img">
        <h2 class="main_message">Coding_Web 회원가입</h2>
        <div class="signup__message-slider">
            <p class="sub_message">프론트엔드 개발자가 되고 싶어 준비하며 만들어본 웹 사이트입니다.</p>
        </div>
        <div class="SignUp__box">
                    <div>
                        <label for="user-id">아이디</label>
                        <div class="ID_box">
                            <input type="text" name="user-id" autocomplete="on" placeholder="user@example.com" v-model="this.ID">
                        </div>
                    </div>
                    <div>
                        <label for="user-pw">패스워드</label>
                        <div class="PW_box">
                            <input type="password" name="user-pw" autocomplete="on" placeholder="****" v-model="this.password">
                        </div>
                    </div>
                    <div>
                        <label for="user-pw">패스워드 확인</label>
                        <div class="PW_box">
                            <input type="password" name="user-pw" autocomplete="on" placeholder="****" v-model="this.password">
                        </div>
                    </div>
                    <button class="signUp__check">가입하기</button>
                </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
input{width: 100%; padding-left: 0.375rem; padding-right: 0.375rem;
    input:focus{outline: 0;}
}
.sign_wrap{ display: block; margin: 0 auto; min-height: 100%; width: 460px; box-sizing: border-box; margin-top: 10%;align-items: center; justify-content: center; text-align: center;
    #sign_img{width: 10rem;}
    .main_message{margin-top:1.5rem; color: rgb(75,85,99); font-size: 1.5rem; line-height: 2rem; font-weight: bold;}
    .signup__message-slider{ display: flex; width: 100%; min-height: 100%; word-break: keep-all;
    .sub_message{display:flex; justify-content:center; margin-top:0.5rem; font-size: small; color: rgb(75,85,99);}
    }
    .SignUp__box{display:flex; justify-content:space-between; margin-top: 1.875rem; text-align: left; min-height: 200px;flex-direction: column;
    .ID_box,.PW_box{display:block;margin-top: 0.875rem; margin-bottom: 1.275rem; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgb(0,0,0/0.05); width: 460px; padding: 8px 12px;}
}
.signUp__check{background-color: rgb(0,144,249); width: 100%; min-height: 100%; border-radius: 5px; padding: 8px 24px; margin-top: 0.875rem; margin-bottom: 1.275rem; color: white; font-weight: 700;}
}
</style>