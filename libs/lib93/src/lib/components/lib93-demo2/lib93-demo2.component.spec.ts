import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo2Component } from './lib93-demo2.component';

describe('Lib93Demo2Component', () => {
  let component: Lib93Demo2Component;
  let fixture: ComponentFixture<Lib93Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
