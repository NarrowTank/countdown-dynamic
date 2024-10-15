import { Body, Container, Head, Html, Img, Preview, Text } from '@react-email/components';

const HolidayEmail = () => (
    <Html>
        <Head />
        <Preview>Making my list and checking it twice!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Text style={paragraph}>Ho Ho Ho!</Text>
                <Text style={paragraph}>
                    The elves and I have been preparing for an extra special holiday
                    this year. We&apos;re looking forward to delivering presents to you
                    and all of the children around the world.
                </Text>
                <Text style={paragraph}>
                    <Img
                        src={`http://localhost:3000/api/timer?t=${Date.now()}`} // Link para a API do cronômetro
                        width="600"
                        height="400"
                        alt="Countdown Timer"
                    />
                </Text>
                <Text style={paragraph}>
                    Happy holidays,
                    <br />
                    Santa Claus
                </Text>
            </Container>
        </Body>
    </Html>
);

export default HolidayEmail;

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};
