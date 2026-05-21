
import {
  SafeAreaView,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: isMobile ? 12 : 20,
        }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 1280,
            alignSelf: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: 24,
            padding: isMobile ? 16 : 24,
          }}
        >
          <ProductGallery />

          <View style={{ height: isMobile ? 40 : 56 }} />

          <ProductInfo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}