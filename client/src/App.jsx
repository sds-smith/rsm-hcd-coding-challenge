
import Asheville from "./components/asheville/asheville.component";
import BreweryCard from "./components/brewery-card/brewery-card.component";

const brewery =     {
    "id": "green-man-brewing-co-asheville",
    "name": "Green Man Brewing Co",
    "brewery_type": "micro",
    "street": "27 Buxton Ave",
    "address_2": null,
    "address_3": null,
    "city": "Asheville",
    "state": "North Carolina",
    "county_province": null,
    "postal_code": "28801-4019",
    "country": "United States",
    "longitude": "-82.55367153",
    "latitude": "35.5886249",
    "phone": "8282525502",
    "website_url": "http://www.greenmanbrewery.com",
    "updated_at": "2022-11-11T05:07:58.723Z",
    "created_at": "2022-11-11T05:07:58.723Z"
};

const App = () => {
    return (
        <div>
            <Asheville />
            <BreweryCard brewery={brewery} />
        </div>
    )
}

export default App