import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo47Component } from './lib31-demo47.component';

describe('Lib31Demo47Component', () => {
  let component: Lib31Demo47Component;
  let fixture: ComponentFixture<Lib31Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
