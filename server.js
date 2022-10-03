const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const nationalparks = {
    'acadia': {
        'name': 'acadia national park',
        'nps_website': 'https://www.nps.gov/acad/index.htm',
        'description': 'Crown Jewel of the North Atlantic Coast',
        'about': "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 4 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
        'street': '25 Visitor Center Rd',
        'city': 'Bar Harbor',
        'state': 'ME',
        'postal_code': '04609',
        'visitor_center': 'Hulls Cove Visitor Center',
    },
    'arches': {
        'name': 'arches national park',
        'nps_website': 'https://www.nps.gov/arch/index.htm',
        'description': 'A red-rock wonderland',
        'about': 'Discover a landscape of contrasting colors, land forms, and textures unlike any other. The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.',
        'street': 'Arches Entrance Rd',
        'city': 'Moab',
        'state': 'UT',
        'postal_code': '84532',
        'vistor_center': 'Arches National Park Visitor Center'
    },
    'badlands': {
        'name': 'badlands national park',
        'nps_website': 'https://www.nps.gov/badl/index.htm',
        'description': 'Land of Stone and Light',
        'about': "The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world's richest fossil beds. Ancient horses and rhinos once roamed here. The park's 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.",
        'street': '25216 Ben Reifel Road',
        'city': 'Interior',
        'state': 'SD',
        'postal_code': '57750',
        'vistor_center': ['Ben Reifel Visitor Center', 'White River Visitor Center']
    },
    'big bend': {
        'name': 'big bend national park',
        'nps_website': 'https://www.nps.gov/bibe/index.htm',
        'description': 'Splendid Isolation: Big Bend',
        'about': "There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend...",
        'street': '1 Panther Junction',
        'city': 'Big Bend National Park',
        'state': 'TX',
        'postal_code': '79834',
        'vistor_center': ['Panther Junction Visitor Center', 'Chisos Basin Visitor Center', 'Castolon Visitor Center', 'Persimmon Gap Visitor Center', 'Rio Grande Village Visitor Center']
    },
    'biscayne': {
        'name': 'biscayne national park',
        'nps_website': 'https://www.nps.gov/bisc/index.htm',
        'description': 'A Watery Wonderland',
        'about': "Within sight of Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Evidence of 10,000 years of human history is here too; from prehistoric tribes to shipwrecks, and pineapple farmers to presidents. For many, the park is a boating, fishing, and diving destination, while others enjoy a warm breeze and peaceful scenery.",
        'street': '9700 SW 328th Street',
        'additional_street': 'Sir Lancelot Jones Way',
        'city': 'Homestead',
        'state': 'FL',
        'postal_code': '33033',
        'vistor_center': 'Dante Fascell Visitor Center'
    },
    'black canyon of the gunnison': {
        'name': 'black canyon of the gunnison national park',
        'nps_website': 'https://www.nps.gov/blca/index.htm',
        'description': 'Deep, Steep and Narrow',
        'about': "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison National Park exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
        'street': '9800 Highway 347',
        'city': 'Montrose',
        'state': 'CO',
        'postal_code': '81401',
        'vistor_center': 'South Rim Visitor Center'
    },
    'bryce canyon': {
        'name': 'bryce canyon national park',
        'nps_website': 'https://www.nps.gov/brca/index.htm',
        'description': 'Red Rocks, Pink Cliffs, and Endless Vistas',
        'about': "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
        'street': 'Bryce Canyon National Park',
        'city': 'Bryce',
        'state': 'UT',
        'postal_code': '84764',
        'vistor_center': null,
    },
    'canyonlands': {
        'name': 'cayonlands national park',
        'nps_website': 'https://www.nps.gov/cany/index.htm',
        'description': 'A Lifetime of Exploration Awaits',
        'about': "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.",
        'street': 'Grand View Point Rd',
        'city': 'Moab',
        'state': 'UT',
        'postal_code': '84532',
        'vistor_center': ['Island in the Sky Visitor Center', 'The Needles Visitor Center', 'Hans Flat Ranger Station', 'Canyonlands Backcountry Office']
    },
    'capitol reef': {
        'name': 'capitol reef national park',
        'nps_website': 'https://www.nps.gov/care/index.htm',
        'description': 'Discover the Waterpocket Fold, a geologic wrinkle on earth!',
        'about': "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.",
        'street': '52 West Headquarters Drive',
        'city': 'Torrey',
        'state': 'UT',
        'postal_code': '84775',
        'vistor_center': 'Capitol Reef National Park Visitor Center'
    },
    'carlsbad caverns': {
        'name': 'carlsbad caverns national park',
        'nps_website': 'https://www.nps.gov/cave/index.htm',
        'description': 'Beauty and Wonder; Above and Below',
        'about': "High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves—formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.",
        'directions': "To access the park's only entrance road, New Mexico Highway 7, turn north from US Hwy 62/180 at White's City, NM, which is 20 miles (32 km) southwest of Carlsbad, NM and 145 miles (233 km) northeast of El Paso, TX. The entrance road stretches a scenic seven miles (11.3 km) from the park gate at White's City to the visitor center and cavern entrance. The address for the park's visitor center is 727 Carlsbad Caverns Hwy, Carlsbad, NM, 88220, located 27 miles (43 km) from the town of Carlsbad.",
        'street': '727 Carlsbad Caverns Highway',
        'city': 'Carlsbad',
        'state': 'NM',
        'postal_code': '88220',
        'vistor_center': null
    },
    'channel islands': {
        'name': 'channel islands national park',
        'nps_website': 'https://www.nps.gov/chis/index.htm',
        'description': 'Close to the California Mainland...Yet Worlds Apart',
        'about': "Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was.",
        'street': '1901 Spinnaker Drive',
        'city': 'Ventura',
        'state': 'CA',
        'postal_code': '93001',
        'vistor_center': ['Channel Islands National Park Visitor Center', 'Outdoors Santa Barbara Visitor Center', 'Visitor Center Anacapa Island', 'Santa Barbara Island Visitor Center', 'Scorpion Ranch Visitor Center on Santa Cruz Island', 'Santa Rosa Island Visitor Contact Station', 'San Miguel Island Ranger and Vistor Contact Station']
    },
    'congaree': {
        'name': 'conagree national park',
        'nps_website': 'https://www.nps.gov/cong/index.htm',
        'description': 'Home of Champions',
        'about': "Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States. Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees.",
        'street': '100 National Park Rd',
        'city': 'Hopkins',
        'state': 'SC',
        'postal_code': '29061',
        'vistor_center': null
    },
    'crater lake': {
        'name': 'crater lake national park',
        'nps_website': 'https://www.nps.gov/crla/index.htm',
        'description': 'Deep Water in a Sleeping Volcano',
        'about': "Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity—fed by rain and snow, it's the deepest lake in the USA and one of the most pristine on Earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.",
        'street': '1 Sager Building',
        'city': 'Crater Lake',
        'state': 'OR',
        'postal_code': '97604',
        'vistor_center': ['Mazama Visitor Center', 'Rim Visitor Center', 'Steel Visitor Center']
    },
    'cuyahoga valley': {
        'name': 'cuyahoga national park',
        'nps_website': 'https://www.nps.gov/cuva/index.htm',
        'description': 'A River Renewed',
        'about': "Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.",
        'street': '6947 Riverview Road',
        'city': 'Peninsula',
        'state': 'OH',
        'postal_code': '44264',
        'vistor_center': ['Boston Mill Visitor Center', 'Canal Exploration Center', 'Hunt House']
    },
    'death valley': {
        'name': 'death valley national park',
        'nps_website': 'https://www.nps.gov/deva/index.htm',
        'description': 'Hottest, Driest and Lowest National Park',
        'about': "In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life thrives in Death Valley.",
        'street': null,
        'city': 'Death Valley',
        'state': 'CA',
        'postal_code': '92328',
        'vistor_center': 'Furnace Creek Visitor Center', 
    },
    'denali': {
        'name': 'denali national park',
        'nps_website': 'https://www.nps.gov/dena/index.htm',
        'description': 'More than a Mountain',
        'about': "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains, culminating in North America's tallest peak, 20,310' Denali. Wild animals large and small roam un-fenced lands, living as they have for ages. Solitude, tranquility and wilderness await.",
        'street': 'Mile 237 Highway 3',
        'city': 'Denali Park',
        'state': 'AK',
        'postal_code': '99755',
        'latitude': 63.728443,
        'longitude': -148.886572,
        'vistor_center': ['Denali Visitor Center', 'Denali Bus Depot', 'Murie Science and Learning Center', 'Walter Harper Talkeetna Ranger Station', 'Indoor Picnic Area', 'Eielson Visitor Center'],
    },
    'dry tortugas': {
        'name': 'dry tortugas national park',
        'nps_website': 'https://www.nps.gov/drto/index.htm',
        'description': 'Explore a 19th Century Fort and Snorkel Crystal Clear Water with Incredible Marine Life',
        'about': "Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands.  Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life, and the vast assortment of bird life that frequents the area.",
        'street': '40001 SR-9336',
        'city': 'Homestead',
        'state': 'FL',
        'postal_code': '33034',
        'vistor_center': ['Garden Key Visitor Center', 'Florida Keys Eco-Discovery Center']
    },
    'everglades': {
        'name': 'everglades national park',
        'nps_website': 'https://www.nps.gov/ever/index.htm',
        'description': 'America\'s Everglades - The largest subtropical wilderness in the United States',
        'about': "Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee,  American crocodile, and the elusive Florida panther. An international treasure as well -  a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty.",
        'street': '40001 State Road 9336',
        'city': 'Homestead',
        'state': 'FL',
        'postal_code': '33034',
        'vistor_center': ['Flamingo Visitor Center', 'Ernest Coe Visitor Center', 'Shark Valley Visitor Center','Gulf Coast Visitor Center']
    },
    'gates of the arctic': {
        'name': 'gates of the arctic national park',
        'nps_website': 'https://www.nps.gov/gaar/planyourvisit/index.htm',
        'description': 'Alaska\'s Ultimate Wilderness',
        'about': "Gates of the Arctic National Park and Preserve was created to preserve and protect 8.4 million acres of the diverse arctic ecosystems of Alaska's central Brooks Range. It is acknowledged as the premier Wilderness park in the national park system and serves as the headwaters for six Wild Rivers. While the park provides visitors with opportunities for solitude and challenging wilderness adventures within a remote and vast arctic landscape, it also preserves and supports a 12,000-year record of human cultural adaptations to high latitude mountain environments and an unbroken tradition of living on the land. While it may seem untouched, you are not the first one to travel here.",
        'street': '101 Dunkel St',
        'city': 'Fairbanks',
        'state': 'AK',
        'postal_code': '99701',
        'vistor_center': ['Fairbanks Alaska Public Lands Information Center', 'Bettles Ranger Station and Visitor Center', 'Arctic Interagency Visitor Center', 'Anaktuvuk Pass Ranger Station']
    },
    'gateway arch': {
        'name': 'gateway arch national park',
        'nps_website': 'https://www.nps.gov/jeff/index.htm',
        'description': 'Gateway to the West',
        'about': "The Gateway Arch reflects St. Louis' role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jefferson's role in opening the West, to the pioneers who helped shape its history, and to Dred Scott who sued for his freedom in the Old Courthouse.",
        'street': 'Fourth Street between Market and Chestnut streets',
        'city': 'St. Louis',
        'state': 'MO',
        'postal_code': '63102',
        'vistor_center': 'Gateway Arch Visitor Center'
    },
    'glacier': {
        'name': 'glacier national park',
        'nps_website': 'https://www.nps.gov/glac/index.htm',
        'description': 'Crown of the Continent',
        'about': "A showcase of melting glaciers, alpine meadows, carved valleys, and spectacular lakes. With over 700 miles of trails, Glacier is a paradise for adventurous visitors seeking wilderness steeped in human history. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road.",
        'street': '64 Grinnell Drive',
        'city': 'West Glacier',
        'state': 'MT',
        'postal_code': '59936',
        'vistor_center': ['Apgar Visitor Center', 'St. Mary Visitor Center', 'Logan Pass Visitor Center']
    },
    'glacier bay': {
        'name': 'glacier bay national park',
        'nps_website': 'https://www.nps.gov/glba/index.htm',
        'description': 'Southeast Alaskan Wilderness',
        'about': "Covering 3.3 million acres of rugged mountains, dynamic glaciers, temperate rainforest, wild coastlines and deep sheltered fjords, Glacier Bay National Park is a highlight of Alaska's Inside Passage and part of a 25-million acre World Heritage Site—one of the world's largest international protected areas. From sea to summit, Glacier Bay offers limitless opportunities for adventure and inspiration.",
        'street': '1 Park Road',
        'city': 'Gustavus',
        'state': 'AK',
        'postal_code': '99826',
        'vistor_center': ['Visitor Information Station - Backcountry Office', 'Glacier Bay National Park Visitor Center', 'Huna Tribal House']
    },
    'grand canyon': {
        'name': 'grand canyon national park',
        'nps_website': 'https://www.nps.gov/grca/index.htm',
        'description': 'A Mile-Deep Canyon',
        'about': "Grand Canyon National Park, in northern Arizona, encompasses 278 miles (447 km) of the Colorado River and adjacent uplands. Located on the ancestral homeland of 11 Associated Tribes, Grand Canyon is one of the most spectacular examples of erosion anywhere in the world—unmatched in the incomparable vistas it offers visitors on the rim.",
        'street': '20 South Entrance Road',
        'city': 'Grand Canyon',
        'state': 'AZ',
        'postal_code': '86023',
        'vistor_center': ['Grand Canyon Visitor Center - South Rim', 'North Rim Visitor Center Park Store', 'Verkamp\'s Visitor Center - South Rim',]
    },
    'grand teton': {
        'name': 'grand teton national park',
        'nps_website': 'https://www.nps.gov/grte/index.htm',
        'description': 'Mountains of the Imagination',
        'about': "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands as a monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River, and enjoy the serenity of this remarkable place.",
        'street': '103 Headquarters Loop',
        'city': 'Moose',
        'state': 'WY',
        'postal_code': '83012',
        'vistor_center': ['Craig Thomas Discovery and Visitor Center', 'Laurance S. Rockefeller Preserve Center', 'Jenny Lake Visitor Center', 'Colter Bay Visitor Center', 'Jackson Hole and Greater Yellowstone Visitor Center']
    },
    'great basin': {
        'name': 'great basin national park',
        'nps_website': 'https://www.nps.gov/grba/index.htm',
        'description': 'A Land of Surprising Diversity',
        'about': "From the 13,063-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a whole lot more than just desert here!",
        'street': 'Lehman Caves Visitor Center',
        'city': 'Baker',
        'state': 'NV',
        'postal_code': '89311',
        'vistor_center': 'Lehman Caves Visitor Center'
    },
    'great sand dunes': {
        'name': 'great sand dunes national park',
        'nps_website': 'https://www.nps.gov/grsa/index.htm',
        'description': 'Dunes Among Diversity',
        'about': "The tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, forests, alpine lakes, and tundra. Stay on a moonless night to experience this International Dark Sky Park's starry skies!",
        'street': '11999 State Highway 150',
        'city': 'Mosca',
        'state': 'CO',
        'postal_code': '81146',
        'vistor_center': 'Great Sand Dunes Visitor Center'
    },
    'great smoky mountains': {
        'name': 'great smoky mountains national park',
        'nps_website': 'https://www.nps.gov/grsm/index.htm',
        'description': 'A Wondrous Diversity of Life',
        'about': "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park",
        'street': '107 Park Headquarters Road',
        'city': 'Gatlinburg',
        'state': 'TN',
        'postal_code': '37738',
        'vistor_center': ['Sugarlands Visitor Center', 'Oconaluftee Visitor Center', 'Cades Cove Visitor Center', 'Clingmans Dome Visitor Contact Station']
    },
    'guadalupe mountains': {
        'name': 'guadalupe mountains national park',
        'nps_website': 'https://www.nps.gov/gumo/index.htm',
        'description': 'Find Your Peak',
        'about': "Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other. Guadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival.",
        'street': '400 Pine Canyon',
        'city': 'Salt Falt',
        'state': 'TX',
        'postal_code': '79847',
        'vistor_center': ['Pine Springs Visitor Center', 'Dog Canyon Ranger Station', 'McKittrick Canyon Visitor Center', 'Dell City Contact Station']
    },
    'haleakala': {
        'name': 'haleakala national park',
        'nps_website': 'https://www.nps.gov/hale/index.htm',
        'description': 'A Rare And Sacred Landscape',
        'about': "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.",
        'street': null,
        'city': 'Kahului',
        'state': 'HI',
        'postal_code': null,
        'vistor_center': ['Headquarters Visitor Center', 'Haleakala Visitor Center', 'Kipahulu Visitor Center']
    },
    'hawaii valcanoes': {
        'name': 'hawai\'i volcanoes national park',
        'nps_website': 'https://www.nps.gov/havo/index.htm',
        'description': 'Born of Fire, Born of the Sea',
        'about': "Hawai'i Volcanoes National Park protects some of the most unique geological, biological, and cherished cultural landscapes in the world. Extending from sea level to 13,681 feet, the park encompasses the summits of two of the world's most active volcanoes - Kīlauea and Mauna Loa - and is a designated International Biosphere Reserve and UNESCO World Heritage Site.",
        'street': '1 Crater Rim Drive',
        'city': 'Hawaii National Park',
        'state': 'HI',
        'postal_code': '96718',
        'vistor_center': ['Kilauea Visitor Center', 'Kahuku Visitor Contact Center']
    },
    'hot springs': {
        'name': 'hot springs national park',
        'nps_website': 'https://www.nps.gov/hosp/index.htm',
        'description': 'Where History and Nature Meet.',
        'about': "Hot Springs National Park has a rich cultural past. The grand architecture of our historic bathhouses is equally matched by the natural curiosities that have been drawing people here for hundreds of years. Ancient thermal springs, mountain views, incredible geology, forested hikes, and abundant creeks - all in the middle of town - make Hot Springs National Park a unique and beautiful destination.",
        'street': '369 Central Avenue',
        'city': 'Hot Springs',
        'state': 'AR',
        'postal_code': '71901',
        'vistor_center': ['Fordyce Bathhouse Visitor Center']
    },
    'indiana dunes': {
        'name': 'indiana dunes national park',
        'nps_website': 'https://www.nps.gov/indu/index.htm',
        'description': 'Sand and Solitude',
        'about': "Indiana Dunes National Park hugs 15 miles of the southern shore of Lake Michigan and has much to offer. Whether you enjoy scouting for rare species of birds or flying kites on the sandy beach, the national park's 15,000 acres will continually enchant you.  Hikers will enjoy 50 miles of trails over rugged dunes, mysterious wetlands, sunny prairies, meandering rivers and peaceful forests.",
        'street': '1215 SR-49',
        'city': 'Porter',
        'state': 'IN',
        'postal_code': '46304',
        'vistor_center': ['Indiana Dunes Visitor Center', 'Paul H. Douglas Center for Environmental Education']
    },
    'isle royale': {
        'name': 'isle royale national park',
        'nps_website': 'https://www.nps.gov/isro/index.htm',
        'description': 'Your Invitation to a Superior Wilderness',
        'about': "Explore a rugged, isolated island far from our connected communities. Isle Royale offers adventures for backpackers, hikers, boaters, paddlers, and divers. Cross Lake Superior and make a commitment: Become a part of this island, and let it become a part of you. Find peace and refuge in island wilderness - because Isle Royale, in turn, finds refuge in us. Help Isle Royale stay wild.",
        'street': '800 East Lakeshore Drive',
        'city': 'Houghton',
        'state': 'MI',
        'postal_code': '49931',
        'vistor_center': null
    },
    'joshua tree': {
        'name': 'joshua tree national park',
        'nps_website': 'https://www.nps.gov/jotr/index.htm',
        'description': 'Where Two Deserts Meet',
        'about': "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.",
        'street': '74485 National Park Drive',
        'city': 'Twentynine Palms',
        'state': 'CA',
        'postal_code': '92277',
        'vistor_center': ['Joshua Tree Visitor Center', 'Oasis Visitor Center', 'Cottonwood Visitor Center', 'Black Rock Nature Center', 'Joshua Tree Cultural Center']
    },
    'katmai': {
        'name': 'katmai national park',
        'nps_website': 'https://www.nps.gov/katm/index.htm',
        'description': 'Welcome to Katmai Country',
        'about': "A landscape is alive underneath our feet, filled with creatures that remind us what it is to be wild.Katmai was established in 1918 to protect the volcanically devastated region surrounding Novarupta and the Valley of Ten Thousand Smokes. Today, Katmai National Park and Preserve also protects 9,000 years of human history and important habitat for salmon and thousands of brown bears.",
        'street': '1000 Silver Street',
        'city': 'King Salmon',
        'state': 'AK',
        'postal_code': '99613',
        'vistor_center': ['King Salmon Visitor Center', 'Brooks Camp Visitor Center', 'Robert F. Griggs Visitor Center']
    },
    'kenai fjords': {
        'name': 'kenai fjords national park',
        'nps_website': 'https://www.nps.gov/kefj/index.htm',
        'description': 'Where Mountains, Ice, and Ocean Meet',
        'about': "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Sugpiaq people relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
        'street': null,
        'city': null,
        'state': 'AK',
        'postal_code': null,
        'directions': 'Kenai Fjords National Park is located just outside the town of Seward in south-central Alaska, 126 miles south of Anchorage. Even though the park is often inaccessible during the winter months, Seward is accessible year-round via the Seward Highway, a National Scenic Byway. Follow the Seward Highway (AK-1) south from Anchorage. It will become AK-9 around mile 35 (87 miles from Anchorage) with AK-1 heading to Homer and Kenai. Continue on AK-9 to Seward.',
        'vistor_center': ['Kenai Fjords National Park Visitor Center', 'Exit Glacier Nature Center']
    },
    'seqouia and kings canyon': {
        'name': 'sequoia and kings canyon national parks',
        'nps_website': 'https://www.nps.gov/seki/index.htm',
        'description': 'A Land of Giants',
        'about': "Huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees exemplify the diversity of landscapes, life, and beauty here. Explore these pages to learn about the plants and animals here and the threats they face. Our ancient giant sequoias may seem invincible, but they, too are vulnerable.",
        'street': '47050 Generals Highway',
        'city': 'Three Rivers',
        'state': 'CA',
        'postal_code': '93271',
        'vistor_center': ['Foothills Visitor Center', 'Giant Forest Museum', 'Kings Canyon Visitor Center', 'Lodgepole Visitor Center', 'Cedar Grove Visitor Center', 'Mineral King Ranger Station']
    },
    'kobuk valley': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'lake clark': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'lassen volcanic': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'mammoth cave': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'mesa verde': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'mount rainier': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'new river gorge': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'north cascades': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'organ pipe cactus': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'olympic': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'petrified forest': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'pinnacles': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'redwood': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'rocky mountain': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'saguaro': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'shenandoah': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'theodore roosevelt': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'virgin islands': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'voyageurs': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'white sands': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'wind cave': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'wrangell st. elias': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'yellowstone': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'yosemite': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    },
    'zion': {
        'name': 'national park',
        'nps_website': '',
        'image': '',
        'description': '',
        'about': "",
        'street': '',
        'city': '',
        'state': '',
        'postal_code': '',
        'vistor_center': ''
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(nationalparks)
})

app.get('/api/:name', (request, response) => {
    const parkName = request.params.name.toLowerCase()

    if(nationalparks[parkName] ){
        response.json(nationalparks[parkName])
    }else{
        response.json(nationalparks['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
