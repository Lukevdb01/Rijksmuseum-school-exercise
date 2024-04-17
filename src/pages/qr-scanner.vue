<script setup>
    import TabBar from '../components/TabBar.vue'
    import { QrcodeStream } from 'vue-qrcode-reader';
</script>

<template>
    <div class="base base-container">
        <h3>scan the qr code</h3>
        <div class="container">
            <p v-if="error" class="error">{{ error }}</p>
            <div class="base flex-image-qr">
                <qrcode-stream @error="onError" @detect="onDetect" @decode="onDecode" class="qr-stream"></qrcode-stream>
            </div>
            <TabBar />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: '',
            content: '',
            result: '',
        }
    },

    components: { QrcodeStream },
    methods: {
        async onError(promise) {
            try {
                const {capabilities} = await promise
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    this.error = 'user denied camera access permission';
                } else if (error.name === 'NotFoundError') {
                    this.error = 'no suitable camera device installed';
                } else if (error.name === 'NotSupportedError') {
                    this.error = 'page is not served over HTTPS (or localhost)';
                } else if (error.name === 'NotReadableError') {
                    this.error = 'maybe camera is already in use';
                } else if (error.name === 'OverconstrainedError') {
                    this.error = 'did you request the front camera although there is none?';
                } else if (error.name === 'StreamApiNotSupportedError') {
                    this.error = 'browser seems to be lacking features';
                }
            }
        },
        onDetect(codes) {
            this.result = JSON.stringify(codes.map((code) => code.rawValue));
        },
        onDecode(content) {
            console.log(content);
            this.content = content;
        },
    }
}
</script>

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
        color: black;
    }

    .flex-image-qr {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-background-color);
        border-radius: calc(1.5rem + 0.5vw);
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .qr-stream {
        width: 100%;
        height: 100%;
    }
</style>