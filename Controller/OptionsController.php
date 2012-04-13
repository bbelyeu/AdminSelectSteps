<?php
App::uses('AdminSelectStepsAppController', 'AdminSelectSteps.Controller');
/**
 * Options Controller
 *
 */
class OptionsController extends AdminSelectStepsAppController
{
    /**
     * Tell Cake that this controller doesn't use any models
     *
     * @var array
     */
    public $uses = array();

    public function admin_index($model, $field = null, $condition = null)
    {
        $model = ucfirst($model);
        App::uses($model, 'Model');
        $instance = new $model();
        $params = array();
        if ($field !== null && $condition !== null) {
            $params['conditions'] = array("$model.$field" => $condition);
        }
        $this->set('list', $instance->find('list', $params));
        $this->layout = 'AdminSelectSteps.default';
    }
}
