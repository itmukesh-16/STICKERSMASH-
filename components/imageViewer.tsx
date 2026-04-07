import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

// it tells what this imageViewer component expects as a input
type Props = {
  imgSource: ImageSourcePropType; // default image (local file or URL)
  selectedImage?: string; // optional image chosen by user . ? tells it may or may not be provided
};

// ImageViewer function accepts destructures the Props into image and props
export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
