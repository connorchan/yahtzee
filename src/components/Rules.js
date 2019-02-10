import React from 'react';
import CrookedDie from './CrookedDie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RulesSection = styled.section`
    padding: 45px 0;
`;

const RulesList = styled.ol`
    padding-right: 40px;
`;

const RulesListItem = styled.li`
    font-size: 16px;
    margin: 20px 0;
`;

const HomeLinktext = styled.p`
    padding-left: 40px;
`;

const Rules = () => {
    return (
        <RulesSection>
            <CrookedDie/>
            <RulesList>
                <RulesListItem>To start the game, click to roll the dice!</RulesListItem>
                <RulesListItem>Each turn, you will get three chances to roll.</RulesListItem>
                <RulesListItem>To hold onto a die (or a handful of dice) for your next roll,
                    click to toggle the &quot;Active&quot; button beneath a die to
                    &quot;Holding.&quot;
                </RulesListItem>
                <RulesListItem>At any point during a turn, or after three rolls, you will click
                    one of the buttons beneath the score card to score points for a
                    section of the scorecard.
                </RulesListItem>
                <RulesListItem>If you click to score a section but your dice don't qualify, you
                    will receive 0 points for that section.
                </RulesListItem>
                <RulesListItem>To end the game and calculate your final score, click the
                    &quot;End Game&quot; button.
                </RulesListItem>
            </RulesList>
            <Link to={'/'}><HomeLinktext>Go Back</HomeLinktext></Link>
        </RulesSection>
    );
}

export default Rules;