<template>
  <component :is="name" />
</template>

<script>
import arrow_down from "../../svgs/arrow_down";
import coding from "../../svgs/coding";
import comp from "../../svgs/comp";
import emerald from "../../svgs/emerald";
import gift from "../../svgs/gift";
import layer from "../../svgs/layer";
import performance from "../../svgs/performance";
import team from "../../svgs/team";
import timing from "../../svgs/timing";
import training from "../../svgs/training";
import training_2 from "../../svgs/training_2";
import training_3 from "../../svgs/training_3";
import transformation from "../../svgs/transformation";
import transformation_2 from "../../svgs/transformation_2";
import user from "../../svgs/user";
import ux from "../../svgs/ux";
export default {
  components: {
    arrow_down,
    coding,
    comp,
    emerald,
    gift,
    layer,
    performance,
    team,
    timing,
    training,
    training_2,
    training_3,
    transformation,
    transformation_2,
    user,
    ux,
  },
  props: {
    name: {
      type: String,
      required: true,
      validator: function(value) {
        return (
          [
            "arrow_down",
            "coding",
            "comp",
            "emerald",
            "gift",
            "layer",
            "performance",
            "team",
            "timing",
            "training",
            "training_2",
            "training_3",
            "transformation",
            "transformation_2",
            "user",
            "ux",
          ].indexOf(value) !== -1
        );
      },
    },
  },
};
</script>

<docs>
<br />
<h5> Icones illus </h5>
<br />
<a-icon name="arrow_down"  style="width: 32px;"/>
<a-icon name="comp"  style="width: 32px;"/>
<a-icon name="gift"  style="width: 32px;"/>
<a-icon name="layer"  style="width: 32px;"/>
<a-icon name="team"  style="width: 32px;"/>
<a-icon name="user"  style="width: 32px;"/>
<a-icon name="timing"  style="width: 32px;"/>
<br />
<h5> Icones round </h5>
<br />
<a-icon name="emerald"  style="width: 32px;"/>

<br />
<h5> Icones Interface </h5>
<br />
<a-icon name="coding"  style="width: 96px;"/>
<a-icon name="performance"  style="width: 96px;"/>
<a-icon name="training"  style="width: 96px;"/>
<a-icon name="training_2"  style="width: 96px;"/>
<a-icon name="training_3"  style="width: 96px;"/>
<a-icon name="transformation"  style="width: 96px;"/>
<a-icon name="transformation_2"  style="width: 96px;"/>
<a-icon name="ux"  style="width: 96px;"/>

```vue live

// you can easy override the width
// interface icons
<a-icon name="arrow_down"  style="width: 32px;"/>
<a-icon name="comp"  style="width: 32px;"/>
<a-icon name="gift"  style="width: 32px;"/>
<a-icon name="layer"  style="width: 32px;"/>
<a-icon name="team"  style="width: 32px;"/>
<a-icon name="user"  style="width: 32px;"/>
<a-icon name="timing"  style="width: 32px;"/>

// basic
<a-icon name="emerald"  style="width: 32px;"/>

// normal icons
<a-icon name="coding"  style="width: 96px;"/>
<a-icon name="performance"  style="width: 96px;"/>
<a-icon name="training"  style="width: 96px;"/>
<a-icon name="training_2"  style="width: 96px;"/>
<a-icon name="training_3"  style="width: 96px;"/>
<a-icon name="transformation"  style="width: 96px;"/>
<a-icon name="transformation_2"  style="width: 96px;"/>
<a-icon name="ux"  style="width: 96px;"/>

```
</docs>
