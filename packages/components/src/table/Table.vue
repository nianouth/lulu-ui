<template>
  <div class="lu-table-wrapper">
    <table class="lu-table" :class="{ 'lu-table--striped': striped, 'lu-table--bordered': bordered }">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" :style="{ width: col.width }">
            {{ col.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in data" :key="idx">
          <td v-for="col in columns" :key="col.key">
            <slot :name="col.key" :row="row" :index="idx">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="!data.length">
          <td :colspan="columns.length" class="lu-table__empty">暂无数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface TableColumn {
  key: string
  title: string
  width?: string
}

export default defineComponent({
  name: 'LuTable',
  props: {
    columns: { type: Array as () => TableColumn[], required: true },
    data: { type: Array as () => Record<string, any>[], default: () => [] },
    striped: Boolean,
    bordered: Boolean,
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-table-wrapper {
  width: 100%;
  overflow-x: auto;
  border: 1px solid $border-color;
  border-radius: $radius-md;
}

.lu-table {
  width: 100%;
  border-collapse: collapse;
  font-size: $font-size;
  font-family: $font-family;

  th, td {
    padding: 10px 16px;
    text-align: left;
  }

  th {
    background: $bg-page;
    font-weight: 600;
    color: $text-primary;
    border-bottom: 1px solid $border-color;
    white-space: nowrap;
  }

  td {
    color: $text-regular;
    border-bottom: 1px solid $border-light;
  }

  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover td { background: rgba($primary, 0.02); }

  &--striped tbody tr:nth-child(even) td { background: $bg-page; }
  &--bordered { th, td { border: 1px solid $border-color; } }

  &__empty { text-align: center !important; color: $text-secondary; padding: 32px !important; }
}
</style>
