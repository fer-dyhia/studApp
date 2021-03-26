import { SUGGEST_USERS, SEND_FOLLOW_REQUEST, SET_FOLLOW_REQUESTS, DECLINE_REQUEST, SET_FOLLOWER, ACCEPT_FOLLOW_REQUEST, SET_SELECTED_USER, LOAD_MESSAGES,
    LOAD_SUCESS_MESSAGE,
    LOAD_CONVERSATIONS,
    LOAD_CONVERSATIONS_SUCESS, } from '../types'

const initialState = {
    suggestedUsers: [],
    invitations: [],
    notif: [],
    selectedUser: null,
    conversations: [],
    messages: [],
    users: [],
    loading: false,
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case SUGGEST_USERS:
            return { ...state, suggestedUsers: action.payload }

        case ACCEPT_FOLLOW_REQUEST:
            const index = state.invitations.findIndex((invit) => invit.Owner === action.payload)
            state.invitations.splice(index, 1)
            return { ...state }

        case SEND_FOLLOW_REQUEST:
            const i = state.suggestedUsers.findIndex((user) => user.username === action.payload)
            console.log(i)
            if (i != -1) {
                state.suggestedUsers.splice(i, 1)
            }
            return { ...state }

        case DECLINE_REQUEST:
            const ind = state.invitations.findIndex((invit) => invit.Owner === action.payload)
            state.invitations.splice(ind, 1)
            return { ...state, suggestedUsers: action.payload }

        case SET_FOLLOW_REQUESTS:
            return { ...state, invitations: action.payload }
        case SET_SELECTED_USER:
            return { ...state, selectedUser: action.payload }

        case LOAD_CONVERSATIONS:
                return {
                  ...state,
                  loading: true,
                };
          
        case LOAD_CONVERSATIONS_SUCESS:
                if (action.payload.length > 0) {
                  if (state.conversations.length > 0) {
                    let payload = action.payload;
                    for (let i = 0; i < payload.length; i++) {
                      const indice = state.conversations.findIndex(
                        (conv) => conv.convId === payload[i].convId
                        // console.log(conv.convId);
                        // console.log(payload[i].convId);
                      );
          
                      if (indice != -1) {
                        state.conversations.splice(indice, 1);
                        state.conversations.unshift(payload[i]);
                      } else {
                        state.conversations.unshift(payload[i]);
                      }
                    }
                  } else {
                    console.log("yess");
                    state.conversations = action.payload;
                  }
                }
                return {
                  ...state,
                  loading: false,
                };
        case LOAD_MESSAGES:
                return {
                  ...state,
                  loading: true,
                };
        case LOAD_SUCESS_MESSAGE:
                return {
                  ...state,
                  messages: action.payload,
                  loading: false,
                };
          

        default:
            return {...state}
    }
}
