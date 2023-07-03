import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./RegistrationScreenStyles";
import Icon from "react-native-vector-icons/AntDesign";

function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <View style={styles.imageWraper}>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="pluscircleo" size={25} color="#FF6C00" />
        </TouchableOpacity>
      </View>

      <Text style={styles.formHeader}>Реєстрація</Text>
      <View style={styles.formInputWraper}>
        <TextInput style={styles.formInput} placeholder="Логін" />
        <TextInput
          style={styles.formInput}
          placeholder="Адреса електронної пошти"
        />
        <View style={styles.passwordWraper}>
          <TextInput style={styles.formInput} placeholder="Пароль" />
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
          Зареєструватися
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.regButtonText}
        >
          Вже є акаунт? Увійти
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegistrationScreen;
