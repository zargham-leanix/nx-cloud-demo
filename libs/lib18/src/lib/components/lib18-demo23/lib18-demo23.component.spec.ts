import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo23Component } from './lib18-demo23.component';

describe('Lib18Demo23Component', () => {
  let component: Lib18Demo23Component;
  let fixture: ComponentFixture<Lib18Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
