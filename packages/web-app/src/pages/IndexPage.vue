<template>
    <q-page class="column items-center q-pa-md">
        <div class="header-container q-mb-lg">
            <div class="title-wrapper">
                <div class="text-h4 text-primary">SHA Hash Generator</div>
            </div>
            <q-btn
                class="dark-mode-toggle"
                flat
                :icon="darkMode ? 'light_mode' : 'dark_mode'"
                outlined
                round
                @click="toggleDarkMode"
            >
                <q-tooltip
                    >Toggle to {{ darkMode ? 'light' : 'dark' }} mode</q-tooltip
                >
            </q-btn>
        </div>

        <div class="form-container q-gutter-y-md">
            <q-card bordered class="q-pa-md" flat>
                <div class="text-subtitle1 q-mb-sm">Select Algorithm</div>
                <q-select
                    v-model="alg"
                    class="q-mb-md"
                    emit-value
                    filled
                    map-options
                    :options="options"
                />

                <div class="text-subtitle1 q-mb-sm">Enter Text</div>
                <q-input
                    v-model="input"
                    filled
                    placeholder="Type or paste text here..."
                    rows="5"
                    type="textarea"
                />
            </q-card>

            <q-card v-if="input" bordered class="q-pa-md" flat>
                <div class="text-subtitle1 q-mb-sm">
                    Generated Hash Digest (Base64 Encoded)
                </div>
                <div class="result-container">
                    <q-spinner
                        v-if="isCalculating"
                        color="primary"
                        size="2em"
                    />
                    <q-input
                        v-else-if="digest"
                        v-model="digest"
                        class="digest-value"
                        filled
                        readonly
                    >
                        <template #append>
                            <q-btn
                                dense
                                :disable="!digest"
                                flat
                                icon="content_copy"
                                round
                                @click="copyToClipboard"
                            >
                                <q-tooltip class="text-caption"
                                    >Copy to clipboard</q-tooltip
                                >
                            </q-btn>
                        </template>
                    </q-input>
                </div>
            </q-card>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { Notify } from 'quasar';
import { getShaDigest } from 'src/utils/getShaDigest';
import { useDarkMode } from 'src/composables/useDarkMode';

const { darkMode, toggleDarkMode } = useDarkMode();

const input = ref('');
const alg = ref<'sha256' | 'sha512'>('sha256');
const options = [
    { label: 'SHA-256', value: 'sha256' },
    { label: 'SHA-512', value: 'sha512' },
] as const;

const digestValue = ref<string | null>(null);
const isCalculating = ref(false);

watchEffect(() => {
    if (!input.value) {
        digestValue.value = null;
        return;
    }

    isCalculating.value = true;
    getShaDigest(alg.value, input.value)
        .then((digest) => {
            digestValue.value = digest;
        })
        .catch(() => {})
        .finally(() => {
            isCalculating.value = false;
        });
});

const digest = computed(() => {
    return digestValue.value ? `${alg.value}-${digestValue.value}` : null;
});

const copyToClipboard = () => {
    if (!digest.value) return;

    navigator.clipboard
        .writeText(digest.value)
        .then(() => {
            Notify.create({
                color: 'positive',
                message: 'Hash digest copied to clipboard',
                icon: 'check',
                timeout: 2000,
            });
        })
        .catch(() => {
            Notify.create({
                color: 'negative',
                message: 'Failed to copy',
                icon: 'error',
            });
        });
};
</script>

<style scoped>
.digest-value {
    font-family: monospace;
    word-break: break-all;
}

.result-container {
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.form-container {
    width: 100%;
    max-width: 600px;
}

.header-container {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 600px;
    justify-content: center;
    align-items: center;
}

.title-wrapper {
    text-align: center;
}

.dark-mode-toggle {
    position: absolute;
    right: 0;
}
</style>
