import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo47Component } from './lib76-demo47.component';

describe('Lib76Demo47Component', () => {
  let component: Lib76Demo47Component;
  let fixture: ComponentFixture<Lib76Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
