<template>
    <div class="project">
        <div class="headerNav">
            <span>m</span>
            <span>y</span>
            <span id="p">p</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>

            <h5>what have me made</h5>
        </div>
        <div class="projectContent">
            <div class="projectList" v-for="data in project" :key="data.id">
                <h4>{{ data.name }}</h4>
                <h5>{{ data.para }}</h5>
                <a :href="`${data.link}`"><button>Link For Github</button></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Project",
    data() {
        return {
            project: [
                {
                    id: 11,
                    name: "Rent Management",
                    link: "https://github.com/Alokranjan11/Rent-management",
                    para: "Developed a rent management apps which help landlords to maintains the rent related records for the different months.",
                },

                {
                    id: 1,
                    name: "Pagination",
                    link: "https://github.com/Alokranjan11/Pagination",
                    para: "created a application in which list of user are displayed using axios api call and implemeted pagination and search functionality using vue.js",
                },
                {
                    id: 2,
                    name: "Dashboard",
                    link: "https://github.com/Alokranjan11/userDashboard",
                    para: "Created a dashboard application in which list of card are displayed using axios and implemeted search , delete and add , alert functionality using vue.js",
                },
                {
                    id: 3,
                    name: "Todo-App",
                    link: "https://github.com/Alokranjan11/Todo-App",
                    para: "Developed a todo application in which we can add and delete items using vue.js",
                },
                {
                    id: 4,
                    name: "Color-Picker",
                    link: "https://github.com/Alokranjan11/color-picker",
                    para: "Created a application in which list of color and color-code using vue.js",
                },
                {
                    id: 5,
                    name: "Instagram-Clone",
                    para: "Developed an instagram clone in which user can view all the post and like and comment on the post.Also there in profile and chat section in this application .There is also a login and signup page for the same.",
                    link: "https://github.com/Alokranjan11/instagram-clone",
                },
                {
                    id: 6,
                    name: "E-commerce-App",
                    para: "Developed a shoping  cart application in which user can shop for the prouct and add it to the cart and remove from the cart and can increase number of item.Total amount are also calculated based n added item.",
                    link: "https://github.com/Alokranjan11/e-commerce-App",
                },
                {
                    id: 7,
                    name: "Side-Bar",
                    para: "Created a side bar design using css and vue.js",
                    link: "https://github.com/Alokranjan11/side-bar",
                },
                {
                    id: 8,
                    name: "Login-Page",
                    para: "Created a login page with required filed using vue.js",
                    link: "https://github.com/Alokranjan11/login-page",
                },
                {
                    id: 9,
                    name: "Tour-Travel",
                    para: "Created a aplication which in you can see different location and book accordingly using css and vue.js",
                    link: "https://github.com/Alokranjan11/tour-and-travels",
                },
                {
                    id: 10,
                    name: "Portfolio",
                    para: "Created my Portfolio using css and vue.js",
                    link: "",
                },
            ],
        };
    },
};
</script>

<style scoped>
.project {
    margin-top: 80px;
    margin-bottom: 60px;
    border-bottom: 5px solid rgb(243, 240, 240);
}
.headerNav {
    margin-top: 40px;
}
.headerNav h5 {
    font-size: 17px;
    margin-top: 22px;
    color: #a78bfa;
    text-transform: uppercase;
    font-weight: 900;
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
#p {
    margin-left: 20px;
}
.projectList {
    box-shadow: 0px 0px 20px 5px #e5e7eb;
    padding: 10px;
    margin: 10px;
    width: 25%;
}
.projectContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 80px;
}
.projectList button {
    height: 35px;
    border: none;
    padding: 10px;
    color: #ffff;
    background-color: #60a5fa;
    border-radius: 5px;
    font-weight: 900;
    cursor: pointer;
}
@media only screen and (max-width: 350px) {
    .projectList {
        width: 80%;
    }
    .headerNav h5 {
        font-size: 13px;
    }
    .headerNav span {
        font-size: 17px;
        margin-left: 1px;
        padding: 7px;
    }
    #p {
        margin-left: 6px;
    }
}
@media only screen and (min-width: 350px) and (max-width: 550px) {
    .projectList {
        width: 80%;
    }
    .headerNav h5 {
        font-size: 15px;
    }
    .headerNav span {
        font-size: 20px;
        margin-left: 2px;
        padding: 10px;
    }
    #p {
        margin-left: 8px;
    }
}
</style>
