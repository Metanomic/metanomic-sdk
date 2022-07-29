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

### Thunderstruck

![Thunderstruck](doc/tunderstruck-product.png?raw=true 'Thunderstruck')

### The Economy Engine

![The Economy Engine](doc/economy-architecture.png?raw=true 'The Economy Engine')

## Getting Started

### Register

TODO

### Installation

```sh
npm install @metanomic/collector
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

### Configuration

TODO

## Getting Help

TODO

## Roadmap

TODO

## More Resources

TODO

---

Copyright 2020-2022 metanomic.net, Metanomic LTD. or its affiliates. All Rights Reserved.
