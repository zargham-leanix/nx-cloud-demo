import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo2Component } from './lib71-demo2.component';

describe('Lib71Demo2Component', () => {
  let component: Lib71Demo2Component;
  let fixture: ComponentFixture<Lib71Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
