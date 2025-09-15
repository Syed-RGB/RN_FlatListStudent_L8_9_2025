import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

type propsType = {
    color ?: string;
}

const ListItemSeperator:React.FC<propsType> = ({
    color
})=>{
    return(
        <View style={[styles.seperator,
            {backgroundColor: color || colors.theme.light.text}
        ]}/>
        
    )
}

export default ListItemSeperator;

const styles = StyleSheet.create({
    seperator:{
        height:3,
        width: '100%'
    }
})