import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query Task {
        contentfulTask {
          title
          shortdesc {
            content
          }
          context {
            content
            }
        }
      }
    `}
    render={({
      contentfulTask: {
        title,
        shortdesc: { content },
        context: { content }
      }
    }) => (
      <>
        <h1>{title}</h1>
        <p>{content}</p>
      </>
    )}
  />
);

export default Task;
