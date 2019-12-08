<template>
  <Layout>
    <About/>
    <WhatIdo />
    <Skills/>
    <Projects/>
    <ContactForm/>
  </Layout>
</template>

<script>
import About from '~/components/About';
import WhatIdo from '~/components/WhatIdo';
import ContactForm from '~/components/ContactForm';

import Skills from '~/components/Skills';
import Projects from '~/components/Projects';

export default {
  components: {
    About,
    WhatIdo,
    Skills,
    Projects,
    ContactForm
  }
}
</script>