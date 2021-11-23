<template>
     <transition  name="fade" v-if="showSidebar">
         <div class="alert">
              <div class="sideBarContent" >
            <i id="sideBarcut" class="fas fa-times" @click="hideSideBar()"></i>   
             <div class="user">
                <i class="fas fa-user-circle"></i>
                <span>Alok Ranjan</span>
            </div> 
                 <slot></slot>
             </div>
         </div>
            
  </transition>
</template>
<script>
export default {
    name:"RightSideBar",
    props:{
        showSidebar:{
            type:Boolean,
            required:true,
            default:false,
        },
    },
    data(){
        return{

        }
    },
    methods:{
        hideSideBar(){
            this.$emit("close")
        }
    }
}
</script>
<style scoped>
.alert{
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.sideBarContent{
    height: 100vh;
    width: 45%;
    background-color: rgb(145, 141, 141);
    background-color: #333;
    position: fixed;
    top: 0px;
    right: 0px;
    border-radius: 30px 0px 0px 0px;
}
#sideBarcut {
    position: absolute;
    top: 0px;
    right: 5px;
    padding: 10px;
    font-size: 22px;
    color: #ffff;
}
.user{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.user span{
    color: orange;
    font-size: 18px;
    font-weight: 900;
}
.user i{
   color: #ffff;
    font-size: 70px;
    margin-bottom: 5px;
}
</style>