import './App.css';
const charactersData = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
  },
  {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
  },
  {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
  },
  {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
  },
  {
    "name": "Owen Lars",
    "height": "178",
    "mass": "120",
    "hair_color": "brown, grey",
    "skin_color": "light",
    "eye_color": "blue",
    "birth_year": "52BBY",
    "gender": "male"
  },
  {
    "name": "Beru Whitesun lars",
    "height": "165",
    "mass": "75",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "blue",
    "birth_year": "47BBY",
    "gender": "female"
  },
  {
    "name": "R5-D4",
    "height": "97",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, red",
    "eye_color": "red",
    "birth_year": "unknown",
    "gender": "n/a"
  },
  {
    "name": "Biggs Darklighter",
    "height": "183",
    "mass": "84",
    "hair_color": "black",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "24BBY",
    "gender": "male"
  },
  {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male"
  }
]

const shipData = [
  {
    "name": "CR90 corvette",
    "model": "CR90 corvette",
    "manufacturer": "Corellian Engineering Corporation",
    "cost_in_credits": "3500000",
    "length": "150",
    "max_atmosphering_speed": "950",
    "crew": "30-165",
    "passengers": "600",
    "cargo_capacity": "3000000",
    "consumables": "1 year",
    "hyperdrive_rating": "2.0",
    "MGLT": "60",
    "starship_class": "corvette"
  },
  {
    "name": "Star Destroyer",
    "model": "Imperial I-class Star Destroyer",
    "manufacturer": "Kuat Drive Yards",
    "cost_in_credits": "150000000",
    "length": "1,600",
    "max_atmosphering_speed": "975",
    "crew": "47,060",
    "passengers": "n/a",
    "cargo_capacity": "36000000",
    "consumables": "2 years",
    "hyperdrive_rating": "2.0",
    "MGLT": "60",
    "starship_class": "Star Destroyer"
  },
  {
    "name": "Sentinel-class landing craft",
    "model": "Sentinel-class landing craft",
    "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
    "cost_in_credits": "240000",
    "length": "38",
    "max_atmosphering_speed": "1000",
    "crew": "5",
    "passengers": "75",
    "cargo_capacity": "180000",
    "consumables": "1 month",
    "hyperdrive_rating": "1.0",
    "MGLT": "70",
    "starship_class": "landing craft"
  },
  {
    "name": "Death Star",
    "model": "DS-1 Orbital Battle Station",
    "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
    "cost_in_credits": "1000000000000",
    "length": "120000",
    "max_atmosphering_speed": "n/a",
    "crew": "342,953",
    "passengers": "843,342",
    "cargo_capacity": "1000000000000",
    "consumables": "3 years",
    "hyperdrive_rating": "4.0",
    "MGLT": "10",
    "starship_class": "Deep Space Mobile Battlestation"
  },
  {
    "name": "Millennium Falcon",
    "model": "YT-1300 light freighter",
    "manufacturer": "Corellian Engineering Corporation",
    "cost_in_credits": "100000",
    "length": "34.37",
    "max_atmosphering_speed": "1050",
    "crew": "4",
    "passengers": "6",
    "cargo_capacity": "100000",
    "consumables": "2 months",
    "hyperdrive_rating": "0.5",
    "MGLT": "75",
    "starship_class": "Light freighter"
  },
  {
    "name": "Y-wing",
    "model": "BTL Y-wing",
    "manufacturer": "Koensayr Manufacturing",
    "cost_in_credits": "134999",
    "length": "14",
    "max_atmosphering_speed": "1000km",
    "crew": "2",
    "passengers": "0",
    "cargo_capacity": "110",
    "consumables": "1 week",
    "hyperdrive_rating": "1.0",
    "MGLT": "80",
    "starship_class": "assault starfighter"
  },
  {
    "name": "X-wing",
    "model": "T-65 X-wing",
    "manufacturer": "Incom Corporation",
    "cost_in_credits": "149999",
    "length": "12.5",
    "max_atmosphering_speed": "1050",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "110",
    "consumables": "1 week",
    "hyperdrive_rating": "1.0",
    "MGLT": "100",
    "starship_class": "Starfighter"
  },
  {
    "name": "TIE Advanced x1",
    "model": "Twin Ion Engine Advanced x1",
    "manufacturer": "Sienar Fleet Systems",
    "cost_in_credits": "unknown",
    "length": "9.2",
    "max_atmosphering_speed": "1200",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "150",
    "consumables": "5 days",
    "hyperdrive_rating": "1.0",
    "MGLT": "105",
    "starship_class": "Starfighter"
  },
  {
    "name": "Executor",
    "model": "Executor-class star dreadnought",
    "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
    "cost_in_credits": "1143350000",
    "length": "19000",
    "max_atmosphering_speed": "n/a",
    "crew": "279,144",
    "passengers": "38000",
    "cargo_capacity": "250000000",
    "consumables": "6 years",
    "hyperdrive_rating": "2.0",
    "MGLT": "40",
    "starship_class": "Star dreadnought"
  },
  {
    "name": "Rebel transport",
    "model": "GR-75 medium transport",
    "manufacturer": "Gallofree Yards, Inc.",
    "cost_in_credits": "unknown",
    "length": "90",
    "max_atmosphering_speed": "650",
    "crew": "6",
    "passengers": "90",
    "cargo_capacity": "19000000",
    "consumables": "6 months",
    "hyperdrive_rating": "4.0",
    "MGLT": "20",
    "starship_class": "Medium transport"
  }
]

function App() {
  return (
    <div className="App">
      <h1>May the Force be with You!</h1>
    </div>
  );
}

export default App;
