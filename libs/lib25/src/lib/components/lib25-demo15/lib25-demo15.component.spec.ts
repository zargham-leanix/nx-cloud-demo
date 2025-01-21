import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo15Component } from './lib25-demo15.component';

describe('Lib25Demo15Component', () => {
  let component: Lib25Demo15Component;
  let fixture: ComponentFixture<Lib25Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
