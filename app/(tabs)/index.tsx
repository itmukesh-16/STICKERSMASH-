import Button from "@/components/button"; // this include button component
import ImageViewer from "@/components/imageViewer"; // it includes imageViewer
import * as ImagePicker from "expo-image-picker"; // this will let us to pick the image from system
import { useState } from "react"; // it stores the component state and update it
import { StyleSheet, View } from "react-native"; // summoning stylesheet and view components

const PlaceholderImage = require("@/assets/images/images/background-image.png");

export default function Index() {
  // selectedImage -current state
  // setSelectedImage- updated state
  // < String | undefined> - it may contain string or undefined/not selected
  // (undefined) - initial value is nothing selected
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  // Here the PicImageAsync method will invoke the launchImageLibraryAsync() which will collect image prorties in an array format
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], // select media type
      allowsEditing: true, // it enables us to edit the seleced image
      quality: 1,
    });

    // it checks if we have selected an image or not
    if (!result.canceled) {
      //console.log(result);
      setSelectedImage(result.assets[0].uri); // it will select image source from assets array
    } else {
      alert("you did not selected any image");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* img component */}
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      {/* this section is button section  */}
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
