export { };

declare global {
    type ScoreId = 'bull' | 'bullseye'
        | 's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 's7' | 's8' | 's9' | 's10'
        | 's11' | 's12' | 's13' | 's14' | 's15' | 's16' | 's17' | 's18' | 's19' | 's20'
        | 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'd6' | 'd7' | 'd8' | 'd9' | 'd10'
        | 'd11' | 'd12' | 'd13' | 'd14' | 'd15' | 'd16' | 'd17' | 'd18' | 'd19' | 'd20'
        | 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 't7' | 't8' | 't9' | 't10'
        | 't11' | 't12' | 't13' | 't14' | 't15' | 't16' | 't17' | 't18' | 't19' | 't20'

    type Score = { id: ScoreId, count: number }

    type ScoreMap = { [key in ScoreId]: number };


    console.log("heiwan")


    // const generateScoreType = (count: number): Score[] => {
    //     const scores: Score[] = [];
    //     for (let i = 1; i <= count; i++) {
    //         scores.push({ id: `s${i}`, value: i });
    //     }
    //     return scores;
    // };

    // const scores: Score[] = generateScoreType(20);
    console.log(scores);




    // interface Score {
    //     id: ScoreId
    //     points: number
    //     count: number
    // }
}

