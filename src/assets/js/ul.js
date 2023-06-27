const catalogUl1 = document.getElementById('catalog-ul-1');
const catalogUl2 = document.getElementById('catalog-ul-2');
const catalogUl1Childrens = catalogUl1.children;

for (var i = 0; i < catalogUl1Childrens.length; i++) {
    var children = catalogUl1Childrens[i];

    console.log(children)

    // catalogUl1Childrens[i].addEventListener('mouseenter', () => {
    //     console.log(i)
    // })
}