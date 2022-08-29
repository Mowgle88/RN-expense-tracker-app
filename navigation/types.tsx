import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export type OverviewStackParamList = {
  RecentExpenses: undefined,
  AllExpenses: undefined
};

export type RootStackParamList = {
  ExpensesOverview: NavigatorScreenParams<OverviewStackParamList>,
  ManageExpenses: { expenseId: string },
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'ManageExpenses'>;

export type ExpenseItemProps = NativeStackScreenProps<RootStackParamList, 'ManageExpenses'>;