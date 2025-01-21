import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo47Component } from './lib5-demo47.component';

describe('Lib5Demo47Component', () => {
  let component: Lib5Demo47Component;
  let fixture: ComponentFixture<Lib5Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
