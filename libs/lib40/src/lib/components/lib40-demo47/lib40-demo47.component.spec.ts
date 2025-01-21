import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo47Component } from './lib40-demo47.component';

describe('Lib40Demo47Component', () => {
  let component: Lib40Demo47Component;
  let fixture: ComponentFixture<Lib40Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
