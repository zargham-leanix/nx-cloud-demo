import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo9Component } from './lib86-demo9.component';

describe('Lib86Demo9Component', () => {
  let component: Lib86Demo9Component;
  let fixture: ComponentFixture<Lib86Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
