import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import EventItem from "../EventItem";
import { ApplicationState } from "../../store";
import { Event } from "../../store/event/types";
import { fetchRequest } from "../../store/event/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
`;

const EventListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%
`;

interface PropsFromState {
  loading: boolean;
  data: Event[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const EventPage: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  return (
    <Container>
      <EventListItems>
        {data.map(item => {
          return <EventItem item={item} />;
        })}
      </EventListItems>
    </Container>
  );
};

const mapStateToProps = ({ event }: ApplicationState) => ({
  loading: event.loading,
  errors: event.errors,
  data: event.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
