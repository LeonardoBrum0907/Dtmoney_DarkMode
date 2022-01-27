import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primaryBlue: string;
            secudaryBlueLight: string;

            green: string;
            red: string;

            background: string;
            textBody: string;
            textTitle: string;
            shape: string;
        }
    }
}