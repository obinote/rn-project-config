/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import i18n from 'i18n/i18n';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {locales} from 'utils/static';
import tw from 'utils/tailwind';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={tw`mt-8 px-6`}>
      <Text
        style={[
          tw`text-2xl font-nunitoBold`,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          tw`mt-2 text-lg font-dancingScript`,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {t} = useTranslation();

  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <SafeAreaView
      style={tw.style(`bg-[${Colors.lighter}]`, {
        [`bg-[${Colors.darker}]`]: isDarkMode,
      })}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={tw.color(`bg-[${backgroundColor}]`)}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={tw.style(`bg-[${Colors.lighter}]`, {
          [`bg-[${Colors.darker}]`]: isDarkMode,
        })}>
        <Header />
        <View
          style={tw.style(`bg-[${Colors.white}]`, {
            [`bg-[${Colors.black}]`]: isDarkMode,
          })}>
          <Button
            title="Indonesia"
            onPress={() => i18n.changeLanguage(locales.ID)}
          />
          <Button
            title="English"
            onPress={() => i18n.changeLanguage(locales.EN)}
          />
          <Section title={t('step_one')}>
            Edit <Text style={tw`font-bold`}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title={t('see_your_changes')}>
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
