<template>
    <div class="footer">
        <a href="https://github.com/Alokranjan11"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/alok-ranjan-309905216/"><i class="fab fa-linkedin"></i></a>
        <!-- <a href="https://www.instagram.com/raj.alok07/"><i class="fab fa-instagram"></i></a> -->
        <!-- <a href="https://www.facebook.com/profile.php?id=100015349681162"><i class="fab fa-facebook"></i></a> -->
    </div>
    <div class="created">
        <span>Create by Alok Ranjan</span>
    </div>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {};
    },
};
</script>
<style scoped>
.footer {
    background-color: #ffff;
    border-top: 2px solid rgb(243, 240, 240);
    background-color: #141518;
    padding: 20px 5px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
.footer i {
    font-size: 35px;
    margin: 30px 0px 0px 30px;
    color: black;
    color: #ffff;
    cursor: pointer;
}
.created{
    color: #ffff;
}
@media only screen and (max-width: 350px) {
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .footer i {
        font-size: 27px;
        margin: 0px;
    }
}
@media only screen and (min-width: 350px) and (max-width: 550px) {
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .footer i {
        font-size: 30px;
        margin: 0px;
    }
}
</style>
