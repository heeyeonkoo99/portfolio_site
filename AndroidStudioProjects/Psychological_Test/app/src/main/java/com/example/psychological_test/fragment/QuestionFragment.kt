
package com.example.psychological_test.fragment

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.View.inflate
import android.view.ViewGroup
import androidx.navigation.NavController
import androidx.navigation.Navigation
import com.example.psychological_test.R
import com.example.psychological_test.databinding.FragmentMainBinding
import com.example.psychological_test.databinding.FragmentQuestionBinding


class QuestionFragment : Fragment(),View.OnClickListener {

    private var _binding: FragmentQuestionBinding?=null
    private val binding get()= _binding!!
    lateinit var navController:NavController

    override fun onCreateView(
            inflater: LayoutInflater, container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View? {
        _binding= FragmentQuestionBinding.inflate(inflater,container,false)
        val view=binding.root
        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        navController=Navigation.findNavController(view)
        binding.btnNext2.setOnClickListener(this)
    }


    override fun onClick(v: View?) {
       when(v?.id){
           R.id.btn_next2->{
               navController.navigate(R.id.action_questionFragment_to_selectionFragment)
           }
       }
    }
    override fun onDestroyView() {
        super.onDestroyView()
        _binding=null
    }

}

