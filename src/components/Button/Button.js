import React from "react";
import styles from "./Button.style"
import { Pressable,Text } from "react-native";


const Button = ({title,onPress}) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )

}
export default Button;