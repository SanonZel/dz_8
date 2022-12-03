const wrapper = document.querySelector('.wrapper')
const input = document.querySelector('.user')

const getUser = async(e) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await response.json()
    const userID = e.target.value
    const filtered = result.filter((user) => user.id === +userID)
    filtered.forEach(user => {
        console.log(filtered,'filtered');
        const block = document.createElement('div')
        block.innerHTML = `
        <div class="block">
        <p>${user.name}</p>
        </div>
        `
      wrapper.innerHTML='';
      wrapper.append(block)
    });
  
    console.log(result,'result');
  }
  
  input.addEventListener('input',(e)=>{
      getUser(e)
  })