const initState = {
    projects:[
        {id:'1', title:'help me find peach',content:'blah'},
        {id:'2', title:'help me find peach',content:'blah'},
        {id:'3', title:'help me find peach',content:'blah'}
    ]
}

const projectReducer = (state = initState ,action) =>{
    switch (action.type){
        case'CREATE_PROJECT':
            console.log('created project',action.project)
    }
    return state
}

export default projectReducer;