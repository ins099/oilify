import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface COUNTRY {
  name: string;
  language: string;
  countryCode: string;
  nameCode: string;
  flagUrl: string;
  label: string;
  value: string;
  cc: string;
}

export type AppThemeType = 'dark' | 'light'

export interface ScreenProps {
  navigation?: NavigationProp<any, any>;
  route?: RouteProp<any>
}