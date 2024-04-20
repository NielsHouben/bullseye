<template>
    <div>
        <object ref="dartboard" data="/images/Dartboard.svg" type="image/svg+xml"></object>
        <button @click="changeColor('s19', 0.5)">Change Color of S20</button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    scores: Score[];
}
const props = defineProps<Props>();
const dartboard = ref<HTMLObjectElement | null>(null);


onMounted(async () => {
    setHeatmap()
    // weird solution needed when updateing the dartboard because it hasn't loaded yet during hmr (or refresh can't remember)
    if (dartboard.value) dartboard.value.onload = setHeatmap
})

watch(props.scores, (newScores, oldScores) => {
    setHeatmap()
});


function changeColor (id: string, factor: number) {
    const dartboardSvgElement = dartboard.value?.getSVGDocument()
    let area = dartboardSvgElement?.getElementById(id)
    const hsl = calculateHSL(Math.min(factor, 1));
    area?.setAttribute("fill", `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)
}


function setHeatmap () {
    let total = totalHits(props.scores)
    for (let score of props.scores) {
        changeColor(score.id, (score.count / total))
    }
}


// Graphical functions
const numbersClockwise = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5]

function setGradiantSpinning () {
    changeColor('bull', 0.4)
    changeColor('bullseye', 0.5)

    let gradiant = 0.24
    let values: number[] = []
    for (let num of numbersClockwise) {
        changeColor(`s${num}`, gradiant)
        changeColor(`d${num}`, gradiant)
        changeColor(`t${num}`, gradiant)

        values.push(gradiant)
        gradiant += 0.04
    }

    return setInterval(() => {
        values = arrayShiftRight(values)
        for (let i = 0; i < values.length; i++) {
            const num = numbersClockwise[i];
            const value = values[i]
            changeColor(`s${num}`, value)
            changeColor(`d${num}`, value)
            changeColor(`t${num}`, value)
        }
    }, 20)
}

function setGradiant () {
    let gradiant = 0.05
    for (let num of numbersClockwise) {
        changeColor(`s${num}`, gradiant)
        gradiant += 0.05
    }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
