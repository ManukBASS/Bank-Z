// React
import { useState } from "react";
// React Native
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// Clipboard
import * as Clipboard from "expo-clipboard";
// Styles
import { CvuScreenStyles } from "./styles";
// Icon
import { Feather } from "@expo/vector-icons";

export function CvuScreen() {
  const { top } = useSafeAreaInsets();

  const [showTooltipCvu, setShowTooltipCvu] = useState(false);
  const [showTooltipAlias, setShowTooltipAlias] = useState(false);

  const handleTooltip = (tooltipType) => {
    if (tooltipType === "cvu") {
      setShowTooltipCvu(true);
    } else {
      setShowTooltipAlias(true);
    }

    setTimeout(() => {
      setShowTooltipAlias(false);
      setShowTooltipCvu(false);
    }, 2000);
  };

  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <SafeAreaView style={{ ...CvuScreenStyles.mainContainer, top: top }}>
      <Text style={CvuScreenStyles.title}>Account Details</Text>
      <View style={CvuScreenStyles.dataContainer}>
        <View style={CvuScreenStyles.dataCard}>
          <Text style={CvuScreenStyles.dataText}>CVU</Text>
          <Text style={CvuScreenStyles.dataText}>110109283920</Text>
          <TouchableOpacity
            style={CvuScreenStyles.button}
            onPress={() => {
              handleTooltip("cvu");
              copyToClipboard("110109283920");
            }}
          >
            {showTooltipCvu && (
              <View style={CvuScreenStyles.tooltip}>
                <Text>Copied!</Text>
              </View>
            )}
            <Feather name="copy" size={24} color="#00ffa8" />
          </TouchableOpacity>
        </View>
        <View style={CvuScreenStyles.dataCard}>
          <Text style={CvuScreenStyles.dataText}>Alias</Text>
          <Text style={CvuScreenStyles.dataText}>my.personalstore.mp</Text>
          <TouchableOpacity
            style={CvuScreenStyles.button}
            onPress={() => {
              handleTooltip("alias");
              copyToClipboard("my.personalstore.mp");
            }}
          >
            {showTooltipAlias && (
              <View style={CvuScreenStyles.tooltip}>
                <Text>Copied!</Text>
              </View>
            )}
            <Feather name="copy" size={24} color="#00ffa8" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
