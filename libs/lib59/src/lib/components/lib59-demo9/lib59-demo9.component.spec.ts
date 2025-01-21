import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo9Component } from './lib59-demo9.component';

describe('Lib59Demo9Component', () => {
  let component: Lib59Demo9Component;
  let fixture: ComponentFixture<Lib59Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
