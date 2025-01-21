import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo15Component } from './lib80-demo15.component';

describe('Lib80Demo15Component', () => {
  let component: Lib80Demo15Component;
  let fixture: ComponentFixture<Lib80Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
