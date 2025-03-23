enum Colors {
    RED = 10, // 10
    BLUE = 100, // 100
    YELLOW = 200, // 200
}

enum Colors {
    PURPLE = 'PURPLE',
    GREEN = 202,
    PINK,
}

export function chooseColor(color: Colors): void {
    console.log(Colors[color]);
}

chooseColor(202);
chooseColor(203);

// Module mode
export default 1;
