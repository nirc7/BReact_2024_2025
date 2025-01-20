import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import { Button as BtnElm, Icon} from '@rneui/themed';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [imgSrc, setImgSrc] = useState('https://upload.wikimedia.org/wikipedia/commons/2/25/Coldplay_%282842037407%29.jpg');

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const btnSnap = async () => {
    const photo = await camera.takePictureAsync({
      quality: 0.005, // Adjust this value (0.0 - 1.0) for picture quality
      skipProcessing: true, // Set to true to skip processing
    });
    console.log(photo);
    console.log(photo.uri);
    setImgSrc(photo.uri);
  }

  return (
    <View style={styles.container}>
      <Text>camera demo</Text>
      <CameraView style={styles.camera} facing={facing} ref={camref => setCamera(camref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <View style={{ margin: 20, alignItems: 'center', borderRadius: 5, borderWidth: 2, borderColor: 'blue', padding: 10 }}>
        <Button title="snap" onPress={btnSnap} />
      </View>
      <Image
        source={{ uri: imgSrc }}
        style={{ width: 320, height: 150, borderWidth: 1, borderColor: 'red', margin: 10 }} />
      
      <BtnElm radius={"sm"} type="outline">
        ruppin
        <Icon name="save" color="green" />
      </BtnElm>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 0.5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});


// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Ruppin.</Text>
//     </View>
//   );
// }
