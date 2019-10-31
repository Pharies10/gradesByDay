
            
var penpromise= d3.json("penguins/classData.json")


var success= function(data)
{
    console.log(data)
    var days = d3.range(39)
    console.log(days)
    d3.select("div")
    .selectAll("span")
        .data(days)
        .enter()
        .append("span")
        .append("button")
        .text(function(d) {return d})
        .on("click", function(n){
        
        
        var mapPen1= function(p,i)
        {
            console.log(p.quizes[n].grade)
            var xPen = i
            var yPen = p.quizes[n].grade
    
            return { x:xPen, y:yPen}
    
        
    
        }
        var quizList = data.map(mapPen1)
        
           
         var xScale = makeXScale(quizList)
        var  yScale = makeYScale(quizList)
    
          drawpoints(quizList, xScale, yScale)
        
    })
    
    
    
    
    
  
 
    
    
}

var fail=function(data)
{
    console.log("doesn't work")
}

penpromise.then(success,fail)
                


var screen={width:800,height:600}

var drawpoints=function(quizList, xScale, yScale)
{
    d3.select('svg')
    .attr("height",screen.height)
    .attr("width",screen.width)
    console.log(quizList)
    d3.select('svg')
    .selectAll("circle")
    .data(quizList)
    .enter()
    .append("circle")
    .attr("cx",function(q){return xScale(q.x)})
    .attr("cy",function(q){return yScale(q.y)})
    .attr("r",10)
    
    
    
    
    
    
}



















var makeXScale = function(data)
{
var xScale=d3.scaleLinear()
 xScale.domain(
 [
     d3.min(data,function(d){return d.x}),
     d3.max(data,function(d){return d.x})
 ]
 )
xScale.range([0,screen.width])

 return xScale
}


var makeYScale = function(data)
{
var yScale=d3.scaleLinear()
 yScale.domain(
 [
    d3.min(data,function(d){return d.y}),
     d3.max(data,function(d){return d.y})
 ]
 )
yScale.range([screen.height,0])
return yScale
    
}





