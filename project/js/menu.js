var usAirForceJets = [
  {
    name: "F-22 Raptor",
    role: "Air Superiority Fighter",
    maxSpeed: "Mach 2.25",
    range: "1,600 nautical miles",
    payload: "Internal weapons bays",
    img:"https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg"
  },
  {
    name: "F-35 Lightning II",
    role: "Multirole Fighter",
    maxSpeed: "Mach 1.6",
    range: "1,200 nautical miles",
    payload: "Variety of weapons, stealth capabilities",
    img:"https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg"
  },
  {
    name: "F-16 Fighting Falcon",
    role: "Multirole Fighter",
    maxSpeed: "Mach 2",
    range: "2,620 nautical miles",
    payload: "Versatile, widely used",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1200px-F-16_June_2008.jpg"
  },
  {
    name: "A-10 Thunderbolt II",
    role: "Attack Aircraft",
    maxSpeed: "439 mph",
    range: "800 nautical miles",
    payload: "30mm GAU-8 Avenger rotary cannon, ground-attack capability",
    img:""
  },
  {
    name: "B-2 Spirit",
    role: "Strategic Bomber",
    maxSpeed: "Mach 0.95",
    range: "6,000 nautical miles",
    payload: "Stealth bomber, nuclear capability",
    img:""
  },
  {
    name: "C-17 Globemaster III",
    role: "Transport Aircraft",
    maxSpeed: "Mach 0.77",
    range: "2,400 nautical miles",
    payload: "Large cargo capacity, versatile airlifter",
    img:""
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
];

usAirForceJets.forEach((jet) => {
  console.log(`
          Name: ${jet.name}
          Role: ${jet.role}
          Max Speed: ${jet.maxSpeed}
          Range: ${jet.range}
          Payload: ${jet.payload}
          ============================
        `);
});


export { usAirForceJets };



