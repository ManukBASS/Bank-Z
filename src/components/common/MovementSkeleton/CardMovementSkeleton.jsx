// React Native
import { View } from "react-native";
// Styles
import { MovementSkeletonStyles } from "./styles";
// RN Elements
import { Skeleton } from "@rneui/base";

export function CardMovementSkeleton() {
  return (
    <View style={MovementSkeletonStyles.cardMovement}>
      <View style={MovementSkeletonStyles.skeletonContainer}>
        <Skeleton circle width={32} height={32} animation="wave" />
        <Skeleton width={150} height={32} animation="wave" />
      </View>
      <Skeleton width={100} height={32} animation="wave" />
    </View>
  );
}
