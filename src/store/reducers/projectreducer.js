const init={
    projects:[{id:1,title:'Saveme',content:'Blah Blah Blah'}]

}

const projectreducer=(state=init,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err)
            return state;    
        default:
            return state;
        
    }

}

export default projectreducer