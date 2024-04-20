<script setup lang="ts">
console.clear()

const scores = ref<Score[]>([
  // { id: 's20', count: 8 },
  // { id: 't20', count: 3 },
  // { id: 'd20', count: 4 },
  // { id: 't5', count: 3 },
  // { id: 's1', count: 4 },
  // { id: 's9', count: 1 },
])

const numbers = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
]

function weightedRandom (score: number, factorSingle: number, factorDouble: number): ScoreId {
  const rand = Math.random();
  if (rand < factorSingle) {
    return 's' + score as ScoreId;
  } else if (rand < factorSingle + factorDouble) {
    return 'd' + score as ScoreId;
  } else {
    return 't' + score as ScoreId;
  }
}

onMounted(() => {

  setInterval(() => {
    // Generate a random number to determine the aim and hit type
    const aim = Math.random();

    let hitId: ScoreId;

    if (aim < 0.40) hitId = weightedRandom(20, 0.4, 0.1)
    else if (aim < 0.50) hitId = weightedRandom(5, 0.5, 0.1)
    else if (aim < 0.60) hitId = weightedRandom(1, 0.5, 0.1)
    else if (aim < 0.65) hitId = weightedRandom(12, 0.5, 0.1)
    else if (aim < 0.70) hitId = weightedRandom(18, 0.5, 0.1)
    else if (aim < 0.73) hitId = 'bull'
    else if (aim < 0.74) hitId = 'bullseye'
    else {
      let number = Math.floor(Math.random() * 20) + 1;
      hitId = weightedRandom(number, 0.5, 0.1)
    }

    // const randomId = scoreIds[randomIndex];

    // Find the index of the item with the given id in scores array
    const index = scores.value.findIndex(item => item.id === hitId);

    if (index !== -1) {
      // If the item exists, increment its count by 1
      scores.value[index].count++;
    } else {
      // If the item doesn't exist, add it to the array with count: 1
      scores.value.push({ id: hitId, count: 1 });
    }
  }, 500)
})
</script>

<template>
  <div class="w-screen h-screen dark:bg-blue-900 flex flex-col p-4">
    <div class="flex-grow grid place-items-center">
      <Dartboard :scores="scores"
        class="h-full" />
    </div>

    <div class="overflow-auto dark:text-white max-h-1/4">
      {{ scores }}
    </div>

  </div>
</template>
