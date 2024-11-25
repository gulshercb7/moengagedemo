//import liraries
import {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import ReactMoE, {
  MoEAnalyticsConfig,
  MoEAppStatus,
  MoEInitConfig,
  MoEngageLogConfig,
  MoEngageLogger,
  MoEngageLogLevel,
  MoEPushConfig,
} from 'react-native-moengage';
import TrackEvent from './TrackEvent';
import { MOENGAGE_KEY } from './keys';

// create a component

const moEInitConfig = new MoEInitConfig(
  MoEPushConfig.defaultConfig(),
  new MoEngageLogConfig(MoEngageLogLevel.DEBUG, false),
  new MoEAnalyticsConfig(false),
);

ReactMoE.setEventListener('pushTokenGenerated', payload => {
  MoEngageLogger.debug('pushTokenGenerated', payload);
});

ReactMoE.setEventListener('pushClicked', notificationPayload => {
  MoEngageLogger.debug('pushClicked', notificationPayload);
});

ReactMoE.setEventListener('inAppCampaignShown', inAppInfo =>
  MoEngageLogger.debug('inAppCampaignShown', inAppInfo),
);

ReactMoE.setEventListener('inAppCampaignClicked', inAppInfo =>
  MoEngageLogger.debug('inAppCampaignClicked', inAppInfo),
);

ReactMoE.setEventListener('inAppCampaignDismissed', selfHandledInAppInfo =>
  MoEngageLogger.debug('inAppCampaignDismissed', selfHandledInAppInfo),
);

ReactMoE.setEventListener('inAppCampaignCustomAction', selfHandledInAppInfo =>
  MoEngageLogger.debug('inAppCampaignCustomAction', selfHandledInAppInfo),
);

ReactMoE.setEventListener('permissionResult', permissionResultData =>
  MoEngageLogger.debug('permissionResult', permissionResultData),
);

ReactMoE.setEventListener('inAppCampaignSelfHandled', payload => {
  MoEngageLogger.debug('inAppCampaignSelfHandled', payload);
});

const App = () => {
  useEffect(() => {
    (async () => {
      ReactMoE.initialize(MOENGAGE_KEY, moEInitConfig);
      ReactMoE.enableSdk();
      ReactMoE.enableDataTracking();
      ReactMoE.setAppStatus(MoEAppStatus.Install);
      ReactMoE.setUserUniqueID('gulsher2@redtag.ae');
    })();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <TrackEvent />
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
