// FireOTA settings — created by `npx fireota init`. No secrets here; safe to commit.
// runtimeVersion defaults to the app's store version (Android versionName / iOS
// CFBundleShortVersionString): bump that version whenever native code changes.

/** @type {import('@fireota/react-native').FireOTAConfig} */
const fireotaConfig = {
  appId: '83822cef-18b1-453c-b67c-3c546a5439e8',
  serverUrl: 'https://fireota.creoai.in',
  channel: 'production',
  checkOnAppStart: true,
  installMode: 'nextRestart', // normal updates apply on the next launch (with a "Restart" prompt)
  mandatoryInstallMode: 'immediate',
};

export default fireotaConfig;
