<template>
<header id="header" class="fl">
  <div class="header_inform fl">
    <router-link class="header_inform__logo" to="/"><img src="@/assets/header/logo.png" alt="logo"></router-link>
    <div class="header_inform__slogan">World's first affordable airsharing</div>
  </div>
  <div class="header_ui fl">
    <button class="theme_switch fl"><img src="@/assets/header/night.png" alt=""><span>Night mod</span></button>
    <div class="header_profile_actions fl">
      <button class="header_profile_actions_message"><img src="@/assets/header/message.png" alt=""></button>
      <button class="header_profile_actions_notification"><img src="@/assets/header/notification.png" alt=""></button>
    </div>
    <div class="header_profile fl">
      <div class="header_profile__name">Bessie Cooper</div>
      <div class="header_profile__img"><img src="@/assets/header/user_photo.png" alt=""></div>
    </div>
  </div>

</header>
</template>

<style>
/*
** Header
*/

#header {
  justify-content: space-between;
  height: 56px;
  width: 100%;
  margin-bottom: 39px;
}

@media screen and (max-width: 640px) {
  #header {
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    margin-bottom: 8px;
  }

  #header button {
    height: 22px;
  }

  #header button img {
    height: 100%;
  }
}

/* header inform */

.header_inform__slogan {
  margin: -3px 0 0 15%;
  white-space: nowrap;
}

@media screen and (max-width: 940px) {
  .header_inform__slogan {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  .header_inform__logo {
    height: 32px;
  }

  .header_inform__logo img {
    height: 100%;
  }
}

/* header header_ui */

.header_ui {
  justify-content: space-between;
  max-width: 544px;
  width: 100%;
}

@media screen and (max-width: 1439px) {
  .header_ui {
    max-width: auto;
    width: auto;
  }
}

/* theme_switch */

.theme_switch {
  color: #677b8f;
  font-size: 16px;
  letter-spacing: 1.1px;
}

.theme_switch img {
  margin: 0 17px 0 0;
}

@media screen and (max-width: 1024px) {
  .theme_switch {
    padding: 0;
  }

  .theme_switch span {
    display: none;
  }

  .theme_switch img {
    margin: 0 6px 0 0;
    height: 24px;
  }
}

/* header_profile_actions */

.header_profile_actions {
  position: relative;
  left: 21px;
}

.header_profile_actions>button {
  margin: 6px;
}

@media screen and (max-width: 1439px) {
  .header_profile_actions {
    left: auto;
  }
}

@media screen and (max-width: 640px) {
  .header_profile_actions>button {
    margin: 2px;
  }
}

/* header profile */

.header_profile__name {
  font-weight: bold;
  font-size: 16px;
  margin: -3px 16px 0 0;
}

.header_profile__img {
  border-radius: 50%;
  overflow: hidden;
}

.header_profile__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 640px) {
  .header_profile {
    margin-left: 17px;
  }

  .header_profile__name {
    display: none;
  }

  .header_profile__img {
    height: 32px;
    width: 32px;
  }
}

/*
** Header end
*/
</style>

<script>
export default {
  name: "Header",
}
</script>
