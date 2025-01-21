import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo36Component } from './lib76-demo36.component';

describe('Lib76Demo36Component', () => {
  let component: Lib76Demo36Component;
  let fixture: ComponentFixture<Lib76Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
