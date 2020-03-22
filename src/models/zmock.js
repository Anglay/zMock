
export default {
    namespace: 'zmock',
    state: {
        isVisible:false,
        projectObj:{},
        projectList:[]
    },
    reducers: {
        toggleProjectForm(state, {isVisible:flag}) {
            let newState = {...state}
            newState.isVisible = flag
            return newState
        },
        addProject(state, {projectObj:projectObj}) {
            let newState = {...state}
            projectObj.id = Math.floor(Math.random() * (50 - 1 + 1) + 1)
            newState.projectList=[...newState.projectList,projectObj]
            return newState
        },
    },
}