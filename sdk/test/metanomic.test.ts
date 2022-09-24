import nock from 'nock';
import sinon from 'sinon';
// import { describe, afterEach, it, expect } from '@jest/globals'
import { Metanomic, entities } from '../src';

const APP_ID = '5765508d-da83-4d5d-a4b3-03b2d529e951'
const API_KEY = '64007d57d4ab453bb24f9a86be4b61df'

const MOCK_URL = 'http://test.local';

nock.disableNetConnect();

describe('Metanomic', () => {
  afterEach(() => {
    sinon.restore()
    nock.cleanAll()
  });

  it('Initiates Metanomic SDK', () => {
    const metanomic = new Metanomic(APP_ID, API_KEY, { apiUrl: MOCK_URL })

    expect(metanomic.appId).toEqual(APP_ID);
    expect(metanomic.context.app?.name).toEqual(APP_ID);
    expect(metanomic.client.appId).toEqual(APP_ID);
    expect(metanomic.client.apiUrl).toEqual(MOCK_URL);
  });

  describe('Context', () => {
    it('populates Context properly', () => {
      const campaignName = 'Test Campaign'
      const metanomic = new Metanomic(APP_ID, API_KEY, { apiUrl: MOCK_URL })
      const metanomic2 = metanomic.withCampaign(new entities.CampaignContext({ name: campaignName }))

      expect(metanomic.context.campaign?.name).not.toEqual(campaignName);
      expect(metanomic2.context.campaign?.name).toEqual(campaignName);
    });
    it('populates Context with the builder pattern', () => {
      const campaignName = 'Test Campaign'
      const metanomic = new Metanomic(APP_ID, API_KEY, { apiUrl: MOCK_URL }).withCampaign(new entities.CampaignContext({ name: campaignName }))

      expect(metanomic.context.campaign?.name).toEqual(campaignName);
    });
    it('populates Profile Context Properly', () => {
      const profileId = '1234567890'
      const metanomic = new Metanomic(APP_ID, API_KEY, { apiUrl: MOCK_URL }).withProfile(new entities.ProfileContext({ id: profileId }))

      expect(metanomic.context.profile?.id).toEqual(profileId);
    });
    it('populates Chain Context Properly', () => {
      const campaignName = 'Test Campaign'
      const profileId = '1234567890'
      const metanomic = new Metanomic(APP_ID, API_KEY, { apiUrl: MOCK_URL })
        .withCampaign(new entities.CampaignContext({ name: campaignName }))
        .withProfile(new entities.ProfileContext({ id: profileId }))

      expect(metanomic.context.campaign?.name).toEqual(campaignName);
      expect(metanomic.context.profile?.id).toEqual(profileId);
    });
  });

  describe('Events', () => {
    it('populates Events properly', () => {
      const profileId = '1234567890'
      const metanomic = new Metanomic(APP_ID, API_KEY, { apiUrl: MOCK_URL })

      const stackSpy = sinon.spy(metanomic.netBuffer, 'stack')
      const sendSpy = sinon.spy(metanomic, 'send')
      const newEventSpy = sinon.spy(metanomic, 'newEvent')

      metanomic.identity(new entities.TheValuePayload({
        identity: new entities.Identity({
          profileId,
          anonymous: false
        }),
      }))

      expect(newEventSpy.getCall(0).args[0]).toEqual(entities.EventType.IDENTITY);
      expect(sendSpy.getCall(0).args[0].value.identity?.profileId).toEqual(profileId);
      expect(stackSpy.getCall(0).args[0].value.identity?.profileId).toEqual(profileId);
    });
  });

  describe('Events with Context', () => {
    it('populates Events and Context properly', () => {
      const campaignName = 'Test Campaign'
      const profileId = '1234567890'
      const metanomic = new Metanomic(APP_ID, API_KEY, { apiUrl: MOCK_URL })
        .withCampaign(new entities.CampaignContext({ name: campaignName }))
        .withProfile(new entities.ProfileContext({ id: profileId }))

      const stackSpy = sinon.spy(metanomic.netBuffer, 'stack')
      const sendSpy = sinon.spy(metanomic, 'send')
      const newEventSpy = sinon.spy(metanomic, 'newEvent')

      metanomic.identity(new entities.TheValuePayload({
        identity: new entities.Identity({
          profileId,
          anonymous: false
        }),
      }))

      expect(metanomic.context.campaign?.name).toEqual(campaignName);
      expect(metanomic.context.profile?.id).toEqual(profileId);
      expect(newEventSpy.getCall(0).args[0]).toEqual(entities.EventType.IDENTITY);
      expect(sendSpy.getCall(0).args[0].value.identity?.profileId).toEqual(profileId);
      expect(stackSpy.getCall(0).args[0].value.identity?.profileId).toEqual(profileId);
    });
  });
});
