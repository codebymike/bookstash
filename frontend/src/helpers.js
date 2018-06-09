export function localStore(namespace, data){
  if (data) return localStorage.setItem(namespace, JSON.stringify(data))

  let datastored = localStorage.getItem(namespace)
  return (datastored && JSON.parse(datastored)) || []
}
