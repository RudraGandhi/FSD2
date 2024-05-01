/* write js code to store an array of object having height and name, display name and height of person with highest height*/

let list_height = [{
    "name" : "Rudra",
    "height" : 200
},
{
    "name" : "Rudra",
    "height" : 190
},
{
    "name" : "Rudra",
    "height" : 230
},
{
    "name" : "Rudra",
    "height" : 180
}]

/* console.log(max_height(list_height))

function max_height(list)
{
    let index = 0
    let max = list[0].height
    for(let i=0; i<list.length; i++)
    {
        if(list[i].height > max)
        {
            index = i;
        }
    }
    return(list[index])
} */

table_view(list_height);

function table_view(list)
{
    let head = document.getElementById("height_head");
    let body = document.getElementById("heigth_body");
    let heading = document.createElement("tr");
    for(i in list[0])
    {
        let th = document.createElement("th");
        th.innerHTML = i;
        heading.appendChild(th);
    }
    head.appendChild(heading);
    for(let i=0;i<list.length;i++)
    {
        let body_content = document.createElement("tr");
        for(j in list[i])
        {
            let td = document.createElement("td");
            td.innerHTML = list[i][j];
            body_content.appendChild(td);
        }
        body.appendChild(body_content)
    }
}