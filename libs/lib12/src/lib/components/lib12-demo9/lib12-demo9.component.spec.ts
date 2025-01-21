import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo9Component } from './lib12-demo9.component';

describe('Lib12Demo9Component', () => {
  let component: Lib12Demo9Component;
  let fixture: ComponentFixture<Lib12Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
