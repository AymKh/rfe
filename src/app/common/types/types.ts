/**
 * @description
 * This file hoolds all the generic types used in the project.
 * For example, types used for the navigation, module header content, etc.
 */

/**
 * Placeholder interface that represents a document
 * In this example, all documents are considered to be of type 'folder'
 */
export interface IDocument {
    id: string;
    name: string;
    link: string;
    parent_node: string;
}