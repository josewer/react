export function TwitterFollowCard ({userName = "unknow" , name , isFollowing , formatUserName}) {

    const avatar = `https://unavatar.io/onlyfans/${userName}`

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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}