import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo9Component } from './lib36-demo9.component';

describe('Lib36Demo9Component', () => {
  let component: Lib36Demo9Component;
  let fixture: ComponentFixture<Lib36Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
