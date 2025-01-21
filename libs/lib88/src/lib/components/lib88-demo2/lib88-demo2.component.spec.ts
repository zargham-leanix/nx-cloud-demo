import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo2Component } from './lib88-demo2.component';

describe('Lib88Demo2Component', () => {
  let component: Lib88Demo2Component;
  let fixture: ComponentFixture<Lib88Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
