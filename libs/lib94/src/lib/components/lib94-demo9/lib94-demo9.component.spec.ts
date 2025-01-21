import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo9Component } from './lib94-demo9.component';

describe('Lib94Demo9Component', () => {
  let component: Lib94Demo9Component;
  let fixture: ComponentFixture<Lib94Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
