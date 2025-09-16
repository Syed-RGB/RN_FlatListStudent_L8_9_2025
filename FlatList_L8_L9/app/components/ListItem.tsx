import { dataType } from "@/data/appData";
import colors from "@/styles/colors";
import { Text } from "@react-navigation/elements";
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
            
            <TouchableOpacity onPress={() => onPress(item)}>
                  <View style ={[styles.flatListRow, {
                    flex:1,
                    backgroundColor: isSelected
                    ? colors.primary
                    : colors.secondary,
                    }]}>
                    <Text style={[{color:'white', textAlign:'center'},
                      {
                        color:
                          isSelected
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
  flatlist: {
    alignItems: "center",
    
  },
  flatListRow: {
    backgroundColor:'maroon',
    margin:10
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});