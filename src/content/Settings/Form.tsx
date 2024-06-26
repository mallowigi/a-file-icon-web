import styled from '@emotion/styled';
import { useFab, useIconColor, useIconPacks, useIconSize, useMonochrome } from '~common/selectors';
import { IconPacks } from '~common/Components/IconPacks';
import { Checkbox } from '~common/Components/Checkbox';
import { ColorPicker } from '~common/Components/ColorPicker';
import { Range } from '~common/Components/Range';

const Section = styled.div`
  display: block;
  max-width: 20rem;
  text-align: left;
`;

const Form = () => {
  const { localMonochrome, setIsMonochrome } = useMonochrome();
  const { localIconSize, setIconSize } = useIconSize();
  const { localShowFab, setShowFab } = useFab();
  const { accentColor, setAccentColor } = useIconColor();
  const { iconPacks, setIconPacks } = useIconPacks();

  return (
    <>
      <Section>
        <Checkbox
          isChecked={localShowFab ?? true}
          text="Show Settings Button"
          id="showFab"
          setChecked={setShowFab}
        />
      </Section>

      <Section>
        <Checkbox
          isChecked={localMonochrome ?? false}
          text="Monochrome"
          id="isMonochrome"
          setChecked={setIsMonochrome}
        />
      </Section>

      <Section>
        <Range
          id="iconSize"
          label="Icon Size"
          value={localIconSize ?? 20}
          setValue={setIconSize}
        />
      </Section>

      <Section>
        <ColorPicker
          value={accentColor ?? null}
          setValue={setAccentColor}
          text="Folder Icon Color"
          id="iconColor"
        />
      </Section>

      <Section>
        <label>Icon Packs:</label>
        <IconPacks
          config={iconPacks}
          setConfig={setIconPacks}
        />
      </Section>
    </>
  );
};

export default Form;
