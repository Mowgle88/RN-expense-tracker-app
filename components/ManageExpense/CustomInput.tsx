import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import React from 'react';

interface CustomInputProps {
  label: string,
  textInputConfig?: TextInputProps
}

export default function CustomInput({ label, textInputConfig }: CustomInputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  )
}

const styles = StyleSheet.create({})