const { createApp } = Vue;

        createApp({
            data() {
                return {
                    newNote: '',
                    notes: []
                };
            },
            methods: {
                addNote() {
                    if (this.newNote.trim() !== '') {
                        this.notes.push(this.newNote);
                        this.newNote = '';
                    }
                }
            }
        }).mount('#app');