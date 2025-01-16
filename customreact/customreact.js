function customRender(reactElement,container){
    const domelement = document.createElement()
}


const reactElement = {
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const maincontainer = document.getElementById("root");

customRender(reactElement,maincontainer)