import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo10Component } from './lib18-demo10.component';

describe('Lib18Demo10Component', () => {
  let component: Lib18Demo10Component;
  let fixture: ComponentFixture<Lib18Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
