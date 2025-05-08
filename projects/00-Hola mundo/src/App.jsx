import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const format = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={format}
                isFollowing={true}
                userName={"amandaribas"}
                name={"Amanda"} />
            <TwitterFollowCard
                formatUserName={format}
                isFollowing={false}
                userName={"amandaribas"}
                name={"Amanda Dooooos"} />
            <TwitterFollowCard
                formatUserName={format}
                isFollowing={false}
                name={"Amanda Dooooos"} />
        </section>
    )
}
