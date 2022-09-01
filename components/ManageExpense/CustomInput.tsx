import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/style';

interface CustomInputProps {
  label: string,
  textInputConfig?: TextInputProps
}

export default function CustomInput({ label, textInputConfig }: CustomInputProps) {

  const InputStyles: StyleProp<ViewStyle> = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    InputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={InputStyles} {...textInputConfig} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
})