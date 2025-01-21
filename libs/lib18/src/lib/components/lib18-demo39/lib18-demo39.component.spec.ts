import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo39Component } from './lib18-demo39.component';

describe('Lib18Demo39Component', () => {
  let component: Lib18Demo39Component;
  let fixture: ComponentFixture<Lib18Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
