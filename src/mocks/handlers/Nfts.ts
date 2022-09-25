import { rest } from "msw"
import { IMint } from "src/features/NFTs/NFTs"
import { SnakeCasedProperties } from "type-fest"

export var TEST_MINTS: SnakeCasedProperties<IMint[]> = [
  {
    cover: "c1",
    endDate: "2 May 2022",
    endTime: "3:59pm UTC",
    label: "Astro Moon",
    guid: "guidc1",
    supply: 4321,
    price: "50 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c2",
    endDate: "Unlimited",
    endTime: "Unlimited",
    label: "Forest Mint",
    guid: "guidc2",
    supply: 2230,
    price: "430-500 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c3",
    endDate: "04 February 2023",
    endTime: "1:00am UTC",
    label: "HandsTribe Tree",
    guid: "guidc3",
    supply: 980,
    price: "120-230 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c4",
    endDate: "01 January 2023",
    endTime: "12:00pm UTC",
    label: "Void Fall",
    guid: "guidc4",
    supply: 230,
    price: "330-350 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c5",
    endDate: "Unlimited",
    endTime: "Unlimited",
    label: "Blue Sunset",
    guid: "guidc5",
    supply: 440,
    price: "430-500 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c6",
    endDate: "2 May 2022",
    endTime: "3:59pm UTC",
    label: "Surf California",
    guid: "guidc6",
    supply: 4321,
    price: "50 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c7",
    endDate: "Unlimited",
    endTime: "Unlimited",
    label: "Night Party",
    guid: "guidc7",
    supply: 2230,
    price: "430-500 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c8",
    endDate: "04 February 2023",
    endTime: "1:00am UTC",
    label: "Egyptian Anubis",
    guid: "guidc8",
    supply: 980,
    price: "120-230 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c9",
    endDate: "01 January 2023",
    endTime: "12:00pm UTC",
    label: "Digital Mint",
    guid: "guidc9",
    supply: 230,
    price: "330-350 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
  {
    cover: "c10",
    endDate: "Unlimited",
    endTime: "Unlimited",
    label: "City Street",
    guid: "guidc10",
    supply: 440,
    price: "430-500 $UST",
    links: {
      discord: "https://www.discord.com",
      twitter: "https://www.twitter.com",
      website: "https://www.launchpad.luart.io",
    },
  },
]
export const NftsEndpoints = [
  rest.get("/mints", (req, res, ctx) => {
    return res(ctx.json(TEST_MINTS), ctx.delay(2000), ctx.status(200))
  }),
]
