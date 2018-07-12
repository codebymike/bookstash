export function localStore(namespace, data){
  if (data) return localStorage.setItem(namespace, JSON.stringify(data))

  let datastored = localStorage.getItem(namespace)
  return (datastored && JSON.parse(datastored)) || []
}

export function toggle(collection, item) {
  const toggledCollection = collection.slice()
  var idx = toggledCollection.indexOf(item);
  if(idx !== -1) {
    toggledCollection.splice(idx, 1);
  } else {
    toggledCollection.push(item);
  }
  return toggledCollection
}
