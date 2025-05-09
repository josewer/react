import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={format}
                initialIsFollowing={true}
                userName={"amandaribas"}
                name={"Amanda"} />
            <TwitterFollowCard
                formatUserName={format}
                userName={"amandaribas"}
                initialIsFollowing={false}
                name={"Amanda Dooooos"} />
            <TwitterFollowCard
                formatUserName={format}
                initialIsFollowing={false}
                name={"Amanda Dooooos"} />
        </section>
    )
}
