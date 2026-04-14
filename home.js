// let theme = document.getElementById("theme");
// let main = document.getElementById("main-container");
// let header = document.getElementById("heading");
// let sidebar = document.getElementById("sidebar");
// let content = document.getElementById("content");
// let notification = document.getElementById("notification");
// let footer = document.getElementById("footer");
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// let btn4 = document.getElementById("btn4");
// let home = document.getElementById("home");
// let library = document.getElementById("library");
// let profile = document.getElementById("profile");
// let stories = document.getElementById("stories");
// let create = document.getElementById("create");
// let user = document.getElementById("user");
// let body = document.getElementById("body");
// theme.addEventListener("click", () => {
//     body.style.backgroundColor = "black";
//     main.style.backgroundColor = "black";
//     header.style.backgroundColor = "white";
//     sidebar.style.backgroundColor = "white";
//     content.style.backgroundColor = "white";
//     notification.style.backgroundColor = "white";
//     footer.style.backgroundColor = "white";
//     header.style.color = "black";
//     sidebar.style.color = "black";
//     content.style.color = "black";
//     notification.style.color = "black";
//     footer.style.color = "black";
//     btn1.style.color = "black";
//     btn2.style.color = "black";
//     btn3.style.color = "black";
//     btn4.style.color = "black";
//     home.style.color = "black";
//     library.style.color = "black";
//     profile.style.color = "black";
//     stories.style.color = "black";
//     create.style.color = "black";
//     user.style.color = "black";
// });
let posts = document.getElementById("posts");
let explore = {
    method : "GET",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
    }
}
fetch("https://dev.to/api/articles", explore)
.then((response) => {
    return response.json();
})
.then((data) => {
    for(let i = 0 ; i < data.length ; i++){
        let a = document.createElement("div");
        a.classList.add("postcard");
        let b = document.createElement("h2");
        let c = document.createElement("p");
        b.textContent = data[i].title;
        c.textContent = data[i].body;
        a.appendChild(b);
        a.appendChild(c);
        posts.appendChild(a);
    }
});


let notification = document.getElementById("not-con");
let message = {
    method : "GET",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json" 
    }

}
fetch("https://dummyjson.com/posts", message)
.then((response) => {
    return response.json();
})
.then((data) => {
    let pl = data.posts;
    for(let i = 0 ; i < pl.length ; i++){
        let a = document.createElement("div");
        let b = document.createElement("h4");
        b.textContent = pl[i].title;
        a.appendChild(b);
        a.classList.add("message")
        notification.appendChild(a);
    }
});