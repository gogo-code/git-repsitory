function query(name){
  const search=location.search.substr(1)
  // search:'a=10&b=20&c=30'
  const reg=new RegExp(`(^|&)${name}=([^&]*)(&|$)`,'i')
  const res=search.match(reg)
  console.log(res);
  if(res===null)
  return null
  
  return res[2]
}
query('b')

// function query(name){
//   const search=location.search
//   const p=new URLSearchParams(search)
//   return p.get(name)
// }
