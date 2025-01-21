import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo6Component } from './lib27-demo6.component';

describe('Lib27Demo6Component', () => {
  let component: Lib27Demo6Component;
  let fixture: ComponentFixture<Lib27Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
