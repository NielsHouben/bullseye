
// Logical 
export const scoreMap: ScoreMap = {
    'bull': 25, 'bullseye': 50,
    's1': 1, 's2': 2, 's3': 3, 's4': 4, 's5': 5, 's6': 6, 's7': 7, 's8': 8, 's9': 9, 's10': 10,
    's11': 11, 's12': 12, 's13': 13, 's14': 14, 's15': 15, 's16': 16, 's17': 17, 's18': 18, 's19': 19, 's20': 20,
    'd1': 2, 'd2': 4, 'd3': 6, 'd4': 8, 'd5': 10, 'd6': 12, 'd7': 14, 'd8': 16, 'd9': 18, 'd10': 20,
    'd11': 22, 'd12': 24, 'd13': 26, 'd14': 28, 'd15': 30, 'd16': 32, 'd17': 34, 'd18': 36, 'd19': 38, 'd20': 40,
    't1': 3, 't2': 6, 't3': 9, 't4': 12, 't5': 15, 't6': 18, 't7': 21, 't8': 24, 't9': 27, 't10': 30,
    't11': 33, 't12': 36, 't13': 39, 't14': 42, 't15': 45, 't16': 48, 't17': 51, 't18': 54, 't19': 57, 't20': 60,
};


export function totalHits (scores: Score[]) {
    return scores.reduce((acc, score) => acc + score.count, 0)
}

export function scoreIdToPoints (scoreId: ScoreId) {
    return scoreMap[scoreId]
}

export function calculateScore (score: Score) {
    return scoreIdToPoints(score.id) * score.count
}

// Graphic
export function calculateHSL (factor: number) {
    // const hue = 60 - (factor * 60); 
    const hue = 180 + (factor * 180);
    const saturation = 100; // 100% saturation
    // const lightness = (1 - factor * 0.8) * 100;
    // const lightness = Math.min(Math.max(0.5, 1 - factor * 2), 0.6) * 100
    const lightness = 50


    return { h: hue, s: saturation, l: lightness };
}