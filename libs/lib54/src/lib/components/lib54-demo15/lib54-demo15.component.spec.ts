import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo15Component } from './lib54-demo15.component';

describe('Lib54Demo15Component', () => {
  let component: Lib54Demo15Component;
  let fixture: ComponentFixture<Lib54Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
