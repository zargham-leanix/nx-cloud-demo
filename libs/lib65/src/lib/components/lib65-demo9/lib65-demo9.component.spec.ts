import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo9Component } from './lib65-demo9.component';

describe('Lib65Demo9Component', () => {
  let component: Lib65Demo9Component;
  let fixture: ComponentFixture<Lib65Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
