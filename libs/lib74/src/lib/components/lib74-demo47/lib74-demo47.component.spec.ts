import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo47Component } from './lib74-demo47.component';

describe('Lib74Demo47Component', () => {
  let component: Lib74Demo47Component;
  let fixture: ComponentFixture<Lib74Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
