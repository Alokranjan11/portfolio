<template>
    <div class="home">
        <div class="homeContent">
            <h4>Hii, I am</h4>
            <span>Alok Ranjan</span>
            <div class="what"><span>a </span><span id="work">front-end Developer</span></div>
        </div>
        <div class="homeContentImage"></div>
    </div>
    <About></About>
    <Skill></Skill>
    <Service></Service>
    <Project></Project>
</template>
<script>
import About from "../components/About.vue";
import Skill from "../components/Skill.vue";
import Service from "../components/Service.vue";
import Project from "../components/Project.vue";
export default {
    name: "Home",
    components: {
        About,
        Skill,
        Service,
        Project,
    },
    data() {
        return {};
    },
};
</script>
<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    height: 100vh;
    width: 100%;
    text-transform: uppercase;
    background-color: #55565b ;
    border-bottom: 5px solid rgb(243, 240, 240);
}
.homeContent {
    display: flex;
    flex-direction: column;
    text-align: left;
}
.homeContent h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 0px;
    color: white;

}
.homeContent span {
    font-weight: 800;
    font-size: 45px;
    color: white;
}
.what {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
}
.what span {
    font-size: 20px;
    text-align: left;
}
.homeContentImage img {
    height: 400px;
    width: 400px;
    box-shadow: 0px 0px 20px 0px;
}
#work {
    font-size: 22px;
    margin-left: 6px;
    color: rgb(0 5 15);
}
@media only screen and (max-width: 350px) {
    .home {
        max-width: 100%;
    }
    .homeContent h4 {
        font-size: 10px;
    }
    .homeContent span {
        font-size: 25px;
    }
    .what span {
        font-size: 13px;
    }
     #work {
        font-size: 16px;
    }
}
@media only screen and (min-width: 350px) and (max-width: 550px) {
    .home {
        max-width: 100%;
    }
    .homeContent h4 {
        font-size: 12px;
    }
    .homeContent span {
        font-size: 28px;
    }
    .what span {
        font-size: 15px;
    }
    #work {
        font-size: 18px;
    }
}
</style>
