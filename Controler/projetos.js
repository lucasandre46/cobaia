import { postBD } from "./postBD.js";

export function createProjects() {

    const section = document.getElementById('Post');

    let div_post = document.createElement('div');
    div_post.id = 'div_post';

    for(let i = 0; i < postBD.length; i++ ){

        let divPts = document.createElement('div');
        divPts.id = 'divPts';
        

        let imgPost = document.createElement('img');
        imgPost.id = 'imgPost';
        imgPost.src = postBD[i].img;


        let titlePost = document.createElement('title');
        titlePost.id = 'title';
        titlePost.src = postBD[i].title;


        let txtPost = document.createElement('h2');
        txtPost.id = 'txtPost';
        txtPost.src = postBD[i].txt;
    }

    section.appendChild(div_post);
    div_post.appendChild(divPts);
    divPts.appendChild(imgPost);
    divPts.appendChild(titlePost);
    divPts.appendChild(txtPost);
}