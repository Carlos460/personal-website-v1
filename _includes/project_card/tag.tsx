
// Import Styles
import {TagComponent, TagName} from './styles'

export default function Tag(props){
    return(
        <TagComponent>
            <TagName>{props.children}</TagName>
        </TagComponent>
    );
}