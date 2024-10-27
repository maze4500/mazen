import type { BackgroundImageProps } from "./background-image";
import { BackgroundImage } from "./background-image";
import type { OverlayProps } from "./overlay";
import { Overlay } from "./overlay";

export interface OverlayAndBackgroundProps
  extends BackgroundImageProps,
    OverlayProps {}

export function OverlayAndBackground(props: OverlayAndBackgroundProps) {
  let {
    backgroundImage,
    backgroundFit,
    backgroundPosition,
    enableOverlay,
    overlayColor,
    overlayColorHover,
    overlayOpacity,
  } = props;
  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        backgroundFit={backgroundFit}
        backgroundPosition={backgroundPosition}
      />
      <Overlay
        enableOverlay={enableOverlay}
        overlayColor={overlayColor}
        overlayColorHover={overlayColorHover}
        overlayOpacity={overlayOpacity}
      />
    </>
  );
}
