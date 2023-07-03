import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginScreenStyles";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.formHeader}>Увійти</Text>
      <View style={styles.formInputWraper}>
        <TextInput
          style={styles.formInput}
          placeholder="Адреса електронної пошти"
        />
        <View style={styles.passwordWraper}>
          <TextInput style={styles.formInput} placeholder="••••••••••••" />
          <TouchableOpacity
            style={styles.passwordShowBtn}
          >
            <Text style={styles.passwordShowBtnText}>Показати</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.formSubmitButton}>
        <Text
          style={styles.formSubmitButtonText}
        >
          Увійти
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.regButtonText}
        >
          Немає акаунту? Зареєструватися
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;
