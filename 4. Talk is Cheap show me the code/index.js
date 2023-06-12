import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="food_villa_logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbS295BL3xdJwXWwh7cTytVNtCwa-0r5TI9UviYdDmsnDk15ovoj2HcZlusgDiYkuo4o&usqp=CAU"
    />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// config Driven UI
const Restrauntlist = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "324194",
      name: "Tejal's Kitchen",
      uuid: "6c4dd248-13d1-41b8-ab6c-a044305bbf2a",
      city: "5",
      area: "Santacruz East",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "gp7q0zffgrjqyqdcx3wn",
      cuisines: ["Gujarati", "Rajasthani", "Jain"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 3.799999952316284,
      slugs: {
        restaurant: "tejal's-kichen-scruz-bandra-east-scruz-bandra-east",
        city: "mumbai",
      },
      cityState: "5",
      address:
        " Fast food Corner By Tejal's kitchen   Gala No 3, Chabra Compound, Shivaji Nagar, Vakola,  Near Grand Hayatt and Centaur Hotel  Santacruz East,  Mumbai ",
      locality: "Next to Raj Auto Garage,Yashwant Nagar, Kalina",
      parentId: 11426,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3500,
        message: "",
        title: "Delivery Charge",
        amount: "3500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6960417~p=4~eid=00000188-add0-7f14-143f-7f8300950405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "324194",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 3.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "247275",
      name: "SHREENATH SWEETS, SNACKS AND FARSAN",
      uuid: "d749bba6-89bc-4ee4-9c17-d2fe448226c2",
      city: "5",
      area: "Kurla",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "7837893c064e08c7378ce7d7ff5ea9d6",
      cuisines: ["Sweets", "Snacks", "Desserts"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant:
          "shreenath-sweets,-snacks-and-farsan-scruz-bandra-east-scruz-bandra-east",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "RGupta chawl kalina chunabhatti shastri  Nagar Read kalina santacruz (east) mumbai 400029.",
      locality: "shastri Nagar",
      parentId: 186053,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "247275",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "78036",
      name: "Burger King",
      uuid: "c04163ad-ab93-4fce-81da-e87d4f2687b0",
      city: "5",
      area: "Santacruz East",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: "burger-king-cst-road-scruz-bandra-east",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "unit no G2, Ground floor , Central Plaza , 166,CST Road, Kalina, Mumbai 400098",
      locality: "Central Plaza, Kalina",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "78036",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "695944",
      name: "Oye Kiddan",
      uuid: "e131e44f-3616-42b9-b65f-94e892deab79",
      city: "5",
      area: "Scruz Bandra East",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "88700316a66b0b50217bb9ef8b12e3e8",
      cuisines: ["Indian", "Biryani", "Tandoor"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "oye-kidddan-scruz-bandra-east-scruz-bandra-east",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Oye Kiddan, Gala No 28, Swastik Industrial Estate, CST Road, Kalina, Santacruz East, Mumbai 400098",
      locality: "CST Road",
      parentId: 690,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "695944",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "32399",
      name: "McDonald's",
      uuid: "50a56a02-357f-4041-a250-478dc74a7868",
      city: "5",
      area: "Santacruz East",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: "40 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "mcdonalds-kalina-artista-scruz-bandra-east",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Hardcastle Restaurants Pvt Ltd, McDonalds Family Restaurants Pvt Ltd, Sumit Artista, G-28, Vidya Nagari Rd, Mathuradas Colony, Kalina, Santacruz East, Mumbai, Maharashtra 400098.",
      locality: "Kalina Artista",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "32399",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "672461",
      name: "Sri Krishna Sweets",
      uuid: "c754f0b5-721f-4073-b782-7c1f31fc638a",
      city: "5",
      area: "Matunga Wadala",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "35e32a75524a100c411bd7b6693d8b74",
      cuisines: ["Sweets"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 6.800000190734863,
      slugs: {
        restaurant: "sri-krishna-sweets-matunga-wadala-matunga-wadala",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shop no.1 264/A, Leela nivas,(LN ROAD) lakhamsi nappu road, matunga road (CR) mumbai 400019 greater mumbai ward-F/N greater mumbai (maharashtra),400019",
      locality: "Mtunga",
      parentId: 193908,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5300,
        message: "",
        title: "Delivery Charge",
        amount: "5300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6964369~p=7~eid=00000188-add0-7f14-143f-7f8400950771",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "672461",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 6.800000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.7",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "298633",
      name: "HARE KRISHNA",
      uuid: "668711b4-bf36-4110-9e79-6219d1a92b23",
      city: "5",
      area: "Santacruz East",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "y0ssisttf1abijyrwelp",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "hare-krishna-kurla-kurla",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Ground Floor, Pattathu Business Plaza, Vidya Nagari, Kalina, Santacruz East, Mumbai, Maharashtra 400098",
      locality: "Kalina, Santacruz (E)",
      parentId: 4023,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "298633",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "202836",
      name: "Hangout Cakes & More",
      uuid: "38007f10-3700-4630-b272-76450993306b",
      city: "5",
      area: "Santacruz East",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "feb64fa9632709c1370119f2c8f17e56",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant:
          "hangout-cakes-&-more-scruz-bandra-east-scruz-bandra-east-2",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shop no 1, Sumit artista, CST road, Next to Mac donalds,Kalina, Santacruz East, Mumbai, Maharashtra, India",
      locality: "CST Road",
      parentId: 4508,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "202836",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "628434",
      name: "Nothing But Chicken",
      uuid: "77fd4ab4-4313-41dc-9f9b-ffd9e96ad65e",
      city: "5",
      area: "Sion",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "v0ja4ho8ekoni2lwgmiz",
      cuisines: ["Salads", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 4.199999809265137,
      slugs: {
        restaurant: "nothing-but-chicken-matunga-wadala-matunga-wadala",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shop no 3 near Vijay sales  , Prem Kunj Building  Sion Circle  Sion west ",
      locality: "Premkunj Road",
      parentId: 668,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4100,
        message: "",
        title: "Delivery Charge",
        amount: "4100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=7051155~p=10~eid=00000188-add0-7f14-143f-7f8500950a10",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.1 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "628434",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 4.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "699812",
      name: "Rice N Curry from Ruth's Kitchen",
      uuid: "e6a07bdd-eb60-4d2b-b771-d556f2f5da76",
      city: "5",
      area: "Scruz Bandra East",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "a9ba452af9b2554a3b5a776ced633356",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: "40 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant:
          "rice-n-curry-from-ruth's-kitchen-scruz-bandra-east-scruz-bandra-east",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Raj Galaxy 2, CST Road, Kolivery Village, Vidya Nagari, Kalina, Santacruz East, Mumbai, Maharashtra 400098, India",
      locality: "Cst Road",
      parentId: 418230,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "699812",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];

// designing the body parts
const burgerking = {
  name: "Burger king",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusines: ["Burger", "American"],
  rating: "4.3",
};

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
}) => {
  // destructuring
  //const { name, cuisines, cloudinaryImageId, lastMileTravel } = restaurant.data;

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravel} minutes</h4>
    </div>
  );
};

/*
// static data
// it is permanantly store
const RestrauntCard = () => {
  return (
    <div className="card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf"></img>
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.3 stars</h4>
    </div>
  );
}
*/

const BodyComponent = () => {
  return (
    <div className="RestrauntCard-list">
      {Restrauntlist.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key = {...restaurant.data.id} />
      })}
    </div>
  );
};

const FooterComponent = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
