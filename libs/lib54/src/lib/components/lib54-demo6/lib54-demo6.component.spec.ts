import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo6Component } from './lib54-demo6.component';

describe('Lib54Demo6Component', () => {
  let component: Lib54Demo6Component;
  let fixture: ComponentFixture<Lib54Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
