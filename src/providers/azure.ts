import { AbstractProvider } from '~providers/AbstractProvider';
import { getFolderAssociation, getFolderIcon, getFolderIconName } from '~associations/folders';
import { removeSize, wrapSvg } from '~associations/utils';
import { getAssociation, getFileIcon, getFileIconName } from '~associations/files';
import { $, $$, elementExists } from 'select-dom';

export class AzureProvider extends AbstractProvider {
  public get dirClass(): string {
    return '.repos-folder-icon';
  }

  public get fileClass(): string {
    return '.fabric-icon';
  }

  public get iconClass(): string {
    return '.fabric-icon:not(.bolt-tree-expand-button)';
  }

  public get itemsClass(): string {
    return '.bolt-table-row';
  }

  public get nameClass(): string {
    return '.bolt-table-cell-content .text-ellipsis';
  }

  public get svgClass(): string | undefined {
    return undefined;
  }

  public get styles(): string {
    return '';
  }

  injectIcons = async () => {
    const $items = $$(this.itemsClass, this.target);
    const isDark = $('html').dataset['colorMode'] === 'dark';

    $items.forEach(async (item, index) => {
      const isFile = elementExists(this.fileClass, item);
      const isDir = elementExists(this.dirClass, item);
      const isSvg = elementExists(this.svgClass, item);

      const name = $(this.nameClass, item)?.textContent?.trim();
      const $icon = $(this.iconClass, item);

      if (isDir) {
        let assoc = getFolderAssociation(name);
        let className = getFolderIconName(assoc);

        const svg = getFolderIcon(className);
        const icon = await wrapSvg(svg, this.styles, `octicon ${this.dirClass.replace('.', '')}`);

        const newSVG = document.createElement('span');
        newSVG.innerHTML = removeSize(icon);

        if ($icon.hasChildNodes()) {
          $icon.replaceChild(newSVG, $icon.firstChild);
        } else {
          $icon.appendChild(newSVG);
        }
      } else if (isFile || isSvg) {
        let assoc = await getAssociation(name);
        let className = getFileIconName(assoc);

        const svg = getFileIcon(className, isDark);
        const icon = await wrapSvg(svg, this.styles, `octicon ${this.fileClass}`);

        const newSVG = document.createElement('span');
        newSVG.innerHTML = removeSize(icon);

        if ($icon.hasChildNodes()) {
          $icon.replaceChild(newSVG, $icon.firstChild);
        } else {
          $icon.appendChild(newSVG);
        }
      }
    });
  };

}
