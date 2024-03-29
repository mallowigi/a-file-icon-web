import { GitHubCodeViewProvider } from '~providers/githubCodeView';
import select from 'select-dom';
import type { IconProvider } from '~providers/AbstractProvider';
import { GitHubSearchProvider } from '~providers/search';
import { GitHubProvider } from '~providers/github';
import { GitLabProvider } from '~providers/gitlab';
import { BitBucketProvider } from '~providers/bitbucket';
import { GiteeProvider } from '~providers/gitee';
import { PullRequestsProvider } from '~providers/pullRequests';
import { AzureProvider } from '~providers/azure';
import { GitHubCodeViewTreeProvider } from '~providers/githubCodeViewTree';

export const createProvider = (target: ParentNode): IconProvider => {
  if (window.location.hostname.includes('bitbucket')) {
    return new BitBucketProvider(target);
  }
  else if (window.location.hostname.includes('gitlab')) {
    return new GitLabProvider(target);
  }
  else if (window.location.hostname.includes('gitee')) {
    return new GiteeProvider(target);
  }
  else if (window.location.hostname.includes('azure') && select.exists('.repos-file-explorer-header')) {
    return new AzureProvider(target);
  }
    // else if (window.location.hostname.includes('codesandbox')) {
    //   return new CodeSandboxProvider(target);
  // }
  else if (select.exists('.tree-browser-result > .octicon', target)) {
    return new GitHubSearchProvider(target);
  }
  else if (select.exists('.ActionList-item-visual > .octicon', target)) {
    return new PullRequestsProvider(target);
  }
  else if (select.exists('.PRIVATE_TreeView-item-content', target)) {
    return new GitHubCodeViewTreeProvider(target);
  }
  else if (select.exists('.react-directory-filename-column', target)) {
    return new GitHubCodeViewProvider(target);
  }
  else if (select.exists('.js-navigation-item > [role="gridcell"]', target)) {
    return new GitHubProvider(target);
  }
  return null;
};
