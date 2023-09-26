<template>
    <v-dialog
    v-model="dialogs.dueDate"
    persistent
    width="auto"
    min-width="360"
    >
        <v-card>
            <v-date-picker
            v-model="date"
            @click:cancel="dialogs.dueDate = false"
            @click:save="closeDialog"
            @update:modelValue="saveDate"
            color="primary"
            ok-text="Save"
            format="keyboardDate"
            title=""
            />
        </v-card>
    </v-dialog>
</template>
  
<script setup>
    import { VDatePicker } from 'vuetify/labs/VDatePicker'
</script>

<script>
    export default {
        props: [
            'task',
            'dialogs'
        ],
        data() {
            return {
                date: null
            }
        },
        methods: {
            saveDate() {
                console.log(this.date);
                let payload = {
                    id: this.task.id,
                    dueDate: this.date
                };
                console.log('payload: ' + payload.id + ' + ' + payload.dueDate);
                this.$store.dispatch('updateTaskDueDate', payload);
            },
            closeDialog() {
                this.dialogs.dueDate = false;
            }
        },
        mounted() {
            if(this.task.dueDate) {
                this.date = this.task.dueDate;
            }
        }
    }
</script>