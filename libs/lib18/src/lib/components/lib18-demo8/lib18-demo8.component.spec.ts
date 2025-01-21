import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo8Component } from './lib18-demo8.component';

describe('Lib18Demo8Component', () => {
  let component: Lib18Demo8Component;
  let fixture: ComponentFixture<Lib18Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
