import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo9Component } from './lib71-demo9.component';

describe('Lib71Demo9Component', () => {
  let component: Lib71Demo9Component;
  let fixture: ComponentFixture<Lib71Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
