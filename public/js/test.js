<script>
let elemento = new Vue({
        el: '.app',
        data: {
            menu:0,
            modalGeneral: 0,
            titleModal: '',
            messageModal: '',
            modalDeparture: 0,
            titleDeparture: '',
            errorTitleDeparture: 0
        },
        methods: {
            openModal(type, action, data = []) {
                switch (type) {
                    case "departure":
                    {
                        switch (action) {
                            case 'create':
                            {
                                this.modalGeneral = 1;
                                this.titleModal = 'Creación de Departamento';
                                this.messageModal = 'Ingrese el titulo del departamento';
                                this.modalDeparture = 1;
                                this.titleDeparture = '';
                                this.errorTitleDeparture = 0;
                                break;
                            }
                            case 'update':
                            {
                                break;
                            }
                            case 'delete':
                            {
                                break;
                            }

                        }
                        break;
                    }
                    case "position":
                    {
                        switch (action) {
                            case 'create':
                            {

                                break;
                            }
                            case 'update':
                            {
                                break;
                            }
                            case 'delete':
                            {
                                break;
                            }

                        }
                        break;
                    }
                    case "employee":
                    {
                        switch (action) {
                            case 'create':
                            {

                                break;
                            }
                            case 'update':
                            {
                                break;
                            }
                            case 'delete':
                            {
                                break;
                            }

                        }
                        break;
                    }
                }

            },
            closeModal() {
                this.modalGeneral = 0;
                this.titleModal = '';
                this.messageModal = '';
            },
            createDeparture() {
                if (this.titleDeparture == '') {
                    this.errorTitleDeparture = 1;
                    return;
                }

                let me = this;

                axios.post('{{route('departurecreate')}}', {
                    'title': this.titleDeparture
                })
            .then(function (response) {
                    me.titleDeparture = '';
                    me.errorTitleDeparture = 0;
                    me.modalDeparture = 0;
                    me.closeModal();
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
    })
    </script>