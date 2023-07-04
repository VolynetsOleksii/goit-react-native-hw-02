import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginScreenStyles";

function LoginScreen() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.formHeader}>Увійти</Text>
        <View style={styles.formInputWraper}>
          <TextInput
            style={[
              isEmailFocused ? styles.focusedInput : styles.unfocusedInput,
            ]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            placeholder="Адреса електронної пошти"
          />
          <View style={styles.passwordWraper}>
            <TextInput
              style={[
                isPasswordFocused ? styles.focusedInput : styles.unfocusedInput,
              ]}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              placeholder="••••••••••••"
            />
            <TouchableOpacity style={styles.passwordShowBtn}>
              <Text style={styles.passwordShowBtnText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.formSubmitButton}>
          <Text style={styles.formSubmitButtonText}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.regButtonText}>
            Немає акаунту? Зареєструватися
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;
