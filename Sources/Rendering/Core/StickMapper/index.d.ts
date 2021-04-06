import vtkMapper from "vtk.js/Sources/Rendering/Core/Mapper";

interface IStickMappereInitialValues {
	/**
	 * 
	 */
	radius: number;
	 /**
	  * 
	  */
	length: number;

	/**
	 * 
	 */
	scaleArray: number[],

	/**
	 * 
	 */
	orientationArray: number[],
}

export interface vtkStickMapper extends vtkMapper {

    /**
     * 
     */
    getRadius(): number;

    /**
     * 
     */
    getScaleArray(): number[];

    /**
     * 
     * @param {number} radius 
     */
    setRaduis(radius: number): boolean;

    /**
     * 
     * @param scaleArray 
     */
    setScaleArray(scaleArray: number[]): boolean;
}

/**
 * Method use to decorate a given object (publicAPI+model) with vtkStickMapper characteristics.
 *
 * @param publicAPI object on which methods will be bounds (public)
 * @param model object on which data structure will be bounds (protected)
 * @param initialValues (default: {})
 */
 export function extend(publicAPI: object, model: object, initialValues?: IStickMappereInitialValues): void;

 /**
  * Method use to create a new instance of vtkStickMapper 
  */
 export function newInstance(initialValues?: IStickMappereInitialValues): vtkStickMapper;
 
 /** 
  * vtkStickMapper inherits from vtkMapper.
  */
 export declare const vtkStickMapper: {
     newInstance: typeof newInstance,
     extend: typeof extend,
 };
 export default vtkStickMapper;