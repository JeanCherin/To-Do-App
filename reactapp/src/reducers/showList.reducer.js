export default function(list = {}, action){
    if (action.type === 'show' ){
        let newList = {name : action.listName, tasks : action.listTasks};
        return newList
    } else {
        return list
    }
}