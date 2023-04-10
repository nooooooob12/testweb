<template>
    <article class="Login_wrap">
            <img src="https://ouch-cdn2.icons8.com/OLOAByYH5WhDY5MEYYC4mnC9xSkIXl0ySOA-9xI2Gp0/rs:fit:512:527/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODQz/LzU1NTU5NWJjLWE3/NDctNGFlNi1hYzQ1/LTRkZTZjNGQ0ZDgy/OS5zdmc.png" alt="Login_img" id="Login_img">
            <h2 class="main_message">찾아주셔서 감사합니다.</h2>
            <p class="sub_message">프론트엔드 개발자가 되고 싶어 준비하며 만들어본 웹 사이트입니다.</p>
            <div class="SNS_wrap">
                <span class="SNS_title">SNS로그인</span>
            </div>
            <ul class="SNS_Login">
                <li class="SNS_item" @click="GitLogin"><router-link to="#"><font-awesome-icon :icon="['fab','github']"/></router-link></li>
                <li class="SNS_item" @click="facebookLogin"><router-link to="#"><font-awesome-icon :icon="['fab','facebook']"/></router-link></li>
                <li class="SNS_item" @click="GoogleLogin"><router-link to="#"><font-awesome-icon :icon="['fab','google']"/></router-link></li>
                <li class="SNS_item" @click=""><router-link to="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111683.png" alt="카톡" id="katalk"></router-link></li>
            </ul>
            <div class="Web_wrap">
                <span class="Web_title">Coding_Web 계정으로 로그인</span>
            </div>
                <div class="Web_Login">
                    <div>
                        <label for="user-id">아이디</label>
                        <div class="ID_box">
                            <input type="text" name="user-id" autocomplete="on" v-model="this.ID">
                        </div>
                    </div>
                    <div>
                        <label for="user-pw">패스워드</label>
                        <div class="PW_box">
                            <input type="password" name="user-pw" autocomplete="on" v-model="this.password">
                        </div>
                    </div>
                </div>
                <div class="account_find">
                    <router-link to="account">계정찾기</router-link>
                </div>
                <button class="sign_in" @click="login">로그인</button>
                <span class="sign_up">아직 회원이 아니신가요? <router-link to="Signup">회원가입</router-link></span>
    </article>
</template>
<script>
import { getAuth, signInWithEmailAndPassword,signInWithPopup, EmailAuthProvider,
         FacebookAuthProvider,GoogleAuthProvider, GithubAuthProvider,} from "firebase/auth";
import router from "@/router/router";
const auth = getAuth();
export default {
    name:'Login',
    data(){
        return{
            ID:'',
            password:''
        }
    },
    created(){
    },
    methods:{
        Web_login(){
        },
        facebookLogin(){
            const fbprovider = new FacebookAuthProvider();
            fbprovider.addScope('user_birthday');
            auth.languageCode = 'ko';
            fbprovider.setCustomParameters({
                display:'popup'
            });
            signInWithPopup(auth,fbprovider)
            .then((result)=>{
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                alert(user.displayName+'님, 반갑습니다.')
                router.push('/')
            })
            .catch((err)=>{
                const errorCode = err.code;
                const errorMessage = err.message;
                const email = err.customData.email;
                const credential = FacebookAuthProvider.credentialFromError(err);
                console.log(errorCode + errorMessage + credential + email)
            })
        },
        GoogleLogin(){
            const Gprovider = new GoogleAuthProvider();
            Gprovider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            auth.languageCode = 'ko';
            Gprovider.setCustomParameters({
                'Hint-ID':'user@gmail.com',
                'Hint-Password':'특수문자포함한 8글자 이상, 12글자 이내'
            })
            signInWithPopup(auth,Gprovider)
            .then((result)=>{
                const Gcredential = GoogleAuthProvider.credentialFromResult(result);
                const token = Gcredential.accessToken;
                const Guser = result.user;
                alert(Guser.displayName+'님, 반갑습니다!')
                router.push('/')
            })
            .catch((err)=>{
                const errorCode = err.code;
                const errorMessage = err.message;
                const email = err.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(err);
                console.log(errorCode + errorMessage + credential + email)
            })
        },

        GitLogin(){
            const gitProvider = new GithubAuthProvider();
            gitProvider.addScope('repo');
            auth.languageCode = 'ko';
            gitProvider.setCustomParameters({
                'allow_signup':'false',
            });
            signInWithPopup(auth,gitProvider).then((result)=>{
                const gitCredential = GithubAuthProvider.credentialFromResult(result)
                const token = gitCredential.accessToken;
                const gituser = result.user
                alert(gituser.displayName+'님, 반갑습니다.')
                router.push('/')
            })
            .catch((err)=>{
                const errorCode = err.code;
                const errorMessage = err.message;
                const email = err.customData.email;
                const credential = GithubAuthProvider.credentialFromError(err);
                console.log(errorCode + errorMessage + credential + email)
            })
        }
}
}
</script>
<style lang="scss">
input{width: 100%; padding-left: 0.375rem; padding-right: 0.375rem;
    input:focus{outline: 0;}
}

    .Login_wrap{ display: block; margin: 0 auto; min-height: 100%; width: 460px; box-sizing: border-box; margin-top: 10%;align-items: center; justify-content: center; text-align: center;
    #Login_img{width: 10rem;}
    .main_message{margin-top:1.5rem; color: rgb(75,85,99); font-size: 1.5rem; line-height: 2rem; font-weight: bold;}
    .sub_message{margin-top:0.5rem; font-size: small; color: rgb(75,85,99);}
    .SNS_title{margin-top:2.5rem;float: left; font-size: medium;}
    .SNS_Login{display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); margin-top: 5.5rem;gap: 0.75rem;
        .SNS_item{list-style: none; display: block; border: 1px solid black; border-radius: 3px; text-decoration: none;  box-sizing: border-box;
            &:hover{box-shadow: 1px 0px 5px gray;cursor: pointer;}
            >a{color:rgb(75,85,99); font-size: large; width:100%; height:100%}
            img{width: 17.43px; height: 17px; text-align: center; margin: 0 auto; display: block; margin-top: 3px;margin-bottom: 3px;}
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