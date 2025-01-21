import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo40Component } from './lib91-demo40.component';

describe('Lib91Demo40Component', () => {
  let component: Lib91Demo40Component;
  let fixture: ComponentFixture<Lib91Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
