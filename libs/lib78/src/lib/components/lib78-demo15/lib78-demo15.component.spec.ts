import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo15Component } from './lib78-demo15.component';

describe('Lib78Demo15Component', () => {
  let component: Lib78Demo15Component;
  let fixture: ComponentFixture<Lib78Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
