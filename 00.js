(async ()=>{
  let response
  response = await fetch("https://www.letsrevolutionizetesting.com/challenge.json")
  let json
  json = await response.json();
  console.log(json, json.follow)

  
  let id = json.follow.split('=')[1]

  console.log(id)

  let message = json.message

  while (message == 'This is not the end') {
    response = await fetch(`https://www.letsrevolutionizetesting.com/challenge.json?id=${id}`)
    json = await response.json();
    message = json.message
    id = json.follow.split('=')[1]
  }

  console.log(json)


})();