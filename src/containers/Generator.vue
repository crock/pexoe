<template>
	<div class="container is-fluid">
  		<h3 class="gen-step">Step 1 &mdash; Select your permissions format</h3>
		<div id="getstarted" class="columns">
			<format @select="onFormatSelect"></format>
			<div id="request" class="column is-one-third">
				<div class="info">
					<h4 class="plugin-name">Looking for something else?</h4>
					<a href="#" class="button is-info">Suggest a plugin</a>
				</div>
			</div>
		</div><!-- end #getstarted -->

		<h3 class="gen-step">Step 2 &mdash; Paste the contents of your permissions file or upload one</h3>
		<div id="conversion" class="columns">
			<div class="column">
				<permissions-input v-model.lazy="yaml" @input="onConvert"></permissions-input>
			</div>
			<div class="column">
				<div id="uploader">
					<div class="info">
						<h4 class="plugin-name">Upload File</h4>
						<a href="#" class="button is-info">Choose...</a>
					</div>
				</div>
			</div>
		</div><!-- end #conversion -->

		<h3 class="gen-step">Step 3 &mdash; Select your plugin(s)</h3>
		<div class="columns">
			<div class="column">
				<plugin-search @input="onSearch"></plugin-search>
			</div>
			<div class="column is-one-quarter">
				<plugin-filter></plugin-filter>
			</div>
		</div>
		<table>
			<thead>
				<tr>
					<td>Plugin Name</td>
				</tr>
				<tr>
					<td>Plugin Version</td>
				</tr>
				<tr>
					<td>Plugin Author</td>
				</tr>
				<tr>
					<td>Action</td>
				</tr>
			</thead>
			<plugin v-show="plugins"></plugin>
		</table>

		<h3 class="gen-step">Step 4 &mdash; Create &amp; Manage Groups</h3>

	</div><!-- end .container -->
</template>

<script>
import format from '../components/Format'
import perms from '../components/PermInput'
import search from '../components/PluginSearch'
import plugin from '../components/Plugin'
import filter from '../components/PluginFilter'

export default {
	data() {
		return {
			plugins: true,
			format: {},
			yaml: '',
			json: {},
			groups: {},
			groupNames: [],
			sorted: [],
			plugins: []
		}
	},
	components: {
		'format': format,
		'permissions-input': perms,
		'plugin-search': search,
		'plugin-filter': filter,
		'plugin': plugin
	},
	methods: {
		onFormatSelect: function (format) {
			this.format = format
		},
		onConvert: function (yaml) {
			this.sorted.length = 0;
			this.yaml = yaml.trim();
			this.json = YAML.parse(yaml.trim());
			for (var key in this.json.groups) {
				this.groups[key] = this.json.groups[key].options.rank;
				this.sorted.push([key, this.json.groups[key].options.rank])

				this.sorted.sort(function(a, b) {
					return a[1] - b[1];
				})
			}
			for (var index in this.sorted) {
				this.groupNames.push(this.sorted[index][0]);
			}
		},
		initPlugin: function (index) {
			if (index.disabled == true) {
				index.btnTxt = "Disabled"
			} else {
				index.btnTxt = "Select"
			}
		},
		onSearch: function (query) {
			console.log(query);
		}
	}
}
</script>

<style lang="scss">
.info {
  background: #2C2E36;
  color: #fff;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
}

.info a {
	width: 80%;
	margin: 10px auto 0 auto;
}

#conversion textarea {
	width: 100%;
}

.hidden {
  visibility: hidden;
}

.disabled {
  pointer-events: none;
  cursor: default;
}

.gen-step {
  text-align: left;
  color: #A8A8A8;
  font-size: 1.2rem;
  padding: 10px;
  display: block;
}

table thead {
  width: 100%;
  height: 40px;
  background: #2C2E36;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
</style>
