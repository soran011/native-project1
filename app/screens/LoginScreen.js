import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              placeholder="email"
              icon="email"
              autoCapitalized="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            />
            <AppText style={{color: "red"}}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalized="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
            <AppText style={{color: "red"}}>{errors.password}</AppText>
            <AppButton
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
