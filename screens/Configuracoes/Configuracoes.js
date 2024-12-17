import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from "./contexts";
import { getStyles } from './Configuracoes.css';

export default function Configurations() {
  const { theme, toggleTheme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconTouchable}
          onPress={toggleTheme}
        >
          <Feather
            name={theme === 'dark' ? 'moon' : 'sun'}
            size={40}
            color={theme === 'dark' ? '#fff' : '#fff'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.configButtonsContainer}>
        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="user"
            size={22} color={theme === 'dark' ? '#000' : '#fff'}
          />
          <Text style={styles.textConfigButton}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="settings"
            size={22} color={theme === 'dark' ? '#000' : '#fff'}
          />
          <Text style={styles.textConfigButton}>Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="star"
            size={22} color={theme === 'dark' ? '#000' : '#fff'}
          />
          <Text style={styles.textConfigButton}>Premium</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="users"
            size={22} color={theme === 'dark' ? '#000' : '#fff'}
          />
          <Text style={styles.textConfigButton}>Contatos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="lock"
            size={22} color={theme === 'dark' ? '#000' : '#fff'}
          />
          <Text style={styles.textConfigButton}>Privacidade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.configButton}>
          <Feather
            name="trash-2"
            size={22}
            color={theme === 'dark' ? '#000' : '#fff'}
          />
          <Text style={styles.textConfigButton}>Excluir Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
