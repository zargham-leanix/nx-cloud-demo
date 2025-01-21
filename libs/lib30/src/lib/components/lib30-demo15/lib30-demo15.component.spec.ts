import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo15Component } from './lib30-demo15.component';

describe('Lib30Demo15Component', () => {
  let component: Lib30Demo15Component;
  let fixture: ComponentFixture<Lib30Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
