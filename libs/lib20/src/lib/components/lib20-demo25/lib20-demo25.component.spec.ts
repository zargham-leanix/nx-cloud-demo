import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo25Component } from './lib20-demo25.component';

describe('Lib20Demo25Component', () => {
  let component: Lib20Demo25Component;
  let fixture: ComponentFixture<Lib20Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
