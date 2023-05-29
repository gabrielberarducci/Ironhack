/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

 getPosts().then((data) => {
    let projectsTabsParent = document.querySelector("#articles");
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
    newRandomChild(projectsTabsParent,data);
})