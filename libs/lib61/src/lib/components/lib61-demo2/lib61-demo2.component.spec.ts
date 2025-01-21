import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo2Component } from './lib61-demo2.component';

describe('Lib61Demo2Component', () => {
  let component: Lib61Demo2Component;
  let fixture: ComponentFixture<Lib61Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
