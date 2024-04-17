<script setup>
    import TabBar from '../components/TabBar.vue'
    import { QrcodeStream } from 'vue-qrcode-reader';
</script>

<script>
export default {
    data() {
        return {
            error: '',
        }
    },

    components: { QrcodeStream },
    methods: {
        onInit(promise) {
            try {
                const {capabilities} = await promise;
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                this.error = 'user denied camera access permission';
                } else if (error.name === 'NotFoundError') {
                // no suitable camera device installed
                } else if (error.name === 'NotSupportedError') {
                // page is not served over HTTPS (or localhost)
                } else if (error.name === 'NotReadableError') {
                // maybe camera is already in use
                } else if (error.name === 'OverconstrainedError') {
                // did you request the front camera although there is none?
                } else if (error.name === 'StreamApiNotSupportedError') {
                // browser seems to be lacking features
                }
            }
        }
    }
}
</script>

<template>
    <div class="base base-container">
        <h3>scan the qr code</h3>
        <div class="container">
            <div class="flex-image-qr image scan-container">
                <qrcode-stream @init="onInit"></qrcode-stream>
            </div>
            <TabBar />
        </div>
    </div>
</template>

<style scoped>
    .base-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: calc(1rem + 1vw);
    }

    .container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: calc(1rem + 1vw);
        gap: calc(1rem + 1vw);
    }

    .flex-image-qr {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-background-color);
        border-radius: calc(1.5rem + 0.5vw);
        width: 100%;
        height: 100%;
    }
</style>