import { getAssociation, getFileIcon, getFileIconName } from '~associations/files';
import { removeSize, wrapSvg } from '~associations/utils';
import { getFolderAssociation, getFolderIcon, getFolderIconName } from '~associations/folders';
import { $, $$, elementExists } from 'select-dom';
import * as debounce from 'lodash.debounce';
import { localIconPaths } from '~common/storage';

export type IconProvider = {
  dirClass: string;
  fileClass: string;
  iconClass: string;
  itemsClass: string;
  nameClass: string;
  svgClass?: string;
  injectIcons: () => {};
}

export abstract class AbstractProvider implements IconProvider {
  constructor(readonly target: ParentNode) {
  }

  abstract get itemsClass(): string;

  abstract get fileClass(): string;

  abstract get dirClass(): string;

  abstract get nameClass(): string;

  abstract get iconClass(): string;

  abstract get svgClass(): string | undefined;

  abstract get styles(): string;

  #injectIcons = async () => {
    const $items = $$(this.itemsClass, this.target);
    const isDark = $('html').dataset['colorMode'] === 'dark';
    const iconPacks = await localIconPaths();

    $items.forEach(async (item) => {
      // Skip icon if already processed
      // if (item.dataset['processed'] === 'true') {
      //   return;
      // }

      const isFile = elementExists(this.fileClass, item);
      const isDir = elementExists(this.dirClass, item);
      const isSvg = elementExists(this.svgClass, item);

      const name = $(this.nameClass, item)?.textContent?.trim();
      const $icon = $(this.iconClass, item);
      const $fallbackIcon = $('.atomIcon', item);

      if (isDir) {
        let assoc = getFolderAssociation(name);
        let className = getFolderIconName(assoc);

        const svg = getFolderIcon(className);
        const icon = await wrapSvg(svg, this.styles, `octicon ${this.dirClass.replace('.', '')}`);

        if ($icon?.parentNode) {
          $icon.outerHTML = removeSize(icon);
        }
      } else {
        let assoc = getAssociation(name, iconPacks);
        let className = getFileIconName(assoc);

        const svg = getFileIcon(className, isDark);
        const icon = await wrapSvg(svg, this.styles, `octicon`);

        if ($icon?.parentNode) {
          $icon.outerHTML = removeSize(icon);
        } else if ($fallbackIcon) {
          $fallbackIcon.outerHTML = removeSize(icon);
        }
      }

      // Set a flag to avoid processing the icon again later
      item.dataset['processed'] = 'true';
    });
  };

  injectIcons = debounce(this.#injectIcons, 1000);
}
