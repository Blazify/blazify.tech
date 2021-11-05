<template>
  <div>
    <div class="is-hidden-touch">
      <div class="columns" role="banner">
        <div class="column is-three-fifths">
          <section class="hero is-fullheight">
            <div class="hero-body">
              <div class="container has-text-centered box">
                <p class="title is-1 is-spaced" role="heading" aria-level="1">Blazify Organization</p>
                <p class="subtitle is-2" role="heading" aria-level="2">Youth powered open source organization based in
                  India
                  & Sweden</p>
              </div>
            </div>
          </section>
        </div>
        <div class="column">
          <section class="hero is-fullheight">
            <div class="hero-body">
              <img src="./assets/cowork.svg" alt="null">
            </div>
          </section>
        </div>
      </div>
      <div class="mx-6 my-6">
        <div class="box">
          <div class="content has-text-centered">
            <p class="title is-2" aria-level="2" role="heading">Projects</p>
          </div>
          <div class="columns">
            <div class="column is-one-third" v-for="project in projects" :key="project.name">
              <div class="box has-background-dark container">
                <p class="title is-3" aria-level="3" role="heading">{{ project.name }}</p>
                <div class="tags has-addons is-shadowless">
                  <span class="tag is-shadowless">version</span>
                  <span class="tag is-link is-shadowless">{{ project.version }}</span>
                </div>
                <p class="subtitle is-4">{{ project.subtitle }}</p>
                <a :href="project.github">Github</a>
              </div>
            </div>
          </div>
          <div class="content has-text-centered">
            <p class="title is-2" aria-level="2" role="heading">Members</p>
          </div>
          <div class="columns">
            <div class="column is-one-third" v-for="member in members" :key="member.name">
              <div class="box has-background-dark container">
                <p class="title is-3" aria-level="3" role="heading">{{ member.name }}</p>
                <div class="tags" v-if="member.tags">
                  <span class="tag" v-for="tag in member.tags" :key="tag + member.name">{{ tag }}</span>
                </div>
                <p class="subtitle is-4">{{ member.subtitle }}</p>
                <a :href="member.github">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="is-hidden-desktop">
      <div class="columns">
        <div class="column">
          <section class="is-fullheight">
            <div class="hero-body">
              <img src="./assets/cowork.svg" alt="null">
            </div>
          </section>
        </div>
        <div class="column">
          <section class="container mx-6 mgb-large is-fullheight">
            <div class="container has-text-centered box">
              <p class="title is-4 is-spaced" role="heading" aria-level="1">Blazify Organization</p>
              <p class="subtitle is-7" role="heading" aria-level="4">Youth powered open source organization based in
                India &
                Sweden</p>
            </div>
          </section>
        </div>
      </div>
      <div class="my-6">
        <div class="box">
          <div class="content has-text-centered">
            <p class="title is-5" aria-level="2">Projects</p>
          </div>
          <div class="columns">
            <div class="column is-one-third" v-for="project in projects" :key="project.name">
              <div class="box has-background-dark container">
                <p class="title is-6" aria-level="3">{{ project.name }}</p>
                <div class="tags has-addons is-shadowless">
                  <span class="tag is-shadowless">version</span>
                  <span class="tag is-link is-shadowless">{{ project.version }}</span>
                </div>
                <p class="subtitle is-7">{{ project.subtitle }}</p>
                <a class="am" :href="project.github">Github</a>
              </div>
            </div>
          </div>
          <div class="content has-text-centered">
            <p class="title is-5" aria-level="2">Members</p>
          </div>
          <div class="columns">
            <div class="column is-one-third" v-for="member in members" :key="member.name">
              <div class="box has-background-dark container">
                <p class="title is-6" aria-level="3">{{ member.name }}</p>
                <div class="tags" v-if="member.tags">
                  <span class="tag" v-for="tag in member.tags" :key="tag + member.name">{{ tag }}</span>
                </div>
                <p class="subtitle is-7">{{ member.subtitle }}</p>
                <a class="am" :href="member.github">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {Footer},
  data() {
    return {
      projects: [
        {
          name: "BlazeX",
          version: "...",
          subtitle: "AOT compiled object oriented programming language",
          github: "https://github.com/blazifyOrg/blazex",
          versionLink: "https://api.github.com/repos/blazifyorg/blazex/contents/crates/blazex/Cargo.toml"
        },
        {
          name: "EvolveJS",
          version: "...",
          subtitle: "A Discord Library written in Typescript for Javascript and Typescript",
          github: "https://github.com/BlazifyOrg/evolvejs",
          versionLink: "https://api.github.com/repos/blazifyorg/evolvejs/contents/package.json"
        }, {
          name: "SignLogger",
          version: "...",
          subtitle: "The best JS/TS logger out there, with everything that you need; ExpressJS, typeorm...",
          github: "https://github.com/BlazifyOrg/sign-logger",
          versionLink: "https://api.github.com/repos/blazifyorg/sign-logger/contents/package.json"
        }
      ],
      members: [
        {
          name: "Ronit Rahaman",
          subtitle: "Hi, I'm Ronit \"RoMeAh\" Rahaman, a passionate self-taught backend and systems developer from West Bengal, India. Current Project I'm actively working on is Blazescript. Not to be mentioned I'm trash at front end",
          github: "https://github.com/RoMeAh",
          tags: ["Rust", "Typescript", "Javascript", "Kotlin", "NodeJS", "Deno", "Python", "Crystal", "Ruby", "Java", "C++"]
        },
        {
          name: "Ratul Saha",
          subtitle: "I am a full-stack self-taught web developer from India. I am 17 years old and till date I have worked on various projects to build my knowledge and experience. Currently, I am looking for internships to further develop my skill-set and experience!",
          github: "https://github.com/ThatAnonyG",
          tags: []
        },
        {
          name: "Aron E Kylebäck",
          subtitle: "Born and raised in the small Swedish town \"Skövde\" I got introduced to coding in 6th grade and fell in love with it. Two years later at the age of 14 I landed my first Fullstack Consult Job at MMR Solutions where I am currently working",
          github: "https://github.com/Collbrothers",
          tags: ["A11Y", "Javascript", "Typescript", "NodeJS", "C++", "C", "C#", "ASM x86", "VueJS", "React", "Go", "Rust", "Java", "Python", "R"]
        }
      ]
    }
  },
  mounted() {
    for (const [, v] of this.projects.entries()) {
      if (v.versionLink.endsWith(".toml")) {
        fetch(v.versionLink).then(vv => vv.json()).then(vv => {
          const args: string[] = atob(vv.content).split(/ +/g)
          for (const [ii, e] of args.entries()) {
            if (e === "version") {
              v.version = args[ii + 2].replaceAll("\"", "").replace(",", "")
            }
          }
        })
      } else {
        fetch(v.versionLink).then(vv => vv.json()).then(vv => {
          v.version = JSON.parse(atob(vv.content)).version
        })
      }
    }
  }
})
</script>


<style>
</style>
