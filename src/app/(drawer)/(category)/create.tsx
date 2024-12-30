import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, useWindowDimensions, Platform, Image, Pressable, Alert } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

import CustomButton from '@components/shared/CustomButton';
import ThemedView from '@components/shared/ThemedView';
import ThemedText from '@components/shared/ThemedText';
import ThemedTextInput from '@components/shared/ThemedTextInput';
import { useThemeColor } from '@hooks/useThemeColor';
import { useCategoryStore } from '@stores';
import { Ionicons } from '@expo/vector-icons';

const CreateCategoryScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const backgroundColor = useThemeColor({}, 'background');

  const categories = useCategoryStore(state => state.categories);
  const category = categories.find(c => c.id.toString() === id);

  const resetFields = () => {
    setName('');
    setDescription('');
  }

  const validateInput = () => {
    setErrors('');
    if (!name) {
      setErrors('El nombre es requerido');
      return false;
    }
    return true;
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onCreate = () => {
    if (!validateInput()) return;
    console.warn('Creating category: ', name);

    /* save in the database */
    resetFields();
  }

  const onUpdate = () => {
    if (!validateInput()) return;
    console.warn('Updating category: ', name);

    /* save in the database */
    resetFields();
  }

  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  }

  const onDelete = () => {
    console.warn('DELETE!!!!!!!!!!');
  }

  const confirmDelete = () => {
    Alert.alert(
      '¿Estás seguro de eliminar esta categoría?',
      'Esta acción no se puede deshacer',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: onDelete,
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={{ backgroundColor }}>
        <Stack.Screen
          options={{
            title: isUpdating ? `Actualizar categoría: ${category?.name}` : 'Crear categoría',
            animation: 'fade_from_bottom',
            headerRight: ({ tintColor, canGoBack }) => isUpdating ? (
              <Pressable onPressOut={() => confirmDelete()}>
                <Ionicons
                  style={{ color: 'red' }}
                  name={'trash-outline'}
                  size={30}
                />
              </Pressable>
            ) : (null)
          }}
        />
        <View className='mt-5 mx-4 flex-1'>
          <ThemedText type='h2' weight='font-bold' color='gray' className='mb-5'>Por favor escriba la información</ThemedText>
          <ThemedText weight='font-medium' color='gray' className='mb-5'>Nombre de la categoría</ThemedText>
          <ThemedTextInput
            placeholder='Categoría'
            className=''
            icon='pricetag-outline'
            value={name}
            onChangeText={setName}
          />
          <ThemedText weight='font-medium' color='gray' className='mb-5'>Descripción de la categoría</ThemedText>
          <ThemedTextInput
            placeholder='Descripción'
            icon='newspaper-outline'
            multiline
            numberOfLines={5}
            style={{ marginBottom: 30 }}
            value={description}
            onChangeText={setDescription}
          />
          <ThemedText weight='font-medium' color='red' className='my-5'>{errors}</ThemedText>
          <View className='flex items-center'>
            <Image
              source={{ uri: image || category?.image }}
              resizeMode='cover'
              className='w-2/4 h-auto aspect-square rounded-3xl shadow shadow-cyan-700'
            />
            <ThemedText onPress={pickImage} color='dodgerblue' weight='font-medium' className='mt-5'>Seleccionar Imagen</ThemedText>
          </View>
          <View className='flex flex-row justify-between items-center my-10'>
            <CustomButton color='tint'>Cancelar</CustomButton>
            <CustomButton onPress={() => onCreate()}>{`${isUpdating ? 'Actualizar' : 'Crear'}`}</CustomButton>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CreateCategoryScreen;
