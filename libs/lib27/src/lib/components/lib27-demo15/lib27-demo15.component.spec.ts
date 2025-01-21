import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo15Component } from './lib27-demo15.component';

describe('Lib27Demo15Component', () => {
  let component: Lib27Demo15Component;
  let fixture: ComponentFixture<Lib27Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
