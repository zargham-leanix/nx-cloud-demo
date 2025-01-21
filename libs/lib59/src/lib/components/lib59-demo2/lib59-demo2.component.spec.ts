import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo2Component } from './lib59-demo2.component';

describe('Lib59Demo2Component', () => {
  let component: Lib59Demo2Component;
  let fixture: ComponentFixture<Lib59Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
