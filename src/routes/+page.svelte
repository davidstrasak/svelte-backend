<script lang="ts">
  let a: number;
  let b: number;
  let total: number = 0;

  async function add() {
    const response = await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ a, b }),
      headers: {
        "content-type": "application/json",
      },
    });

    total = await response.json();
  }
</script>

<h1>Tato kalkulačka počítá přes server:</h1>

<span class="">Input 1</span>
<input bind:value={a} />
<br />
<span>Input 2</span>
<input bind:value={b} />

<button on:click={add}>Add</button>
<br />
<span>{total}</span>
