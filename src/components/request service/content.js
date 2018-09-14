import React, { Component } from 'react';
import { Form, Container, Grid, Segment, Header, Button, Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const FormRadios = (props) => {
    return props.options.map((value, i) => {
        return (
            <Form.Radio
                label={value}
                value={value}
                checked={props.valueChecked === value}
                onChange={props.handleChange}
            />
        )
    })
}

const RequestDetails = (props) => {
    return <Container>
        <Header as="h2">Request Details</Header>
        <Form>
            <Form.Group widths="equal">
                <Form.Input value={""} name="x" label="Service request name" placeholder="English to spanish" />
                <Form.Input value={""} name="x" label="Service request id" placeholder="#SR-123" />
                <Form.Select label="Language" placeholder="Spanish" options={props.languages} />
            </Form.Group>
            <Form.Group >
                <Form.Input width={6} value={""} name="x" label="Location" placeholder="1000 Johnson" />
                <Form.Input width={6} value={""} name="x" label="Date" placeholder="1 July, 2018" />
                <Form.Input width={2} value={""} name="x" label="Hour" placeholder="08" />
                <Form.Input width={2} value={""} name="x" label="Minute" placeholder="30" />
                <Form.Group inline>
                    <FormRadios options={["AM", "PM"]} />
                </Form.Group>
            </Form.Group>
            <Button.Group basic>
                <Button>2 Hours</Button>
                <Button>Between 2 and 4 hours</Button>
                <Button>More than 4 hours</Button>
            </Button.Group>

            <Form.Group  >
                <Form.Input width={8} value={""} name="x" label="Patient name or code" placeholder="Jackson Curry" />
                <Message  >
                    <Message.Header>Request from facility</Message.Header>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                </Message>
            </Form.Group>

            <Form.Group >
                <Form.Select width={6} label="Type of service appointment" placeholder="Interpretation" options={props.facilities} />
                <label>Time travel allowed?</label>
                <FormRadios options={["Yes", "No"]} />
            </Form.Group>
        </Form>
    </Container>

}


const FacilityContact = (props) => {
    return <Container>
        <Header as="h2">Facility Contact</Header>
        <Form>
            <Form.Group widths="equal" >
                <Form.Select placeholder="Northside Hospital" label="Facility" options={props.facilities} />
                <Form.Select placeholder="Helen Morgan" label="Select contact person" options={props.facilities} />
                <Form.Select placeholder="Dr. Chase Bridges" label="Service requested by" options={props.facilities} />
            </Form.Group>
        </Form>
    </Container>
}

const SearchAvaibleFreelancers = (props) => {
    return <Container>
        <Header as="h2">Search and select avaible freelancers</Header>
        <Form>
            <Form.Group widths="equal" >
                <Form.Input value={""} name="x" label="Search freelancer" placeholder="Search" />
                <Form.Select placeholder="Select" label="Language" options={props.languages} />
                <Form.Select placeholder="Select"label="Location" options={props.locations} />
                <Form.Select placeholder="Select" label="Date" options={props.facilities} />
            </Form.Group>
            <Button id="buttonMoreFilters" basic>Show more filters</Button>
        </Form>
    </Container>
}

class App extends Component {
    state =
        {
            activeItem: "x", valueChecked: "AM"
        }
    render() {
        const facility = [{ key: "X Hospital", value: "XHospital" }, { key: "X Hospital", value: "XHospital" }, { key: "X Hospital", value: "XHospital" }]
        const languages = [{ key: "sp", value: "spanish" }, { key: "ch", value: "china" }]
        const locations = [{ key: "sp", value: "España" }, { key: "ch", value: "China" }]
        return (
            <div>

                <Grid centered verticalAlign='top' columns={1} style={{ padding: 20 }} >
                    <Grid.Column >
                        <Header as="h1">New Service Request</Header>
                        <Segment compact >
                            <RequestDetails languages={languages}/>
                        </Segment>
                        <Segment compact>
                            <FacilityContact facilities={facility} />
                        </Segment>
                        <Segment compact>
                            <SearchAvaibleFreelancers languages={languages} locations={locations} />
                        </Segment>
                    </Grid.Column>
                    <Container style={{ paddingRight: 120 }}>
                        <Button fluid disabled id="footerButton">You don't have any freelancers selected</Button>
                    </Container>
                </Grid>
            </div>
        );
    }
}

export default App;
