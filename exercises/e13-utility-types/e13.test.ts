import { GameState, GameTime, Shape, ShapeKind, Circle, Rectangle, Diamond } from "./e13";

describe("exercise 13 - Utility Types", () => {
    let initialGameState: GameState;
    beforeEach(() => {
        initialGameState = {
            cards: [],
            turnCount: 0,
            startTime: (new Date()).toISOString(),
            endTime: undefined
        };
    });

    test("1. readonly and partial with built-in utility types", () => {
        // TODO: make a readonly gamestate so we're not bit with an unexpected error after we freeze
        const gameStateSnap: GameState = Object.freeze(initialGameState); // we want the type system to know this is frozen

        gameStateSnap.turnCount += 1; // this should be a type error when you've

        // TODO: make a Partial gamestate so we can use that whenever we need to patch
        const newTurnPatch: GameState = { //we would like this to not throw a type error
            turnCount: 1
        };

        const newState: GameState = Object.assign({}, gameStateSnap, newTurnPatch);
        expect(newState.turnCount).toEqual(1);
    });

    test("2. Required<T>", () => {
        //TODO: make a variant of the gamestate type where everything is required
        type FullGameState = any;

        const fullState: FullGameState = {
            cards: [],
            turnCount: 0,
            startTime: (new Date()).toISOString(),
            endTime: null, //TODO: this will be a type error when you've got it done
        };

        expect(fullState.endTime).toBeDefined();
    });

    test("3. NonNullable<T>", () => {
        type MaybeGameState = null | GameState;
        
        const state: MaybeGameState = null;

        // TODO: create a NonNullable state type
        type DefinitelyGameState = any;

        const definitelyState: DefinitelyGameState = initialGameState;

        expect(definitelyState.turnCount).toEqual(0);
    });

    test("4. Record<K,T>", () => {
        const start = (new Date()).toISOString();
        const firstTurn = (new Date()).toISOString();
        const end = (new Date()).toISOString();

        // TODO: Create a gameStateLog variable that will contain snapshots of our game by timestamp using Record<K,T>
        const gameStateLog = { start: null };

        expect(gameStateLog.start).toMatchObject(initialGameState);
    });

    test("5. Pick<T>", () => {
        // TODO: Create a GameMeta type that picks the startTime, endTime, and turnCount properties off of GameState
        // make it Readonly as a bonus :D
        type GameMeta = any;

        const startGameMeta: GameMeta = {
            startTime: initialGameState.startTime,
            endTime: initialGameState.endTime,
            turnCount: initialGameState.turnCount
        };

        expect(startGameMeta.turnCount).toEqual(0);
        expect(startGameMeta.cards).toBeUndefined();
    });

    test("6. Omit<T>", () => {
        // TODO: Create a GameMeta type that omits the cards property from GameState
        type GameMeta = any;

        const startGameMeta: GameMeta = {
            startTime: initialGameState.startTime,
            endTime: initialGameState.endTime,
            turnCount: initialGameState.turnCount
        };

        expect(startGameMeta.turnCount).toEqual(0);
        expect(startGameMeta.cards).toBeUndefined();
    });

    test("7. Exclude<T>", () => {
        // TODO: Create a type HeightAndWidthContructable of shapes that use height and width (so, not Circle), use Exclude<T>
        type HeightAndWidthContructable = any;

        const highAndWide: HeightAndWidthContructable = {
            kind: ShapeKind.Diamond,
            height: 0,
            width: 0
        };

        expect(highAndWide.width).toEqual(0);
        expect(highAndWide.height).toEqual(0);
    });

    test("8. Extract<T>", () => {
        // TODO: Create a type HeightAndWidthContructable of shapes that use height and width (so, Rectangle and Diamonds), use Extract<T>
        type HeightAndWidthContructable = any;

        const highAndWide: HeightAndWidthContructable = {
            kind: ShapeKind.Diamond,
            height: 0,
            width: 0
        };

        expect(highAndWide.width).toEqual(0);
        expect(highAndWide.height).toEqual(0);
    });

    test("9. Parameters<T>", () => {
        function add(a: number, b: number): number {
            return a + b;
        }

        // TODO: Create a type Additives that are the parameters of the add function
        type Additives = [any, any];

        const simpleAdditives: Additives = [1,1];
        expect(add(...simpleAdditives)).toEqual(2);
    });

    test("10. ConstructorParameters<T>", () => {
        class Game {
            private _state: GameState;
            constructor(initialState: GameState) {
                this._state = initialState;
            }
            getState(): GameState {
                return this._state
            }
        }

        // TODO: Create a type GameInitializers that consists of the contructor parameters of the Game class
        type GameInitializers = [any];

        const gameInit: GameInitializers = [initialGameState];
        expect((new Game(...gameInit)).getState()).toHaveProperty("turnCount");
    });

    test("11. ReturnType<T>", () => {
        function moveUp(coords: [number, number]): [number, number] {
            const x = coords[0];
            const y = coords[1]
            return [x, y+1];
        }

        // TODO: set the moved variable's type to the return type of our function above
        const moved: any = [0,0];

        expect(moved[1]).toEqual(1);
    });

    test("12. InstanceType<T>", () => {
        class Game {
            private _state: GameState;
            constructor(initialState: GameState) {
                this._state = initialState;
            }
            getState(): GameState {
                return this._state
            }
        }

        // TODO: set the game variable's type to the contructor type of our class above
        const game: any = new Game(initialGameState);
        
        expect(game.getState()).toHaveProperty("turnCount");
    });
});