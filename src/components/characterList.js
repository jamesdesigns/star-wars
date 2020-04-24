import React from 'react'
import { StaticQuery, graphql } from "gatsby"

const CharacterList = ({ children }) => (
<StaticQuery
    query={graphql`
        query CharacterListQuery {
            allCharactersJson {
                edges {
                    node {
                        name
                        planet
                    }
                }
            }
        }
      `}
    render={data => (
        <>
            <ul>{getCharacterLabels(data)}</ul>
        </>
    )}
/>
);

function getCharacterLabels(data) {
    const characterListArray = [];
data.allCharactersJson.edges.forEach(item => characterListArray.push(
<div 
    style={{
        color: 'white'
    }}>
    <li key={item.node.name}>{item.node.name} | <span style={{ color: 'gray' }}> {item.node.planet}</span></li>
</div>)
);
return characterListArray;
}


export default CharacterList