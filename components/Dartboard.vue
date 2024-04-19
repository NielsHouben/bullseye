<template>
    <div>
        <!-- <svg
            :src="dartboardImageUrl"
            alt="Dartboard"
            ref="dartboard"
            xmlns="http://www.w3.org/2000/svg">
        </svg> -->
        <object ref="dartboard" data="/images/Dartboard.svg" type="image/svg+xml"></object>

        <!-- <img :src="dartboardImageUrl" alt=""> -->
        <button @click="changeColor('s19', 0.5)">Change Color of S20</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    scores: Score[];
}

const props = defineProps<Props>();

console.clear()

const dartboard = ref<HTMLObjectElement | null>(null);

const numbersClockwise = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5]

onMounted(async () => {
    setHeatmap()
    if (dartboard.value) dartboard.value.onload = setHeatmap
})

function changeColor (id: string, factor: number) {
    const dartboardSvgElement = dartboard.value?.getSVGDocument()

    let area = dartboardSvgElement?.getElementById(id)
    const hsl = calculateHSL(factor);
    if (area?.tagName != 'path') {
        console.log(id, area?.tagName)
    }
    area?.setAttribute("fill", `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)
}

function calculateHSL (factor: number) {
    const hue = 200; // Constant hue for red
    const saturation = 100; // 100% saturation
    const lightness = (1 - factor * 0.6) * 100;


    return { h: hue, s: saturation, l: lightness };
}

function setHeatmap () {
    // let gradiant = 0.05
    // for (let num of numbersClockwise) {
    //     changeColor(`s${num}`, gradiant)
    //     gradiant += 0.05
    // }
    setGradiantSpinning()
}

function shiftRight (arr: number[]) {
    const lastElement = arr.pop(); // Remove the last element
    if (lastElement) arr.unshift(lastElement); // Add the last element to the beginning of the array
    return arr;
}

function setGradiantSpinning () {
    changeColor('bull', 0.4)
    changeColor('bullseye', 0.5)

    let gradiant = 0.24
    let values = []
    for (let num of numbersClockwise) {
        changeColor(`s${num}`, gradiant)
        changeColor(`d${num}`, gradiant)
        changeColor(`t${num}`, gradiant)

        values.push(gradiant)
        gradiant += 0.04
    }
    setInterval(() => {
        shiftRight(values)
        for (let i = 0; i < values.length; i++) {
            const num = numbersClockwise[i];
            const value = values[i]
            changeColor(`s${num}`, value)
            changeColor(`d${num}`, value)
            changeColor(`t${num}`, value)
        }
    }, 200)
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
