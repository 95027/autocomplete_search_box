const availKeywords= [
    'HTML',
    'CSS',
    'Boostrap',
    'Javascript',
    'Jquery',
    'React',
    'Redux',
    'Node',
    'Express',
    'Mongodb',
    'Mysql',
    'Python',
    'Java',
    'Angular'
]  

const resultBox=document.querySelector('.result-box');
const inputBox=document.querySelector('.input-box');

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;

    if(input.length)
    {
        result=availKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        })
    }
    
    display(result);

    if(!result.length)
    {
        resultBox.innerHTML='';
    }

    function display(result)
    {
        const content = result.map((list)=>{
            return "<li onclick=selectInput(this)>"+list+"</li>";
        })

        resultBox.innerHTML="<ul>" + content.join('') + "</ul>";
    }
}

function selectInput(list)
{
    inputBox.value = list.innerHTML;
    resultBox.innerHTML='';
}