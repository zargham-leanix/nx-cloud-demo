import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo6Component } from './lib64-demo6.component';

describe('Lib64Demo6Component', () => {
  let component: Lib64Demo6Component;
  let fixture: ComponentFixture<Lib64Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
