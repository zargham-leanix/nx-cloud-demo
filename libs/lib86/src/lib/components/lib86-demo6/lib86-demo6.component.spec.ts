import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo6Component } from './lib86-demo6.component';

describe('Lib86Demo6Component', () => {
  let component: Lib86Demo6Component;
  let fixture: ComponentFixture<Lib86Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
