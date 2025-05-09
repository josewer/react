import { useState } from "react"

export function TwitterFollowCard({ userName = "unknow", name,  formatUserName , initialIsFollowing}) {

    const avatar = `https://unavatar.io/onlyfans/${userName}`
    const [isFollowing , setIsFollowing] = useState(initialIsFollowing)

    const handleButton = () => {
        setIsFollowing(!isFollowing);
    };


    const buttonClassName = isFollowing ?
        'tw-followCard-button tw-followCard-button-following'
        : 'tw-followCard-button'

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'    

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt={`El avatar de ${userName}`} src={avatar} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleButton}>
                    {textButton}
                </button>
            </aside>
        </article>
    )
}