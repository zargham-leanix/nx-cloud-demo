import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo2Component } from './lib91-demo2.component';

describe('Lib91Demo2Component', () => {
  let component: Lib91Demo2Component;
  let fixture: ComponentFixture<Lib91Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
