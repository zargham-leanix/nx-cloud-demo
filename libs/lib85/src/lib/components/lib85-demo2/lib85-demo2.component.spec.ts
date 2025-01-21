import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo2Component } from './lib85-demo2.component';

describe('Lib85Demo2Component', () => {
  let component: Lib85Demo2Component;
  let fixture: ComponentFixture<Lib85Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
