// Using the provided hook
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Button, TouchableOpacity } from 'react-native';
import { PlusIcon } from 'react-native-heroicons/outline';

export default function AddToClosetActionSheet() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex
    }, (selectedIndex: any) => {
      switch (selectedIndex) {
        case 1:
          // Save
          break;

        case destructiveButtonIndex:
          // Delete
          break;

        case cancelButtonIndex:
          // Canceled
      }});
  }

  return (
    <TouchableOpacity>
        <PlusIcon  color={"black"} onPress={onPress}/>
    </TouchableOpacity>
  )
};


