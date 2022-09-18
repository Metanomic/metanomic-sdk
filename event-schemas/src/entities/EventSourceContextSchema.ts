import AppContext from './AppContext';
import CampaignContext from './CampaignContext';
import DeviceContext from './DeviceContext';
import SourceContext from './SourceContext';
import ExperimentContext from './ExperimentContext';
import SessionContext from './SessionContext';
import ProfileContext from './ProfileContext';
import MapContext from './MapContext';

class EventSourceContextSchema {
  private _app?: AppContext;
  private _campaign?: CampaignContext;
  private _device?: DeviceContext;
  private _source?: SourceContext;
  private _experiment?: ExperimentContext;
  private _session?: SessionContext;
  private _profile?: ProfileContext;
  private _targetProfile?: ProfileContext;
  private _map?: MapContext;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    app?: AppContext,
    campaign?: CampaignContext,
    device?: DeviceContext,
    source?: SourceContext,
    experiment?: ExperimentContext,
    session?: SessionContext,
    profile?: ProfileContext,
    targetProfile?: ProfileContext,
    map?: MapContext,
  }) {
    this._app = input.app;
    this._campaign = input.campaign;
    this._device = input.device;
    this._source = input.source;
    this._experiment = input.experiment;
    this._session = input.session;
    this._profile = input.profile;
    this._targetProfile = input.targetProfile;
    this._map = input.map;
  }

  get app(): AppContext | undefined { return this._app; }
  set app(app: AppContext | undefined) { this._app = app; }

  get campaign(): CampaignContext | undefined { return this._campaign; }
  set campaign(campaign: CampaignContext | undefined) { this._campaign = campaign; }

  get device(): DeviceContext | undefined { return this._device; }
  set device(device: DeviceContext | undefined) { this._device = device; }

  get source(): SourceContext | undefined { return this._source; }
  set source(source: SourceContext | undefined) { this._source = source; }

  get experiment(): ExperimentContext | undefined { return this._experiment; }
  set experiment(experiment: ExperimentContext | undefined) { this._experiment = experiment; }

  get session(): SessionContext | undefined { return this._session; }
  set session(session: SessionContext | undefined) { this._session = session; }

  get profile(): ProfileContext | undefined { return this._profile; }
  set profile(profile: ProfileContext | undefined) { this._profile = profile; }

  get targetProfile(): ProfileContext | undefined { return this._targetProfile; }
  set targetProfile(targetProfile: ProfileContext | undefined) { this._targetProfile = targetProfile; }

  get map(): MapContext | undefined { return this._map; }
  set map(map: MapContext | undefined) { this._map = map; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default EventSourceContextSchema;
