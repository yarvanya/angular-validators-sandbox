import {IMUrlProtocolTypeEnum} from '../enums/url-protocol.enum';

export interface IMUrlErrorInterface {
  isInvalid: true;
  protocolType: IMUrlProtocolTypeEnum;
}
