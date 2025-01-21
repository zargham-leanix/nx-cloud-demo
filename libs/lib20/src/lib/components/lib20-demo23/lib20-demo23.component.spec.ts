import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo23Component } from './lib20-demo23.component';

describe('Lib20Demo23Component', () => {
  let component: Lib20Demo23Component;
  let fixture: ComponentFixture<Lib20Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
