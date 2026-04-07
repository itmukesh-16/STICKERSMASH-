import { StyleSheet, View } from "react-native";

import Button from "@/components/button"; // this include button component
import ImageViewer from "@/components/imageViewer"; // it includes imageViewer

const PlaceholderImage = require("@/assets/images/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* img component */}
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      {/* this section is button section  */}
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
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
