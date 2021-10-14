export default `
<style>
    input {
        transform: var(--transform);
    }
</style>
<input id="checkbox" type="checkbox" />
<label for="checkbox"><slot></slot></label>
`;