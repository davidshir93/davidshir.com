<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-form>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field
                label="Regular"
                class="pink"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field
                label="Regular"
                placeholder="Placeholder"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field
                label="Solo"
                solo
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field
                label="Solo"
                placeholder="Placeholder"
                solo
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field
                label="Filled"
                filled
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field
                label="Filled"
                placeholder="Placeholder"
                id="input-orange"
                filled
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field
                label="Outlined"
                outlined
                id="input-orange"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field
                label="Outlined"
                placeholder="Placeholder"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="12"
            >
              <v-btn
                elevation="10"
                rounded
                class="specialCta"
              >I'm so exited!</v-btn>
              <v-btn
                class="ma-2"
                :loading="loading"
                :disabled="loading"
                color="secondary"
                @click="loader = 'loading'"
              >
              Accept Terms
            </v-btn>
              <div class="text-center">
                <v-btn
                  class="ma-2"
                  :loading="loading"
                  :disabled="loading"
                  color="secondary"
                  @click="loader = 'loading'"
                >
                  Accept Terms
                </v-btn>
                <v-btn
                  class="ma-2 shinyCta"
                  :loading="loading"
                  :disabled="loading"
                  color="secondary"
                  @click="loader = 'loading'"
                > <div class="shinyChild">

                  Accept Terms Shine!
                </div>
                </v-btn>

                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="ma-2 white--text"
                  @click="loader = 'loading3'"
                >
                  Upload
                  <v-icon
                    right
                    dark
                  >
                    mdi-cloud-upload
                  </v-icon>
                </v-btn>

                <v-btn
                  class="ma-2"
                  :loading="loading2"
                  :disabled="loading2"
                  color="success"
                  @click="loader = 'loading2'"
                >
                  Custom Loader
                  <template v-slot:loader>
                    <span>Loading...</span>
                  </template>
                </v-btn>

                <v-btn
                  class="ma-2"
                  :loading="loading4"
                  :disabled="loading4"
                  color="info"
                  @click="loader = 'loading4'"
                >
                  Icon Loader
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon light>mdi-cached</v-icon>
                    </span>
                  </template>
                </v-btn>

                <v-btn
                  :loading="loading5"
                  :disabled="loading5"
                  color="blue-grey"
                  class="ma-2 white--text"
                  fab
                  @click="loader = 'loading5'"
                >
                  <v-icon dark>
                    mdi-cloud-upload
                  </v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
};
</script>

<style>
  @keyframes attentionBackgroundCta {
    0% {
      background-position: left bottom;
      transform: scale(1) rotate(0deg);
    }
    15% {
      transform: scale(1) rotate(0deg);
    }
    35% {
      transform: scale(1.1) rotate(15deg);
    }
    40% {
      transform: scale(0.95) rotate(-3deg);
    }
    43% {
      transform: scale(1.01) rotate(0deg);
    }
    44% {
      transform: scale(1) rotate(0deg);
    }
    100% {
      background-position: right bottom;
    }
}
.specialCta {
    margin-right: 16px;
    background: linear-gradient(90deg,
      rgba(255,255,255,1) 0%,
      rgba(255,255,255,1) 10%,
      rgba(252,133,173,1) 10%,
      rgba(252,133,173,1) 17%,
      rgba(133,166,252,1) 17%,
      rgba(133,166,252,1) 25%,
      rgba(255,223,90,1) 25%,
      rgba(255,223,90,1) 32%,
      rgba(11,209,139,1) 32%,
      rgba(11,209,139,1) 39%,
      rgba(255,255,255,1) 39%,
      rgba(255,255,255,1) 100%);
    background-size: 2500% 100%;
    background-position: left bottom;
    animation: attentionBackgroundCta 5s cubic-bezier(.49,0,.41,1) infinite;
    transition: all 200ms cubic-bezier(.49,0,.41,1);
  }

  .specialCta:hover {
    background: #FFF5D8;
  }

  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
    color: white;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

.v-btn__loader {
  background-color: red !important;
  border-radius: 4px;
}

.v-btn__loader {
  background-color: red !important;
  border-radius: 4px;
}

.shinyCta .v-btn__loader {
  background-color: blue !important;
  border-radius: 4px;
}

.v-progress-circular {
  color: white;
}

.v-input--is-focused.v-text-field--is-booted.primary--text fieldset{
  background-color: #F4F5FD;
}

#input-orange{
  color: orange;
}

.theme--light.v-text-field--filled>.v-input__control>.v-input__slot {
  background: white !important;
}

.theme--light.v-input--is-focused.v-text-field--filled>.v-input__control>.v-input__slot {
  background: red !important;
}

.shinyCta {
  overflow: hidden!important;
  position: relative;
}
.shinyCta:after {
  content: "";
  z-index: 10;
  position: absolute;
  height: 500%;
  width: 400%;
  top: -420%;
  left: -420%;
  overflow: hidden;
  background: linear-gradient(transparent 0%, rgba(255, 255, 255, 0.25) 35%, rgba(255, 255, 255, 0.65) 50%, rgba(255, 255, 255, 0.25) 65%, transparent 100%);
  transform: rotate(-45deg);
  animation: shine 3s ease-out infinite forwards;
}
  .shinyChild {
    animation: shine 3s ease-out forwards;
  }

  @keyframes shine {
    0% {
      top: -420%;
      left: -420%;
    }
    100% {
      left: 320%;
      top: 320%;
    }
  }


</style>