import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo2Component } from './lib25-demo2.component';

describe('Lib25Demo2Component', () => {
  let component: Lib25Demo2Component;
  let fixture: ComponentFixture<Lib25Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
