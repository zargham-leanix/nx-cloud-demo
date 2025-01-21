import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo9Component } from './lib5-demo9.component';

describe('Lib5Demo9Component', () => {
  let component: Lib5Demo9Component;
  let fixture: ComponentFixture<Lib5Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
