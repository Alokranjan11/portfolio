<template>
    <div class="service">
        <div class="headerNav">
            <span>m</span>
            <span>y</span>
            <span id="s">s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
            <h5>What i Provide</h5>
        </div>
        <div class="work">
            <div class="workList" v-for="data in works" :key="data.id">
                <img :src="data.image" alt="image" />
                <h3>{{ data.name }}</h3>
                <!-- <h4>{{data.para}}</h4> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Service",
    data() {
        return {
            works: [
                 {
                    id: 3,
                    image: "img/java.png",
                    name: "javascript",
                    para: " I had trouble opening .eps files that he had uploaded and instead trying to help and possibly save files in more then one vector format his response was",
                },
                  {
                    id: 2,
                    image: "img/vue.png",
                    name: "vue.js ",
                    para: " I had trouble opening .eps files that he had uploaded and instead trying to help and possibly save files in more then one vector format his response was",
                },
                 {
                    id: 5,
                    image: "img/react.png",
                    name: "react",
                    para: " I had trouble opening .eps files that he had uploaded and instead trying to help and possibly save files in more then one vector format his response was",
                },
                 {
                    id: 4,
                    image: "/img/html.png",
                    name: "html",
                    para: " I had trouble opening .eps files that he had uploaded and instead trying to help and possibly save files in more then one vector format his response was",
                },
                {
                    id: 1,
                    image: "/img/css.png",
                    name: "css",
                    para: " I had trouble opening .eps files that he had uploaded and instead trying to help and possibly save files in more then one vector format his response was",
                },
              
               
               
               
            ],
        };
    },
};
</script>
<style scoped>
.service {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    border-bottom: 5px solid rgb(243, 240, 240);
    margin-top: 40px;
    padding-bottom: 80px;
    margin-bottom: 60px;
}
.headerNav span {
    text-transform: uppercase;
    color: #ffff;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #bfdbfe;
    padding: 10px;
    border-radius: 3px;
}
.headerNav h5 {
    font-size: 17px;
    margin-top: 22px;
    color: #a78bfa;
    text-transform: uppercase;
    font-weight: 900;
}
#s {
    margin-left: 20px;
}
.work {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 70%;
}
.workList {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25%;
    padding: 10px;
    margin: 20px;
    box-shadow: 0px 0px 20px 0px;
}
.workList img {
    height: 200px;
    width: 200px;
}
.workList h3 {
    text-transform: uppercase;
    font-weight: 900;
    color: orange;
}
.workList h4 {
    margin-top: 0px;
}
@media only screen and (max-width: 350px) {
    .work {
        flex-direction: column;
        width: 100%;
    }
    .workList {
        width: 80%;
        margin: 10px;
    }
    .headerNav span {
        font-size: 18px;
        margin-left: 1px;
        padding: 7px;
    }
    .headerNav h5 {
        font-size: 13px;
    }
    #s {
        margin-left: 6px;
    }
    .workList img {
        height: 100px;
        width: 100px;
    }
    .workList h4 {
        font-size: 14px;
    }
    .workList h3 {
        font-size: 15px;
    }
}
@media only screen and (min-width: 350px) and (max-width: 550px) {
    .work {
        flex-direction: column;
        width: 90%;
    }
    .workList {
        width: 80%;
        margin: 10px;
    }
    .headerNav span {
        font-size: 20px;
        margin-left: 2px;
        padding: 10px;
    }
    .headerNav h5 {
        font-size: 15px;
    }
    #s {
        margin-left: 8px;
    }
    .workList img {
        height: 130px;
        width: 130px;
    }
    .workList h4 {
        font-size: 15px;
    }
    .workList h3 {
        font-size: 17px;
    }
}
</style>
