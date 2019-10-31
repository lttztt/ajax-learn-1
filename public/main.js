
console.log('看到这个说明你成功加载了main.js');

getCSS.onclick = ()=>{
  let request = new XMLHttpRequest();
  request.open('GET','/style.css')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      let res = request.response;
      let style = document.createElement('style')
      style.innerHTML = res;
      document.head.appendChild(style)
    }
  }
  request.send()
}

getJS.onclick = ()=>{
  let request = new XMLHttpRequest()
  request.open('GET','/2.js')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && 200 <= request.status < 300){
      let res = request.response;
      let script = document.createElement('script')
      script.innerHTML = res
      document.body.appendChild(script)
      
    }
  }
  request.send()
}

getHTML.onclick = ()=>{
  let xhr = new XMLHttpRequest()
  xhr.open('GET', '/3.html')
  xhr.onreadystatechange = function(){
    console.log('onreadystatechange');
    
    if(xhr.readyState === 4 && xhr.status === 200){
      let res = xhr.response
      let div = document.createElement('div')
      div.innerHTML = res
      document.body.appendChild(div)
    }
  }
  xhr.send()
}


getXML.onclick = ()=>{
  let request = new XMLHttpRequest();
  request.open('GET', '/4.xml')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      let res = request.responseXML
      let text = res.getElementsByTagName('warning')[0].textContent;

      console.log(text.trim());
      
    }
  }
  request.send()
}

getJSON.onclick = ()=>{
  let request = new XMLHttpRequest();
  request.open('GET', '/5.json')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4 && request.status === 200){
      let res = request.response
      res = JSON.parse(res)
      myName.innerText = res.name
    }
  }
  request.send()
}

let n = 1;
getPage.onclick = ()=>{
  n += 1;
  if(n > 3){
    alert('没有更多了')
    return 
  }
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `page${n}`);
  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
      let res = xhr.response;
      res = JSON.parse(res)
      console.log(res);
      res.map((item)=>{
        let node = document.createElement('li');
        node.innerText = item.id
        xxx.appendChild(node)
      })
    }
  }
  xhr.onerror = function(e){
  }
  xhr.send()
}