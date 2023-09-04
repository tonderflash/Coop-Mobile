import {extendTheme} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const theme = extendTheme({
    colors: {
        primary: '#6C9B2D',
        gray: {
            dark: '#7E7E7E',
            medium: '#595959'
        }
    },
    components: {
        Icon: {
            defaultProps: {
                as: MaterialIcons
            },
        },
        Text: {
            variants: {
                title: {
                    color: 'white',
                    fontSize: '24px',
                    bold: true
                }
            }
        }
    }
});

export default theme
