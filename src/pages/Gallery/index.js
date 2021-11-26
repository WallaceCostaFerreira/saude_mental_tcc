import React, { useMemo } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import StatusBarPlaceHolder from './components/StatusBarPlaceholder';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import CustomNavigator from './components/CustomNavigator';
import theme from '../../constants/theme';

const ForceInset = {
  top: 'never',
  bottom: 'never',
};

export default function Gallery({ route,navigation }) {

  const type = route.params?.type;

  const onSuccess = (data) => {
    navigation.navigate("Publish", {data})
  };

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: 'black',
      errorMessages: {
        hasErrorWithPermissions: 'Necessário permissão.',
        hasErrorWithLoading: 'Erro ao carregar arquivos.',
        hasErrorWithResizing: 'Erro ao carregar arquivos.',
        hasNoAssets: 'Nenhum arquivo encontrado!',
      },
    }),
    []
  );

  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: false, // true might perform slower results
      initialLoad: 100,
      assetsType: type,
      minSelection: 1,
      maxSelection: 1,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  const widgetResize = useMemo(
    () => ({
      width: 50,
      compress: 0.7,
      base64: false,
      saveTo: 'jpeg',
    }),
    []
  );

  const _textStyle = {
    color: 'white',
    fontSize:15,
    textTransform:'uppercase',
    fontWeight:'bold',
  };

  const _buttonStyle = {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  };

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: 'Continuar',
        back: 'Voltar',
        selected: '',
      },
      midTextColor: 'black',
      minSelection: 1,
      buttonTextStyle: _textStyle,
      buttonStyle: _buttonStyle,
      onBack: () => navigation.goBack(),
      onSuccess: (e) => onSuccess(e),
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: 'white',
      spinnerColor: 'blue',
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: 'ios-videocam',
        color: 'white',
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: 'ios-checkmark-circle-outline',
        color: 'white',
        bg: '#0eb14970',
        size: 26,
      },
      onSuccess: (e) => onSuccess(e),
    }),
    []
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView forceInset={ForceInset} style={styles.container}>
        {/* <StatusBarPlaceHolder /> */}
        <View style={styles.container}>
          <AssetsSelector
            Settings={widgetSettings}
            Errors={widgetErrors}
            Styles={widgetStyles}
            Navigator={widgetNavigator}
            // Resize={widgetResize} know how to use first , perform slower results.
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});