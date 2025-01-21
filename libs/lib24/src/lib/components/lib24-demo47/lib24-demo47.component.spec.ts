import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo47Component } from './lib24-demo47.component';

describe('Lib24Demo47Component', () => {
  let component: Lib24Demo47Component;
  let fixture: ComponentFixture<Lib24Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
