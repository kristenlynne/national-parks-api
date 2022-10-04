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
        'name': 'kobuk valley national park',
        'nps_website': 'https://www.nps.gov/kova/index.htm',
        'description': 'Wilderness Adventure',
        'about': "Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Half a million caribou migrate through, their tracks crisscrossing sculpted dunes. The Kobuk River is an ancient and current corridor for people and wildlife. For 9000 years, people came to Onion Portage to harvest caribou as they swam the river. Even today, that rich tradition continues.",
        'street': '171 3rd Ave',
        'city': 'Kotzebue',
        'state': 'AK',
        'postal_code': '99752',
        'vistor_center': 'Northwest Arctic Heritage Center'
    },
    'lake clark': {
        'name': 'lake clark national park',
        'nps_website': 'https://www.nps.gov/lacl/index.htm',
        'description': 'Stunning Wilderness',
        'about': "Lake Clark National Park and Preserve is a land of stunning beauty. Volcanoes steam, salmon run, bears forage, and craggy mountains reflect in shimmering turquoise lakes. Here, too, local people and culture still depend on the land and water. Venture into the park to become part of the wilderness.",
        'street': '1 Park Place',
        'city': 'Port Alsworth',
        'state': 'AK',
        'postal_code': '99653',
        'vistor_center': 'Port Alsworth Visitor Center'
    },
    'lassen volcanic': {
        'name': 'lassen volcanic national park',
        'nps_website': 'https://www.nps.gov/lavo/index.htm',
        'description': 'Out of One Beautiful Form into Another',
        'about': "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land.",
        'street': '38050 Highway 36 East',
        'city': 'Mineral',
        'state': 'CA',
        'postal_code': '96063',
        'vistor_center': ['Kohm Yah-Mah-Nee Visitor Center', 'Loosmis Museum']
    },
    'mammoth cave': {
        'name': 'mammoth cave national park',
        'nps_website': 'https://www.nps.gov/maca/index.htm',
        'description': 'More Than A Cave',
        'about': "Rolling hills, deep river valleys, and the worlds longest known cave system. Mammoth Cave National Park is home to thousands of years of human history and a rich diversity of plant and animal life, earning it the title of UNESCO World Heritage Site and International Biosphere Reserve.",
        'street': '1 Visitor Center Parkway',
        'city': 'Mammoth Cave',
        'state': 'KY',
        'postal_code': '42259',
        'vistor_center': ['Mammoth Cave Visitor Center']
    },
    'mesa verde': {
        'name': 'mesa verde national park',
        'nps_website': 'https://www.nps.gov/meve/index.htm',
        'description': 'A Sacred Place',
        'about': "For over 700 years, the Ancestral Pueblo people built thriving communities on the mesas and in the cliffs of Mesa Verde. Today, the park protects the rich cultural heritage of 26 Pueblos and Tribes and offers visitors a spectacular window into the past. This World Heritage Site and International Dark Sky Park is home to over a thousand species, including several that live nowhere else on earth.",
        'street': 'Mile .7 Headquarters Loop Road',
        'city': 'Mesa Verde National Park',
        'state': 'CO',
        'postal_code': '81330',
        'vistor_center': null
    },
    'mount rainier': {
        'name': 'mount rainier national park',
        'nps_website': 'https://www.nps.gov/mora/index.htm',
        'description': 'An Icon on the Horizon',
        'about': "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier's lower slopes. Wildlife abounds in the park's ecosystems. A lifetime of discovery awaits.",
        'street': '55210 238th Avenue East',
        'city': 'Ashford',
        'state': 'WA',
        'postal_code': '98304',
        'vistor_center': ['Longmire Museum', 'Henry M Jackson Memorial Visitor Center', 'Ohanapecosh Visitor Center', 'Sunrise Visitor Center', 'Carbon River Ranger Station', 'Longmire Wilderness Information Center', 'White River Wilderness Information Center', 'Paradise Wilderness Information Center']
    },
    'new river gorge': {
        'name': 'new river gorge national park',
        'nps_website': 'https://www.nps.gov/neri/index.htm',
        'description': 'A River Runs Through It',
        'about': "A rugged, whitewater river flowing northward through deep canyons, the New River is among the oldest rivers on the continent. The park encompasses over 70,000 acres of land along the New River, is rich in cultural and natural history, and offers an abundance of scenic and recreational opportunities.",
        'street': '104 Main Street',
        'city': 'Glen Jean',
        'state': 'WV',
        'postal_code': '25846',
        'vistor_center': ['Canyon Rim Visitor Center', 'Sandstone Visitor Center', 'Grandview Visitor Center', 'Thurmond Depot Visitor Center']
    },
    'north cascades': {
        'name': 'north cascades national park',
        'nps_website': 'https://www.nps.gov/noca/index.htm',
        'description': 'The North Cascades are Calling!',
        'about': "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
        'street': '810 State Route 20',
        'city': 'Sedro-Woolley',
        'state': 'WA',
        'postal_code': '98284',
        'vistor_center': ['North Cascades Visitor Center', 'Golden West Visitor Center', 'Wilderness Information Center']
    },
    'organ pipe cactus': {
        'name': 'organ pipe cactus national monument',
        'nps_website': 'https://www.nps.gov/orpi/index.htm',
        'description': 'Life Abounds in the Sonoran Desert',
        'about': "Look closely. Look again. The sights and sounds of Organ Pipe Cactus National Monument, an International Biosphere Reserve, reveal a thriving community of plants and animals. Human stories echo throughout this desert preserve, chronicling thousands of years of desert living. A scenic drive, wilderness hike or a night of camping will expose you to a living desert that thrives.",
        'street': '10 Organ Pipe Drive',
        'city': 'Ajo',
        'state': 'AZ',
        'postal_code': '85321',
        'vistor_center': ['Kris Eggle Visitor Center']
    },
    'olympic': {
        'name': 'olympic national park',
        'nps_website': 'https://www.nps.gov/olym/index.htm',
        'description': 'Discover Olympic\'s Diverse Wilderness',
        'about': "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!",
        'street': '3002 Mount Angeles Road',
        'city': 'Port Angeles',
        'state': 'WA',
        'postal_code': '98362',
        'vistor_center': ['Olympic National Park Visitor Center', 'Wilderness Information Center', 'Hurricane Ridge Visitor Center', 'Hoh Rain Forest Visitor Center', 'Kalaloch Ranger Station']
    },
    'petrified forest': {
        'name': 'petrified forest national park',
        'nps_website': 'https://www.nps.gov/pefo/index.htm',
        'description': 'A Place for Discovery',
        'about': "More than 13,000 years of human history and culture are represented at Petrified Forest National Park. From prehistoric peoples to the Civilian Conservation Corps, from early explorers to Route 66 motorists, the park has many stories to tell.",
        'street': 'Exit 311, Interstate 40',
        'city': 'Petrified Forest',
        'state': 'AZ',
        'postal_code': '86028',
        'vistor_center': ['Painted Desert Visitor Center', 'Rainbow Forest Museum', 'Painted Desert Inn']
    },
    'pinnacles': {
        'name': 'pinnacles national park',
        'nps_website': 'https://www.nps.gov/pinn/index.htm',
        'description': 'Born of Fire',
        'about': "Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor.",
        'street': '5000 East Entrance Road',
        'city': 'Paicines',
        'state': 'CA',
        'postal_code': '95043',
        'vistor_center': null
    },
    'redwood': {
        'name': 'redwood national and state parks',
        'nps_website': 'https://www.nps.gov/redw/index.htm',
        'description': 'So Much More Than the Tallest Trees',
        'about': "Most people know Redwood as home to the tallest trees on Earth. But the Parks also protect vast prairies, oak woodlands, wild rivers, and 40 miles of rugged coastline. People have lived in this verdant landscape since time immemorial. Together, the National Park Service and California State Parks are managing and restoring these lands for the inspiration, enjoyment, and education of all.",
        'street': '1111 Second Street',
        'city': 'Crescent City',
        'state': 'CA',
        'postal_code': '95531',
        'vistor_center': ['Thomas H. Kuchel Visitor Center', 'Prairie Creek Visitor Center', 'Hiouchi Visitor Center', 'Crescent City Information Center', 'Jedediah Smith Visitor Center']
    },
    'rocky mountain': {
        'name': 'rocky mountain national park',
        'nps_website': 'https://www.nps.gov/romo/index.htm',
        'description': 'Experience a Land of Extremes!',
        'about': "Rocky Mountain National Park's 415 square miles (265,807 acres) encompasses a spectacular range of mountain environments. From meadows found in the montane life zone to glistening alpine lakes and up to the towering mountain peaks, there is something for everyone to discover. Along the way explore over 300 miles of hiking trails and incredible wildlife viewing.",
        'street': '1000 US Hwy 36',
        'city': 'Estes Park',
        'state': 'CO',
        'postal_code': '80517',
        'vistor_center': ['Beaver Meadows Visitor Center', 'Fall River Visitor Center', 'Kawuneeche Visitor Center', 'Alpine Visitor Center', 'Holzwarth Historic Site', 'Moraine Park Discovery Center', 'Sheep Lakes Information Station']
    },
    'saguaro': {
        'name': 'saguro national park',
        'nps_website': 'https://www.nps.gov/sagu/index.htm',
        'description': 'Icon of the Southwest',
        'about': "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
        'street': '3693 S Old Spanish Trail',
        'city': 'Tucson',
        'state': 'AZ',
        'postal_code': '85730',
        'vistor_center': ['Rincon Mountain Visitor Center', 'Red Hills Visitor Center']
    },
    'shenandoah': {
        'name': 'shenandoah national park',
        'nps_website': 'https://www.nps.gov/shen/index.htm',
        'description': 'Nature\'s Calling!',
        'about': "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows. With over 200,000 acres of protected lands that are haven to deer, songbirds, and black bear, there's so much to explore...and your journey begins right here!",
        'street': '21073 Skyline Dr',
        'city': 'Front Royal',
        'state': 'VA',
        'postal_code': '22630',
        'vistor_center': ['Dickey Ridge Visitor Center', 'Harry F. Byrd Sr. Visitor Center']
    },
    'theodore roosevelt': {
        'name': 'theodore roosevelt national park',
        'nps_website': 'https://www.nps.gov/thro/index.htm',
        'description': 'In Honor of a President',
        'about': "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
        'street': '315 Second Avenue',
        'city': 'Medora',
        'state': 'ND',
        'postal_code': '58645',
        'vistor_center': ['North Unit Visitor Center', 'South Unit Visitor Center', 'Painted Canyon Visitor Center']
    },
    'virgin islands': {
        'name': 'virgin islands national park',
        'nps_website': 'https://www.nps.gov/viis/index.htm',
        'description': 'Dive into St. John\'s 3,000 years of human history!',
        'about': "Go beyond Virgin Islands National Park's stunning white-sand beaches. Hike to historic plantation sites to learn about a challenging past when sugar and enslaved labor dominated life on the island. Visit the Indigenous Taino's ancient petroglyphs. Snorkel coral reefs to discover hidden marine life. Two-thirds of the island of St. John is national park, making it a unique destination for visitors.",
        'street': '1300 Cruz Bay Creek',
        'city': 'St. John',
        'state': 'VI',
        'postal_code': '00830',
        'vistor_center': ['Cruz Bay Visitor Center']
    },
    'voyageurs': {
        'name': 'voyageurs national park',
        'nps_website': 'https://www.nps.gov/voya/index.htm',
        'description': 'A Park of Water, Islands, and Horizons',
        'about': "With 218,055 acres, Voyageurs National Park is an adventure wonderland all year long full of exposed rock ridges, cliffs, wetlands, forests, streams and lakes. This is a place of transition between land and aquatic ecosystems, between southern boreal and northern hardwood forests, and between wild and developed areas. Whether you are exploring by land, water or ice there is something for everyone.",
        'street': '360 Hwy 11 East',
        'city': 'International Falls',
        'state': 'MN',
        'postal_code': '56649',
        'vistor_center': ['Rainy Lake Visitor Center', 'Kabetogama Lake Visitor Center']
    },
    'white sands': {
        'name': 'white sands national park',
        'nps_website': 'https://www.nps.gov/whsa/index.htm',
        'description': 'Like No Place Else on Earth',
        'about': "Rising from the heart of the Tularosa Basin is one of the world's great natural wonders - the glistening white sands of New Mexico. Great wave-like dunes of gypsum sand have engulfed 275 square miles of desert, creating the world's largest gypsum dunefield. White Sands National Park preserves a major portion of this unique dunefield, along with the plants and animals that live here.",
        'street': null,
        'city': null,
        'state': 'NM',
        'postal_code': null,
        'vistor_center': null
    },
    'wind cave': {
        'name': 'wind cave national park',
        'nps_website': 'https://www.nps.gov/wica/index.htm',
        'description': 'Discover the Biodiversity of the Prairie',
        'about': "Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks.Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere.",
        'street': '26611 US Highway 385',
        'city': 'Hot Springs',
        'state': 'SD',
        'postal_code': '57747',
        'vistor_center': ['Wind Cave Visitor Center']
    },
    'wrangell st. elias': {
        'name': 'wrangell st elias national park and preserve',
        'nps_website': 'https://www.nps.gov/wrst/index.htm',
        'description': 'America\'s Largest National Park',
        'about': "Wrangell-St. Elias is a vast national park that rises from the ocean all the way up to 18,008 ft. At 13.2 million acres, the park is the same size as Yellowstone National Park, Yosemite National Park, and Switzerland combined! Within this wild landscape, people continue to live off the land as they have done for centuries. This rugged, beautiful land is filled with opportunities for adventure.",
        'street': 'Mile 106.8 Richardson Highway',
        'city': 'Copper Center',
        'state': 'AK',
        'postal_code': '99573',
        'vistor_center': ['Copper Center Visitor Center']
    },
    'yellowstone': {
        'name': 'yellowstone national park',
        'nps_website': 'https://www.nps.gov/yell/index.htm',
        'description': 'The World\'s First National Park',
        'about': "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal and geologic features. Within Yellowstone's 2.2 million acres, visitors have unparalleled opportunities to observe wildlife in an intact ecosystem, explore geothermal areas that contain about half the world’s active geysers, and view geologic wonders like the Grand Canyon of the Yellowstone River.",
        'street': 'Yellowstone National Park Headquarters',
        'city': 'Yellowstone National Park',
        'state': 'WY',
        'postal_code': '82190',
        'vistor_center': ['Albright Visitor Center', 'Canyon Visitor Education Center', 'Fishing Bridge Visitor Center and Trailside Museum', 'Grant Visitor Center', 'Madison Information Station and Trailside Museum', 'Museum of the National Park Ranger', 'Norris Geyser Basin Museum and Information Center', 'Old Faithful Visitor Education Center', 'West Thumb Information Station', 'West Yellowstone Visitor Information Center']
    },
    'yosemite': {
        'name': 'yosemite national park',
        'nps_website': 'https://www.nps.gov/yose/index.htm',
        'description': 'Yosemite',
        'about': "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
        'street': null,
        'city': null,
        'state': 'CA',
        'postal_code': null,
        'directions': "You can drive to Yosemite year-round and enter via Highways 41, 140, and 120 from the west. Tioga Pass Entrance (via Highway 120 from the east) is closed from approximately November through late May or June. Hetch Hetchy is open all year but may close intermittently due to snow. Please note that GPS units do not always provide accurate directions to or within Yosemite.",
        'vistor_center': null
    },
    'zion': {
        'name': 'zion national park',
        'nps_website': 'https://www.nps.gov/zion/index.htm',
        'description': 'Utah\'s First National Park',
        'about': "Follow the paths where native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.",
        'street': '1 Zion Park Blvd.',
        'city': 'Springdale',
        'state': 'UT',
        'postal_code': '84767',
        'vistor_center': null
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
