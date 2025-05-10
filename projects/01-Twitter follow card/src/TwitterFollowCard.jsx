import { useState } from "react"

export function TwitterFollowCard({ userName = "unknow", name, formatUserName, initialIsFollowing, avatar }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const [isHovered, setIsHovered] = useState(false)

    const handleButton = () => {
        setIsFollowing(!isFollowing);
    };

    const buttonClassName = isFollowing
        ? 'tw-followCard-button tw-followCard-button-following'
        : 'tw-followCard-button'

    const textButton = isFollowing
        ? isHovered ? 'Dejar de seguir' : 'Siguiendo'
        : 'Seguir'

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
                <button
                    className={buttonClassName}
                    onClick={handleButton}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {textButton}
                </button>
            </aside>
        </article>
    )
}
