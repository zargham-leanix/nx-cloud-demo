import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo15Component } from './lib64-demo15.component';

describe('Lib64Demo15Component', () => {
  let component: Lib64Demo15Component;
  let fixture: ComponentFixture<Lib64Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
