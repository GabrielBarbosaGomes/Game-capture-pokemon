import Button from "../../components/Button"
import { ComponentImg, ComponentWraper } from "./styled";
import pokemon from "../../assets/images/pokemonLogo.png"

const LadingPage = () => {
    return (
        <ComponentWraper>
            <ComponentImg src={pokemon} />
            <a href="/home">
                <Button>
                    start
                </Button>
            </a>
        </ComponentWraper>
    )
}
export default LadingPage;