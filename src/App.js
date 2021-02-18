import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './component/ChatFeed'
import './App.css'

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='e8d6c717-e560-461f-911e-bcc2971ea980'
      userName='firstminster'
      userSecret='123123'
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
