import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo47Component } from './lib91-demo47.component';

describe('Lib91Demo47Component', () => {
  let component: Lib91Demo47Component;
  let fixture: ComponentFixture<Lib91Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
