import {IMUrlProtocolTypeEnum} from 'angular-validators';

export const UrlValidatorConfigurations = [
  {
    label: 'http://',
    protocolType: IMUrlProtocolTypeEnum.Http,
    example: 'http://example.com'
  },
  {
    label: 'https://',
    protocolType: IMUrlProtocolTypeEnum.Https,
    example: 'https://example.com'
  },
  {
    label: 'ftp://',
    protocolType: IMUrlProtocolTypeEnum.Ftp,
    example: 'ftp://example.com'
  },
  {
    label: 'Link without protocol',
    protocolType: IMUrlProtocolTypeEnum.NoProtocol,
    example: 'www.example.com'
  },
  {
    label: 'Any other links',
    protocolType: IMUrlProtocolTypeEnum.Any,
    example: 'http://my-webstite.com, https://website.eu, example.com'
  }
];
