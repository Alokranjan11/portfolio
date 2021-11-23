<template>
    <div class="skill">
        <div class="skillHeader">
            <span>m</span>
            <span>y</span>
            <span id="s">s</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
            <h5>what i know</h5>
        </div>
        <div class="skillContent">
            <div class="skillDeatails">
                <h2>My creative skills and expriences.</h2>
              
            </div>
            <div class="skillSection">
                <div class="subject">
                    <h3 id="subjectItem">Javascript</h3>
                    <h3>40%</h3>
                </div>
                <div class="skillValue">
                    <div id="javaScript" class="skillValueInPer"></div>
                </div>
                <div class="subject">
                    <h3 id="subjectItem">Vuejs</h3>
                    <h3>50%</h3>
                </div>
                <div class="skillValue">
                    <div id="vue" class="skillValueInPer"></div>
                </div>
                <div class="subject">
                    <h3 id="subjectItem">Reactjs</h3>
                    <h3>30%</h3>
                </div>
                <div class="skillValue">
                    <div id="react" class="skillValueInPer"></div>
                </div>
                <div class="subject">
                    <h3 id="subjectItem">CSS</h3>
                    <h3>50%</h3>
                </div>
                <div class="skillValue">
                    <div id="css" class="skillValueInPer"></div>
                </div>
                <div class="subject">
                    <h3 id="subjectItem">HTML</h3>
                    <h3>50%</h3>
                </div>
                <div class="skillValue">
                    <div id="html" class="skillValueInPer"></div>
                </div>
                <div class="subject">
                    <h3 id="subjectItem">Github</h3>
                    <h3>30%</h3>
                </div>
                <div class="skillValue">
                    <div id="github" class="skillValueInPer"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Skill",
    data() {
        return {};
    },
};
</script>
<style scoped>
.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    border-bottom: 5px solid rgb(243, 240, 240);
    padding-bottom: 160px;
}
.skillContent {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.skillSection {
    text-align: left;
    width: 35%;
}
.skillHeader {
    margin-top: 40px;
}
.skillHeader span {
    text-transform: uppercase;
    color: #ffff;
    font-size: 30px;
    font-weight: 550;
    margin-left: 4px;
    background-color: #bfdbfe;
    padding: 10px;
    border-radius: 3px;
}
#s {
    margin-left: 20px;
}
.skillHeader h5 {
    font-size: 17px;
    margin-top: 22px;
    color: #a78bfa;
    text-transform: uppercase;
    font-weight: 900;
}
.skillValue {
    height: 10px;
    width: 100%;
    background-color: #c7d2fe;
    display: flex;
    align-items: center;
    border-radius: 10px;
}
.skillValueInPer {
    height: 10px;
    background-color: #3b82f6;
    border-radius: 10px;
}
#javaScript {
    width: 40%;
}
#vue {
    width: 50%;
}
#react {
    width: 30%;
}
#css {
    width: 50%;
}
#html {
    width: 50%;
}
#github {
    width: 30%;
}
#subjectItem {
    width: 90%;
}
.subject {
    display: flex;
    align-items: center;
    margin-bottom: -15px;
}
.skillDeatails {
    width: 50%;
    text-align: left;
}
.skillDeatails h2 {
    font-size: 27px;
    color: cadetblue;
}
.skillDeatails h5 {
    font-size: 18px;
}
@media only screen and (max-width: 350px) {
    .skillContent {
        flex-direction: column;
    }
    .skillDeatails {
        width: 100%;
    }
    .skillDeatails h2 {
        font-size: 16px;
        padding: 0px 10px 0px 10px;
    }
    .skillDeatails h5 {
        font-size: 13px;
        padding: 0px 10px 0px 10px;
    }
    .skillHeader span {
        font-size: 19px;
        margin-left: 2px;
        padding: 8px;
    }
    #s {
        margin-left: 10px;
    }
    .skillHeader h5 {
        font-size: 13px;
    }
    .skillValueInPer {
        height: 7px;
    }
    .skillValue {
        height: 7px;
    }
    .subject h3 {
        font-size: 14px;
    }
    .skillSection {
        width: 80%;
    }
    #subjectItem {
        width: 100%;
    }
}
@media only screen and (min-width: 350px) and (max-width: 550px) {
    .skillContent {
        flex-direction: column;
    }
    .skillDeatails {
        width: 100%;
    }
    .skillDeatails h2 {
        font-size: 20px;
        padding: 0px 10px 0px 10px;
    }
    .skillDeatails h5 {
        font-size: 15px;
        padding: 0px 10px 0px 10px;
    }
    .skillHeader span {
        font-size: 20px;
        margin-left: 3px;
        padding: 10px;
    }
    #s {
        margin-left: 10px;
    }
    .skillHeader h5 {
        font-size: 15px;
    }
    .subject h3 {
        font-size: 15px;
    }
    .skillSection {
        width: 80%;
    }
    #subjectItem {
        width: 100%;
    }
}
</style>
