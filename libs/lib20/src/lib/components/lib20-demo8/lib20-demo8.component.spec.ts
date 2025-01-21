import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo8Component } from './lib20-demo8.component';

describe('Lib20Demo8Component', () => {
  let component: Lib20Demo8Component;
  let fixture: ComponentFixture<Lib20Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
