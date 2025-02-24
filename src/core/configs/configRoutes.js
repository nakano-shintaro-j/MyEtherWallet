const ROUTES_HOME = {
  HOME: { NAME: 'Home', PATH: '' },
  //A-Z
  ACCESS_WALLET: { NAME: 'AccessWallet', PATH: 'wallet/access/:overlay?' },
  BUY_HARDWARE_WALLET: { NAME: 'BuyHardwareWallet', PATH: 'company' },
  COMPANY_PAGE: { NAME: 'CompanyPage', PATH: 'company' },
  CREATE_WALLET: { NAME: 'CreateWallet', PATH: 'wallet/create/:overlay?' },
  DAPP_SUBMISSION: { NAME: 'DappSubmission', PATH: 'dapp-submission' },
  HOW_IT_WORKS: { NAME: 'HowItWorks', PATH: 'how-it-works' },
  PRESS_KIT: { NAME: 'PressKit', PATH: 'presskit' },
  PRIVACY_POLICY: { NAME: 'PrivacyPolicy', PATH: 'privacy-policy' },
  SECURITY_POLICY: { NAME: 'SecurityPolicy', PATH: 'security-policy' },
  TEAM_PAGE: { NAME: 'TeamPage', PATH: 'team' },
  TERMS_OF_SERVICE: { NAME: 'TermsOfService', PATH: 'terms-of-service' },
  TOOLS: { NAME: 'Tools', PATH: 'tools' }
};
const ROUTES_WALLET = {
  WALLETS: { NAME: 'Wallets', PATH: '' },
  //A-Z
  DAPPS: { NAME: 'Dapps', PATH: 'dapps' },
  DASHBOARD: { NAME: 'Dashboard', PATH: 'dashboard' },
  DEPLOY_CONTRACT: { NAME: 'DeployContract', PATH: 'deploy' },
  INTERACT_WITH_CONTRACT: { NAME: 'InteractWithContract', PATH: 'interact' },
  NFT_MANAGER: { NAME: 'NFTManager', PATH: 'nft' },
  SEND_TX: { NAME: 'SendTX', PATH: 'send-tx' },
  SIGN_MESSAGE: { NAME: 'SignMessage', PATH: 'sign' },
  SWAP: { NAME: 'Swap', PATH: 'swap' },
  VERIFY_MESSAGE: { NAME: 'VerifyMessage', PATH: 'verify' }
};

export { ROUTES_HOME, ROUTES_WALLET };
