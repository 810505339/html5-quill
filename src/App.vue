<script setup lang='ts'>
import htmlEditButton from 'quill-html-edit-button'

const editorValue = ref(`
 <img src="https://user-images.githubusercontent.com/11247099/111864893-a457fd00-899e-11eb-9f05-f4b88987541d.png">Scientist Tu Youyou, a 2015 Nobel Prize laureate, does research in her lab in Beijing. [Photo/Xinhua]
      <p>President Xi Jinking said on Monday that China stands ready to make greater contributions to the health of humanity by enhancing public health exchanges and cooperation with the international community.</p>
`)

const modules = {
  name: 'htmlEditButton',
  module: htmlEditButton,
  options: {
    debug: true,
  },

}
const hanleSave = () => {
  alert(editorValue.value)
}
</script>

<template>
  <main>
    <QuillEditor
      ref="editor" v-model:content="editorValue" :modules="modules" theme="snow" content-type="html"
      toolbar="full"
    />
    <div text="center">
      <button btn @click="hanleSave">
        保存
      </button>
    </div>
  </main>
</template>
