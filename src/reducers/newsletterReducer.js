const initialState = {
    newsletters: [],
    error: null
    }

    
    const word = (state = initialState, action) => {
        switch (action.type) {
            case 'CREATE_NEWSLETTER_SUCCESS':
                return {
                    ...state,
                    data: action.newsletter
                }
                case 'FETCH_NEWSLETTERS_SUCCESS':
                return {
                    ...state,
                    newsletters: action.newsletters
                }
                case 'DELETE_NEWSLETTER_SUCCESS':
                return {
                    ...state,
                    newsletters: state.newsletters.filter(newsletter=>{
                        return newsletter.id !== action.id
                    })
                }
            default:
                return state
        }
    }
    
    
    
    
    
    export default word