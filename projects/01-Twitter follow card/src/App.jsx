import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const format = (userName) => `@${userName}`

const users = [
  {
    userName: "Silvi",
    name: "Silvana",
    avatar: "https://www.seguracan.es/wp-content/uploads/2016/07/A.jpg",
    initialIsFollowing: true
  },
  {
    userName: "Pinchiguina",
    name: "Pinchi",
    avatar: "https://www.seguracan.es/wp-content/uploads/cache/2016/07/instalaciones-4/1404444011.jpg",
    initialIsFollowing: true
  },
  ,
  {
    userName: "Josewer",
    name: "Oins",
    avatar: "https://culturacientifica.com/app/uploads/2018/09/historia-de-los-cerdos.jpg",
    initialIsFollowing: true
  }
]

export function App() {
  return (
    <section className='App'>
      {users.map(({ userName, name, avatar, initialIsFollowing }) => (
        <TwitterFollowCard
          key={userName}
          formatUserName={format}
          userName={userName}
          name={name}
          avatar={avatar}
          initialIsFollowing={initialIsFollowing}
        />
      ))}
    </section>
  )
}
