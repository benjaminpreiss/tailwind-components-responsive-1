<script>
  import {styles} from './styles.js'
  export let sizes;
  const classes = Object.entries(sizes).flatMap(([bp, variant]) => {
    return styles[variant].map(c => `${bp === "base" ? "" : bp + ":"}${c}`)
  }).join(" ")
</script>

<div class={classes}>This is a div</div>