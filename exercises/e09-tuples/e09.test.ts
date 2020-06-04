describe("tuples", () => {
    test("tuple of latlng", () => {
        const latlng: [number, number] = [38.897957, -77.036560];

        function coordString(latlng: [number, number]): string {
            return `${latlng[0].toFixed(3)}, ${latlng[1].toFixed(4)}`;
        }


        function coordString2(latlng: number[]): string {
            return `${latlng[0].toFixed(3)}, ${latlng[1].toFixed(4)}`;
        }

        expect(coordString(latlng)).toEqual("38.898, -77.0366");
        expect(coordString2(latlng)).toEqual("38.898, -77.0366");
    });

    test("tuple with mixed type", () => {
        enum LengthUnits {
            cm = "cm.",
            in = "in.",
            ft = "ft.",
            m = "m."
        }

        type Size = [number, LengthUnits]

        const size1: Size = [
            6, LengthUnits.ft
        ];

        function sizeString(size: Size): string {
            return `${size[0].toString()} ${size[1]}`;
        }

        expect(sizeString(size1)).toEqual("6 ft.");

        expect(heightString(height1)).toEqual("5 ft., 11 in.");
    });
});

