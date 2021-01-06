<template>
  <div class="mx-auto leading-8 w-4/5 lg:w-2/3">
    <section id="profile">
      <page-header text="About me" />
      <HelloIcon
        class="mb-8 mt-8 mx-auto"
        width="128px"
        height="128px"
        aria-hidden="true"
        title="Hi There!"
      />

      <p class="mb-4">
        My name is <b>Bruno Paz</b> and I am an <b>Web Engineer</b> specialized
        in <b>PHP/Symfony</b>, and <b>Golang</b> with also some professional
        experience with <b>Java</b> and basic knowledge of <b>NodeJS</b> and
        <b>Typescript</b>.
      </p>

      <p class="mb-4">
        I have been working mostly on Backend, but I have great interest in all
        the areas of the Software Development Lifecycle, in particular
        <b>CI/CD</b>, <b>Code quality</b> and <b>Engineering Practices.</b>
      </p>

      <p class="mb-4">
        I identify myself with the
        <a
          href="https://medium.com/quick-code/what-it-is-a-t-shaped-developer-and-why-you-should-be-one-e87293e4bb84"
          target="_blank"
          >T-Shaped Developer</a
        >
        mindset, and I direct my learnings for that, so I am capable of
        launching a product, "from idea to production".
      </p>

      <p class="mb-4">
        Despite my personal preferences or experience, I always try to use the
        most appropriate technology for the job, even if that implies getting
        out of my conform zone.
      </p>

      <p class="mb-4">
        I am a fast learner and I don´t believe in silver bullets or in use one
        tech for everything. Context is very important and I try to balance
        pragmatism, with the normal desire to experiment with some new tech.
        Sometimes using an older but stable technology is a much better option
        that experimenting with the latest hype tech.
      </p>
    </section>

    <section id="work">
      <WorkIcon
        class="mb-8 mt-8 mx-auto"
        width="128px"
        height="128px"
        aria-hidden="true"
        title="Work Timeline"
      />
      <p>
        I studied
        <b
          >Computer Science at
          <a href="https://www.dei.isep.ipp.pt/" target="_blank">ISEP</a></b
        >
        were I graduated in 2010.
      </p>

      <p class="mb-4">
        This was the year I also start working at my first company, <b>ueb</b>,
        a small startup, developing Web solutions for small busineses (ex:
        <a href="https://www.uebbill.pt/" target="_blank">uebbill</a>) and a
        customer satisfaction platform for the Automobile area, as well as
        websites for specific clients, like
        <a href="https://sosconsultoria.pt/" target="_blank">SOS Consultoria</a>
        or <a href="https://sporjovem.pt/" target="_blank">Sporjovem</a>.
      </p>

      <p class="mb-4">
        As we were very few developers and with lots of challenging projects, I
        ended up having to do a bit of everything from Frontend, Backend to
        Server management, so it was an incredible learning experience.
      </p>

      <hr class="flex w-1/2 mt-12 mb-12 border-blue-300 mx-auto" />
      <p>
        In 2014, it was time for a new challenge and I joined
        <b
          ><a href="https://group.jumia.com/" target="_blank">Jumia</a> Porto
          Tech Center.</b
        >
      </p>

      <p class="mb-4">
        Jumia is one of the biggest E-Commerce solutions in Africa with
        operations in more than 10 countries. I start at the Jumia Travel
        (formelly known as Jovago) project, with the goal to make it the biggest
        Hotel Booking platform in Africa.
      </p>

      <p class="mb-4">
        This was a completely different reality, from what I was used to. From
        less than 5 developers to a team around 30. Also the scale was much
        bigger as the application was serving thousands of users. I learned a
        ton!
      </p>

      <hr class="flex w-1/2 mt-12 mb-12 border-blue-300 mx-auto" />

      <p class="mb-4">
        Later, in 2017, I started working on a new Jumia project, Jumia Flights,
        an "extension" of Jumia Travel to the Flights Business. While my
        teammates were all prevously in Travel, it was a completely new context,
        as we had to build and architech an entire new application from scratch,
        in a very very complex Flights business.
      </p>

      <p class="mb-4">
        In less than an year, we maanaged to release the first version. Using
        some newer technologies like VueJS in frontend and Go in backend,
        together with a mature Java core and a Microservices oriented
        architecture, we managed to build a really cool and scalable product.
        The project was sold to a partner, some months later.
      </p>

      <hr class="flex w-1/2 mt-12 mb-12 border-blue-300 mx-auto" />

      <p class="mb-4">
        After Flights, a new short term project, J-Force, an internal Jumia
        application to manage their agents on the field, before starting on
        <a href="https://pay.jumia.com.ng/" target="_blank">JumiaPay</a> in
        2019, to build the new
        <a href="https://business-pay.jumia.com.ng/" target="_blank"
          >Business</a
        >
        application, where the Merchants can see the Purchases in their shops,
        manage refunds, withdraw money to their Bank accounts etc.
      </p>
    </section>

    <section id="hobbies">
      <HobbiesIcon
        class="mb-8 mt-8 mx-auto"
        width="128px"
        height="128px"
        aria-hidden="true"
        title="My Hobbies"
      />

      <p>
        Besides Programming, Sports, TV Shows, Jogging Outside and dinners with
        Friends are my main hobbies.
      </p>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/shared/PageHeader'
import HelloIcon from '~/assets/icons/wave.svg?inline'
import HobbiesIcon from '~/assets/icons/party.svg?inline'
import WorkIcon from '~/assets/icons/briefcase.svg?inline'
export default {
  components: { PageHeader, HelloIcon, HobbiesIcon, WorkIcon },
  head() {
    return {
      title: 'About | Bruno Paz',
    }
  },
}
</script>
