import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo11Component } from './lib28-demo11.component';

describe('Lib28Demo11Component', () => {
  let component: Lib28Demo11Component;
  let fixture: ComponentFixture<Lib28Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
