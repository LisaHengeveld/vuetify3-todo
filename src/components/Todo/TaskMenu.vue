<template>
    <div>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn flat class="btn-transparent text-primary" icon="mdi-dots-vertical" v-bind="props" :ripple="false"></v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="handleClick(index)"
                >
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <dialog-edit
          v-if="dialogs.edit"
          :dialogs="dialogs"
          :task="task"
        />

        <dialog-due-date
          v-if="dialogs.dueDate"
          :dialogs="dialogs"
          :task="task"
        />

        <dialog-delete
          v-if="dialogs.delete"
          :dialogs="dialogs"
          :task="task"
        />
    </div>
</template>

<script>
import DialogEdit from '@/components/Todo/Dialogs/DialogEdit.vue';
import DialogDueDate from '@/components/Todo/Dialogs/DialogDueDate.vue';
import DialogDelete from '@/components/Todo/Dialogs/DialogDelete.vue';

export default {
    props: ['task'],
    data: () => ({
        dialogs: {
            edit: false,
            dueDate: false,
            delete: false
        },
        items: [
            {
                title: 'Edit',
                icon: 'mdi-pencil',
                click() {
                    this.dialogs.edit = true;
                }
            },
            {
                title: 'Due date',
                icon: 'mdi-calendar',
                click() {
                    this.dialogs.dueDate = true;
                }
            },
            {
                title: 'Delete',
                icon: 'mdi-delete',
                click() {
                    this.dialogs.delete = true;
                }
            },
            {
                title: 'Sort',
                icon: 'mdi-drag-horizontal-variant',
                click() {
                    if(!this.$store.state.search) {
                        this.$store.commit('toggleSorting');
                    } else {
                        this.$store.commit('showSnackbar', 'Can not sort while searching!')
                    }
                    // this.$store.commit('toggleSorting');
                }
            }
        ],
    }),
    methods: {
        handleClick(index) {
            this.items[index].click.call(this);
        }
    },
    components: {
        "dialog-edit": DialogEdit,
        "dialog-due-date": DialogDueDate,
        "dialog-delete": DialogDelete      
    }
}
</script>

<style>
.btn-transparent {
    background: transparent;
}

.v-btn__overlay {
    display: none;
}
</style>