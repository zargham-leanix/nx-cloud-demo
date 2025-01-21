import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo47Component } from './lib46-demo47.component';

describe('Lib46Demo47Component', () => {
  let component: Lib46Demo47Component;
  let fixture: ComponentFixture<Lib46Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
