function banner({name}) {
    if (name === "home") {
        return (
            <div className='bannerHome' >
                <div className='bannerContainer'>
                <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className='bannerAbout' >
                <div className='bannerContainer'>
                </div>
            </div>
        )
    }
}
export default banner
