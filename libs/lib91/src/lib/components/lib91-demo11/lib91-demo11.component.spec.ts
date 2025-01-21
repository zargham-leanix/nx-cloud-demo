import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo11Component } from './lib91-demo11.component';

describe('Lib91Demo11Component', () => {
  let component: Lib91Demo11Component;
  let fixture: ComponentFixture<Lib91Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
