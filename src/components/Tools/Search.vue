<template>
    <v-hover>
        <v-text-field
            :model-value="$store.state.search"
            @input="$store.commit('setSearch', $event.target.value)"
            @focus="searchClosed = false"
            @blur="searchClosed = true"
            :disabled="$store.state.sorting"
            class="expanding-search"
            :class="{ 'closed' : searchClosed && !$store.state.search }"
            rounded="lg"
            placeholder="Search"
            variant="filled"
            density="compact"
            prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
    </v-hover>
</template>

<script>
export default {
    data() {
        return {
            searchClosed: true,
        }
    }
}
</script>

<style>
    .expanding-search {
        max-width: 300px;
        transition: max-width 0.5s;
    }

    .expanding-search .v-field__outline::before, .expanding-search .v-field__outline::after {
        border-color: transparent !important;
    }

    .v-field__prepend-inner {
        cursor: pointer !important;
    }

    .closed {
        max-width: 45px;
    }

    .closed .v-input__slot {
        background-color: transparent !important;
    }

    .closed .v-field__overlay {
        display: none;
    }
</style>