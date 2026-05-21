
import {
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";

import ProductGallery from "../../components/ProductGallery";
import ProductInfo from "../../components/ProductInfo";

export default function Home() {
  const { width } = useWindowDimensions();

  const isMobile = width < 768;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
          paddingVertical: isMobile ? 12 : 24,
          paddingHorizontal: isMobile ? 12 : 20,
        }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 1280,

            backgroundColor: "#FFFFFF",

            borderRadius: 24,

            padding: isMobile ? 16 : 24,
          }}
        >
          <ProductGallery />

          <View
            style={{
              height: isMobile ? 40 : 56,
            }}
          />

          <ProductInfo />
        </View>
      </ScrollView>
    </View>
  );
}

