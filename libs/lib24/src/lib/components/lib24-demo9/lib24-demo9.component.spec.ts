import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo9Component } from './lib24-demo9.component';

describe('Lib24Demo9Component', () => {
  let component: Lib24Demo9Component;
  let fixture: ComponentFixture<Lib24Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
