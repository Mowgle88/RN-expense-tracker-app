import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type OverviewStackParamList = {
  RecentExpenses: undefined,
  AllExpenses: undefined
};

export type RootStackParamList = {
  ExpensesOverview: NavigatorScreenParams<OverviewStackParamList>,
  ManageExpenses: undefined,
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'ManageExpenses'>;