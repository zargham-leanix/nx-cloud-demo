import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo10Component } from './lib20-demo10.component';

describe('Lib20Demo10Component', () => {
  let component: Lib20Demo10Component;
  let fixture: ComponentFixture<Lib20Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
