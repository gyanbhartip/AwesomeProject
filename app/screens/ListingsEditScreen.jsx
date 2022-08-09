import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    label: "Cars",
    value: 2,
    backgroundColor: "#fd9644",
    icon: "car",
  },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: "#fed330",
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: "#fd9644",
    icon: "gamepad-variant",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#26de81",
    icon: "tag",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "#2bcbba",
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#45aaf2",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#4b7bec",
    icon: "book-open",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "#a55eea",
    icon: "file",
  },
];

const ListingsEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          placeholder="Description"
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingsEditScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
