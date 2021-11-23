<template>
    <div>
        <div class="header">
            <div class="headerTitle">
                <span>Portfolio</span>
            </div>
            <div class="headerNav">
                <router-link style="text-decoration: none" to="/">
                    <span>home</span>
                </router-link>
                <router-link style="text-decoration: none" to="/about">
                    <span>about</span>
                </router-link>
                <router-link style="text-decoration: none" to="/skill">
                    <span>skill</span>
                </router-link>
                <router-link style="text-decoration: none" to="/service">
                    <span>service</span>
                </router-link>
                <router-link style="text-decoration: none" to="/project">
                    <span>project</span>
                </router-link>
            </div>
            <i class="fas fa-bars" @click="showRightSideBar()"></i>
        </div>

        <RightSideBar :showSidebar="showBar" @close="closeSideBar()">
            <div class="rightSideBar">
                <router-link style="text-decoration: none" to="/">
                    <span @click="closeSideBar()">home</span>
                </router-link>
                <router-link style="text-decoration: none" to="/about">
                    <span @click="closeSideBar()">about</span>
                </router-link>
                <router-link style="text-decoration: none" to="/skill">
                    <span @click="closeSideBar()">skill</span>
                </router-link>
                <router-link style="text-decoration: none" to="/service">
                    <span @click="closeSideBar()">service</span>
                </router-link>
                <router-link style="text-decoration: none" to="/project">
                    <span @click="closeSideBar()">project</span>
                </router-link>
            </div>
        </RightSideBar>
    </div>
</template>
<script>
import RightSideBar from "./RightSideBar.vue";
export default {
    name: "Header",
    components: {
        RightSideBar,
    },
    data() {
        return {
            showBar: false,
        };
    },
    methods: {
        showRightSideBar() {
            this.showBar = true;
        },
        closeSideBar() {
            this.showBar = false;
        },
    },
};
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #141518;
    border-bottom: 2px solid rgb(243, 240, 240);
    padding: 7px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
}
.header i {
    display: none;
    font-size: 20px;
    color: #ffff;
}
.headerTitle span {
    font-size: 40px;
    font-weight: 900;
    color: #db2777;
    text-transform: uppercase;
}
.headerNav span {
    color: #ffff;
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 900;
}
.rightSideBar {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    height: 35vh;
}
.rightSideBar span {
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 900;
}
@media only screen and (max-width: 350px) {
    .headerTitle span {
        font-size: 25px;
        font-weight: 650;
    }
    .headerNav span {
        margin-left: 3px;
        font-size: 7px;
    }
    .headerNav {
        display: none;
    }
    .header i {
        display: block;
    }
}
@media only screen and (min-width: 350px) and (max-width: 550px) {
    .headerTitle span {
        font-size: 30px;
    }
    .headerNav span {
        font-size: 10px;
        margin-left: 4px;
    }
    .headerNav {
        display: none;
    }
    .header i {
        display: block;
    }
}
</style>
