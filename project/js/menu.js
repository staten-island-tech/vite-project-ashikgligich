var usAirForceJets = [
  {
    name: "F-22 Raptor",
    role: "Air Superiority Fighter",
    maxSpeed: "Mach 2.25",
    range: "1,600 nautical miles",
    payload: "Internal weapons bays",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg"
  },
  {
    name: "F-35 Lightning II",
    role: "Multirole Fighter",
    maxSpeed: "Mach 1.6",
    range: "1,200 nautical miles",
    payload: "Variety of weapons, stealth capabilities",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg"
  },
  {
    name: "F-16 Fighting Falcon",
    role: "Multirole Fighter",
    maxSpeed: "Mach 2",
    range: "2,620 nautical miles",
    payload: "Versatile, widely used",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1200px-F-16_June_2008.jpg"
  },
  {
    name: "A-10 Thunderbolt II",
    role: "Attack Aircraft",
    maxSpeed: "439 mph",
    range: "800 nautical miles",
    payload: "30mm GAU-8 Avenger rotary cannon, ground-attack capability",
    imageUrl:""
  },
  {
    name: "B-2 Spirit",
    role: "Strategic Bomber",
    maxSpeed: "Mach 0.95",
    range: "6,000 nautical miles",
    payload: "Stealth bomber, nuclear capability",
    imageUrl:""
  },
  {
    name: "C-17 Globemaster III",
    role: "Transport Aircraft",
    maxSpeed: "Mach 0.77",
    range: "2,400 nautical miles",
    payload: "Large cargo capacity, versatile airlifter",
    imageUrl:""
  },
  {
    name: "KC-135 Stratotanker",
    role: "Aerial Refueling Tanker",
    maxSpeed: "530 mph",
    range: "11,015 nautical miles",
    payload: "Fuel transfer to other aircraft in-flight",
    imageUrl: "url_to_kc135_image.jpg",
  },
  {
    name: "E-3 Sentry (AWACS)",
    role: "Airborne Warning and Control System",
    maxSpeed: "360 mph",
    range: "2,000 nautical miles",
    payload: "Surveillance and command center in the sky",
    imageUrl: "url_to_e3_image.jpg",
  },
  {
    name: "MQ-9 Reaper",
    role: "Unmanned Combat Aerial Vehicle",
    maxSpeed: "300 mph",
    range: "1,150 miles",
    payload: "Armed reconnaissance and ground attack",
    imageUrl: "url_to_mq9_image.jpg",
  },
  {
    name: "F-15 Eagle",
    role: "Air Superiority Fighter",
    maxSpeed: "Mach 2.5",
    range: "3,450 nautical miles",
    payload: "Highly maneuverable, all-weather",
    imageUrl: "url_to_f15_image.jpg",
  },
  {
    name: "F-14 Tomcat",
    role: "Interceptor",
    maxSpeed: "Mach 2.34",
    range: "1,600 nautical miles",
    payload: "Variable-sweep wings, air superiority",
    imageUrl: "url_to_f14_image.jpg",
  },
  {
    name: "B-52 Stratofortress",
    role: "Strategic Bomber",
    maxSpeed: "Mach 0.86",
    range: "8,800 nautical miles",
    payload: "Long-range nuclear and conventional capability",
    imageUrl: "url_to_b52_image.jpg",
  },
  {
    name: "AC-130 Spectre",
    role: "Gunship",
    maxSpeed: "300 mph",
    range: "1,300 nautical miles",
    payload: "Armed with powerful Gatling guns and cannons",
    imageUrl: "url_to_ac130_image.jpg",
  },
  {
    name: "F-117 Nighthawk",
    role: "Stealth Attack Aircraft",
    maxSpeed: "Mach 0.92",
    range: "620 nautical miles",
    payload: "First operational aircraft designed around stealth technology",
    imageUrl: "url_to_f117_image.jpg",
  },
  {
    name: "U-2 Dragon Lady",
    role: "High-Altitude Reconnaissance Aircraft",
    maxSpeed: "475 mph",
    range: "7,000 nautical miles",
    payload: "Spy plane with high-altitude capabilities",
    imageUrl: "url_to_u2_image.jpg",
  },
];

usAirForceJets.forEach((jet) => {
  console.log(`
          Name: ${jet.name}
          Role: ${jet.role}
          Max Speed: ${jet.maxSpeed}
          Range: ${jet.range}
          Payload: ${jet.payload}
          Image: ${jet.imageUrl}
          ============================
        `);
});


export { usAirForceJets };



