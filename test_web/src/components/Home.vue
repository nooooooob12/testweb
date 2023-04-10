<template>
    <div class="Home">
        <article>
            <main>
                <h2>5월 마지막 주 영화 리스트</h2>
                <div class="moviesList">
                    <ul class="Movies">
                        <li v-for="Movies in movies" key="Movies.id" class="MoviesItem">
                            <span class="rank">{{ Movies.id}}</span>
                            <router-link :to="{name:show,params:{id:Movies.id}}">
                            <img :src="Movies.poster" alt="poster" class="poster"/>
                            </router-link>
                            <div class="detail">
                                <strong class="tit">{{ Movies.name }}</strong>
                                <span class="reate">예매율
                                    <span class="num">{{ Movies.rate }}</span>
                                </span>
                                <router-link :to="{name:'show',params:{id:Movies.id}}" class="link">
                                    자세히 보기
                                </router-link>
                            </div>
                        </li>
                    </ul>
                </div>
         </main>
        </article>
    </div>
</template>
<script lnag="">
import { ref } from 'vue';
import axios from 'axios'
export default {
    name:"Home",
    data(){
        return{
            movies:[],
        }
    },
    methods:{
        
    },
    async created(){
        try{
            const res = await axios.get(`http://localhost:8080/movies`);
            this.movies = res.data
        } catch(err){
            console.log(err)
            alert(err)
        }
    }
     
}
</script>
<style lang="scss">
    .Home{width: 100%; height: auto; position: relative; top: 4rem;}
    .home-content{font-size: x-large; width: fit-content; height: 50%; text-align: center; margin: 0 auto; justify-content: center;}
    @media screen and (max-width:768px) {
        .Home{display: flex;}
    }
</style>