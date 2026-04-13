import Button from "@/components/Button"; // this include button component
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer"; // it includes imageViewer
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
  // to configure the toggle feature for edit options
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

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
      setShowAppOptions(true); // it will show the option after image being clicked
    } else {
      // alert("you did not selected any image");
    }
  };

  // This will reset the selected image
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will  implement onAddSticker feature to app
  };

  const onSaveImageAsync = async () => {
    // we will implement save image feature
  };

  return (
    // this will show the bydefault image
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* img component */}
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {/* if the showAppOptins is true , it will show an image selected for edit
      otherwise it will ask for choose a image */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            {/* reset button */}
            <CircleButton onPress={onAddSticker} /> //edit button
            {/* save button */}
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />{" "}
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
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
  // styles for reset and save button
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
