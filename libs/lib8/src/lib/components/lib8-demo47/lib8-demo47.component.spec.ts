import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo47Component } from './lib8-demo47.component';

describe('Lib8Demo47Component', () => {
  let component: Lib8Demo47Component;
  let fixture: ComponentFixture<Lib8Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
