import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo6Component } from './lib5-demo6.component';

describe('Lib5Demo6Component', () => {
  let component: Lib5Demo6Component;
  let fixture: ComponentFixture<Lib5Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
