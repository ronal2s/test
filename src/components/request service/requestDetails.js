const RequestDetails = (props) => {
  return <Container>
    <Header as="h2">Request Details</Header>
    <Form>
      <Form.Group widths="equal">
        <Form.Input value={""} name="x" label="Service request name" placeholder="X" />
        <Form.Input value={""} name="x" label="Service request id" placeholder="X" />
        <Form.Input value={""} name="x" label="Language" placeholder="X" />
      </Form.Group>
      <Form.Group >
        <Form.Input value={""} name="x" label="Location" placeholder="X" />
        <Form.Input value={""} name="x" label="Date" placeholder="X" />
        <Form.Input value={""} name="x" label="Hour" placeholder="X" />
        <Form.Input value={""} name="x" label="Minute" placeholder="X" />
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
        <Form.Input value={""} name="x" label="Patient name or code" placeholder="Jackson Curry" />
        <Message>
          <Message.Header>Request from facility</Message.Header>
          <p>Content</p>
        </Message>
      </Form.Group>

      <Form.Group >
        <Form.Input value={""} name="x" label="Type of service appointment" placeholder="Interpetation" />
        <label>Time travel allowed?</label>
        <FormRadios options={["Yes", "No"]} />
      </Form.Group>
    </Form>
  </Container>

}

module.exports = {RequestDetails}