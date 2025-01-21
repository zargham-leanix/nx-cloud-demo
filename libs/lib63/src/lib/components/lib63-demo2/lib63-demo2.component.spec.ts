import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo2Component } from './lib63-demo2.component';

describe('Lib63Demo2Component', () => {
  let component: Lib63Demo2Component;
  let fixture: ComponentFixture<Lib63Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
