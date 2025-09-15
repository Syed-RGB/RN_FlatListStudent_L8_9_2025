import { dataType } from "@/data/appData";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type propsType={
    item: dataType;
    isSelected: boolean;
    //Ability to update status when clicked on
    onPress: (item:dataType) => void;
}

const ListItem:React.FC<propsType> = ({
    item,
    isSelected,
    onPress
})=>{
    return(
        <View>
            
            <TouchableOpacity onPress={() => selectedList(item)}>
                  <View style ={[styles.flatListRow, {
                    flex:1,
                    backgroundColor: isSelected
                    ? colors.primary
                    : colors.secondary,
                    }]}>
                    <Text style={[{color:'white', textAlign:'center'},
                      {
                        color:
                          item.id === selectedId
                          ? colors.text.light
                          : colors.text.dark,
                      }
                    ]}>{item.title}</Text>
                  </View>
            </TouchableOpacity>
        </View>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    
})