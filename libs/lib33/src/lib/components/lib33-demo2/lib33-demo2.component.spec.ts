import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo2Component } from './lib33-demo2.component';

describe('Lib33Demo2Component', () => {
  let component: Lib33Demo2Component;
  let fixture: ComponentFixture<Lib33Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
