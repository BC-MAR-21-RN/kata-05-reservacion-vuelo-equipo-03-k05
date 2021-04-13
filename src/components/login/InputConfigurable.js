import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {InputConfigurableStyles as styles} from './styles';
const InputConfigurable = ({title, downText, hidden, children, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{...styles.mainContainer, ...(hidden && styles.hide)}}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={{  ...styles.searchContainer ,...isFocused&&styles.focused}}>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
       
          {...rest}
          style={styles.textInput}
        />
        {children}
      </View>
      <Text style={downText ? styles.titleText : styles.hide}>{downText}</Text>
    </View>
  );
};

export default InputConfigurable;
