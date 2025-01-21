import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo14Component } from './lib88-demo14.component';

describe('Lib88Demo14Component', () => {
  let component: Lib88Demo14Component;
  let fixture: ComponentFixture<Lib88Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
