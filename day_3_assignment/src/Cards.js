function Cards() {

    let places = [
        {
            name: "Paris",
            image: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        
        {
            name: "South island ,New Zealand",
            image: "https://images.pexels.com/photos/724963/pexels-photo-724963.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        
        {
            name: "London",
            image: "https://images.pexels.com/photos/372470/pexels-photo-372470.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: "Rome",
            image: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        
        {
            name: "Maldives",
            image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: "Dubai",
            image: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: "Tokyo,Japan",
            image: "https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: "Sydney",
            image: "https://images.pexels.com/photos/2434267/pexels-photo-2434267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            name: "Hawaii",
            image: "https://images.pexels.com/photos/4612304/pexels-photo-4612304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {

            name: "Greece",
            image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }


    ]

    return (
        <div className="container">
            <h1 className="title">Best Places to Travel Around the World :</h1>
            <div className="places">
                {
                    places.map((place, index) => {

                        return (
                            <div className="card" key={index}>
                                <img src={place.image} className="place-img" />

                                <div className="card-details">
                                    <h2>{place.name}</h2>
                                    {/* <h2>{place.price} Rs</h2> */}
                                    <p className="place-desc">
                                        {place.desc}
                                    </p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>

        </div>

    )


}

export default Cards;