import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo47Component } from './lib94-demo47.component';

describe('Lib94Demo47Component', () => {
  let component: Lib94Demo47Component;
  let fixture: ComponentFixture<Lib94Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
