import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from '../UI/CustomButton';
import { IDummyExpenses } from '../../constants/dummyExpenses';
import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/style';

interface ExpenseFormProps {
  onCancel: () => void,
  onSubmit: (expenseData: IDummyExpenses) => void,
  submitButtonLabel: string,
  defaultValues: IDummyExpenses
}

export default function ExpenseForm(this: any, { onCancel, onSubmit, submitButtonLabel, defaultValues }: ExpenseFormProps) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true
    },
  });

  function inputChandedHandler(inputIdentifier: string, enteredVales: string) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredVales, isValid: true }
      }
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values')
      setInputs((curInputs) => {
        return {
          amount: {
            value: curInputs.amount.value,
            isValid: amountIsValid
          },
          date: {
            value: curInputs.date.value,
            isValid: dateIsValid
          },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid
          },
        }
      })
      return
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <CustomInput
          style={styles.rowInput}
          label='Amount'
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChandedHandler.bind(this, 'amount'),
            value: inputs.amount.value
          }}
        />
        <CustomInput
          style={styles.rowInput}
          label='Date'
          invalid={!inputs.date.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChandedHandler.bind(this, 'date'),
            value: inputs.date.value
          }}
        />
      </View>
      <CustomInput
        label='Dexcription'
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none',
          // autoCorrect: false,
          onChangeText: inputChandedHandler.bind(this, 'description'),
          value: inputs.description.value
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>
      )}
      <View style={styles.buttons}>
        <CustomButton style={styles.button} onPress={onCancel} mode={'flat'}>Cancel</CustomButton>
        <CustomButton style={styles.button} onPress={submitHandler}>{submitButtonLabel}</CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 10
  },
  title: {
    marginVertical: 24,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    flex: 1
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
})