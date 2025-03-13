// เริ่มเขียนโค้ดตรงนี้
async function getUsers () {
    const userData = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await userData.json();
    // console.log(data); 
    const userName = data.map((user)=> user.name); 
    console.log(userName);
    let onlyTargetedLength = userName.filter((name)=> name.length > 17); 
    console.log(onlyTargetedLength);

}

getUsers ()