import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo11Component } from './lib29-demo11.component';

describe('Lib29Demo11Component', () => {
  let component: Lib29Demo11Component;
  let fixture: ComponentFixture<Lib29Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
