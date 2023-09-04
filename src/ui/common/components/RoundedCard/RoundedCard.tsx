import {FC} from "react";
import {Box} from "native-base";
import WrapperComponent from "../../../../common/interfaces/wrapperComponent";

interface Props{
}

const RoundedCard: FC<Props & WrapperComponent> = ({children})=>{
    return(
        <Box bg={'white'} w={'full'} h={'full'} px={5} borderTopRadius={'34px'}>
            {children}
        </Box>
    )
}

export default RoundedCard
