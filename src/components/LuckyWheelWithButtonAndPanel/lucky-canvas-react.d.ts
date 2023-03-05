declare module '@lucky-canvas/react' {
    interface LuckWheelImageConfig {
        src: string | number;
        top?: string | number;
        width?: string | number;
        height?: string | number;
    }

    interface LuckWheelBlockImage extends LuckWheelImageConfig {
        rotate: boolean;
    }

    interface LuckWheelBlock {
        padding?: string | number;
        background?: string;
        imgs?: LuckWheelBlockImage[]
      }

    interface LuckWheelButtonFont {
        text: string;
        top?: string | number;
        fontColor?: string;
        fontSize?: string | number;
        fontStyle?: string;
        fontWeight?: string | number;
        lineHeight?: string | number;
    }

    interface LuckWheelButtonPrize extends LuckWheelButtonFont {
        wordWrap?: boolean;
        lengthLimit?: string | number;
        lineClamp?: number;
    }

    interface LuckWheelPrize {
        range?: number;
        background: string;
        fonts: LuckWheelButtonPrize[]
        imgs?: LuckWheelImageConfig[]
    }

    interface LuckWheelButton {
        radius: string | number;
        pointer?: boolean;
        background?: string;
        fonts?: LuckWheelButtonFont[];
        imgs?: LuckWheelImageConfig[]
    }

    interface LuckyWheelDefaultConfig {
        gutter?: string | number;
        stopRange?: number;
        offsetDegree?: number;
        speed?: number;
        accelerationTime?: number;
        decelerationTime?: number;
      }

    interface LuckyWheelDefaultStyle {
        background?: string;
        fontColor?: string;
        fontSize?: string | number;
        fontStyle?: string;
        fontWeight?: string | number;
        lineHeight?: string | number;
        wordWrap?: boolean;
        lengthLimit?: string | number;
        lineClamp?: number;
      }

    interface LuckyWheelProps {
        width: string | number;
        height: string | number;
        ref?: React.LegacyRef<LuckyWheel>;
        blocks?: LuckWheelBlock[];
        prizes: LuckWheelPrize[];
        buttons?: Button[];
        defaultConfig?: LuckyWheelDefaultConfig;
        defaultStyle?: LuckyWheelDefaultStyle;
        onStart?: (e) => void;
        onEnd?: (prize: LuckWheelPrize) => void;
    }
  
    export class LuckyWheel extends React.Component<LuckyWheelProps> {
        init(): void;
        play(): void;
        stop(index: number): void;
    }
}