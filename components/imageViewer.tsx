import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

// it tells what this imageViewer component expects as a ipun
// ImageSourcePropType tells it will take a local path or a URL path for images
type Props = {
  imgSource: ImageSourcePropType;
};

// ImageViewer function accepts destructures the Props into image and props
export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
