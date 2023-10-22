import {NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined
    Menu?: {
        name: string
    }
}
export type propsStack = NativeStackNavigationProp<propsNavigationStack>