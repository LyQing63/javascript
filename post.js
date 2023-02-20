let info = JSON.stringify({
    school: '南京大学',
    major: '软件工程',
    year: 2020,
  });
  fetch('https://www.fastmock.site/mock/b73a1b9229212a9a3749e046b1e70285/f4/f4-11-4-10',
  {
    method: 'post',
    body: info,
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(result){
    console.log(result);
  });