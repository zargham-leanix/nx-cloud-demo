import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo47Component } from './lib34-demo47.component';

describe('Lib34Demo47Component', () => {
  let component: Lib34Demo47Component;
  let fixture: ComponentFixture<Lib34Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
