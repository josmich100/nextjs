import styled from "styled-components"
import {Avatar} from "@material-ui/core"
function SideBar() {
    return (
        <Container>
            <Header>
                <UserAvatar/>
            </Header>
        </Container>
    )
}

export default SideBar

const Container = styled.div`

`
const Header = styled.div`

`
const UserAvatar = styled(Avatar)``;