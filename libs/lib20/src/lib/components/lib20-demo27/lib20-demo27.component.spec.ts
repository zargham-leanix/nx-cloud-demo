import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo27Component } from './lib20-demo27.component';

describe('Lib20Demo27Component', () => {
  let component: Lib20Demo27Component;
  let fixture: ComponentFixture<Lib20Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
