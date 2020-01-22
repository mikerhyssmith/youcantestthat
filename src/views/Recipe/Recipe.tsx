import React, { FunctionComponent, useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import beautify from "js-beautify";


import "./Recipe.scss";
import { useParams } from "react-router-dom";
import { Firebase } from "../../adapters/Firebase";
import { IRecipe } from "../../models/Recipe";
import { Arrow } from "../../components/Arrow/Arrow";

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

const firebase = new Firebase();

export interface ISearchProps {
}


export const Recipe: FunctionComponent = () => {
    const [recipeDetail, setRecipeDetail] = useState<IRecipe | undefined>();
    const { recipe } = useParams();

    useEffect(() => {
        if (recipe) {
            firebase.getRecipe(recipe)
                .then((doc: firebase.firestore.DocumentSnapshot) => {
                    const recipe = doc.data();
                    setRecipeDetail(recipe as IRecipe);
                })
                .catch(e => console.warn(e));
        }
    }, [recipe])

    const handleReturn = () => {

    }

    return (
        <div className="recipe">
            <div className="recipe__header">
                <Arrow onClick={handleReturn} />
                <h3 className="recipe__title">{recipeDetail?.name}</h3>
            </div>
            <div className="recipe__body">
                <h4 className="recipe__sub-title">{recipeDetail?.subtitle}</h4>
                <p className="recipe__description">
                    {recipeDetail?.description}
                </p>

                <div className="recipe__example">
                    {recipeDetail &&
                        <>
                            <SyntaxHighlighter language="javascript" style={prism} >
                                {beautify.js(recipeDetail?.example.test)}
                            </SyntaxHighlighter>

                            <SyntaxHighlighter language="javascript" style={prism} >
                                {beautify.js(recipeDetail?.example.unitUnderTest)}
                            </SyntaxHighlighter>

                        </>

                    }
                </div>
            </div>
        </div>

    )
}