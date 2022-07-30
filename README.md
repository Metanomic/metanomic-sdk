# Metanomic Data Kit

The Metanomic Data Kit (Metanomic SDK) is an open-source software development framework to provide tracking capabilities for games or any kind of application to itegrate them with the [Metanomic](metanomic.com)'s [Eventing API](http://eventcatalog.metanomic.net/).

It offers a high-level object-oriented abstraction to send eventing data to the Metanomic economic and inference engine. Using the Metanomic’s SDK components, you can easily capture player actions, events and in-game signals and state changes that are taking place in your virtual world (e.g. game or any other application) using best practices.

The Metanomic SDK is available in the following languages:

- JavaScript, TypeScript ([Node.js ≥ 14.15.0](https://nodejs.org/download/release/latest-v14.x/))
  - We recommend using a version in [Active LTS](https://nodejs.org/en/about/releases/)
- Python (Soon, not implemented yet) ([Python ≥ 3.6](https://www.python.org/downloads/))

## Content

[Eventing Calaogue](http://eventcatalog.metanomic.net/) |
[API & Data Definition Table](https://metanomic.notion.site/API-Data-Definition-Table-8ed6ccca46e14947be12606bd35d63a9) |
[Thunderstruck Quick Start Guide - Beta](https://metanomic.notion.site/Thunderstruck-Quick-Start-Guide-Beta-356cc5016eff44278248474c96bd1fd1) |
[Player Types Classifications](https://metanomic.notion.site/Player-Types-Classifications-6006ba06e078492aa7cf71b993de50a9) |
[How to Report a Bug](https://metanomic.notion.site/How-to-Report-a-Bug-cf09338d050f4d31a5104bce9ee6024f) |
[Feature Requests & Feedback](https://metanomic.notion.site/Feature-Requests-Feedback-10d78c47879744bc88554de9a067351f) |
[Support - Contact Us](https://metanomic.notion.site/Still-Need-Help-Contact-Us-c43b2eb56e12417f8109b7301fadf159) |
[Getting Started](#getting-started) |
[Getting Help](#getting-help) |
[Roadmap](https://github.com/aws/aws-cdk/blob/main/ROADMAP.md) |
[More Resources](#more-resources)

## The Metanomic Product

Metanomic helps virtual-world creators make smarter decisions from the evolving stories that data tells about what keeps people engaged in their Metaverse.

By combining Engine's ability to manage economic instances with Thunderstruck's ability to turn those economic instances into actionable insights, which can in turn be used to further optimise economic instances to maximise player retention and engagement in terms of both time and money spent in play and platform, we can help game developers to design and run more fun, and more profitable metaverse expenses to convert intrinsic value into shared extrinsic value and virtuous cycles for all parties.

[![Thunderstruck-Video](doc/poduct-gif.gif?raw=true 'Thunderstruck-Video')](https://www.loom.com/share/91e42e9cb5124fc28793a55ff302fcb2)

### Thunderstruck

Thunderstruck is a data and player classification and categorisation tool for any game, platform, or digital environment. Thunderstruck helps you to understand and segment players better, enhance LiveOps, increase ad monetisation, and make more informed decisions around your users.

With Thunderstruck API, you can send your first-party in-gaming data, as events as they happen within the virtual world. “Virtual World” is Metanomic’s generic word for any digital application, game or metaverse you own, on any kind of a platform; website, mobile app, and processes that run on a server or OTT device.

When Thunderstruck generates the category insights, based on your interaction data, you can send it (often in real-time) to your marketing, product, and analytics (BI) tools, as well as to data warehouses.

![Thunderstruck](doc/tunderstruck-product.png?raw=true 'Thunderstruck')

#### How Thunderstruck Works

In a nutshell, the Thunderstruck AI generates unique insight about what’s happening in your game, metaverse, site, crypto or app. Thunderstruck then correlates the generated categories with the (player) profiles. The resulted list of categories can then be consumed by either your server (live), your analytics software or archive your data in your data warehouse software for later analysis.

Once you’ve submitted your interaction data, there are several different actions you can take:

- Send it to your Analytics or BI apps, by using the connection API, you may continue with your analysis with your in-house tooling and correlate further the players’ profiles with other data sources
- Consume it with your game server or client as a live integration. You may use the profiling data to better contextualise the player experience
- Archive the data in your data warehouse
- Use the unique categories with your AdNetwork provider to better segment your userbase for high worth and high fidelity Ad ROI
- Forward the user data to your game marketplace for better user experience

### The Economy Engine

![The Economy Engine](doc/economy-architecture.png?raw=true 'The Economy Engine')

## Getting Started

This documentation explains each of the steps that is summarized below, incorporating best practices that help you to optimise your classification result, maximize revenue, to automate your data tasks, and to grow your business with Metanomic.

![User Flow](doc/user-flow.png?raw=true 'User Flow')

### Register

After verifying your account, you will be prompted to start your Metanomic journey by clicking **Create your first game**.

In order to proceed, enter a **Game Title, Description** of your game**,** at least one game **Main Genre** and at least one **Sub Genre.** The photo is optional, but if does support GIFs so you’re missing out if you leave it blank. We won’t judge you.

After creating your game, a unique gameID is generated and displayed at the top where you manage your API keys. Make note of this ID, as you will need it to connect to the API endpoint.

You will also need to generate an API security key. To do so, click **Generate API key** and a pop-up will display with your security key. Make sure to make a copy this key and store it somewhere safe. It won’t be available again after you close this window.

When you’re ready, click on **Questionnaire** at the bottom to move on to the last step in the game creation process.

Every time you create a new game, there are five questions about your game that we ask in order to provide you with an in-depth analysis of your submitted data after it has been segmented by our Baysian AI.

Choose the best option for each question and hit Submit.

### Installation

```sh
npm install @metanomic/sdk
```

### Example Usage

Reporting a new Player identity

```typescript
import { Metanomic } from '@methanomic/sdk';

const metanomic = new Metanomic(APP_ID, API_KEY).withCampaign({
  name: campaignName,
});

metanomic.identity({
  identity: {
    profileId,
  },
});
```

Reporting a new Achievement of a user, in a map area `map_area_id_123`, while executing the mission `mission_quest_2`, and winning a `12345_prize_id_890` prize

```typescript
import { Metanomic } from '@methanomic/sdk';

const metanomic = new Metanomic(APP_ID, API_KEY)
  .withMap({
    id: 'map_area_id_123',
    level: 10,
    position: 12,
  })
  .withSession({
    name: 'mission_quest_2',
    difficulty: 3,
    progress: 90,
  });

metanomic.achievement({
  identity: {
    profileId,
  },
  content: {
    key: 'achievement_id',
    term: 'Dragon Slayer',
  },
  prize: {
    id: '12345_prize_id_890',
    name: 'Dragon Slayer Achievement Prize',
    isUnique: true,
  },
});
```

## Getting Help

- [How to Report a Bug](https://metanomic.notion.site/How-to-Report-a-Bug-cf09338d050f4d31a5104bce9ee6024f)
- [Feature Requests & Feedback](https://metanomic.notion.site/Feature-Requests-Feedback-10d78c47879744bc88554de9a067351f)
- [Support - Contact Us](https://metanomic.notion.site/Still-Need-Help-Contact-Us-c43b2eb56e12417f8109b7301fadf159)

## Roadmap

- Upload large batches of historical data
- More insights
- Better historic player progression through time
- Multiple collaborators and Org accounts
- Realtime push and pull API

## More Resources

- [Eventing Calaogue](http://eventcatalog.metanomic.net/)
- [API & Data Definition Table](https://metanomic.notion.site/API-Data-Definition-Table-8ed6ccca46e14947be12606bd35d63a9)
- [Thunderstruck Quick Start Guide - Beta](https://metanomic.notion.site/Thunderstruck-Quick-Start-Guide-Beta-356cc5016eff44278248474c96bd1fd1)
- [Player Types Classifications](https://metanomic.notion.site/Player-Types-Classifications-6006ba06e078492aa7cf71b993de50a9)

---

Copyright 2020-2022 metanomic.net, Metanomic LTD. or its affiliates. All Rights Reserved.
