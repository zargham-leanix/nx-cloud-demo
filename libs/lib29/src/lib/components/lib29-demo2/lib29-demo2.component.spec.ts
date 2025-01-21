import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo2Component } from './lib29-demo2.component';

describe('Lib29Demo2Component', () => {
  let component: Lib29Demo2Component;
  let fixture: ComponentFixture<Lib29Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
