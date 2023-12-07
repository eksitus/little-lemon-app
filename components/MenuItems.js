import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, SectionList, Pressable } from "react-native";
import { colors } from "../data";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];
const Item = ({ item }) => {
  return (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{item.name}</Text>
      <Text style={menuStyles.price}>{item.price}</Text>
    </View>
  );
};

const Separator = () => {
  <View style={menuStyles.separator} />;
};
const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item item={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title}</Text>
  );
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.descriptionText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPressIn={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Text style={menuStyles.buttonText}>
          {showMenu ? "Home" : "View Menu"}
        </Text>
      </Pressable>

      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Separator}
        ></SectionList>
      )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.88,
    paddingTop: 20,
  },
  innerContainer: {
    backgroundColor: colors.green,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 22,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  price: {
    color: colors.yellow,
    fontSize: 20,
  },
  descriptionText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.darkYellow,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    height: "5%",
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    height: "100%",
    color: "white",
  },
});

export default MenuItems;
