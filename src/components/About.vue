<template>
    <div class="about">
        <div class="aboutNav">
            <span>a</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span id="m">m</span>
            <span>e</span>
            <h5>who i am</h5>
        </div>
        <div class="aboutSection">
            <img src="/img/user-avtar.jpeg" alt="image" />
            <div class="aboutText">
                <h3>I'm Alok and i'm a developer</h3>
                <p>
                    my name is Alok Ranjan. I am from gaya Bihar.I have completed my 10th and 12th from the Bihar board in 2015 and 2017 with 64% and 55% and I have completed my bachelor's degree from Magadh University in Software engineering (BCA) with 73% in 2020.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "About",
    data() {
        return {};
    },
};
</script>
<style scoped>
.about {
    border-bottom: 5px solid rgb(243, 240, 240);
    margin-top: 80px;
    padding-bottom: 110px;
}
.aboutSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.aboutText {
    text-align: left;
    width: 50%;
}
.aboutText h3 {
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    color: #059669;
}
.aboutText p {
    font-size: 20px;
    font-weight: 600;
}
.aboutNav {
    margin-top: 40px;
}
.aboutNav span {
    text-transform: uppercase;
    color: #ffff;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #bfdbfe;
    padding: 10px;
    border-radius: 3px;
}
#m {
    margin-left: 20px;
}
.aboutNav h5 {
    font-size: 17px;
    margin-top: 22px;
    color: #a78bfa;
    text-transform: uppercase;
    font-weight: 900;
}
@media only screen and (max-width: 350px) {
    .about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    .aboutSection {
        flex-direction: column;
        justify-content: center;
    }
    .aboutText {
        width: 100%;
    }
    .aboutText h3 {
        font-size: 13px;
        padding: 0px 10px 0px 10px;
    }
    .aboutText p {
        font-size: 13px;
        padding: 0px 10px 0px 10px;
    }
    .aboutNav span {
        font-size: 20px;
        margin-left: 2px;
        padding: 8px;
    }
    #m {
        margin-left: 10px;
    }
    .aboutNav h5 {
        font-size: 13px;
    }
    .aboutSection img{
        height: 250px;
        width: 250px;
    }
}
@media only screen and (min-width:350px)and (max-width: 550px) {
    .about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    .aboutSection {
        flex-direction: column;
        justify-content: center;
    }
    .aboutText {
        width: 100%;
    }
    .aboutText h3 {
        font-size: 17px;
        padding: 0px 10px 0px 10px;
    }
    .aboutText p {
        font-size: 15px;
        padding: 0px 10px 0px 10px;
    }
    .aboutNav span {
        font-size: 20px;
        margin-left: 3px;
        padding: 10px;
    }
    #m {
        margin-left: 10px;
    }
    .aboutNav h5 {
        font-size: 15px;
    }
    .aboutSection img{
        height: 270px;
        width: 270px;
    }
}
</style>
