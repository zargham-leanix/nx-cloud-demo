import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo15Component } from './lib72-demo15.component';

describe('Lib72Demo15Component', () => {
  let component: Lib72Demo15Component;
  let fixture: ComponentFixture<Lib72Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
