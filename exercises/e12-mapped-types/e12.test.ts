import { GameState, GameStatePartial, GameStateSnapshot } from "./e12";

describe("exercise 12, mapped types", () => {
    test("DIY readonly type", () => {
        const initialGameState: GameState = {
            cards: [],
            turnCount: 0,
            startTime: new Date(),
            endTime: undefined
        };

        const gameStateSnap: GameState = Object.freeze(initialGameState); // we want the type system to know this is frozen

        gameStateSnap.turnCount += 1; // this should be a type error

        const newTurnPatch: GameState = { //we would like this to somehow be ok.
            turnCount: 1
        };

        const newState: GameState = Object.assign({}, gameStateSnap, newTurnPatch);
        expect(newState.turnCount).toEqual(1);
    })
});