import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Event } from "../../store/event/types";

const Container = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  flex: 0 0 25%;
`;

const Header = styled.h1`
  height: 20px;
`;

const Body = styled.h4`
`;

interface propsFromComponent {
  item: Event;
}

type Props = propsFromComponent;

const EventItem: React.FC<Props> = ({ item }) => {

  return (
    <Container>
      <Header>{item.title}</Header>
      <Body>{item.category}</Body>
      <Body>{item.isVirtual}</Body>
      <Body>{item.date}</Body>
      <Body>{item.address}</Body>
      <Body>{item.description}</Body>
    </Container>
  );
};

const mapStateToProps = () => {};

export default connect(mapStateToProps)(EventItem);
