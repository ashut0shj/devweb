
import { AppBar, Toolbar, styled } from "@mui/material"
import SignUp1 from "../LoginPage/SignUp1.jsx";
import { Padding } from "@mui/icons-material";

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
    padding: 10px 20px;
`;

const Header = () => {
    const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAB8CAMAAAA/xIAPAAAAjVBMVEUeLUAA/8MJ5LED9r0A/8UL364E87sA/8gF8LkI6bQM3KwG7bceKz8fHTkeKD4A/8sfFzcWk30fIDofGjgdOUYfATEeJDwQw50fETUgACsTp4kfDjQK37IbWVgfCjMfFDYRupUL1KcdM0McR04WhXQZbmUYfnANzqUSs5EUn4UaY14Wi3cZdGgbUVMcPkltAZpMAAAEIUlEQVR4nO2ZWXeqMBRGCQmEQBgVcEKNE+LQ///zbpgUFdp117o39OHs1ZdSane/E5KcoGkAAAAAAAAAAAAAAAAAAAAAAAD9cO/tgvd+YXR4NE++1vHTi8/i6W4e8BGdPvCCk+X7NM+C5kI0PSPfR8UuGtXrhQnPCUEIUXybVBe8/Yqi8oKe/ZY4vfiKKyeEiK9VRZ/r9QWM0SL6FXFOvtIqyAp6XspL0cVHjSVGRjYZW1Hz5geHogdElAVentsoMTaxuYhHjjPYp5SgjuVqKjXjtLxGKknTsrC4BD9/1H/Di2/dIHstLctxLBauk7Ek5Yj0ERq0rJIsLRljlsjGidOLj29Bvlg+6u2UljrTr5sR4gy0jyBfLFvJKkqm6zpbZWvFjjy4rT6CrCx30nK9pfhRb6eWNGxGikDp0s43hU96JBFJN/LH7om+1ru0NGzkp0p3IJtzX5ASP6sGX/wuaUhJW0c0d9UtmO51SPIcVzdEx1bSeSQpkWtToWwh8r5wryMxD+3zMbkbcqrslLuylL9G76pqvl70PN0ySHHfPO6JdmdkvtS7sdzGaiS5pvc4Unydd2PicWabrFtvYZT3samakZlcegpORTZ7u8+dLuRk+ZQU1a+Ro5rJPTp8TEIUF/PPP87jo3Daegth1YP3oGaD5IbvTzgV+/5VOtIWTZTCbgpAQ3cUS0ILd6iKfHkUrJRkj/9oHEtq77/rbaJkYdjGcySPY0lD7/uBxmd75+X+ESyxEX7fzfJ1ZtORLR25OufZZLjiSRCarwNEuSU2hG0bOiv4QJx8ds/f1inllo4oJQ2pKfrjTKJHp96xVDNfNrM60UW5pJSWOmN93ezyS3wu+OSkxrJZIa2npF62X+/drDcJcc9O2crUbIq4V03RRmOpV5bMsoq4O7fPdnlvy2F886j9U5aFLCS2u1Ey2XRj4zJrDWSQpHen7J9UbYO9nUlqy66kZWEcLus7OE/7d/PE8JS1FO5JDjijldQbSdPEpKg1Y2NAEmfqjoxkC0kJKyWNRtKpJDEmSRnV5NC7mUeEHFSecPDNlRL7mWQriWkoNbib97bB1Llsfv7sf6kZXFZmd1DWkohsZX/Gp6seS0K2U+UnhNHkzGpJ1gzKyjKNBywpPsQjvLSQO7KcvUU5aCmDTNSs3x8kWtl+PSXJoKVsMGejvf3h67vAVb3rJIcsae6OeRisRdMFNptJqDr/7Xl6CDq5I79Gk92sjdp6ywWwkHMNT7ozkZ9+/YJ3PpF2Npt6S6VpmdomfMzq1LpGox2pd+Hxre1j/eYUKG7Psv38vh4/yJoo2BJK5Ne2OZ709kJ+T2SQY8yRQ8ilKGVOenvs3CIeCsdY7NWuiD+SrOfz7jsd7sbzePOLggQAAAAAAAAAAAAAAAAAAAAAAPhr/gBLK0auuA2XQAAAAABJRU5ErkJggg==';
    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 70 }} />
                {/* <a style={{color: white}}>SignUp</a> */}
                <p src={SignUp1} alt= "sign" syle={{width: 30}}>SignUp</p>
                {/* <SignUp/> */}
            </Toolbar>
        </Container>
    )
}

export default Header;