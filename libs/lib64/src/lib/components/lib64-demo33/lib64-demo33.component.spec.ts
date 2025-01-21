import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo33Component } from './lib64-demo33.component';

describe('Lib64Demo33Component', () => {
  let component: Lib64Demo33Component;
  let fixture: ComponentFixture<Lib64Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
